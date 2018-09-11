const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");

exports.run = (client, message, args) => {

  if (args.length === 0)
  return message.reply("Lütfen Radyo URL Yazın!");

    const streamURL = args.slice(0, args.length).join(" ");

      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => {
            message.reply('Bağlandım! Çalıyorum..');
            connection.playArbitraryInput(`${streamURL}`);
          })
          .catch(console.log);
      } else {
        message.reply('Lüften Sesli Kanala Gir!');
      }
    };
