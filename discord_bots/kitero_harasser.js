const Discord = require('discord.js');
const config = require("./../config.json");
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is now connected');
    const channel_name = "test";
    //client.channels.find(x => x.name === channel_name).send("Hello I\'m now connected to server " + channel_name);
});

client.on('message', msg => {
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    // if (msg.content === "ping kitero") {
    //     msg.channel.send(`${msg.author} POKED <@173536790861316096> !!`);
    // }
    // if (msg.content === "ping drstriker") {
    //     msg.channel.send(`${msg.author} POKED <@183378946950168577> !!`);
    // }
    user = msg.mentions.users.second();
    if (msg.content === `poke ` + user) {
        msg.channel.send(`${msg.author} POKED ${msg.member}!!`);
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
    if(command === "!say") {
        // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
        // To get the "message" itself we join the `args` back into a string with spaces: 
        const sayMessage = args.join(" ");
        // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
        msg.delete().catch(O_o=>{}); 
        // And we get the bot to say the thing: 
        msg.channel.send(sayMessage);
      }
    console.log(msg);
});

client.login(config.token);