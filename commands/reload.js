const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const superagent = require("superagent")
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {
  if(message.author.id != "513571036688547871") return message.channel.send("Only the **Bot Owner** can use this command")

  if(!args[0]) return message.channel.send("Please provide a command to reload!")

  let commandName = args[0].toLowerCase()

  try{
      delete require.cache[require.resolve(`./${commandName}.js`)] // usage !reload <name>
      bot.commands.delete(commandName)
      const pull = require(`./${commandName}.js`)
      bot.commands.set(commandName, pull)
  } catch (e) {
      return message.channel.send(`Could not reload \`${args[0].toUpperCase()}\``)
  }

  message.channel.send(`The Command \`${args[0].toUpperCase()}\` has been reloaded `)


}


module.exports.config = {
    name: "reload",
    description: "Reloads a bot commands",
    usage: `${prefix}cat`,
    accessableby: "Bot Owner",
    aliases: ["creload", "commandreload"]
}
