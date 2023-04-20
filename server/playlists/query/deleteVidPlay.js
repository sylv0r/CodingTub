const { con } = require('../../db/connection')

module.exports = async (req, res) => {
    console.log(req.body)
    await con.query(' DELETE FROM video_playlist WHERE id_video = ? AND id_playlist = ?', function (err, results) {
        if (err) throw err;
        res.send(results)
    })}
