const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const config = require("./config.json");

const ms = require('ms');
const { count } = require('console');

client.commands = new Discord.Collection();

client.once('ready', () =>{
    console.log('Bot activated!');
    
});
lmaos = ["lmao", "iamo"]
client.on('message', message =>{
    i = 0
    var words = message.content.toString().toLowerCase();
    words = words.replace(/ /g, "")
    words = words.replace(/\*/g, "")
    words = words.replace(/_/g, "")
    if (message.author.id == "804841786807287829") return;
    else if (message.channel.type === 'dm'){
        console.log(`**${message.author.username}:** ${message.content}`)
    }
    else if (words.includes("!lmaoadd") && (message.author.id == config.ownerID || message.author.id == config['1ID'] || message.author.id == config['2ID'])){
        var arg = message.content
        arg = arg.split(' ').slice(1).join(' ')
        console.log(arg + " was added to array")
        lmaos.push(arg)
        message.reply(`Success! ${arg} was added to the list!`)
        console.log(lmaos)
    }
    else if (words.includes("!lmaolist") && (message.author.id == config.ownerID || message.author.id == config['1ID'] || message.author.id == config['2ID'])){
        message.channel.send("Here is the array of lmaos: \n"+ lmaos)
        console.log(lmaos)
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
    else for (i in lmaos[i]){
        if (words.includes(lmaos[i])){
            message.channel.send("Blamo!")
            i++
        }
    }
    
});

client.login(config.token);