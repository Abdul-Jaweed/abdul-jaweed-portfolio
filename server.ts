import express from 'express';
import path from 'path';
import https from 'https';
import http from 'http';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

// Telegram visitor notification configuration
const NOTIFY_INTERVAL = 60000; // minimum ms between visitor alerts (1 alert per minute max)
let lastNotifyTime = 0;

function sendTelegramMessage(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    // Fail gracefully if tokens are not yet set
    return;
  }

  const postData = JSON.stringify({
    chat_id: chatId,
    text,
    parse_mode: 'HTML',
  });

  const req = https.request(
    {
      hostname: 'api.telegram.org',
      path: `/bot${token}/sendMessage`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    },
    (res) => {
      let responseBody = '';
      res.on('data', (d) => { responseBody += d; });
      res.on('end', () => {
        if (res.statusCode && res.statusCode >= 400) {
          console.error(`Telegram API error (${res.statusCode}):`, responseBody);
        } else {
          console.log('Telegram visitor notification sent successfully.');
        }
      });
    }
  );

  req.on('error', (err) => {
    console.error('Telegram notification error:', err.message);
  });
  req.write(postData);
  req.end();
}

// Health check API
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    telegramConfigured: Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID),
  });
});

// Visitor tracking middleware
app.use((req, _res, next) => {
  // Skip API/assets/internal requests, only track page views
  if (
    req.path.startsWith('/api') ||
    req.path.startsWith('/assets') ||
    req.path.startsWith('/@') ||
    req.path.startsWith('/node_modules') ||
    req.path.startsWith('/src') ||
    req.path === '/favicon.ico' ||
    req.path.includes('.')
  ) {
    return next();
  }

  const now = Date.now();
  if (now - lastNotifyTime < NOTIFY_INTERVAL) return next(); // rate limit
  lastNotifyTime = now;

  const rawIp =
    (req.headers['x-forwarded-for'] as string) ||
    req.socket.remoteAddress ||
    'unknown';
  const ip = rawIp.split(',')[0].trim();
  const ua = req.headers['user-agent'] || 'Unknown';
  const device = ua.includes('Mobile') ? '📱 Mobile' : '💻 Desktop';
  const browser = ua.includes('Chrome')
    ? 'Chrome'
    : ua.includes('Firefox')
    ? 'Firefox'
    : ua.includes('Safari')
    ? 'Safari'
    : ua.includes('Edge')
    ? 'Edge'
    : 'Other';
  const os = ua.includes('Windows')
    ? 'Windows'
    : ua.includes('Mac')
    ? 'Mac OS'
    : ua.includes('Linux')
    ? 'Linux'
    : ua.includes('Android')
    ? 'Android'
    : ua.includes('iPhone') || ua.includes('iPad')
    ? 'iOS'
    : 'Unknown';

  // Non-blocking geolocation lookup via ip-api.com
  const isPrivateOrLocal =
    ip === '127.0.0.1' ||
    ip === '::1' ||
    ip.startsWith('10.') ||
    ip.startsWith('192.168.') ||
    ip.startsWith('172.16.');

  if (isPrivateOrLocal) {
    sendTelegramMessage(
      `<b>🔔 Visit</b>\n• <b>IP:</b> ${ip}\n• <b>Location:</b> Localhost / Private Subnet\n• <b>Device:</b> ${device} (${os}, ${browser})\n• <b>Page:</b> ${req.path}\n• <b>Time:</b> ${new Date().toLocaleString()}`
    );
  } else {
    const locationReq = http.get(
      `http://ip-api.com/json/${ip}?fields=city,region,country,isp,query`,
      (locRes) => {
        let data = '';
        locRes.on('data', (chunk) => {
          data += chunk;
        });
        locRes.on('end', () => {
          try {
            const loc = JSON.parse(data);
            const location = loc.city
              ? `${loc.city}, ${loc.region}, ${loc.country}`
              : 'Unknown location';
            sendTelegramMessage(
              `<b>🔔 Visit</b>\n• <b>IP:</b> ${ip}\n• <b>Location:</b> ${location}\n• <b>ISP:</b> ${
                loc.isp || 'Unknown'
              }\n• <b>Device:</b> ${device} (${os}, ${browser})\n• <b>Page:</b> ${
                req.path
              }\n• <b>Time:</b> ${new Date().toLocaleString()}`
            );
          } catch {
            sendTelegramMessage(
              `<b>🔔 Visit</b>\n• <b>IP:</b> ${ip}\n• <b>Device:</b> ${device} (${os}, ${browser})\n• <b>Page:</b> ${
                req.path
              }\n• <b>Time:</b> ${new Date().toLocaleString()}`
            );
          }
        });
      }
    );
    locationReq.on('error', () => {
      sendTelegramMessage(
        `<b>🔔 Visit</b>\n• <b>IP:</b> ${ip}\n• <b>Device:</b> ${device} (${os}, ${browser})\n• <b>Page:</b> ${
          req.path
        }\n• <b>Time:</b> ${new Date().toLocaleString()}`
      );
    });
  }

  next();
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
