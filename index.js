const Discord = require('discord.js');
const client = new Discord.Client();

// Bagian ini menunjukan di console bahwa bot yg lu buat udah nyala
client.on('ready', () => {
  console.log('Bot sudah nyala.');
});

// testing bot nya berjalan apa tidak ketik ping di server discord yang ada bot kalian
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('token');
