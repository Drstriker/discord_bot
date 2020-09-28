const ytdl = require("ytdl-core");
const opus = require("opusscript");
const config = require("./../kitero_harasser.config.json");

module.exports.run = async(bot, msg, args) => {
    let arguments = msg.content.substring(config.prefix.length).split(" ");
    var servers = {};
    
    if (!servers[msg.guild.id])
    servers[msg.guild.id] = {
        queue: []
    }

    var server = servers[msg.guild.id];
    server.queue.push(arguments[2]);

    if (arguments[1] === "play" || "p"){
        let link = arguments[2];

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

        if (!msg.guild.voiceChannel)
            msg.member.voiceChannel.join().then(function(connection){
                play(connection, msg)
            })
    }

    else if (arguments[1] === "queue" || "q"){
        var array = "```\n";
        var i = 0;
        while (server.queue[i]) {
            array += i + ":" + server.queue[i] + "\n";
            i++;
        }
        array += "```"
        msg.channel.send(array);
        console.table(server.queue);
    }

    else if (arguments[1] === "join" || "j"){
        if (msg.member.voiceChannel) {
            msg.member.voiceChannel.join();
        }
        else
            msg.reply('You need be in a voice channel');
    }

    else if (arguments[1] === "leave" || arguments[i] === "l"){
        msg.member.voiceChannel.leave();
    }
}

module.exports.config = {
    command:"music"
}