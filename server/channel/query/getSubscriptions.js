const { con } = require('../../db/connection')

module.exports = async (req, res) => {
    const user = req.params.user
    await con.query('SELECT id_channel FROM abonnements WHERE id_user = ?', [user], function (err, results) {
        if (err) throw err;
        res.send(results)
    })
}