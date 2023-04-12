const { con } = require('../../db/connection.js');

module.exports = async (req, res) => {
    const result = await con.query2('SELECT * FROM users WHERE users.id = ?', [req.body.id])
    console.log('result', result);
    res.json(result).status(200)
}