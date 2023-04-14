const { con } = require('../../db/connection')



module.exports = async (req, res) => {
    await fetch(`http://localhost:3001/channels/getSubscriptions`, {method: "GET", headers: { "Content-Type": "application/json"}})
            .then(response => {
                return response.json()
            })
            .then((json) => {
                var allChannels = []
                for (let i = 0; i < Object.keys(json).length; i++) {
                    allChannels.push(json[i]['id_channel'])
                }
                console.log(req.body)
                console.log(req.body.description)
                console.log(allChannels)

                con.query('SELECT videos.*, channels.name, channels.image_link FROM videos INNER JOIN channels ON videos.channel_id = channels.id WHERE videos.channel_id IN (?) ORDER BY videos.id DESC', [allChannels], function (err, results) {
                    if (err) throw err
                    //console.log(allChannels)
                    res.send(results)
                }) 
})}