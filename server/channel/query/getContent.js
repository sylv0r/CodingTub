const { con } = require('../../db/connection')

module.exports = async (req, res) => {
    const name = req.params.name;
    await con.query('SELECT * FROM `communaute` INNER JOIN channels ON communaute.id_channel = channels.id WHERE channels.name = ? ORDER BY `published_at` DESC', [name], function (err, results) {
        if (err) throw err;
        res.send(results)
    })
}