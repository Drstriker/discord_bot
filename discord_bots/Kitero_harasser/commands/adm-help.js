module.exports.run = async(bot, msg, args) => {
    if (msg.member.roles.find(r => r.name === "ADM")) {
        bot.users.get(msg.author.id).send(
`\`\`\`
Admin Commands available following '!?' :

adm-help - Show Admin Commands help
adm-test - Admin Test command

example of use: "!?adm-test"

 - - - More Commands are in development - - -
\`\`\``);
        msg.author.lastMessage.delete();
    }
    else {
        msg.channel.send("!!! You are not an admin of this server !!!");

    }
}

module.exports.config = {
    command:"?adm-help"
}