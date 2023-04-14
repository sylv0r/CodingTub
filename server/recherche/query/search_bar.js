const { con } = require('../../db/connection')

module.exports = async (req, res) => {
await con.query('SELECT videos.title, users.pseudo, lives.title, channels.name FROM videos CROSS JOIN users CROSS JOIN channels CROSS JOIN lives;', function (err, results) {
    if (err) throw err;
    res.send(results)
})}