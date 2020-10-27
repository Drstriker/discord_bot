module.exports.run = async(bot, msg, args) => {
    toprange = msg.content.split(" ");
    if (toprange[1])
        rand = Math.floor(Math.random() * toprange[1]);
    else
        rand = Math.floor(Math.random() * 101);
    msg.channel.send(`You draw ${rand} !`);
}

module.exports.config = {
    command:"dice"
}