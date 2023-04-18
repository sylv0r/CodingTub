const { con } = require('../../db/connection')

module.exports = async (req, res) => {
    console.log(req.body)
    console.log('Creating playlists')
    const { nom, id_user } = req.body
    await con.query2('INSERT INTO playlists(nom,id_user,number_of_videos) VALUES(?,?,?)', [nom, id_user, 0] , function (err, results) {
        if (err) throw err;
        res.send(results)
    })}
