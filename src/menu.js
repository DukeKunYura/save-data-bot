export const showMenu = (bot, chatId) => {
  bot.telegram.sendMessage(chatId, "Выберите действие", {
    reply_markup: {
      keyboard: [["да или нет"], ["close"]],
    },
  });
};

export const closeMenu = (bot, chatId) => {
  bot.telegram.sendMessage(chatId, "Для старта напишите меню", {
    reply_markup: {
      remove_keyboard: true,
    },
  });
};
