const { con } = require('../../db/connection')
const { getDecodedId } = require('../../methods/token')

module.exports = async (req, res) => {

    const { playlist_name, id_video } = req.body
    const token = req.headers.authorization
    const id_user = await getDecodedId(token)

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
                let playlist_id = json


                con.query('INSERT INTO video_playlist VALUES(?, ?)', [id_video, playlist_id], function (err, results) {
                    if (err) throw err
                    res.send(results)
                }) 
    })}