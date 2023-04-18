const { con } = require('../../db/connection')

module.exports = async (req, res) => {
    
    await con.query('SELECT video.*, playlists.nom FROM videos INNER JOIN video_playlist ON videos.id = video_playlist.id_video INNER JOIN video_playlist ON playlists.id=video_playlist.id_playlist ', function (err, results) {
        if (err) throw err;
        res.send(results)
        console.log(req.body)
    })}
