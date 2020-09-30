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

client.login('NzU4Njc3NTE0NDI3ODI2MTc4.X2ybfg.U46wFhm1QHFCUsJNVWJcZbwty24');
