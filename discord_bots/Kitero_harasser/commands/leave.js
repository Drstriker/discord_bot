module.exports.run = async(bot, msg, args) => {
    if (cmd == `${prefix}leave`) {
        msg.member.voiceChannel.leave();
    }
}

module.exports.config = {
    command: "leave"
}