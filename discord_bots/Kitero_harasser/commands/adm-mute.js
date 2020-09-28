module.exports.run = async(bot, msg, args) => {
    if (msg.member.roles.find(r => r.name === "ADM")) {
        msg.author.lastMessage.delete();
        let channel = msg.member.voiceChannel;
        for (let member of channel.members) {
            member[1].setMute(true)
        }
    }
    else {
        msg.channel.send("!!! You are not an admin of this server !!!");
    }
}

module.exports.config = {
    command:"?adm-ma"
}