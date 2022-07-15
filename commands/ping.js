
const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('pong'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */

    
    async execute(interaction) {
        await interaction.deferReply();


		interaction.editReply('Pong !')
            }
}
