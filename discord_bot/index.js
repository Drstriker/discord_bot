const Discord = require('discord.js');
const token = 'NTc5OTkwNTQ5NDYxNzI5Mjgw.XOKO0A.digqlXh6tidP96ZR1_GHEs-AMHk';
const client_id = '579990549461729280';

const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is now connected');
    const channel_name = "test";
    client.channels.find(x => x.name === channel_name).send('Hello I\'m now connected to ' + channel_name);
});

client.on('message', msg => {
    if (msg.content === "ping kitero") {
        msg.reply("YOU HAVE POKED KITERO !!");
    }
});

client.login(token);