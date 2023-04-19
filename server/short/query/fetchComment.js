const dbConnection = require('../../db/connection');


module.exports = (req, res) => {
    const videoId = req.params.id;
    const userId = req.query.user_id;
    console.log("fetch com" + userId);
  
    const query = `
      SELECT * FROM comments_short
      WHERE video_id = ?
      ORDER BY created_at DESC
    `;
  
    console.log('Executing fetchComments query:', query, 'with videoId:', videoId);
  
    dbConnection.query(query, [videoId], (err, result) => {
      console.log('fetchComments query result:', result);
      if (err) {
        console.error('Error fetching comments:', err);
        return res.status(500).json({ message: 'Erreur lors de la récupération des commentaires de la base de données.', error: err.message });
      }
  
      res.json(result);
    });
  };