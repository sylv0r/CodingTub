const { con } = require('../../db/connection.js');

module.exports = async (req, res) => {
    const result = await con.query2('SELECT * FROM users WHERE users.email = ? AND users.password = ?', [req.body.email, req.body.password])
    console.log('result', result);
    res.json(result).status(200)
}