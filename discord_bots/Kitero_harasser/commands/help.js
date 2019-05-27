module.exports.run = async(bot, msg, args) => {
msg.channel.send(
`\`\`\`fix
Commands available following '!' :

help - Show Commands help
botinfo - Show informations about Kitero-harasser
serverinfo - Show server general informations
poke @[user] - Poke a mentionned user
say - Make the bot say something
clear - Clear messages
report @[user] [reason] - Report a mentionned user
join - Make the bot join your voice channel
leave - Make the bot leave your voice channel

 - - - More Commands are in development - - -

\`\`\``);
}

module.exports.config = {
    command: "help"
}