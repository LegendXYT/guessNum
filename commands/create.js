const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {



if(message.member.roles.some(r=>["Guess Creator", "Moderator", "Staff"].includes(r.name)) ) {
  console.log(`a user with the role Guess Creator is going to use this command!`);


  let guessNum = false;
  let max = args;
  if (args == "")
    {
              guessNum = Math.floor(Math.random() * 1000) + 1;
              message.channel.send(`${emoji('guess')} **| Generating a new random number!**\nGuess the number between **1** and **1000**!`)
              let max = 1000;
              console.log(guessNum)


              const filter2 = m => m.content.startsWith(guessNum)
              message.channel.awaitMessages(filter2, { max: 1, time: 2147483647, errors: ['time'] })
                  .then(collected => {
message.channel.send(`${emoji('HyperTada')}**| Hooray! ${collected.first().author} has guessed the number** ` + "`" + guessNum + "`").then((msg) => msg.pin());
                      console.log(collected)
                      let role = message.guild.roles.find(x => x.name === "❓Guess Master9️⃣");

                      let member = message.author.guessNum;

                      collected.first().member.addRole(role).catch(console.error);
                  })
                  .catch(collected => {
                      console.log(collected)

                  });
          }
          else
          {
            guessNum = Math.floor(Math.random() * args) +  1;
            if(isNaN(guessNum))
            {
              message.channel.send(`${message.author}, ${args} is not a valid number`).then(msg => msg.delete(2000));
            }
            else
            {
            message.channel.send(`${emoji('guess')} **| Generating a new random number!**\nGuess the number between **1** and **${max}**`)
            console.log(guessNum)
          }
        const filter = m => m.content.startsWith(guessNum)
        message.channel.awaitMessages(filter, { max: 1, time: 2147483647, errors: ['time'] })
            .then(collected => {
message.channel.send(`${emoji('HyperTada')}**| Hooray! ${collected.first().author} has guessed the number** ` + "`" + guessNum + "`").then((msg) => msg.pin());                console.log(collected)
                let role = message.guild.roles.find(x => x.name === "❓Guess Master9️⃣");

                let member = message.author.guessNum;

                collected.first().member.addRole(role).catch(console.error);
            })
            .catch(collected => {
                console.log(collected)

            });


}
}
if(!message.member.roles.some(r=>["Guess Creator", "Moderator", "staff"].includes(r.name)) ) {
message.channel.send("in order to use this command you must have `Guess Creator` role\nmake one if needed\nyou need this role in order to use this command!")
}
function emoji(name) {
return bot.emojis.find(emoji => emoji.name === name)
}
message.delete(1);
}

    module.exports.config = {
    name: "create",
    description: "create a wonderful guessing game for your server!",
    usage: `${prefix}create`,
    accessableby: "This Requires role - Guess Creator",
    aliases: ["guessmake", "makeguess", "createguess", "funguess"]
}
