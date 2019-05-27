const Discord = require('discord.js');
const config = require("./kitero_harasser.config.json");
const fs = require('fs');
const bot = new Discord.Client();

bot.commands = new Discord.Collection();

bot.login(config.token);

fs.readdir(`./discord_bots/Kitero_harasser/commands`, (err, files) => {
    if (err) console.error(err);

    var cmdfiles = files.filter(fileName => fileName.split('.').pop() === 'js');
    if (cmdfiles.length <= 0)
        return console.log('No commands found');
    else
        console.log(cmdfiles.length + ' Commands found.');
    cmdfiles.forEach((f, i) => {
        var cmds = require(`./commands/${f}`);
        console.log(`Command file ${f} loading...`);
        bot.commands.set(cmds.config.command, cmds);
    })
    console.log('All commands successfully loaded');
    console.log('Bot is ready to connect');
});

bot.on('ready', () => {
    console.log('Bot is now connected');
    bot.user.setActivity("Faire chier Kitero", {type: "PLAYING"});
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