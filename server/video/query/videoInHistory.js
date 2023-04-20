const { con } = require('../../db/connection')

module.exports = async (req, res) => {
console.log(req.body)
const { user, video } = req.body
console.log(req.body.description)
await con.query('SELECT * FROM historique WHERE id_user = ? AND id_video = ?',[user, video], function (err, results) {
    if (err) throw err;
    res.send(results)
})}