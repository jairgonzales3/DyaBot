let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[β] πΈπ½πΆππ΄ππ΄ ππ½ ππ΄πππΎ πΏπ°ππ° π²ππ΄π°π ππ½π° πΈπΌπ°πΆπ΄π½ π π°ππΈ πππ°π π»π° π΅ππ½π²πΈπΎπ½ π³π΄ π³π°π»π»-π΄*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎπ π³π΄ πΏπ΄ππΈπ²πΈπΎπ½π΄π*\n*β ${usedPrefix + command} gatitos llorando*\n*β ${usedPrefix + command} hatsune miku beso*`
try {
m.reply('*[β] π΄ππΏπ΄ππ΄ ππ½ πΌπΎπΌπ΄π½ππΎ π΄π½ π»πΎ πππ΄ πΌπ°π½π³πΎ π»πΎ πππ΄ πΌπ΄ πΏπΈπ³πΈπΎ*')
let tiores = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`)
await conn.sendFile(m.chat, tiores.data, null, null, m)
} catch {
throw `*[β] π΄πππΎπ, πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ*`
}}
handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'openai2']
export default handler
