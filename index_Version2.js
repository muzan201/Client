import TelegramBot from 'node-telegram-bot-api';
import http from 'http';

// Bot token (hardcoded for testing - not recommended for production!)
const TOKEN = '8398951273:AAF98Ki3NCaoD_w2fytnkMJnYOW7ksdoytg';

// Links
const CHANNEL_URL = 'https://t.me/blondiesplayground';
const PRIVATE_CHAT_URL = 'https://t.me/SecretsOfVictoria1';

// Use RAW GitHub URL
const IMAGE_URL = 'https://raw.githubusercontent.com/muzan201/Client/main/IMG_4060.jpeg';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  const caption =
    `Hey there! 😘\n` +
    `Check out the buttons below to see more or chat directly ❤️`;

  const keyboard = {
    inline_keyboard: [
      [
        { text: 'See more of us🔞😘', url: CHANNEL_URL }
      ],
      [
        { text: 'Chat with me💬❤️', url: PRIVATE_CHAT_URL }
      ]
    ]
  };

  try {
    await bot.sendPhoto(chatId, IMAGE_URL, {
      caption,
      reply_markup: keyboard
    });
  } catch (err) {
    console.error('sendPhoto error:', err?.message || err);
  }
});

// Minimal HTTP server to keep Railway happy
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot is running!\n');
}).listen(PORT);

console.log('Bot is running with polling…');