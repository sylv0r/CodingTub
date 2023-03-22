const dbConnection = require('../../db/connection');

module.exports = (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: 'Texte manquant dans la requête.' });
  }

  const query = 'INSERT INTO shorts (user) VALUES (1)';

  dbConnection.query(query, [text], (err, result) => {
    if (err) {
      console.error('Error inserting text into database:', err);
      return res.status(500).json({ message: 'Erreur lors de l\'ajout du texte à la base de données.' });
    }
    res.status(201).json({ message: 'Texte ajouté avec succès à la base de données.' });
  });
};
