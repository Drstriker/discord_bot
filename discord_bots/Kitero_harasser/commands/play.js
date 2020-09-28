const ytdl = require("ytdl-core");
const opus = require("opusscript");

module.exports.run = async(bot, msg, args) => {
    let link = msg.content.slice(6);
    var servers = {};

    function play(connection, message){
        var server = servers[message.guild.id];

        server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));
        server.queue.shift();
        server.dispatcher.on("end", function(){
            if (server.queue[0])
                play(connection, message);
            else
                connection.disconnect();
        });
    }
    
    if (!link)
        msg.channel.send("Link a video web link");

    if (!msg.member.voiceChannel)
        msg.channel.send("You must be in a channel to play the bot!");
    
    if (!servers[msg.guild.id])
        servers[msg.guild.id] = {
            queue: []
        }

        var server = servers[msg.guild.id];
        server.queue.push(link);
    
    if (!msg.member.voiceChannel)
        msg.channel.send("You must be in a vocal lobby");

    if (!msg.guild.voiceChannel)
        msg.member.voiceChannel.join().then(function(connection){
            play(connection, msg)
        })
}

module.exports.config = {
    command:"play"
}