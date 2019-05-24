const Discord = require('discord.js');
const config = require("./kitero_harasser.config.json");
const ytdl = require ("ytdl-core");
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot is now connected');
    bot.user.setActivity("Faire chier Kitero", {type: "PLAYING"});
    const channel_name = "test";
    //client.channels.find(x => x.name === channel_name).send("Hello I\'m now connected to server " + channel_name);
});

bot.on('message', async msg => {
    let prefix = config.prefix;
    let msgArray = msg.content.split(" ");
    let cmd = msgArray[0];
    let args = msgArray.slice(1).join(" ");
    user_mention = msg.mentions.users.first();
    let logschannel = msg.guild.channels.find(`name`, "logs");
    let reportschannel = msg.guild.channels.find(`name`, "reports");

    if (cmd === `${prefix}botinfo`) {
        //msg.author.lastMessage.delete();
        let boticon = bot.user.displayAvatarURL;

        let botembed = new Discord.RichEmbed()
        .setAuthor("DrStriker")
        .setColor("#424bf4")
        .setThumbnail(boticon)
        .addField("Bot Name", bot.user.username)
        .addField("Created on", bot.user.createdAt)
        .addField("Purpose", `Harass Kitero`);
        return msg.channel.send(botembed);
    }
    if (cmd === `${prefix}serverinfo`) {
        let sicon = msg.guild.displayAvatarURL;
        
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setColor("#c10000")
        .setThumbnail(sicon)
        .addField("Server Name", msg.guild.name)
        .addField("Created on", msg.guild.createdAt)
        .addField("Total Members", msg.guild.memberCount);

        return msg.channel.send(serverembed);
    }
    if (cmd === `${prefix}report`) {
        let rUser = msg.guild.member(msg.mentions.users.first())
        if (!rUser) return msg.channel.send("Could not find User.")
        let reason = msg.content.slice(29);
        //let reason = args.slice(20);

        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Report Ticket")
        .setColor("#ff0000")
        .addField("Reported User", `${rUser} ID: ${rUser.id}`)
        .addField("Reported by", `${msg.author} ID: ${msg.author.id}`)
        .addField("On Channel", msg.channel)
        .addField("At", msg.createdAt)
        .addField("Reason", reason);

        msg.delete().catch(O_o=>{});
        msg.channel.send(`${msg.author} Made a Report Ticket, your ticket will be examined by Admins`);
        reportschannel.send(reportEmbed);
    }
    if (cmd === `${prefix}clear`) {
        let default_number = 99;
        if (msgArray) {
            msg.channel.bulkDelete(msgArray[1]).then(() => {
                msg.channel.send(`Cleared ${msgArray[1]} messages`);
            });
        }
        else if (!msgArray) 
            msg.channel.bulkDelete(default_number).then(() => {
                msg.channel.send(`Cleared all messages`);
            });
    }
    if (msg.content === `${prefix}poke ` + user_mention) {
        logschannel.send(`${msg.author} sent message :
        "${msg.author.lastMessage}"
        IN Channel ${msg.channel}
        AT [${msg.createdAt}]`);        
        msg.author.lastMessage.delete();
        if (msg.content === `${prefix}poke <@579990549461729280>`) {
            msg.channel.send(`${msg.author} POKED ME !!`);
        }
        else
            msg.channel.send(`${msg.author} POKED ` + user_mention + ` !!`);
    }
    if (cmd == `${prefix}join`) {
        if (msg.member.voiceChannel) {
        msg.member.voiceChannel.join();
        }
        else
            msg.reply('You need be in a voice channel');
    }
    if (cmd == `${prefix}leave`) {
        msg.member.voiceChannel.leave();
    }
    if (cmd == `${prefix}play`) {
        msg.channel.voic.play(ytdl(msgArray[1], {filter: 'audioonly'}));
    }
    if (cmd === `${prefix}say`) {
        logschannel.send(`${msg.author} sent message :
        "${msg.author.lastMessage}"
        IN Channel ${msg.channel}
        AT [${msg.createdAt}]`)
        msg.author.lastMessage.delete();
        msg.channel.send(args);
    }
    //console.log(msg);
});

bot.login(config.token);