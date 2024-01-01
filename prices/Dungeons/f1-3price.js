const Discord = require('discord.js')
const {EmbedBuilder } = require('discord.js');

module.exports = new EmbedBuilder()
	.setColor("Green")
	.setTitle("Floor 1-3 Carry Prices")
	.setThumbnail("https://media.discordapp.net/attachments/1050526873148477456/1190674644332728330/image.png?ex=65a2a92c&is=6590342c&hm=bbeb95ab8cc1f508c7d5c5e0cb0a3c9d6a5f6104fac231b69838274f92a03448&=&format=webp&quality=lossless")
	.addFields(
		{name: "Completion", value: "250k Coins", inline: true},

	)
	.setFooter({ text : "SBL", iconURL : "https://cdn.discordapp.com/icons/740616442034258002/a_bdd68a941ba724965fa4cd7617fce2c8.gif?size=512" })