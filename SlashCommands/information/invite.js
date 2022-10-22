const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    description: "Gives invite link",
    run: async(client, interaction, args) => {
      const button = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('INVITE ME')
          .setURL(`https://discord.com/api/oauth2/authorize?client_id=1017908520370327633&permissions=156766693440&scope=bot`)
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
