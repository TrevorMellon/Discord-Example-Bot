require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

util = require('./util/util.js') 

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.login(process.env.DISCORD_TOKEN);

client.on('message', msg => {
    var mm = msg.content;
    m = mm.toString().toLowerCase();
    var v = m.split(" ");

    console.log("Message Tokens:" + v);
    console.log("User Token:" + client.user);

    if (v.length < 1) {
        return;
    }   
    
    if(v[0] === '!testing') {
        msg.reply("1, 2, 1, 2, this is just a test");
    }
    else if(v[0] === "!help" || v[0] === "/help") {
	util.help(msg);
    }
    else if(v[0] === "!example-bot") {
	var l = v.length;

	if(l>1 && v[1] === "help") {
	   util.example_bot_help(msg);
	}
    }
});

