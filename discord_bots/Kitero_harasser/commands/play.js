const { Message } = require("discord.js");

module.exports.run = async(bot, msg, args) => {
    let link = msg.content.slice(6);
    if (!link)
        msg.channel.send("Link a video web link");

    if (!msg.member.channel.voiceChannel)
        msg.channel.send("You must be in a channel to play the bot!");
}

module.exports.config = {
    command:"play"
}