const keep_alive = require('./keep_alive.js')

const {Client, Intents}=require("discord.js");
const client=new Client({
    intents:[
        'GUILDS',
        'GUILD_MESSAGES'
    ]
})
client.once("ready", () => {console.log("Logged In!")})

const valorantMaps = ["Ascent", "Bind", "Haven", "Split", "Icebox", "Breeze", "Fracture", "Pearl"]

function generateMap(){
  return valorantMaps[Math.floor(Math.random() * valorantMaps.length)]
}

client.on("messageCreate",
  (message) => {
    if(message.author === client.user) return; // do not do bot commants with bot messages
    
    if(message.content===",help"){
      message.channel.send("```',map' to generate valorant map```")
    }
    if(message.content === ',map'){
      let map = generateMap()
      message.reply(map)
    }
})

keep_alive()
const mySecret = process.env['token']
client.login(mySecret)