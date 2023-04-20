const { con } = require('../../db/connection')

//let user = localStorage.getItem('user_id')

module.exports = async (req, res) => {
console.log(req.body)
console.log(req.body.description)
const user = req.params.user;

await con.query('SELECT historique.*, videos.*, channels.name, channels.image_link FROM videos INNER JOIN channels ON videos.channel_id = channels.id INNER JOIN historique ON videos.id = historique.id_video WHERE historique.id_user = ? ORDER BY historique.date DESC',[user], function (err, results) {
    if (err) throw err;
    res.send(results)
})}