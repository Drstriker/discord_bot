//const Discord = require("discord.js");
import * as Discord from "discord.js";
import * as Config from "./kitero_harasser.config";

//const bot: Discord.Client = new Discord.Client();
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot is now connected');
    bot.user.setActivity("Faire chier le monde", {type: "PLAYING"});
});

bot.on('message', msg => {

});

bot.login(Config.cnf.token);