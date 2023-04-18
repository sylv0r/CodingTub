const { con } = require('../../db/connection')

module.exports = async (req, res) => {
    console.log(req.body)
    await con.query('INSERT INTO video-playlist(id_video,id_playlist) VALUES(?,?)', function (err, results) {
        if (err) throw err;
        res.send(results)
    })}
