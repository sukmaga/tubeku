let fs = require('fs')
let { MessageType } = require('@adiwajshing/baileys')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return


/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

let regj = /(.jadibotak)/i
    let isJadibot = regj.exec(m.text)
    let jadbot = [
'🤖',
'🤖',
'🤖'
]
let jadibot = jadbot[Math.floor(Math.random() * jadbot.length)]
    if (isJadibot && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${jadibot}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `mau jadibot? Ketik .sewa ${jadibot}`, m)
    }, 1000)
    }
/*.   

*/


let menux= /(.menu)/i
    let isMenu1 = menux.exec(m.text)
    let memu = [
'❤️',
'🥰',
'😍'
]
   let menuw = memu[Math.floor(Math.random() * memu.length)]
    if (isMenu1 && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${menuw}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `
        
       ❂═══❖•ೋ•
╟ꂑ 𝐻𝑎𝑖, kak saya bot akan bantu anda

pagi atau siang saya tetap sama




‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
 「 𝐑𝐏𝐆-𝐀𝐁𝐒𝐄𝐍 」⬣
  ○ .daily (Ⓛ)
  ○ .gethadiah
  ○ .hadiah
  ○ .monthly (Ⓛ)
  ○ .weekly (Ⓛ)
  ⬣

 「 𝐑𝐏𝐆 」⬣
  ○ .adventure (Ⓛ)
  ○ .pull <jumlah> (Ⓛ)
  ○ .pullall (Ⓛ)
  ○ .atm <jumlah> (Ⓛ)
  ○ .atmall (Ⓛ)
  ○ .berkebon (Ⓛ)
  ○ .feed [pet type] (Ⓛ)
  ○ .open <crate> (Ⓛ)
  ○ .heal (Ⓛ)
  ○ .inv (Ⓛ)
  ○ .kolam (Ⓛ)
  ○ .leaderboard [jumlah user]
  ○ .membunuh *@tag* (Ⓛ)
  ○ .meracik [type] (Ⓛ)
  ○ .merampok *@tag* (Ⓛ)
  ○ .mulung (Ⓛ)
  ○ .nambang (Ⓛ)
  ○ .nebang (Ⓛ)
  ○ .ramuan [pet type] (Ⓛ)
  ○ .shop <sell|buy> <args> (Ⓛ)
  ○ .shopfish <sell|buy> <args> (Ⓛ)
  ○ .transfer (Ⓛ)
  ⬣

 「 𝐆𝐀𝐌𝐄 」⬣
  ○ .asahotak (Ⓛ)
  ○ .caklontong (Ⓛ)
  ○ .delttt (Ⓛ)
  ○ .dungeon [nama room]
  ○ .family100 (Ⓛ)
  ○ .fightcentaur (Ⓛ)
  ○ .fightgriffin (Ⓛ)
  ○ .fightkucing (Ⓛ)
  ○ .fightkyubi (Ⓛ)
  ○ .fightnaga (Ⓛ)
  ○ .fightphonix (Ⓛ)
  ○ .fighting (Ⓛ)
  ○ .hunter (Ⓛ)
  ○ .pancing <type> (Ⓛ)
  ○ .jackpot
  ○ .judi <jumlah> (Ⓛ)
  ○ .lengkapikalimat (Ⓛ)
  ○ .math <mode> (Ⓛ)
  ○ .siapakahaku (Ⓛ)
  ○ .suit (Ⓛ)
  ○ .suitpvp @tag (Ⓛ)
  ○ .susunkata (Ⓛ)
  ○ .tebakanime (Ⓛ)
  ○ .tebakbendera (Ⓛ)
  ○ .tebakgambar (Ⓛ)
  ○ .tebakgame (Ⓛ)
  ○ .tebakkata (Ⓛ)
  ○ .tebakkimia (Ⓛ)
  ○ .tebaklagu (Ⓛ)
  ○ .tebaklirik (Ⓛ)
  ○ .tekateki (Ⓛ)
  ○ .tictactoe [custom room name] (Ⓛ)
  ○ .ttt [custom room name] (Ⓛ)
  ⬣

 「 𝐄𝐗𝐏, 𝐋𝐈𝐌𝐈𝐓 」⬣
  ○ .buy <jumlah limit>
  ○ .buyall
  ○ .cupon [@user] (Ⓛ)
  ○ .dompet [@user]
  ○ .exp [@user]
  ○ .levelup
  ○ .limit [@user]
  ⬣

 「 𝐀𝐒𝐔𝐏𝐀𝐍 」⬣
  ○ .asupanj (Ⓛ)
  ○ .asupan (Ⓛ)
  ○ .asupansantuy (Ⓛ) (Ⓟ)
  ○ .bkp (Ⓛ) (Ⓟ)
  ○ .cecanindo (Ⓛ)
  ○ .cecanjapan (Ⓛ)
  ○ .cecanrandom (Ⓛ)
  ○ .cecansantuy (Ⓛ)
  ○ .cecanukhty (Ⓛ)
  ○ .cecanvietnam (Ⓛ)
  ○ .xnxxsearch <query> (Ⓛ)
  ○ .xnxxdl *link* (Ⓛ)
  ⬣

 「 𝐒𝐓𝐈𝐊𝐄𝐑 」⬣
  ○ .attp <teks> (Ⓛ)
  ○ .dadu
  ○ .emojimix (Ⓛ)
  ○ .semoji (Ⓛ)
  ○ .smeme (Ⓛ)
  ○ .stickercry (Ⓛ)
  ○ .stickerhug (Ⓛ)
  ○ .stickerkiss (Ⓛ)
  ○ .stiker (caption|reply media) (Ⓛ)
  ○ .stiker <url> (Ⓛ)
  ○ .stikergif (caption|reply media) (Ⓛ)
  ○ .stikergif <url> (Ⓛ)
  ○ .stikertelegram <url> (Ⓛ) (Ⓟ)
  ○ .triggered (Ⓛ)
  ○ .ttp <teks>
  ○ .wanted (Ⓛ)
  ○ .wm <packname>|<author> (Ⓛ)
  ⬣

 「 𝐌𝐀𝐈𝐍 」⬣
  ○ .afk [alasan] (Ⓛ)
  ○ .ceksn (Ⓛ)
  ○ .menu
  ○ .ref
  ○ .daftar <nama>.<umur>
  ○ .sewa
  ○ .unreg <SERIAL NUMBER>
  ⬣

 「 𝐊𝐄𝐑𝐀𝐍𝐆 𝐀𝐉𝐀𝐈𝐁 」⬣
  ○ .apakah <teks>? (Ⓛ)
  ○ .kapan <text>? (Ⓛ)
  ○ .kapankah <text>? (Ⓛ)
  ○ .siapa <teks> (Ⓛ)
  ○ .siapakah <teks> (Ⓛ)
  ⬣

 「 𝐐𝐔𝐎𝐓𝐄𝐒 」⬣
  ○ .quotesanime (Ⓛ)
  ○ .bucin (Ⓛ)
  ○ .kata <opsi> (Ⓛ)
  ○ .quotes (Ⓛ)
  ⬣

 「 𝐀𝐃𝐌𝐈𝐍 」⬣
  ○ .kick @user (Ⓛ)
  ⬣

 「 𝐆𝐑𝐔𝐏 」⬣
  ○ .group *open / close*
  ○ .add @user (Ⓛ)
  ○ .+ @user (Ⓛ)
  ○ .enable <option>
  ○ .disable <option>
  ○ .infogrup
  ○ .grouplist
  ○ .grouptime <open/close> <number>
  ○ .kick @user
  ○ .gc
  ○ .group
  ○ .link
  ○ .listadmin
  ○ .demote @user
  ○ .promote @user
  ○ .hidetag [teks] (Ⓛ)
  ○ .readviewonce
  ○ .revoke
  ○ .setppgroup
  ○ .setdeskgroup <text>
  ○ .tagall <pesan>
  ○ .tagme
  ⬣

 「 𝐈𝐍𝐓𝐄𝐑𝐍𝐄𝐓 」⬣
  ○ .anime <judul> (Ⓛ)
  ○ .blackpink (Ⓛ)
  ○ .brainly <soal> (Ⓛ)
  ○ .bts (Ⓛ)
  ○ .cecan (Ⓛ)
  ○ .cogan (Ⓛ)
  ○ .darkjokes
  ○ .exo (Ⓛ)
  ○ .get <url> (Ⓛ)
  ○ .gimage <search> (Ⓛ) (Ⓟ)
  ○ .githubstalk (Ⓛ)
  ○ .google <search> (Ⓛ)
  ○ .igstalk <username> (Ⓛ)
  ○ .kbbi <kata> (Ⓛ)
  ○ .loli (Ⓛ)
  ○ .lirik <teks> (Ⓛ)
  ○ .peta <wilayah> (Ⓛ)
  ○ .neko (Ⓛ)
  ○ .pinterest <text> (Ⓛ)
  ○ .playstore (Ⓛ)
  ○ .ppcouple (Ⓛ)
  ○ .puisi (Ⓛ)
  ○ .ssweb (Ⓛ)
  ○ .translate <lang> <teks> (Ⓛ)
  ○ .waifu (Ⓛ)
  ○ .wikipedia <text> (Ⓛ)
  ⬣

 「 𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒 𝐂𝐇𝐀𝐓 」⬣
  ○ .start,skip,stop,next
  ○ .sendkontak
  ⬣

 「 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 」⬣
  ○ .fb <url>
  ○ .ig <url> (Ⓛ)
  ○ .igstory <username> (Ⓛ)
  ○ .joox <judul> (Ⓛ)
  ○ .lirplay (Ⓛ)
  ○ .lirplay2 (Ⓛ)
  ○ .mediafire <url> (Ⓛ)
  ○ .play <search> (Ⓛ)
  ○ .play2 <search> (Ⓛ)
  ○ .sfile (Ⓛ)
  ○ .tiktok <url> (Ⓛ)
  ○ .twitter <url> (Ⓛ)
  ○ .xnxxdl *link* (Ⓛ)
  ○ .ytmp3 <url> [server: id4, en60, en61, en68] (Ⓛ)
  ○ .yta <url> [server: id4, en60, en61, en68] (Ⓛ)
  ○ .zippyshare <url> (Ⓛ) (Ⓟ)
  ⬣

 「 𝐁𝐄𝐑𝐈𝐓𝐀 」⬣
  ○ .cnnnews (Ⓛ)
  ○ .kompasnews (Ⓛ)
  ○ .liputan6 (Ⓛ)
  ○ .metronews (Ⓛ)
  ○ .tribunnews (Ⓛ)
  ⬣

 「 𝐓𝐎𝐎𝐋𝐒 」⬣
  ○ .calc <expression> (Ⓛ)
  ○ .carigrup <pencarian> (Ⓛ)
  ○ .del (Ⓛ)
  ○ .delete (Ⓛ)
  ○ .githubsearch <pencarian> (Ⓛ)
  ○ .kalkulator <soal> (Ⓛ)
  ○ .mycontact (Ⓛ)
  ○ .ocr (Ⓛ)
  ○ .totext (Ⓛ)
  ○ .profile [@user]
  ○ .qr <teks> (Ⓛ)
  ○ .qrcode <teks> (Ⓛ)
  ○ .readmore <teks>|<teks> (Ⓛ)
  ○ .q (Ⓛ)
  ○ .spamcall <nomor> (Ⓛ) (Ⓟ)
  ○ .tinyurl <link> (Ⓛ)
  ○ .totalfitur (Ⓛ)
  ○ .tourl (Ⓛ)
  ○ .tts <lang> <teks> (Ⓛ)
  ○ .upload (caption|reply media) (Ⓛ)
  ○ .yts <pencarian> (Ⓛ)
  ○ .ytsearch <pencarian> (Ⓛ)
  ⬣

 「 𝐅𝐔𝐍 」⬣
  ○ .alay (Ⓛ)
  ○ .artinama [name] (Ⓛ)
  ○ .alay (Ⓛ)
  ○ .dadu
  ○ .halah <teks> (Ⓛ)
  ○ .hilih <teks> (Ⓛ)
  ○ .huluh <teks> (Ⓛ)
  ○ .heleh <teks> (Ⓛ)
  ○ .holoh <teks> (Ⓛ)
  ○ .jadian (Ⓛ)
  ○ .meme
  ○ .namaninja <teks> (Ⓛ)
  ○ .rate (Ⓛ)
  ○ .reaction <reply> (Ⓛ)
  ○ .simi <teks>
  ○ .simsimi <teks>
  ○ .simih <teks>
  ○ .truth (Ⓛ)
  ⬣

 「 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄 」⬣
  ⬣

 「 𝐕𝐎𝐓𝐈𝐍𝐆 」⬣
  ○ .cekvote
  ○ .hapusvote
  ○ .mulaivote [alasan] (Ⓛ)
  ○ .upvote
  ○ .devote
  ⬣

 「 𝐀𝐁𝐒𝐄𝐍 」⬣
  ○ .absen
  ○ .cekabsen
  ○ .hapusabsen
  ○ .mulaiabsen [teks]
  ⬣

 「 𝐂𝐀𝐓𝐀𝐓𝐀𝐍 」⬣
  ○ .buatcatatan <title|isi>
  ○ .hapuscatatan title
  ○ .lihatcatatan <title>
  ⬣

 「 𝐉𝐀𝐃𝐈𝐀𝐍 」⬣
  ○ .cekpacar (Ⓛ)
  ○ .ikhlasin (Ⓛ)
  ○ .putus (Ⓛ)
  ○ .tembak *@tag* (Ⓛ)
  ○ .terima *@tag* (Ⓛ)
  ○ .tolak *@tag* (Ⓛ)
  ⬣

 「 𝐈𝐒𝐋𝐀𝐌𝐈 」⬣
  ○ .alquran <114> <1>
  ○ .asmaulhusna [nomor]
  ○ .hadis
  ○ .kisahnabi <name> (Ⓛ)
  ○ .jadwalsalat <kota> (Ⓛ)
  ⬣

 「 𝐎𝐖𝐍𝐄𝐑 」⬣
  ○ .addowner [@user]
  ○ .prem *@tag|days*
  ○ .banchat
  ○ .ban *@tag|days*
  ○ .block <@user>
  ○ .broadcast <teks>
  ○ .bc <teks>
  ○ .broadcastchats <teks>
  ○ .bcchats <teks>
  ○ .broadcastgroup <teks>
  ○ .bcgc <teks>
  ○ .tfcupon
  ○ .debounce
  ○ .delowner [@user]
  ○ .unprem
  ○ .enable <option>
  ○ .disable <option>
  ○ .expired <hari>
  ○ .getdatabase
  ○ .getplugin <teks>
  ○ .getsessi
  ○ .joins <chat.whatsapp.com> <day>
  ○ .demote @user
  ○ .promote @user
  ○ .resetlimit
  ○ .reset
  ○ .savefile <path>
  ○ .sf <path>
  ○ .setmenu <teks>
  ○ .setmenubefore <teks>
  ○ .setmenuheader <teks>
  ○ .setmenubody <teks>
  ○ .setmenufooter <teks>
  ○ .setmenuafter <teks>
  ○ .setppbot
  ○ .simulate <event> [@mention]
  ○ .otransfer
  ○ .unbanchat
  ○ .unban
  ○ .unblock <@user>
  ⬣

 「 𝗩𝗜𝗥𝗧𝗘𝗫 」⬣
  ○ .prank2  (Ⓟ)
  ○ .prank
  ○ .prank3
  ⬣

 「 𝐈𝐍𝐅𝐎 」⬣
  ○ .allprofile [@user] (Ⓛ)
  ○ .listbanned
  ○ .infocovid <country>
  ○ .owner
  ○ .creator
  ○ .infocuaca <city> (Ⓛ)
  ○ .database (Ⓛ)
  ○ .user (Ⓛ)
  ○ .donasi
  ○ .infogempa (Ⓛ)
  ○ .listpremium (Ⓛ)
  ○ .report <fitur> (Ⓛ)
  ○ .ping
  ○ .speed
  ○ .speedtest
  ⬣

 「 𝐀𝐔𝐃𝐈𝐎 」⬣
  ○ .tomp3
  ○ .tovn
  ○ .bass [vn] (Ⓛ)
  ○ .blown [vn] (Ⓛ)
  ○ .deep [vn] (Ⓛ)
  ○ .earrape [vn] (Ⓛ)
  ○ .fast [vn] (Ⓛ)
  ○ .fat [vn] (Ⓛ)
  ○ .nightcore [vn] (Ⓛ)
  ○ .reverse [vn] (Ⓛ)
  ○ .robot [vn] (Ⓛ)
  ○ .slow [vn] (Ⓛ)
  ○ .smooth [vn] (Ⓛ)
  ○ .tupai [vn] (Ⓛ)
  ○ .vibra [vn] (Ⓛ)
  ⬣

 「 𝐌𝐀𝐊𝐄𝐑 」⬣
  ○ .tahta <teks> (Ⓛ)
  ○ .lolice
  ○ .togif (reply)
  ○ .toimg (reply) (Ⓛ)
  ⬣
   
        ${menuw}`, m)
    }, 1000)
    }



