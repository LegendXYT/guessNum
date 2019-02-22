const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {

    if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead.`)

    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command);
            var SHembed = new Discord.RichEmbed()
            .setColor('#5780cd')
            .setAuthor(`Master HELP`, bot.user.displayAvatarURL)
            .setThumbnail(message.guild.iconURL)
            .setDescription(`The bot prefix is: ${prefix}\n\n**>Command:** ${command.config.name}\n**>Description:** ${command.config.description || "No Description"}\n**>Usage:** ${command.config.usage || "No Usage"}\n**>Accessable by:** ${command.config.accessableby || "Members"}\n**>Aliases:** ${command.config.noalias || command.config.aliases}`)
            .setFooter(`Requested by: ${message.author.username}`, message.author.displayAvatarURL )
            message.channel.send(SHembed);
        }}

    if(!args[0]) {
        let Sembed = new Discord.RichEmbed()
        .setColor('#5780cd')
        .setAuthor(`Master Help`, bot.user.displayAvatarURL)
        .setThumbnail( message.guild.iconURL)
        .setTimestamp()
        .setDescription(`These are the avaliable commands for the Diamond Drop!\nThe bot prefix is: ${prefix}\n**Do** ${prefix}help [Command] **- for further information**`)
        .addField(`${emoji('guess')} Guess game`, "`create`")
        .addField(`:wrench: Utility`,  "`help` `invite` `server` `ping`")
        .setFooter(`Requested by: ${message.author.username}`, message.author.displayAvatarURL )
        message.channel.send(Sembed)
    }
    function emoji(name) {return bot.emojis.find(emoji => emoji.name === name)
}
}


module.exports.config = {
    name: "help",
    aliases: ["h", "halp", "commands", "info", "information"],
    usage: "d!help",
    description: "Shows the list of commands for this bot",
    accessableby: "Members"
  }
