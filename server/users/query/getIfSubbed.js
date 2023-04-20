const { con } = require('../../db/connection.js');

module.exports = async (req, res) => {
    const userId = req.body.localId;
    const channelId = req.body.localChannelId;

    console.log(userId)
    console.log(channelId)

    try {
        const result = await con.query2('SELECT * FROM abonnements WHERE id_channel = ? AND id_user = ?', [channelId, userId]);
        console.log("result: ", result)
        res.json(result).status(200)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erreur interne du serveur" });
    }
}