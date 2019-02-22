const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix
const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {

  var server = bot.guilds.get('532808886399270912')


  let embed = new Discord.RichEmbed()
  .setColor("#77abff")
  .addField("Server Link", "https://discord.gg/CZK6cDm")
  .addField(`Total Members:`, `${server.memberCount}`)
  .addField(`Online Members:`, `${server.members.filter(member => member.presence.status !== "offline").size}`)
  .addField("Bot Status:", `${emoji('tick')}`)


  message.channel.send(embed)
  function emoji(name) {return bot.emojis.find(emoji => emoji.name === name)

  }
}

module.exports.config = {
    name: "server",
    noalias: "No Aliases",
    aliases: [],
    usage: `${prefix}server`,
    description: "Gives you the link to the bots support server!",
    accessableby: "Members"
  }
