const { con } = require('../../db/connection')
const { getDecodedId } = require('../../methods/token')

module.exports = async (req, res) => {

    const token = req.headers.authorization
    const user = await getDecodedId(token)
    
    await con.query('SELECT id_channel FROM abonnements WHERE id_user = ?', [user], function (err, results) {
        if (err) throw err;
        res.send(results)
})}