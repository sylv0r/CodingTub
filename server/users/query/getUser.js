const { con } = require('../../db/connection.js');

module.exports = async (req, res) => {
    result = await con.query2('SELECT * FROM users where email = ?', [req.body.email])
    console.log('result', result);
    res.json(result).status(200)
}