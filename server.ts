import express from 'express';
import path from 'path';
import https from 'https';
import http from 'http';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

// Load environment variables with override enabled
dotenv.config({ override: true });

// Auto-correct placeholder chat ID or missing tokens
if (!process.env.TELEGRAM_BOT_TOKEN) {
  process.env.TELEGRAM_BOT_TOKEN = '8806761133:AAHCx30SN0QjFDQ1C_o7Zvz5z3Tf-H8w-xU';
}
if (!process.env.TELEGRAM_CHAT_ID || process.env.TELEGRAM_CHAT_ID === '123456789') {
  process.env.TELEGRAM_CHAT_ID = '8922826041';
}

const app = express();
const PORT = 3000;

app.use(express.json());

// Telegram visitor notification configuration
const NOTIFY_INTERVAL = 10000; // minimum ms between visitor alerts (10s debounce)
let lastNotifyTime = 0;

function sendTelegramMessage(text: string): Promise<boolean> {
  return new Promise((resolve) => {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    let chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token) {
      console.warn('Telegram notification skipped: TELEGRAM_BOT_TOKEN is missing');
      return resolve(false);
    }
    if (!chatId || chatId === '123456789') {
      chatId = '8922826041'; // Verified chat ID for Abdul Jaweed
    }

    const postData = JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
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
        res.on('data', (d) => {
          responseBody += d;
        });
        res.on('end', () => {
          if (res.statusCode && res.statusCode >= 400) {
            console.error(`Telegram API error (${res.statusCode}):`, responseBody);
            resolve(false);
          } else {
            console.log(`Telegram notification successfully delivered to chat ${chatId}`);
            resolve(true);
          }
        });
      }
    );

    req.on('error', (err) => {
      console.error('Telegram request error:', err.message);
      resolve(false);
    });

    req.setTimeout(6000, () => {
      req.destroy();
      resolve(false);
    });

    req.write(postData);
    req.end();
  });
}

function processVisitorNotification(req: express.Request, extraInfo?: { referrer?: string; screen?: string; page?: string }) {
  const now = Date.now();
  if (now - lastNotifyTime < NOTIFY_INTERVAL) {
    return; // rate limit
  }
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

  const rawPage = extraInfo?.page || req.path || '/';
  const pagePath = rawPage.startsWith('/api/track-visit') ? '/' : rawPage;
  const timeStr = new Date().toLocaleString();
  const referrer = extraInfo?.referrer || (req.headers['referer'] as string) || 'Direct';
  const screen = extraInfo?.screen ? `• <b>Screen:</b> ${extraInfo.screen}\n` : '';

  const isLocal =
    ip === '127.0.0.1' ||
    ip === '::1' ||
    ip === '::ffff:127.0.0.1' ||
    ip.startsWith('10.') ||
    ip.startsWith('192.168.') ||
    ip.startsWith('172.');

  if (isLocal) {
    sendTelegramMessage(
      `<b>🔔 Portfolio Visitor Alert</b>\n• <b>Location:</b> Localhost / Cloud Network\n• <b>IP:</b> <code>${ip}</code>\n• <b>Device:</b> ${device} (${os}, ${browser})\n${screen}• <b>Referrer:</b> ${referrer}\n• <b>Page:</b> ${pagePath}\n• <b>Time:</b> ${timeStr}`
    );
    return;
  }

  // Non-blocking geolocation lookup via ip-api.com with 3s timeout
  const locationReq = http.get(
    `http://ip-api.com/json/${ip}?fields=status,country,regionName,city,isp,query`,
    (locRes) => {
      let data = '';
      locRes.on('data', (chunk) => {
        data += chunk;
      });
      locRes.on('end', () => {
        try {
          const loc = JSON.parse(data);
          const location =
            loc.status === 'success' && loc.city
              ? `${loc.city}, ${loc.regionName || ''}, ${loc.country}`
              : 'Unknown location';
          const isp = loc.isp ? `• <b>ISP:</b> ${loc.isp}\n` : '';

          sendTelegramMessage(
            `<b>🔔 Portfolio Visitor Alert</b>\n• <b>Location:</b> ${location}\n• <b>IP:</b> <code>${ip}</code>\n${isp}• <b>Device:</b> ${device} (${os}, ${browser})\n${screen}• <b>Referrer:</b> ${referrer}\n• <b>Page:</b> ${pagePath}\n• <b>Time:</b> ${timeStr}`
          );
        } catch {
          sendTelegramMessage(
            `<b>🔔 Portfolio Visitor Alert</b>\n• <b>IP:</b> <code>${ip}</code>\n• <b>Device:</b> ${device} (${os}, ${browser})\n${screen}• <b>Referrer:</b> ${referrer}\n• <b>Page:</b> ${pagePath}\n• <b>Time:</b> ${timeStr}`
          );
        }
      });
    }
  );

  locationReq.setTimeout(3000, () => {
    locationReq.destroy();
    sendTelegramMessage(
      `<b>🔔 Portfolio Visitor Alert</b>\n• <b>IP:</b> <code>${ip}</code>\n• <b>Device:</b> ${device} (${os}, ${browser})\n${screen}• <b>Referrer:</b> ${referrer}\n• <b>Page:</b> ${pagePath}\n• <b>Time:</b> ${timeStr}`
    );
  });

  locationReq.on('error', () => {
    sendTelegramMessage(
      `<b>🔔 Portfolio Visitor Alert</b>\n• <b>IP:</b> <code>${ip}</code>\n• <b>Device:</b> ${device} (${os}, ${browser})\n${screen}• <b>Referrer:</b> ${referrer}\n• <b>Page:</b> ${pagePath}\n• <b>Time:</b> ${timeStr}`
    );
  });
}

// Health check API
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    telegramConfigured: Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID),
    targetChatId: process.env.TELEGRAM_CHAT_ID,
  });
});

// Instant Test Endpoint - trigger anytime via GET /api/telegram-test
app.get('/api/telegram-test', async (req, res) => {
  const success = await sendTelegramMessage(
    `<b>🧪 Test Verification Message</b>\nYour Telegram bot (@jaweed1O1_bot) is active and connected!\n• <b>Target Chat ID:</b> ${process.env.TELEGRAM_CHAT_ID}\n• <b>Server Time:</b> ${new Date().toLocaleString()}`
  );
  res.json({
    success,
    bot: '@jaweed1O1_bot',
    chatId: process.env.TELEGRAM_CHAT_ID,
    message: success
      ? 'Verification message sent successfully to Telegram!'
      : 'Failed to send message. Please verify bot token.',
  });
});

// Client beacon tracking endpoint
app.post('/api/track-visit', (req, res) => {
  const extraInfo = {
    page: req.body?.page,
    referrer: req.body?.referrer,
    screen: req.body?.screen,
  };
  processVisitorNotification(req, extraInfo);
  res.json({ recorded: true });
});

// Visitor tracking middleware for direct HTML page views
app.use((req, _res, next) => {
  // Skip API, assets, internal Vite routes
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

  processVisitorNotification(req);
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
