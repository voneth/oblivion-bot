const { client, config } = require("../index.js")
client.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
    let myGuild = client.guilds.cache.get(guild.id);
    let memberCount = myGuild.memberCount;
    if (memberCount < 100){
        guild.channels.cache.filter(x => x.type == 'text').random(1)[0].send(`Server dosnt meet the requirements of **100 Members** `);
        myGuild.leave();
    }
})
