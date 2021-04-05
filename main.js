const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const config = require("./config.json");

const fs = require('fs');

var PouchDB = require('pouchdb');
var db = new PouchDB('my_db');

const ms = require('ms');
const { count } = require('console');

const jsonfile = require('jsonfile')

client.commands = new Discord.Collection();
 
client.once('ready', () =>{
    console.log('Bot activated!');
     const guildNames = client.guilds.cache.map(g => g.id)
     for (g = 0; g < guildNames.length; g++) {
        // lmaoarray = {"list":["lmao", "iamo", "breh"]}

        // var file = `./lmaoarrays/guild_${guildNames[g].toString()}.json`

        // var obj = JSON.stringify(lmaoarray)

        // jsonfile.writeFileSync(file, obj)
        
        // results = JSON.parse(jsonfile.readFileSync(`./lmaoarrays/guild_${guildNames[g].toString()}.json`))     
        // console.log(results)
     }
});


client.on('message', message =>{
    i = 0
    var words = message.content.toString().toLowerCase();
    words = words.replace(/ /g, "")
    words = words.replace(/\*/g, "")
    words = words.replace(/_/g, "")
    var file = `./lmaoarrays/guild_${message.guild.id.toString()}.json`
    fs.access(file, fs.F_OK, (err) => {
        if (err) {
            lmaodefault = ["iamo","lmao"]
            jsonfile.writeFileSync(file, JSON.stringify(lmaodefault))
        }
        console.log(`file exists`)
        //file exists
      })
    lmaos = JSON.parse(jsonfile.readFileSync(`./lmaoarrays/guild_${message.guild.id.toString()}.json`)).list
    lmaosRaw = JSON.parse(jsonfile.readFileSync(`./lmaoarrays/guild_${message.guild.id.toString()}.json`))
    
    if (message.author.id == "804841786807287829") return;
    else if (message.channel.type === 'dm'){
        console.log(`**${message.author.username}:** ${message.content}`)
    }
    else if (words.includes("!lmaoadd") && (message.author.id == config.ownerID || message.author.id == config['1ID'] || message.author.id == config['2ID'])){
        var arg = message.content
        arg = arg.split(' ').slice(1).join(' ')
        console.log(arg + " was added to array")
        console.log(lmaos)
        lmaosRaw.list.push(JSON.stringify(arg))
        console.log(lmaosRaw)
        console.log(lmaosRaw.list)
        //jsonfile.writeFileSync(file, writefile)
        message.reply(`Success! ${arg} was added to the list!`)
        console.log("------------------------")
        console.log(lmaos)
        console.log(lmaosRaw)
        console.log(lmaosRaw.list)
    }
    else if (words.includes("!lmaolist") && (message.author.id == config.ownerID || message.author.id == config['1ID'] || message.author.id == config['2ID'])){
        message.channel.send("Here is the array of lmaos: \n"+ lmaos)
        console.log(lmaos)
        console.log(lmaosRaw.list)
    }
    
    else if (words.includes("!lmaoreset") && (message.author.id == config.ownerID || message.author.id == config['1ID'] || message.author.id == config['2ID'])){
        lmaos = ["lmao", "iamo"]
        message.channel.send("reset array.")
        console.log(lmaos)
    }
    else if (words.includes("!lmaoremove") && (message.author.id == config.ownerID || message.author.id == config['1ID'] || message.author.id == config['2ID'])){
        var arg = message.content
        arg = arg.split(' ').slice(1).join(' ')
        console.log(arg + " was removed from array")
        lmaos = lmaos.filter(v => v !== arg); 
        message.reply(`Success! ${arg} was removed from the list!`)
        console.log(lmaos)
    }
    else if (words.includes("lmaow") || words.includes("lmonke")){
        message.reply("congratz you are epic")
        console.log("someones epic")
    }
    else for (i in lmaosRaw.list[i]){
        if (words.includes(lmaosRaw.list[i])){
            message.channel.send("Blamo!")
            i++
        }
    }
    
});

client.on("guildMemberUpdate", function(oldMember, newMember){
    if (oldMember.user.id == "804841786807287829"){
        newMember.setNickname("Blamo")
    }
});

client.login(config.token);