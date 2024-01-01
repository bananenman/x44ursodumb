const Discord = require('discord.js')
const {EmbedBuilder } = require('discord.js');

module.exports = new EmbedBuilder()
	.setColor("Orange")
	.setTitle("Master Mode 7 Carry Prices")
	.setThumbnail("https://cdn.discordapp.com/attachments/1049736549794861168/1107621158964179104/latest.png")
	.addFields(
		{name: "Completion", value: "20m Coins", inline: true},
	)
	.setFooter({ text: 'skyTrade', iconURL: 'https://cdn.discordapp.com/attachments/1042185922055258142/1046456166642896906/PSX_20221118_072801.png' });