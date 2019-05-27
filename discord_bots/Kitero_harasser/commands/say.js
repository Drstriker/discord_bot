module.exports.run = async(bot, msg, args) => {
    let logschannel = msg.guild.channels.find(x => x.name === "logs");

    logschannel.send(`${msg.author} sent message :
    "${msg.author.lastMessage}"
    IN Channel ${msg.channel}
    AT [${msg.createdAt}]`)
    msg.author.lastMessage.delete();
    msg.channel.send(args);
}

module.exports.config = {
    command: "say"
}