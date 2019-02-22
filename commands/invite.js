const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {

 message.channel.send("**Invite me to your server!** <https://discordapp.com/api/oauth2/authorize?client_id=545834096606314506&permissions=2146958839&scope=bot>")
}

module.exports.config = {
    name: "invite",
    noalias: "No Aliases",
    aliases: [],
    usage: `${prefix}invite`,
    description: "Gives you the link to invite the bot to your server!",
    accessableby: "Members"
  }
