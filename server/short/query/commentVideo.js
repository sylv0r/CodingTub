const dbConnection = require('../../db/connection');




  
module.exports = (req, res) => {
    const userId = req.body.user_id;
    const videoId = req.params.id;
    const commentText = req.body.comment;
  
    const checkQuery = `
      SELECT COUNT(*) as count FROM comments_short
      WHERE video_id = ? AND user_id = ?
    `;
  
    console.log('Executing checkQuery:', checkQuery, 'with videoId:', videoId, 'and userId:', userId);
  
    dbConnection.query(checkQuery, [videoId, userId], (checkErr, checkResult) => {
      console.log('checkQuery result:', checkResult);
      if (checkErr) {
        console.error('Error checking comment count:', checkErr);
        return res.status(500).json({ message: 'Erreur lors de la vérification du nombre de commentaires.', error: checkErr.message });
      }
  
      const commentCount = checkResult[0].count;
      if (commentCount >= 5) {
        return res.status(400).json({ message: 'Vous avez atteint le nombre maximum de commentaires pour cette vidéo.' });
      }
  
      const insertQuery = `
            INSERT INTO comments_short (user_id, video_id, comment, created_at)
            VALUES (?, ?, ?, NOW());
            `;
  
      console.log('Executing insertQuery:', insertQuery, 'with userId:', userId, 'videoId:', videoId, 'and commentText:', commentText);
  
      dbConnection.query(insertQuery, [userId, videoId, commentText], (insertErr, insertResult) => {
        console.log('insertQuery result:', insertResult);
        if (insertErr) {
          console.error('Error inserting comment:', insertErr);
          return res.status(500).json({ message: 'Erreur lors de l\'insertion du commentaire dans la base de données.', error: insertErr.message });
        }
  
        res.json({ message: 'Commentaire ajouté avec succès.' });
      });
    });
  };
  