const { con } = require('../../db/connection.js');

module.exports = async (req, res) => {
    const result = await con.query2('SELECT * FROM channels WHERE channels.id = ?', [req.body.id])
    console.log('result', result);
    res.json(result).status(200)
}