/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

let regs = /(aku cinta kamu)/i
    let isCintaKamu = regs.exec(m.text)
    let cinmu = [
'❤️',
'🥰',
'😍'
]
let cintakamuh = cinmu[Math.floor(Math.random() * cinmu.length)]
    if (isCintaKamu && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${cintakamuh}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `Aku juga sayang kamu ${cintakamuh}`, m)
    }, 1000)
    }
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by arie - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    let regc = /(aku sayang kamu)/i
    let isSayangKamu = regc.exec(m.text)
    let saymu = [
'❤️',
'🥰',
'😍'
]
let sayangkamuh = saymu[Math.floor(Math.random() * saymu.length)]
    if (isSayangKamu && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${sayangkamuh}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `Aku juga sayang kamu ${sayangkamuh}`, m)
    }, 1000)
    }
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    let regl = /(I love you|love you)/i
    let isLoveYou = regl.exec(m.text)
    let lovou = [
'❤️',
'🥰',
'😍'
]
let loveyou = lovou[Math.floor(Math.random() * lovou.length)]
    if (isLoveYou && !m.fromMe) {
    let helloaine = fs.readFileSync('./mp3/PTT-20211218-WA0243.opus') 
    conn.sendMessage(m.chat, {
        react: {
          text: `${loveyou}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.sendFile(m.chat, helloaine, '', '', m, true)
    }, 1000)
    }
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by aine - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

let azm = /(Azmal)/i
    let isSayanKamu = azm.exec(m.text)
    let samu = [
'❤️',
'🥰',
'😍'
]
let sayagkamuh = samu[Math.floor(Math.random() * samu.length)]
    if (isSayanKamu && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${sayagkamuh}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `Kang milf ${sayagkamuh}`, m)
    }, 1000)
    }



/* 

*/
    
    let ass = /(assalamualaikum|assallamualaikum|assalamu\'alaikum|as\'salamualaikum)/i
    let isAss = ass.exec(m.text)
    let assal = [
'🥰',
'😇',
'😅'
]
let assl = assal[Math.floor(Math.random() * assal.length)]
    if (isAss && !m.fromMe) {
    let assalamualaikum = fs.readFileSync('./mp3/WhatsApp-Audio-2021-03-02-at-20.46.15.opus')
    conn.sendMessage(m.chat, {
        react: {
          text: `${assl}`,
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, assalamualaikum, '', '', m, true)
    }, 1000)
    }

/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by aine - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    
   /* let hiai = /(hi|hii|hiii|hi aine|hii aine|hiii aine|hy|halo|hallo|helo|hello|hy aine|halo aine|hallo aine|helo aine|hello aine)/i
    let isAih = hiai.exec(m.text)
    let hiain = [
'🥰',
'😇',
'😅'
]
let hiaine = hiain[Math.floor(Math.random() * hiain.length)]
    if (isAih && !m.fromMe) {
    let helloaine = fs.readFileSync('./mp3/WhatsApp-Ptt-2021-07-14-at-18.12.33.opus') 
    conn.sendMessage(m.chat, {
        react: {
          text: `${hiaine}`,
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, helloaine, '', '', m, true)
    }, 1000)
    }*/

}

handler.limit = true
module.exports = handler
