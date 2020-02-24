module.exports.run = async(bot, msg, args) => {
    let boticon = bot.user.displayAvatarURL;

    let botembed = new Discord.RichEmbed()
    .setAuthor("Bot created by: DrStriker")
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