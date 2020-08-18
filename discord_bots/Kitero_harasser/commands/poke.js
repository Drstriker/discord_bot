module.exports.run = async(bot, msg, args) => {
    let logschannel = msg.guild.channels.find(x => x.name === "logs");

    if (msg.mentions.users.first()) {
        if (logschannel) {
            logschannel.send(`${msg.author} sent message :
            "${msg.author.lastMessage}"
            IN Channel ${msg.channel}
            AT [${msg.createdAt}]`);
        }
        msg.author.lastMessage.delete();
        if (msg.content === `!poke <@579990549461729280>`) {
            msg.channel.send(`${msg.author} POKED ME !!`);
        }
        else
            msg.channel.send(`${msg.author} POKED ` + msg.mentions.users.first() + ` !!`);
    }
}

module.exports.config = {
    command: "poke"
}