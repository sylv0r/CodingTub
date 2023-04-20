const { con } = require('../../db/connection');
const { getDecodedId } = require("../../methods/token")

module.exports = async (req, res) => {
    const { id_video, playlist_name } = req.body;
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
        console.log(req.body)
        console.log(req.body.description)
        let id_playlist = json

        con.query('DELETE FROM video_playlist WHERE id_video = ? AND id_playlist = ?', [id_video, id_playlist], function (err, results) {
            if (err) {
                console.error(err);
                res.status(500).send('erreur sup.');
            } else {
                res.send(results);
            }
        }) })

};