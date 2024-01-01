const Discord = require('discord.js')
const {EmbedBuilder } = require('discord.js');

module.exports = new EmbedBuilder()
	.setColor("Green")
	.setTitle("Sven Carry Prices")
	.setThumbnail("https://media.discordapp.net/attachments/1125617708596215949/1191025622995177585/latest.png?ex=65a3f00c&is=65917b0c&hm=b4ebce21b193bf154b3974902a0accae26f06a1acb9d41c7a2b0d70a018aafc5&=&format=webp&quality=lossless")
	.addFields(
        {name: "Tier 4", value: "450k Coins", inline: true},
	)
	.setFooter({ text : "SBL", iconURL : "https://cdn.discordapp.com/icons/740616442034258002/a_bdd68a941ba724965fa4cd7617fce2c8.gif?size=512" })