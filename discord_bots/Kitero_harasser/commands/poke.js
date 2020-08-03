module.exports.run = async(bot, msg, args) => {
    let logschannel = msg.guild.channels.find(x => x.name === "logs");
<<<<<<< HEAD
    
    if (msg.mentions.users.first()) {
        if (logschannel) {
=======

    if (msg.content === `!poke ` + msg.mentions.users.first()) {
        if (logschannel)
        {
>>>>>>> 504dd93fecedb6e78b4a70a6f92fb7a1a5d4b3e7
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