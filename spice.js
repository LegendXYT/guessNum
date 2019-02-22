const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const superagent = require("superagent")

const bot = new Discord.Client({disableEveryone: true});
const num = 0;


require("./util/eventHandler")(bot)

const fs = require("fs");

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on("guildCreate", guild => {
  let embed = new Discord.RichEmbed()
  .setColor("#08d32a")
  .setAuthor(`${guild.name}`, guild.iconURL)
  .addField("I joined a server!", `I am now in ${bot.guilds.size} servers.`)
  .addField("Owner", `${guild.owner}`, true)
  .addField("Member Count", `${guild.memberCount}`, true)
  bot.channels.get("545921329958879252").send(embed);

});

bot.on("guildDelete", guild => {
  let embed = new Discord.RichEmbed()
  .setColor("#f70404")
  .setAuthor(`${guild.name}`, guild.iconURL)
  .addField("I Left a server!", `I am now in ${bot.guilds.size} servers.`)
  .addField("Owner", `${guild.owner}`, true)
  .addField("Member Count", `${guild.memberCount} members`, true)
  bot.channels.get("545921329958879252").send(embed);
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    let max2 = 1000;

    if (message.channel.id == "546600847392374785") {
       if (isNaN(message.content) && !message.content.startsWith(prefix)) {
            message.delete();
            message.reply("Invalid number!").then(msg => msg.delete(3000));
            return;
       }
       if (message.channel.id == "546600847392374785") {
       if(message.content > max2){
         message.delete();
         message.reply("the number is between 1-1000!").then(msg => msg.delete(3000));
         return;}
       }
  }

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

  })

  bot.login(botconfig.token);
