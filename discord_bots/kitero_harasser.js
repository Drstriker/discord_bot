const Discord = require('discord.js');
const config = require("./../kitero_harasser.config.json");
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is now connected');
    const channel_name = "test";
    //client.channels.find(x => x.name === channel_name).send("Hello I\'m now connected to server " + channel_name);
});

client.on('message', msg => {
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    user_poked = msg.mentions.users.first();
    if (msg.content === `poke ` + user_poked) {
        if (msg.content === `poke <@579990549461729280>`) {
            msg.channel.send(`${msg.author} POKED ME !!`);
        }
        else
            msg.channel.send(`${msg.author} POKED ` + user_poked + ` !!`);
    }
    if (msg.content === "!authortest") {
        msg.channel.send(`Hello ${msg.author}`);
    }
    if (msg.content === "!idtest") {
        msg.channel.send(`Hello <@183378946950168577>`);
    }
    // if (msg.content === "!say") {
    //     const messtosay = msg.content.join(" ");
    //     msg.delete();
    //     msg.channel.send(messtosay);
    // }
    if (command === "!say") {
        const sayMessage = args.join(" ");
        msg.delete().catch(O_o=>{}); 
        msg.channel.send(sayMessage);
      }
    console.log(msg);
});

client.login(config.token);