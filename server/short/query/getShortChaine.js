const { con } = require('../../db/connection')

module.exports = async (req, res) => {
    const channel_id = req.params.channel_id;
    await con.query2('SELECT * FROM shorts WHERE channel_id = ? ;', [channel_id], function(err, results) {
        if (err) throw err
        res.send(results)
    })
}