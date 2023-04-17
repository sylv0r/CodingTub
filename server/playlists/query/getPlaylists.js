const { con } = require('../../db/connection')

module.exports = async (req, res) => {
    console.log(req.body)
    await con.query('SELECT * FROM playlists', function (err, results) {
        if (err) throw err;
        res.send(results)
    })}
