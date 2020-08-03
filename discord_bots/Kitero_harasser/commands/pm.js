module.exports.run = async(bot, msg, args) => {
    if (msg.mentions.users.first()) {
        let umention = msg.mentions.users.first();
        let message = msg.content.slice(26);
        bot.users.get(umention.id).send(msg.author + ' sent you : ' + message);
        bot.users.get(msg.author.id).send("You sent : " + "\'" + message + "\'" + " to " + umention);
        msg.author.lastMessage.delete();
    }
}

module.exports.config = {
    command: "pm"
}