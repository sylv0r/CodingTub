const { con } = require('../../db/connection')
const { getDecodedId } = require('../../methods/token')

module.exports = async (req, res) => {

    const { playlist_name } = req.body
    const token = req.headers.authorization
    const id_user = await getDecodedId(token)
    
    await fetch(`http://localhost:3001/playlists/getPlaylistsVideos`, {
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
        var video_list = []
        for (let i = 0; i < Object.keys(json).length; i++) {
            video_list.push(json[i]['id'])
        }

        if(video_list.length != 0) {
            con.query('SELECT videos.*, channels.name, channels.image_link FROM videos INNER JOIN channels ON videos.channel_id = channels.id WHERE videos.id IN (?)', [video_list], function (err, results) {
                if (err) throw err
                res.send(results)
            })
        }

         })}
