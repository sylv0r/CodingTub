const { con } = require('../../db/connection')

module.exports = async (req, res) => {
const name = req.params.name;
<<<<<<< HEAD
=======

>>>>>>> origin/pre_main
await con.query('SELECT videos.*, channels.name, channels.image_link  FROM videos INNER JOIN channels ON videos.channel_id = channels.id WHERE channels.name = ? ORDER BY id DESC', [name], function (err, results) {
    if (err) throw err;
    res.send(results)
})}