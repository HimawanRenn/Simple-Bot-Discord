const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  // code ini akan menampilkan bila bot benar benar sedang berjalan.
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
  // dan ini adalah aktivitas bot, cukup ganti apa yang kalian inginkan".
  client.user.setActivity(`Total Member : ${client.users.cache.size}`);
});

client.login(config.token);
