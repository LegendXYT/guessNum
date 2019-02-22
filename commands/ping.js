const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {
			message.channel.send("Pinging ...") // Placeholder for pinging ...
			.then((msg) => { // Resolve promise
				msg.edit("Pong!")
				.then((msg) => {
					msg.edit("ping: " + (Date.now() - msg.createdTimestamp))
				}) // Edits message with current timestamp minus timestamp of message
			});
}
  module.exports.config = {
      name: "ping",
      noalias: "No Aliases",
      aliases: [],
      usage: `${prefix}ping`,
      description: "check the bots ping!",
      accessableby: "Members"
    }
