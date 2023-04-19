const { con } = require('../../db/connection.js');

module.exports = async (req, res) => {
    const name = req.params.name;
    con.query('SELECT * FROM channels WHERE channels.name = ?', [name], function (err, results) {
        if (err)
            throw err;
        res.send(results);
    })
}