const Discord = require('discord.js')
const {EmbedBuilder } = require('discord.js');

module.exports = new EmbedBuilder()
	.setColor("Green")
	.setTitle("Tarantula Carry Prices")
	.setThumbnail("https://media.discordapp.net/attachments/1125617708596215949/1191025860799627284/latest.png?ex=65a3f045&is=65917b45&hm=e5cd8ba7c9ebf645319b75d9f88c6d4c254ae0eef35e51d5c5b29403f25367ea&=&format=webp&quality=lossless&width=732&height=562")
	.addFields(
        {name: "Tier 4", value: "200k Coins", inline: true},
	)
	.setFooter({ text : "SBL", iconURL : "https://cdn.discordapp.com/icons/740616442034258002/a_bdd68a941ba724965fa4cd7617fce2c8.gif?size=512" })