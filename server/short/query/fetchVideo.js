const dbConnection = require('../../db/connection');

module.exports = (req, res) => {
  const query = `
    SELECT * FROM shorts
    ORDER BY created_at DESC
  `;


  dbConnection.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching videos:', err);
      return res.status(500).json({ message: 'Erreur lors de la récupération des vidéos de la base de données.', error: err.message });
    }

    res.json(result);
  });
};
