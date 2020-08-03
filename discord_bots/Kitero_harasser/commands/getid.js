module.exports.run = async(bot, msg, args) => {
    if (msg.mentions.users.first()) {
        let mention = msg.mentions.users.first();
        msg.channel.send(`${mention}` + "'s ID is: " + `${mention.id}`);
    }
}

module.exports.config = {
    command:"getid"
}