
const Discord = require('discord.js');
const client = new Discord.Client();

console.log("The Welcome Is ready");
 






client.on('message', message => {
      var ms = 12000;
        let timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [`Bad`,`I'm`,`You`,`Know`,`i Think`,`عيب`,`تااااااتسموكي`,`913`,`Back I'm بالعربي تاتسموكي124123`]
if (message.content === "بج") {
  
       setInterval (function () {
          message.channel.send(`**${words[Math.floor(Math.random() * words.length)]}**`) 
       
      }, ms); 
    }
});





client.login(process.env.AKA)
