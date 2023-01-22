const { MessageEmbed } = require("discord.js")
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var roleAD = ayarlar.roleAD;
var img = ayarlar.img;

module.exports = {
    name: 'supernuker',
    description: 'NUKER SPAM SMS !',
    type: 'CHAT_INPUT',
    cooldown: 0,
    options: [
    {
      name: "phone",
      description: "NUKER SPAM SMS",
      required: true,
      type: "STRING",
    },
  ],

  run: async (client, interaction) => {

    if (!interaction.member.roles.cache.has(roleAD))
      return interaction.reply({
        embeds: [
          new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Chỉ có <@&${roleAD}> mới được dùng lệnh này \n Liên Hệ Nguyễn Xuân Trường#1111 Để Mua Nhé !`)
            .setFooter({ text: "© Developer: Trần Kha#7857" })
            .setTimestamp(),
        ],
      });   

    const phone = interaction.options.getString("phone")

    var exec = require('child_process').exec
      exec(`py sms.py ${phone} 500`, (error, stdout, stderr) => {
    });

    console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
        .setImage("https://media.giphy.com/media/H7BE9OpEfqjoq2rcBl/giphy.gif")
        .addFields(
          {
            name: "`𝗦𝗣𝗔𝗠 𝗣𝗛𝗢𝗡𝗘 𝗗𝗢𝗡𝗘𝗘`",
            value: ` ***[ ${interaction.user.username} ]*** `,
            inline: true,
          },
          {
            name: "`💥 𝑃ℎ𝑜𝑛𝑒 𝑁𝑢𝑘𝑒𝑟:`",
            value: ` ***[ ${phone} ]*** `,
            inline: true,
          },
          {
            name:  "      `💀 𝑃𝑙𝑎𝑛:`",
            value: ` ***[ 𝙎𝙪𝙥𝙚𝙧 𝙉𝙪𝙠𝙚𝙧 𝑆𝑚𝑆 ]*** `,
            inline: true,
          })
          .setFooter('© Developer: Trần Kha#7857', img)
          .setTimestamp();
            const countdownEmbed = new MessageEmbed()
              .setColor('RANDOM')
              .setTitle(version)
              .setDescription("WAIT LOAD CHECK PHONE NUKER...")
              .setImage("https://media4.giphy.com/media/Y5wlazC8lSVuU/giphy.gif")
              .setFooter('© Developer: Nguyễn Xuân Trường#1111', img)
              .setTimestamp()
            interaction.reply({ embeds: [countdownEmbed] }).then((message) => {
                setTimeout(function () {
                  interaction.editReply({ embeds: [embed] });
                }, 1)
              })
      }
  }