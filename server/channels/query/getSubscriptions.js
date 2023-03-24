const { con } = require('../../db/connection')

module.exports = async (req, res) => {
console.log(req.body)
console.log(req.body.description)
await con.query('SELECT id_channel FROM abonnements WHERE id_user = ?', 1, function (err, results) {
    if (err) throw err;
    res.send(results)
})}