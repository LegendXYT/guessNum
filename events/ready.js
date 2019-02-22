const Discord =  require("discord.js")
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix

module.exports =  bot => {
      console.log(`${bot.user.username} is online`)

      let statuses = [
        `${bot.guilds.size} Servers!`,
        `${prefix}help`,
        `${bot.users.size} Digit Masters!`
      ]

      setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"});
      }, 5000)
}
