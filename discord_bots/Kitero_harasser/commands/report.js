const Discord = require('discord.js');

module.exports.run = async(bot, msg, args) => {
    let rUser = msg.guild.member(msg.mentions.users.first());
    let reason = msg.content.slice(29);
    let reportschannel = msg.guild.channels.find(x => x.name === 'reports');
<<<<<<< HEAD

    if (reason && reportschannel) {
        let reportEmbed = new Discord.RichEmbed()
        .setTitle("Report Ticket")
        .setColor("#ff0000")
        .addField("Reported User", `${rUser} ID: ${rUser.id}`)
        .addField("Reported by", `${msg.author} ID: ${msg.author.id}`)
        .addField("On Channel", msg.channel)
        .addField("At", msg.createdAt)
        .addField("Reason", reason);

        msg.channel.send(`${msg.author} Made a Report Ticket, your ticket will be examined by Admins.`);
        msg.channel.send('Any abusive use of report command will be punished.');
        reportschannel.send(reportEmbed);
    }
    else if (!reason || !rUser || !msg.user.mentions.first()){
        msg.channel.send("Usage: '!report @[user] [reason]'");
    }
    else if (!reportschannel) {
        msg.channel.send("No 'reports' channel created, please create one before using this command");
    }
    msg.delete().catch(del=>{});

=======
    //let reason = args.slice(20);
    if (reportschannel)
    {
        if (reason) {
            let reportEmbed = new Discord.RichEmbed()
            .setDescription("Report Ticket")
            .setColor("#ff0000")
            .addField("Reported User", `${rUser} ID: ${rUser.id}`)
            .addField("Reported by", `${msg.author} ID: ${msg.author.id}`)
            .addField("On Channel", msg.channel)
            .addField("At", msg.createdAt)
            .addField("Reason", reason);
            msg.channel.send(`${msg.author} Made a Report Ticket, your ticket will be examined by Admins`);
            msg.channel.send(`Abusive uses of reports will be punished`);
            reportschannel.send(reportEmbed);
        }
        else if (!reason || !rUser){
            msg.channel.send("Usage: '!report @[user] [reason]'")
        }
    }
    else
        msg.channel.send(`Report Channel must be created by Admins`);
    msg.author.lastMessage.delete();
    //msg.delete().catch(O_o=>{});
>>>>>>> 504dd93fecedb6e78b4a70a6f92fb7a1a5d4b3e7
}

module.exports.config = {
    command: "report"
}