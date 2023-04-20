const { con } = require('../../db/connection')

module.exports = async (req, res) => {

    const { playlist_name, id_user } = req.body

    //console.log(playlist_name)
    //console.log(id_user)
    
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
        //console.log(json)
        //console.log("body " + req.body)
        var video_list = []
        for (let i = 0; i < Object.keys(json).length; i++) {
            video_list.push(json[i]['id'])
        }

        //console.log(video_list)
        
        //console.log(req.body.description)

        con.query('SELECT videos.*, channels.name, channels.image_link FROM videos INNER JOIN channels ON videos.channel_id = channels.id WHERE videos.id IN (?)', [video_list], function (err, results) {
            if (err) throw err
            res.send(results)
        });
    })}
