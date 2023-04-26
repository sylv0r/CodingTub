const dbConnection = require('../../db/connection')

module.exports = async (req, res) => {
    const id = req.params.id;
    try {
      const results = await dbConnection.query('SELECT name, image_link FROM channels WHERE id = ?;', [id]);
      res.send(results);
    } catch (err) {
      console.error('Error executing query:', err.stack);
      res.status(500).send({ error: 'An error occurred while fetching data.' });
    }
  };