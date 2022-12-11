const Discord = require("discord.js")
const { client, config } = require("../index.js")

client.on("ready", () => {

  console.log("|\n|    Advanced MassDM\n|   Made by weston#0001\n|\n| Last Update: 11.11.2022\n|")

  client.user.setActivity(` in ${client. guilds. cache. size} servers`, { type: "PLAYING" }).catch(console.error);

})