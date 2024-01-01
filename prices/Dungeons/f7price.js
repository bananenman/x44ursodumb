const Discord = require('discord.js')
const {EmbedBuilder } = require('discord.js');

module.exports = new EmbedBuilder()
	.setColor("Green")
	.setTitle("Floor 7 Carry Prices")
	.setThumbnail("https://cdn.discordapp.com/attachments/1042185922055258142/1046466678097191022/Wither_Invulnerable.png")
	.addFields(
		{name: "Completion", value: "3m Coins", inline: true},
		{name: "S Runs", value: "4.2m Coins", inline: true},
		{name: "S+ Runs", value: "6m Coins", inline: true},
	)
	.setFooter({ text : "SBL", iconURL : "https://cdn.discordapp.com/icons/740616442034258002/a_bdd68a941ba724965fa4cd7617fce2c8.gif?size=512" })