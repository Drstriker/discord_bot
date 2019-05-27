const Discord = require('discord.js');

module.exports.run = async(bot, msg, args) => {
    let sicon = msg.guild.displayAvatarURL;
        
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#c10000")
    .setThumbnail(sicon)
    .addField("Server Name", msg.guild.name)
    .addField("Created on", msg.guild.createdAt)
    .addField("Total Members", msg.guild.memberCount);

    return msg.channel.send(serverembed);
}

module.exports.config = {
    command: "serverinfo"
}