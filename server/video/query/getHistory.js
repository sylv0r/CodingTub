const { con } = require('../../db/connection')
const { getDecodedId } = require('../../methods/token')

//let user = localStorage.getItem('user_id')

module.exports = async (req, res) => {
    const token = req.headers.authorization
    const user = await getDecodedId(token)
    console.log("getHistory")
console.log(req.body)
console.log(req.body.description)

await con.query('SELECT historique.*, videos.*, channels.name, channels.image_link FROM videos INNER JOIN channels ON videos.channel_id = channels.id INNER JOIN historique ON videos.id = historique.id_video WHERE historique.id_user = ? ORDER BY historique.date DESC',[user], function (err, results) {
    if (err) throw err;
    res.send(results)
})}