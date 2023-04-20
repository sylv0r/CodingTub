const dbConnection = require('../../db/connection');

module.exports = (req, res) => {
  const videoId = req.params.id;
  console.log("like bb"+ videoId);

  console.log("fetch likes for videoId:", videoId);

  const query = `
  SELECT \`like\` FROM shorts
  WHERE id = ?
  ORDER BY created_at DESC
`;

  dbConnection.query(query, [videoId], (err, result) => {
    console.log('fetchLikes query result:', result);
    if (err) {
      console.error('Error fetching likes:', err);
      return res.status(500).json({ message: 'Erreur lors de la récupération des likes de la base de données.', error: err.message });
    }

    res.json(result);
  });
};
