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
> invite / support / about / ping / prefix /
> uptime / tinvites / sug / roleuser / report

> <a:ky_14:909966706896691220> Music Commands
> play / skip / skipto / stop / volume / nowplaying /
> shuffle / search  / loop / lyrics / radio

> <a:ky_16:909970452489855086> Gif Commands
> boy / girl / couple / sad 
> / cartoon / anime / neon 

> <a:ky_6:909784482180112415>  /Moderation Commands
> ban / unban / setnick / roleadd / roleremove / 
> vkick / setprefix / clear / close / open / senddm


> <a:ky_20:909985257309208636> Game Commands
> kiss / slap /
> hug / slots

 > <a:ky_13:909955649180409886> Links
 > [Support](https://discord.gg/K8SSqweuSH)
 > [Invite](https://discord.com/api/oauth2/authorize?client_id=802995353209012234&permissions=8&scope=bot)
 > [Website](coming soon)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("<a:emoji_182:860935836240314378>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
