const { SlashCommandBuilder } = require("discord.js")

module.exports = { 
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("A melhor playlist de todas"),

    async execute (interaction) {
        await interaction.reply("https://open.spotify.com/playlist/6RqQtFRrgKvyVWJsYhfH3i?si=ace50c6ecf2c46eb")
    }
}