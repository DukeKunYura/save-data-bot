import "dotenv/config";
import { Telegraf } from "telegraf";
import { showMenu, closeMenu } from "./src/menu.js";
import { getAnswer } from "./src/yesOrNo.js";

const bot = new Telegraf(process.env.TG_TOKEN, {});

console.log(process.env.TG_TOKEN);

bot
  .start((ctx) => {
    console.log(ctx.chat.id);
    showMenu(bot, ctx.chat.id);
  })
  .catch((err) => console.log("err start"));

bot.on("message", async (ctx) => {
  const chatId = ctx.chat.id;
  if (ctx.message?.text == "Меню" || ctx.message?.text == "меню") {
    console.log("start");
    showMenu(bot, chatId);
  }
  // if (ctx.message.location) {
  //   console.log(ctx.message.location);
  // }
  if (ctx.message.text == "да или нет") {
    const answer = await getAnswer();
    ctx.reply(answer);
  }
  if (ctx.message.text === "close") {
    console.log("start");
    closeMenu(bot, chatId);
  }
});

bot.launch();
