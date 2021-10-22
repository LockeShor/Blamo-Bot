const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const config = require("./config.json");

const fs = require('fs');

const ms = require('ms');

client.once('ready', () => {
  console.log('Bot activated! - Now detecting and compromising targets');
  // Set the client user's presence
  client.user.setPresence({
    status: "dnd",
    activity: {
      name: 'Starting up...',
      type: "COMPETING"
    }
  });
  setInterval(function() {
    var rand = Math.ceil(Math.random() * 5)
    switch (rand) {
      case 1:
        client.user.setPresence({
          status: "dnd",
          activity: {
            name: 'you.',
            type: "WATCHING"
          }
        });
        break;
      case 2:
        client.user.setPresence({
          status: "dnd",
          activity: {
            name: 'Don\'t say it!',
            type: "PLAYING"
          }
        });
        break;
      case 3:
        client.user.setPresence({
          status: "dnd",
          activity: {
            name: 'I forgor 💀',
            type: "PLAYING"
          }
        });
        break;
      case 4:
        client.user.setPresence({
          status: "dnd",
          activity: {
            name: 'lmfao this nerd',
            type: "WATCHING"
          }
        });
        break;
      case 5:
        client.user.setPresence({
          status: "dnd",
          activity: {
            name: 'you hopefully not saying the word.',
            type: "LISTENING"
          }
        });
        break;
      case 6:
        client.user.setPresence({
          status: "dnd",
          activity: {
            name: 'I rember 😇',
            type: "PLAYING"
          }
        });
        break;
      default:
        console.log("help")
    }
    //debug
    //console.log("status change: " + rand);
  }, 15000);

});

var untilSecret = Math.ceil(Math.random() * 4) + 3
console.log("Until Secret: " + untilSecret)
client.on('message', message => {
  var words = message.content.toString().toLowerCase();
  words = words.replace(/ /g, "")
  words = words.replace(/\*/g, "")
  words = words.replace(/_/g, "")


  //HA HERE IT IS NERDS
  blacklist = ["lmao", "imao", "lmfao", "imfao", "lma0", "ima0"];
  //RIGHT HERE LMFAO

  if (message.content.startsWith("blamo;say ")) {
    if (message.author.id !== config.ownerID && message.author.id !== "805464078364573706") {
      console.log("Failed blamosay attempt: " + message.author.username);
      return;
    }
    args = message.content.split(" ");
    args = args.slice(1, args.length);
    msg = args.slice(1, args.length).join(" ")
    msgchnl = client.channels.cache.get(args[0]);
    if (msgchnl) {
    msgchnl.send(msg)
    console.log("#" + msgchnl.name + " | Blamo: " + msg)
    }
    else{
      message.channel.send("invalid id!")
      console.log("invalid channel id")
    }
    
  }
  for (var i = 0; i < blacklist.length; i++) {
    if (words.includes(blacklist[i])) {
      untilSecret--;
      console.log("#" + message.channel.name + ": " + message.author.username + "#" + message.author.discriminator + ": " + message.content);
      var special = parseInt(Math.ceil(Math.random() * 100))
      console.log(special)
      if (special <= 5) {
        setTimeout(function() { message.channel.send("I forgor to say blamo."); setTimeout(function() { message.channel.send("💀") }, 1000) }, 5000)
        console.log("Woah, lucky!")
      }
      else if (special > 5) {
        if(untilSecret == 0){
          untilSecret = Math.ceil(Math.random() * 3) + 4
          console.log("secret given: " + "temp")
          message.channel.send("Blamo!" + " test, dont pay attention to this")
        }
        else{
          message.channel.send("Blamo!");
        }
      }
      else {
        console.log("error: luck system")
      }
    }
  }


});

client.on("messageDelete", function(message) {
    if (message.author.id == client.user.id) {
      console.log("Message deleted in #" + message.channel.name + ": " + message.content)
    }
});

client.on("guildMemberUpdate", function(oldMember, newMember) {
  if (oldMember.user.id == "804841786807287829") {
    newMember.setNickname("Blamo")
  }
});

client.login(config.token);