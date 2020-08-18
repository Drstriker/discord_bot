module.exports.run = async(bot, msg, args) => {
msg.channel.send(
`\`\`\`
Commands available following '!' :

help - Show Commands help
botinfo - Show informations about Kitero-harasser
serverinfo - Show server general informations
poke @[user] - Poke a mentionned user
say - Make the bot say something
clear [number]- Clear messages or number of messages
report @[user] [reason] - Report a mentionned user
join - Make the bot join your voice channel
leave - Make the bot leave your voice channel
getid @[user] - Get the id of mentionned user
pm @[user] [message] - Make the bot send a message to mentionned user

 - - - More Commands are in development - - -
\`\`\``);
}

module.exports.config = {
    command: "help"
}