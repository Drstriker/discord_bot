module.exports.run = async(bot, msg, args) => {
    if (msg.member.voiceChannel) {
        msg.member.voiceChannel.join();
    }
    else
        msg.reply('You need be in a voice channel');
}

module.exports.config = {
    command: "join"
}