const dbConnection = require('../../db/connection');


module.exports = (req, res) => {
    const videoId = req.params.id;
    const userId = req.query.user_id;
  
    const query = `
      SELECT * FROM comments_short
      WHERE video_id = ?
      ORDER BY created_at DESC
    `;
  
  
    dbConnection.query(query, [videoId], (err, result) => {
      if (err) {
        console.error('Error fetching comments:', err);
        return res.status(500).json({ message: 'Erreur lors de la récupération des commentaires de la base de données.', error: err.message });
      }
  
      res.json(result);
    });
  };