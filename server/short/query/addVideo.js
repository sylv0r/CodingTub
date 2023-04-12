const dbConnection = require('../../db/connection');

module.exports = (req, res) => {
    const { text } = req.body;
  
    if (!text) {
      console.log(req.body);
      return res.status(400).json({ message: 'Texte manquant dans la requête.' });
    }
  
    const query = 'INSERT INTO shorts (description,`like`, `deslike`, shorturl, channel_id) VALUES (?, ?, ?, ?, ?)';
  
    dbConnection.query(query, [text, 1, 1, text, 1], (err, result) => {
      if (err) {
        console.error('Error inserting text into database:', err);
        return res.status(500).json({ message: 'Erreur lors de l\'ajout du texte à la base de données.' });
      }
      res.status(201).json({ message: 'Texte ajouté avec succès à la base de données.' });
    });
  };
  
