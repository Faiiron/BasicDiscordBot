// requeriments
const Discord = require('discord.js');

// define client
const Client = new Discord.Client({
    intents: 34615

})

// content
Client.on('ready', async ( client ) => {
    console.log('HardBot is Ready!')
    }   
)

Client.on('messageCreate', async ( message ) => {
    if(message.author.bot) return;
    if(message.content.startsWith('!')) message.channel.send('Buenas!')

    }
);

// conection
Client.login('YOUR_BOT_TOKEN')