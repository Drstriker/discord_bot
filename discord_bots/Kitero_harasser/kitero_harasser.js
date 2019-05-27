const Discord = require('discord.js');
const config = require("./kitero_harasser.config.json");
const fs = require('fs');
const bot = new Discord.Client();


bot.commands = new Discord.Collection();

fs.readdir(`./discord_bots/Kitero_harasser/commands`, (err, files) => {
    if (err) console.error(err);

    var jsfiles = files.filter(fileName => fileName.split('.').pop() === 'js');
    if (jsfiles.length <= 0)
        return console.log('No commands found');
    else
        console.log('jsfiles.length' + ' commands found.');
    
    jsfiles.forEach((f, i) => {
        var cmds = require(`./commands/${f}`);
        console.log(`Command ${f} loading...`);
        bot.commands.set(cmds.config.command, cmds);
    })
});

bot.on('ready', () => {
    console.log('Bot is now connected');
    bot.user.setActivity("Faire chier Kitero", {type: "PLAYING"});
    const channel_name = "test";
    //client.channels.find(x => x.name === channel_name).send("Hello I\'m now connected to server " + channel_name);
});

bot.on('message', async msg => {
    let prefix = config.prefix;
    let msgArray = msg.content.split(" ");
    let args = msgArray.slice(1).join(" ");
    let content = msg.content.slice(1).split(" ");
    let command = bot.commands.get(content[0]);
    let isCommand = msg.content.startsWith(prefix);

    if (command && isCommand) {
        command.run(bot, msg, args);
        return;
    }
});

bot.login(config.token);