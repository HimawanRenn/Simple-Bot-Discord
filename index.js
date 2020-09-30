const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Tersambung.');
});
// testing bot nya berjalan apa tidak ketik ping di server discord yang ada bot kalian
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('token');
