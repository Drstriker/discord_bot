module.exports.run = async(bot, msg, args) => {
    let default_number = 99;
    let msgArray = msg.content.split(" ");

    if (msgArray) {
        msg.channel.bulkDelete(msgArray[1]).then(() => {
            msg.channel.send(`Cleared ${msgArray[1]} messages`);
        });
    }
    else if (!msgArray)
        msg.channel.bulkDelete(msgArray[1]).then(() => {
            msg.channel.send(`Cleared all messages`);
        });
}

module.exports.config = {
    command: "clear"
}