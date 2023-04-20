const { con } = require('../../db/connection')

module.exports = async (req, res) => {

    const { id_user, playlist_name } = req.body

    //const id_user = req.params.user
    //const playlist_name = req.params.playlist_name
    
    await fetch(`http://localhost:3001/playlists/getPlaylistId`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            playlist_name : playlist_name,
            id_user : id_user,
        })
    })
    .then(response => {
        return response.json()
    })
    .then((json) => {
        //console.log(req.body)
        //console.log(req.body.description)
        let playlist_id = json

        con.query('SELECT videos.id, video_playlist.* FROM videos INNER JOIN video_playlist ON videos.id=video_playlist.id_video WHERE video_playlist.id_playlist=?', [playlist_id], function (err, results) {
            if (err) throw err
            //console.log(results)
            res.send(results)
        }) })}
