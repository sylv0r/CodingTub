const { con } = require('../../db/connection')

module.exports = async (req, res) => {
console.log(req.body)
console.log(req.body.description)
await con.query('SELECT nom FROM video INNER JOIN channels ON video.channel_id = channels.id', function (err, results) {
    if (err) throw err;
    res.send(results)
})}