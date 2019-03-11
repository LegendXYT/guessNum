const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {

    message.channel.send("```fix\nthe commands for Digit Master\nprefix - n/\ncreate - create a guessing game\ninvite - invite me to your server\nserver - join our support server\nping - check the bots ping status\nNo Category:\nhelp - shows this message\n\nType n/help command for more info on a command.\nYou can also type n/help category for more info on a category.``` ")
}


module.exports.config = {
    name: "help",
    aliases: ["h", "halp", "commands", "info", "information"],
    usage: "d!help",
    description: "Shows the list of commands for this bot",
    accessableby: "Members"
  }
