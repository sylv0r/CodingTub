const { con } = require('../../db/connection')

module.exports = async (req, res) => {
    const id = req.params.id;
    await con.query2('SELECT name, image_link FROM channels WHERE id = ?;', [id], function(err, results) {
        if (err) throw err
        res.send(results)
    })

    
}