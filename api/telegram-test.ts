import https from 'https';

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const rawToken = process.env.TELEGRAM_BOT_TOKEN || '';
  const rawChatId = process.env.TELEGRAM_CHAT_ID || '';
  const token = rawToken.replace(/^["']|["']$/g, '').trim();
  const chatId = rawChatId.replace(/^["']|["']$/g, '').trim();

  if (!token || !chatId) {
    return res.status(200).json({
      success: false,
      error: 'TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured in Vercel Environment Variables.',
    });
  }

  const postData = JSON.stringify({
    chat_id: chatId,
    text: `<b>🧪 Vercel Test Verification</b>\nYour Telegram bot is successfully connected on Vercel!\n• <b>Server Time:</b> ${new Date().toLocaleString()}`,
    parse_mode: 'HTML',
    disable_web_page_preview: true,
  });

  let telegramErrorDetails = '';
  let telegramCode = 200;

  const sent = await new Promise<boolean>((resolve) => {
    const request = https.request(
      {
        hostname: 'api.telegram.org',
        path: `/bot${token}/sendMessage`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData),
        },
      },
      (telegramRes) => {
        let body = '';
        telegramRes.on('data', (d) => {
          body += d;
        });
        telegramRes.on('end', () => {
          telegramCode = telegramRes.statusCode || 200;
          if (telegramRes.statusCode && telegramRes.statusCode >= 400) {
            console.error('Telegram error:', telegramRes.statusCode, body);
            telegramErrorDetails = body;
            resolve(false);
          } else {
            resolve(true);
          }
        });
      }
    );

    request.on('error', (err) => {
      console.error('Telegram request error:', err.message);
      telegramErrorDetails = err.message;
      resolve(false);
    });

    request.setTimeout(5000, () => {
      request.destroy();
      telegramErrorDetails = 'Request timed out';
      resolve(false);
    });

    request.write(postData);
    request.end();
  });

  res.status(200).json({
    success: sent,
    telegramStatus: telegramCode,
    telegramDetails: telegramErrorDetails,
    message: sent
      ? 'Verification message sent successfully to Telegram from Vercel!'
      : 'Failed to send message. Check bot token and chat permissions.',
  });
}
