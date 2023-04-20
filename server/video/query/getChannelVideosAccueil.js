const { con } = require('../../db/connection')

module.exports = async (req, res) => {
const name = req.params.name;

await con.query('SELECT videos.*, channels.name, channels.image_link  FROM videos INNER JOIN channels ON videos.channel_id = channels.id WHERE channels.name = ? ORDER BY vues DESC LIMIT 4', [name], function (err, results) {
    if (err) throw err;
    res.send(results)
})}