const { con } = require('../../db/connection.js');
const { getDecodedId } = require("../../methods/token")

module.exports = async (req, res) => {
    const token = req.headers.authorization
    const user_id = await getDecodedId(token)
    if (user_id) {
        con.query('SELECT * FROM channels WHERE channels.user_id = ? LIMIT 1', [user_id], function (err, results) {
        if (err)
            throw err;
        res.status(200).json({results});
    })} else {
        res.status(401).json({
            error: "jwt not good"
        })
    }
}

