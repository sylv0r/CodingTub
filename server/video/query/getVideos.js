const { con } = require('../../db/connection')

module.exports = async (req, res) => {
await con.query('SELECT videos.*, channels.name, channels.image_link FROM videos INNER JOIN channels ON videos.channel_id = channels.id ORDER BY id DESC', function (err, results) {
    if (err) throw err;
    res.send(results)
})}