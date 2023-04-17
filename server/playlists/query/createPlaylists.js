const { con } = require('../../db/connection')

module.exports = async (req, res) => {
    console.log(req.body)
    await con.query('INSERT INTO playlists(nom,id_user,number_of_videos) VALUES(?,?,0)', function (err, results) {
        if (err) throw err;
        res.send(results)
    })}
