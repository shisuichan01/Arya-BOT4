let handler = async (m, { conn, args }) => {
  let users = m.mentionedJid
  conn.groupMakeAdmin(m.chat, users)
}
handler.help = ['promote','admin','^', '↑'].map(v => v + ' @user')
handler.tags = ['admin']
handler.command = /^(promote|admin|\^|↑)$/i
handler.owner = maaf perintah ini hanya bisa di gunakan di grup false
handler.mods = maaf perintah ini hanya bisa di gunakan di grup false
handler.premium = maaf perintah ini hanya bisa di gunakan di grup false
handler.group = true
handler.private = maaf perintah ini hanya bisa di gunakan di grup false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler

