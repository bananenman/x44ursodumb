const Discord = require('discord.js')
const {EmbedBuilder } = require('discord.js');

module.exports = new EmbedBuilder()
	.setColor("Green")
	.setTitle("Blaze Carry Prices")
	.setThumbnail("https://media.discordapp.net/attachments/1136532398780207124/1191029463861956618/Minecraft_entities_blaze.png?ex=65a3f3a0&is=65917ea0&hm=e37a6e858317526fe236e9e33ed1bb796a2f07b704ef06fa5498d25e0370cbc6&=&format=webp&quality=lossless")
	.addFields(
        {name: "Tier 1", value: "350k Coins", inline: true},
        {name: "Tier 2", value: "700k Coins", inline: true},
        {name: "Tier 3", value: "1.5m Coins", inline: true},
        {name: "Tier 4", value: "4m Coins", inline: true},
	)
	.setFooter({ text : "SBL", iconURL : "https://cdn.discordapp.com/icons/740616442034258002/a_bdd68a941ba724965fa4cd7617fce2c8.gif?size=512" })