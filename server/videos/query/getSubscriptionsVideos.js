const { con } = require('../../db/connection')

module.exports = async (req, res) => {
console.log(req.body)
console.log(req.body.description)

con.query('SELECT * FROM videos INNER JOIN channels ON videos.channel_id = channels.id WHERE channels.id = ?', [/* channel_id */], function (err, results) {
    if (err) throw err;
    res.send(results)
})}