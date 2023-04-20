const { con } = require('../../db/connection')

module.exports = async (req, res) => {

    const { playlist_name, id_user, id_video } = req.body

    //console.log("trying addition")

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


                con.query('INSERT INTO video_playlist VALUES(?, ?)', [id_video, playlist_id], function (err, results) {
                    if (err) throw err
                    //console.log(allChannels)
                    res.send(results)
                }) 
    })}