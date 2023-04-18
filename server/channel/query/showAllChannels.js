const { con } = require('../../db/connection')

module.exports = async (req, res) => {
    const channel_user_id = req.params.channel_user_id;
    await con.query2('SELECT * FROM channels INNER JOIN users ON channels.user_id = users.id WHERE channels.user_id = ?;', [channel_user_id], function(err, results) {
        if (err) throw err
        res.send(results)
    })
}