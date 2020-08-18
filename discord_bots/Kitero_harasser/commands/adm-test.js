module.exports.run = async(bot, msg, args) => {
    if (msg.member.roles.find(r => r.name === "ADM")) {
        msg.channel.send("You are a dev");
        msg.author.lastMessage.delete();
    }
    else {
        msg.channel.send("!!! You are not an admin of this server !!!");
    }
}

module.exports.config = {
    command:"?adm-test"
}