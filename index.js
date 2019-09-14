const Telegraf = require('telegraf');

const bot = new Telegraf('733618665:AAE7ds1LE7l5WtaKCLkc4_mZkEqW9OYTalE');

bot.start(async (ctx) => {
  ctx.reply('Hello World !')
})

bot.startPolling();
