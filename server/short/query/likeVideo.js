const dbConnection = require('../../db/connection');

module.exports = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'ID manquant dans la requête.' });
  }

  const query = 'UPDATE shorts SET `like` = `like` + 1 WHERE id = ?';

  dbConnection.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error updating likes in the database:', err);
      return res.status(500).json({ message: 'Erreur lors de la mise à jour des likes dans la base de données.' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'ID introuvable dans la base de données.' });
    }

    res.status(200).json({ message: 'Like ajouté avec succès.' });
  });
};
