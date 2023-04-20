const { con } = require('../../db/connection.js');

module.exports = async (req, res) => {
    const userId = req.body.userId;
    const channelId = req.body.channelId;
    try {
        await con.query('INSERT INTO abonnements (id_channel, id_user) VALUES (?,?)', [channelId, userId]);
        res.status(200).json({ message: "Succès" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erreur interne du serveur" });
    }
};