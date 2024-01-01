const Discord = require('discord.js')
const {EmbedBuilder } = require('discord.js');

module.exports = new EmbedBuilder()
	.setColor("Orange")
	.setTitle("Master Mode 6 Carry Prices")
	.setThumbnail("https://cdn.discordapp.com/attachments/1042185922055258142/1046471882951630898/f6.png")
	.addFields(
		{name: "Completion", value: "7.5m Coins", inline: true},
		{name: "S", value: "8.2m Coins", inline: true},
		{name: "S+", value: "10m Coins", inline: true},
	)
	.setFooter({ text: 'SkyTrade', iconURL: 'https://cdn.discordapp.com/attachments/1042185922055258142/1046456166642896906/PSX_20221118_072801.png' });