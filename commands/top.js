const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const superagent = require("superagent")
const prefix = botconfig.prefix
const sql = require("sqlite");
sql.open("score.sqlite");

module.exports.run = async (bot, message, args) => {

      var index = 1;
      var msg = "-- Top 5 list --\n";
      sql.get("SELECT * FROM scores ORDER BY points DESC LIMIT 5").then(rows => {
          for (index = 1; index < 6; index++) {
              if (rows[index] !== null) {
                  msg += index + ". " + rows[index].userId + " - " + rows[index].points + "\n";
              }
          }
          console.log(msg);
      });
  };

module.exports.config = {
    name: "top",
    description: "the leaderboard of the guessing game!",
    usage: `${prefix}winners`,
    accessableby: "Members",
    aliases: ["winners", "leaderboard"]
}
