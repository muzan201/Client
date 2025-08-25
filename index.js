import TelegramBot from 'node-telegram-bot-api';

// Your token
const TOKEN = '8398951273:AAF98Ki3NCaoD_w2fytnkMJnYOW7ksdoytg'
// Links for buttons
const CHANNEL_URL = 'https://t.me/blondiesplayground';
const PRIVATE_CHAT_URL = 'https://t.me/SecretsOfVictoria1';

// Image to send (change if you want your own image)
const IMAGE_URL = 'IMG_4060.jpeg';

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

console.log('Bot is running with polling…');