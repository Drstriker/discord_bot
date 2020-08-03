module.exports.run = async(bot, msg, args) => {
    let msgArray = msg.content.split(" ");

    if (msgArray[1]) {
        msg.channel.bulkDelete(msgArray[1]).then(() => {
            msg.channel.send(`Cleared ${msgArray[1]} messages`);
        });
    }
    else {
        msg.channel.bulkDelete(99).then(() => {
            msg.channel.send(`Cleared all messages`);
        });
    }
}

module.exports.config = {
    command: "clear"
}