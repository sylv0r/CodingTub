const { con } = require('../../db/connection.js');
const { getDecodedId } = require("../../methods/token")

module.exports = async (req, res) => {
    const token = req.headers.authorization
    const user_id = await getDecodedId(token)
    if (user_id) {
        con.query('SELECT * FROM channels WHERE channels.user_id = ?', [user_id], function (err, results) {
        if (err)
            throw err;
        res.send(results);
    })} else {
       res.send("Ratio poulet")
    }
}

