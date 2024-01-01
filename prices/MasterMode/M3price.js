const Discord = require('discord.js')
const {EmbedBuilder } = require('discord.js');

module.exports = new EmbedBuilder()
	.setColor("Orange")
	.setTitle("Master Mode 3 Carry Prices")
	.setThumbnail("https://cdn.discordapp.com/attachments/1049736549794861168/1107617275940458578/latest.png")
	.addFields(
		{name: "Completion", value: "2.5m Coins", inline: true},
        {name: "S", value: "3m Coins", inline: true},
		{name: "S+", value: "4m Coins", inline: true},
	)
	.setFooter({ text: 'SkyTrade', iconURL: 'https://cdn.discordapp.com/attachments/1042185922055258142/1046456166642896906/PSX_20221118_072801.png' });