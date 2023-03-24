const Discord = require('discord.js-selfbot');
const config = require('./config.js')
const client = new Discord.Client();
client.on("ready", async() => {
    console.log(`[CLIENT] ${client.user.tag} Ready!`);
    let guild = client.guilds.cache.get(config.serverID) 
    if(!guild) console.log("[Error] Discord is incorrect:", serverID)
    let role = guild.roles.cache.find(u => u.id === config.roleID) 
    if(!role) console.log("[Error] Role is incorrect, server name:", guild.name)
    if(config.interval < 60) console.log("[Warning] Interval is lower than 60000, It will have a problem with api!") 
    let i = 0;let colors = ["#FF0000","#FFA500","#FFFF00","#008000","#0000FF","#4B0082","#EE82EE"];setInterval(() => {if(i == colors.length) i = 0;role.edit({color: colors[i]}).catch(err => console.log(`[Error] An error occurred during the role change.`));i++;}, config.interval * 1000)
})
process.on('unhandledRejection', (reason, promise) => {
    console.log('[Error] Unhandled Rejection at:', reason.stack || reason)
})

client.login(config.token)


