const { con } = require('../../db/connection')

module.exports = async (req, res) => {
    const id_channel = req.params.id_channel;
    await con.query2('SELECT COUNT(*) FROM abonnements WHERE id_channel = ?;', [id_channel], function(err, results) {
        if (err) throw err
        res.send(results)
    })
}