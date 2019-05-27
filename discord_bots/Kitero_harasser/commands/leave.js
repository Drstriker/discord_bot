module.exports.run = async(bot, msg, args) => {
    msg.member.voiceChannel.leave();
}

module.exports.config = {
    command: "leave"
}