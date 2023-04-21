const { con } = require('../../db/connection')
const { getDecodedId } = require('../../methods/token')

module.exports = async (req, res) => {
    const token = req.headers.authorization
    const user = await getDecodedId(token)

await con.query('SELECT historique.*, videos.*, channels.name, channels.image_link FROM videos INNER JOIN channels ON videos.channel_id = channels.id INNER JOIN historique ON videos.id = historique.id_video WHERE historique.id_user = ? ORDER BY historique.date DESC',[user], function (err, results) {
    if (err) throw err;
    res.send(results)
})}