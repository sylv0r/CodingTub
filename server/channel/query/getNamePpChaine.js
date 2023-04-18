const { con } = require('../../db/connection')

module.exports = async (req, res) => {
    const name = req.params.name;
    await con.query2('SELECT name, image_link FROM channels WHERE name = ?;', [name], function(err, results) {
        if (err) throw err
        res.send(results)
    })
}