// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
// Load the .env file in to read DISCORD_TOKEN
require('dotenv').config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => ready());

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);

function ready() {
    console.log("₿club ₿ot is online!")
}