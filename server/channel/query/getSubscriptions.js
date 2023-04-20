const { con } = require('../../db/connection')

module.exports = async (req, res) => {
console.log(req.body)
console.log(req.body.description)
const user = req.params.user
console.log('before getting subscriptions')
await con.query('SELECT id_channel FROM abonnements WHERE id_user = ?', [user], function (err, results) {
    console.log('results of subs ' + results)
    if (err) throw err;
    res.send(results)
})}