const Telegram = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
const name = process.env.NAME;

const bot = new Telegram(token);

const message = `Workflow executed correctly after the last commit. Regards ${name}`;

bot.sendMessage(chatId, message)
    .then(() => {
        console.log("Message sent");
        return;
    })
    .catch((err) => {
        console.error(err);
        return;
    });
