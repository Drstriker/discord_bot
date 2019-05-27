const Discord = require('discord.js');

module.exports.run = async(bot, msg, args) => {
    //msg.author.lastMessage.delete();
    let boticon = bot.user.displayAvatarURL;

    let botembed = new Discord.RichEmbed()
    .setAuthor("DrStriker")
    .setColor("#424bf4")
    .setThumbnail(boticon)
    .addField("Bot Name", bot.user.username)
    .addField("Created on", bot.user.createdAt)
    .addField("Purpose", `Harass Kitero`);
    return msg.channel.send(botembed);
}

module.exports.config = {
    command: "botinfo"
}