class Misc {
    constructor(options) {

  

        if (!options.embedTitle) throw new TypeError('Missing argument embedTitle')
        if (typeof options.embedTitle !== 'string') throw new TypeError('embedTitle must be a string')

        if (!options.embedColor) throw new TypeError('Missing argument embedColor')
        if (typeof options.embedColor !== 'string') throw new TypeError('embedColor must be a string')
        if (!options.message) throw new TypeError('Missing argument: message')

        this.message = options.message;
      
        this.embedTitle = options.embedTitle
        this.embedColor = options.embedColor
        this.title = options.title
        this.embedFooter = options.embedFooter

    }

    //Random Quote
    async roast() {
        const Discord = require('discord.js');
        const axios = require('axios');

        const url = 'https://insult.mattbas.org/api/insult.json';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle || 'Roast')
            .setDescription(data.insult)
            .setColor(this.embedColor || "Random")
            .setFooter(this.embedFooter || 'Made with djs-misc')

        await this.message.channel.send({ embeds: [embed] })
    }
    async dadJoke() {
    

      const Discord = require('discord.js');
        const axios = require('axios');

        const url = 'https://icanhazdadjoke.com/';

        let response, data;
        try {
            response = await axios.get(url, {
                    headers: {
                      'Accept': 'application/json',
                      'User-Agent': 'djs-misc(https://github.com/gizmolabAI)',                    }
                   })
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }
        
        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle || 'Dad Joke')
            .setDescription(data.joke)
            .setColor(this.embedColor || "Random")
            .setFooter(this.embedFooter || 'Made with djs-misc')

        await this.message.channel.send({ embeds: [embed] })
    }
}
module.exports = Misc;