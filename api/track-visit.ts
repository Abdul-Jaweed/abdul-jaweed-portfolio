import https from 'https';
import http from 'http';

function sendTelegram(token: string, chatId: string, text: string): Promise<boolean> {
  return new Promise((resolve) => {
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
        let body = '';
        res.on('data', (d) => {
          body += d;
        });
        res.on('end', () => {
          if (res.statusCode && res.statusCode >= 400) {
            console.error('Telegram API error:', res.statusCode, body);
            resolve(false);
          } else {
            resolve(true);
          }
        });
      }
    );

    req.on('error', (err) => {
      console.error('Telegram request error:', err.message);
      resolve(false);
    });

    req.setTimeout(5000, () => {
      req.destroy();
      resolve(false);
    });

    req.write(postData);
    req.end();
  });
}

function getGeoLocation(ip: string): Promise<{ location: string; isp: string }> {
  return new Promise((resolve) => {
    const isLocal =
      !ip ||
      ip === '127.0.0.1' ||
      ip === '::1' ||
      ip === '::ffff:127.0.0.1' ||
      ip.startsWith('10.') ||
      ip.startsWith('192.168.') ||
      ip.startsWith('172.');

    if (isLocal) {
      return resolve({ location: 'Localhost / Internal Network', isp: '' });
    }

    const req = http.get(
      `http://ip-api.com/json/${ip}?fields=status,country,regionName,city,isp`,
      (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          try {
            const parsed = JSON.parse(data);
            if (parsed.status === 'success' && parsed.city) {
              const location = `${parsed.city}, ${parsed.regionName || ''}, ${parsed.country}`;
              const isp = parsed.isp ? `• <b>ISP:</b> ${parsed.isp}\n` : '';
              return resolve({ location, isp });
            }
          } catch {}
          resolve({ location: 'Unknown location', isp: '' });
        });
      }
    );

    req.setTimeout(3000, () => {
      req.destroy();
      resolve({ location: 'Unknown location', isp: '' });
    });

    req.on('error', () => {
      resolve({ location: 'Unknown location', isp: '' });
    });
  });
}

// Vercel Serverless Function Handler
export default async function handler(req: any, res: any) {
  // Allow CORS if needed
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn('Telegram token or chat ID is missing in environment variables');
    return res.status(200).json({
      recorded: false,
      warning: 'TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured in Vercel environment variables.',
    });
  }

  const rawIp =
    (req.headers['x-forwarded-for'] as string) ||
    req.socket?.remoteAddress ||
    'unknown';
  const ip = rawIp.split(',')[0].trim();
  const ua = (req.headers['user-agent'] as string) || 'Unknown';

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

  // Request body parsing (Vercel provides parsed body if json, or string)
  let bodyData = req.body;
  if (typeof bodyData === 'string') {
    try {
      bodyData = JSON.parse(bodyData);
    } catch {}
  }

  const rawPage = bodyData?.page || '/';
  const page = rawPage.startsWith('/api/track-visit') ? '/' : rawPage;
  const referrer = bodyData?.referrer || (req.headers['referer'] as string) || 'Direct';
  const screen = bodyData?.screen ? `• <b>Screen:</b> ${bodyData.screen}\n` : '';
  const timeStr = new Date().toLocaleString();

  const { location, isp } = await getGeoLocation(ip);

  const message = `<b>🔔 Portfolio Visitor Alert</b>\n• <b>Location:</b> ${location}\n• <b>IP:</b> <code>${ip}</code>\n${isp}• <b>Device:</b> ${device} (${os}, ${browser})\n${screen}• <b>Referrer:</b> ${referrer}\n• <b>Page:</b> ${page}\n• <b>Time:</b> ${timeStr}`;

  const sent = await sendTelegram(token, chatId, message);

  return res.status(200).json({
    recorded: true,
    delivered: sent,
  });
}
