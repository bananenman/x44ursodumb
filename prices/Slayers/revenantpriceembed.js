const Discord = require('discord.js')
const {EmbedBuilder } = require('discord.js');

module.exports = new EmbedBuilder()
	.setColor("Green")
	.setTitle("Revenant Carry Prices")
	.setThumbnail("https://media.discordapp.net/attachments/1042185922055258142/1046457235989090324/Revenant_Horror.png")
	.addFields(
        {name: "Tier 5", value: "450k Coins", inline: true},
	)
	.setFooter({ text : "SBL", iconURL : "https://cdn.discordapp.com/icons/740616442034258002/a_bdd68a941ba724965fa4cd7617fce2c8.gif?size=512" })