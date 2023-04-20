const { con } = require('../../db/connection.js');

module.exports = async (req, res) => {
    const userId = req.body.localId;
    const channelId = req.body.channelId;
    try {
        await con.query('DELETE FROM abonnements WHERE id_channel = ? AND id_user = ?', [channelId, userId])
        res.status(200).json({ message: "Succès" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erreur interne du serveur" });
    }
};