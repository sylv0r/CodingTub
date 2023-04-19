const { con } = require('../../db/connection')

module.exports = async (req, res) => {
    console.log(req.body)
    const { playlist_name, id_user } = req.body
    console.log("Getting playlist id")
    await con.query2('SELECT id FROM playlists WHERE nom = ? AND id_user = ? ', [playlist_name, id_user] , function (err, results) {
        if (err) throw err;
        console.log(results)
        res.json(results[0].id).status(200);
    })}