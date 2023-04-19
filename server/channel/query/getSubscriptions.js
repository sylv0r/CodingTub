const { con } = require('../../db/connection')

module.exports = async (req, res) => {
await con.query('SELECT id_channel FROM abonnements WHERE id_user = ?', 1, function (err, results) {
    if (err) throw err;
    res.send(results)
})}