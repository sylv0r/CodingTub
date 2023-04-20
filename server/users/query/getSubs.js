const { con } = require('../../db/connection.js');

module.exports = async (req, res) => {
    const subs = await con.query('INSERT INTO abonnements (id_channel, id_user) VALUES (?,?)', [req.body.number_channel, req.body.number_user])
    res.json(subs).status(200)

    const delet = await con.query('DELETE FROM abonnements WHERE id_channel = ? AND id_user = ?' [req.body.number_channel, req.body.number_user])
    res.json(delet).status(200)
}