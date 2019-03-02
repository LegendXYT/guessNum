const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {

    message.channel.send("```fix\nprefix - n/\nguess - create a guessing game\ninvite - invite me to your server\nserver - join our support server\nping - check the bots ping status")
}


module.exports.config = {
    name: "help",
    aliases: ["h", "halp", "commands", "info", "information"],
    usage: "d!help",
    description: "Shows the list of commands for this bot",
    accessableby: "Members"
  }
