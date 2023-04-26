const { con } = require('../../db/connection')
const { getDecodedId } = require('../../methods/token')

module.exports = async (req, res) => {
    const token = req.headers.authorization
    const id_user = await getDecodedId(token)
    const { nom } = req.body
    await con.query2('INSERT INTO playlists(nom,id_user,number_of_videos) VALUES(?,?,?)', [nom, id_user, 0] , function (err, results) {
        if (err) throw err;
        res.send(results)
    })}
