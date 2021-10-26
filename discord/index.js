// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const prefix = '!';
// Load the .env file in to read DISCORD_TOKEN
require('dotenv').config();

// Create a new client instance
const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
bot.once('ready', () => ready());

// Login to Discord with your client's token
bot.login(process.env.DISCORD_TOKEN);
const channel = bot.channels

function ready() {
    console.log("₿club ₿ot is online!")
}

channel.createInvite()
  .then(invite => console.log(`Created an invite with a code of ${invite.code}`))
  .catch(console.error);
console.log(invite);

bot.on(prefix + 'invite', message => { 
    if (message.channel.type == 'dm') {
        message.channel.send(invite); 
    }
});