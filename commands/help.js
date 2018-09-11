const config = require('../config.json');

exports.run = (client, message, args) => {

return message.reply(`\n${config.prefix}Help - Saten Bu Menüdesin\n${config.prefix}Play Radyo URL Gir\n${config.prefix}Leave - Kanaldan Çıkar.`)

}
