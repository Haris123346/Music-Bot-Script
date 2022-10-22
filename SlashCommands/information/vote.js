const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "vote",
    description: "Gives link to vote for the bot",
    run: async(client, interaction, args) => {
      const button = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('VOTE ME')
          .setURL(`https://top.gg/bot/1018080976557047858`)
					.setStyle("LINK"),
			);

  const inviteembed = new MessageEmbed()
  .setColor('#26f8ff')
  .setTitle(`Invite ${client.user.username} now`)
  .setImage(client.user.displayAvatarURL())
  .setFooter({
    text: `${client.user.username}`, 
    iconURL: client.user.displayAvatarURL({dynamic: true})})

    interaction.followUp({embeds: [inviteembed], components: [button]}).catch((e) => {

  });
}
}
