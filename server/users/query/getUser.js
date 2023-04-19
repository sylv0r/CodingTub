const { con } = require('../../db/connection.js');

module.exports = async (req, res) => {
    const result = await con.query2('SELECT id FROM users WHERE users.email = ? AND users.password = ?', [req.body.email, req.body.password])
    res.json(result).status(200)
}