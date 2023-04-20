const { con } = require('../../db/connection')

module.exports = async (req, res) => {
const { id } = req.body

await con.query('UPDATE videos SET vues = vues + 1 WHERE id=?', [id], function (err, results) {
    if (err) throw err;
    res.send(results)
})}