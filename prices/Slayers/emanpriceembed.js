const Discord = require('discord.js')
const {EmbedBuilder } = require('discord.js');

module.exports = new EmbedBuilder()
	.setColor("Green")
	.setTitle("Voidgloom Carry Prices")
	.setThumbnail("https://media.discordapp.net/attachments/1042185922055258142/1046457235636748349/Enderman.png")
	.addFields(
		{name: "Tier 1", value: "100k Coins", inline: true},
		{name: "Tier 2", value: "200k Coins", inline: true},
		{name: "Tier 3", value: "600k Coins\n10+ Bulk : 550k per", inline: true},
        {name: "Tier 4", value: "1.8m Coins\n10+ Bulk : 1.6m per\n50+ Bulk : 1.4m\n100+ Bulk : 1.3m", inline: true},

	)
	.setFooter({ text : "SBL", iconURL : "https://cdn.discordapp.com/icons/740616442034258002/a_bdd68a941ba724965fa4cd7617fce2c8.gif?size=512" })