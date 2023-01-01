const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
    async execute(interaction) {
      await interaction.deferReply();
      await wait(4000);
      await interaction.editReply('Pong!');
      await wait(2000);
      await interaction.editReply('Pong again!');
      await wait(2000);
      await interaction.followUp('Pong once again!');
    },
};