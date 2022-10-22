client = require("../index");
const { MessageEmbed } = require("discord.js");

// DisTube Events
client.distube
.on("playSong", (queue, song) => queue.textChannel.send({embeds: [new MessageEmbed()
  .setDescription(`<a:blue_flame:1017916681009516545> | Playing: ${song.name} - \`${song.formattedDuration}\``)
  .setFooter(`Requested by ${song.user.username} | Bot by !xd.Haris.#0001`, `${song.user.displayAvatarURL()}`)
  .setTimestamp()
  .setColor("#26f8ff")]}))
.on("addSong", (queue, song) => queue.textChannel.send({embeds: [new MessageEmbed()
  .setDescription(`<a:blue_flame:1017916681009516545> | Added ${song.name} - \`${song.formattedDuration}\``)
  .setFooter(`Requested by ${song.user.username} | Bot by !xd.Haris.#0001`, `${song.user.displayAvatarURL()}`)
  .setTimestamp()
  .setColor("#26f8ff")]}))
.on("playList", (queue, playlist, song) => queue.textChannel.send({embeds: [new MessageEmbed()
  .setDescription(`<a:blue_flame:1017916681009516545> | Play ${playlist.name} playlist (${playlist.songs.length} songs).\nNow playing ${song.name} - \`${song.formattedDuration}\``)
  .setFooter(`Requested by ${song.user.username} | Bot by !xd.Haris.#0001`, `${song.user.displayAvatarURL()}`)
  .setTimestamp()
  .setColor("#26f8ff")]}))
.on("addList", (queue, playlist) => queue.textChannel.send({embeds: [new MessageEmbed()
  .setDescription(`<a:blue_flame:1017916681009516545> | Added ${playlist.name} playlist (${playlist.songs.length} songs) to queue.`)
  .setColor("#26f8ff")]}))
.on("empty", (queue) => queue.textChannel.send({embeds: [new MessageEmbed()
  .setDescription(`<a:Sad_nobita:1017918386002464909> | Everyone left me lonely in the Voice Channel so I am leaving Voice Channel too.`)
  .setColor("#26f8ff")]}))
.on(`error`, (channel, e) => {
    channel.send({embeds: [new MessageEmbed()
    .setDescription(`<a:Sad_nobita:1017918386002464909> | An error encountered: ${e}`)
  .setColor('#26f8ff')]})}) 
.on("finish", (queue) => queue.textChannel.send({embeds: [new MessageEmbed()
.setDescription(`<a:Sad_nobita:1017918386002464909> | Music Queue has ended`)
.setColor("#26f8ff")]}));