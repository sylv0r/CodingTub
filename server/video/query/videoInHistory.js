const { con } = require('../../db/connection')
const { getDecodedId } = require('../../methods/token')

module.exports = async (req, res) => {
    const token = req.headers.authorization
    const user = await getDecodedId(token)
    const { video } = req.body
    await con.query('SELECT * FROM historique WHERE id_user = ? AND id_video = ?',[user, video], function (err, results) {
        if (err) throw err;
        res.send(results)
})}