const { con } = require('../../db/connection')

module.exports = async (req, res) => {
    const { playlist_name, id_user } = req.body
    await con.query2('SELECT id FROM playlists WHERE nom = ? AND id_user = ? ', [playlist_name, id_user] , function (err, results) {
        if (err) throw err;
        res.json(results[0].id).status(200);
    })}