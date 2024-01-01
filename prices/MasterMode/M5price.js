const Discord = require('discord.js')
const {EmbedBuilder } = require('discord.js');

module.exports = new EmbedBuilder()
	.setColor("Orange")
	.setTitle("Master Mode 5 Carry Prices")
	.setThumbnail("https://cdn.discordapp.com/attachments/1042185922055258142/1046466677048606770/Livid.png")
	.addFields(
		{name: "Completion", value: "6m Coins", inline: true},
		{name: "S", value: "7m Coins", inline: true},
	)
	.setFooter({ text: 'SkyTrade', iconURL: 'https://cdn.discordapp.com/attachments/1042185922055258142/1046456166642896906/PSX_20221118_072801.png' });