export default function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  res.status(200).json({
    status: 'ok',
    telegramConfigured: Boolean(token && chatId),
    runtime: 'Vercel Serverless Function',
  });
}
