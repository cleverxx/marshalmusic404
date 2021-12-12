const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(` `)
    .setTitle(`**Random Help**`)
    .setDescription(`
> <a:ky_5:909784261488443392>  User  Commands
> <a:ky_3:909571489982971955>invite support about ping prefix /
> <a:ky_3:909571489982971955>uptime  tinvites sug roleuser report /

> <a:ky_14:909966706896691220> Music Commands
> <a:ky_3:909571489982971955>play skip skipto stop volume nowplaying /
> <a:ky_3:909571489982971955>shuffle search loop lyrics radio /

> <a:ky_16:909970452489855086> Gif Commands
> <a:ky_3:909571489982971955>boy girl couple sad /
> <a:ky_3:909571489982971955>cartoon anime neon /

> <a:ky_6:909784482180112415>  /Moderation Commands
> <a:ky_3:909571489982971955>ban unban setnick roleadd roleremove /
> <a:ky_3:909571489982971955>vkick  setprefix clear close open senddm /


> <a:ky_20:909985257309208636> Game Commands
> <a:ky_3:909571489982971955>kiss slap /
> <a:ky_3:909571489982971955>hug slots /

 > <a:ky_13:909955649180409886> Links
 > <a:ky_21:909989753083027496>[Support](https://discord.gg/yQjpd2uRzd)
 > <a:ky_21:909989753083027496>[Invite](https://discord.com/api/oauth2/authorize?client_id=919665380270673921&permissions=8&scope=bot)
 > <a:ky_21:909989753083027496>[Website](coming soon)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("<a:emoji_182:860935836240314378>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
