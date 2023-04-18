const dbConnection = require('../../db/connection');

module.exports = (req, res) => {
  const { id } = req.params;
  const { user_id } = req.body;

  if (!id || !user_id) {
    return res.status(400).json({ message: 'ID manquant dans la requête on est la .' });
  }

  const checkIfLiked = 'SELECT * FROM user_likes WHERE user_id = ? AND video_id = ?';

  dbConnection.query(checkIfLiked, [user_id, id], (err, result) => {
    if (err) {
      console.error('Error checking likes in the database:', err);
      return res.status(500).json({ message: 'Erreur lors de la vérification des likes dans la base de données.' });
    }

    if (result.length > 0) {
      return res.status(400).json({ message: 'Vous avez déjà liké cette vidéo.' });
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

      const insertLike = 'INSERT INTO user_likes (user_id, video_id) VALUES (?, ?)';
      dbConnection.query(insertLike, [user_id, id], (err, result) => {
        if (err) {
          console.error('Error inserting like into the database:', err);
          return res.status(500).json({ message: 'Erreur lors de l\'insertion du like dans la base de données.' });
        }

        res.status(200).json({ message: 'Like ajouté avec succès.' });
      });
    });
  });
};
