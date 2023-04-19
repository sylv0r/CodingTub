const { con } = require('../../db/connection.js');

module.exports = async (req, res) => {
  const { channelId, userId } = req.body;
  try {
    if (req.path === "/api/subscribe") {
      await con.query('INSERT INTO abonnements (id_channel, id_user) VALUES (?,?)', [channelId, userId])
      res.status(200).json({ message: "Succès" });
    } else if (req.path === "/api/unsubscribe") {
      await con.query('DELETE FROM abonnements WHERE id_channel = ? AND id_user = ?', [channelId, userId])
      res.status(200).json({ message: "Succès" });
    } else {
      res.status(404).json({ message: "Requête invalide" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
};
