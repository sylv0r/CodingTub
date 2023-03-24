const dbConnection = require("../../db/connection");

module.exports = (req, res) => {
  const { description, url } = req.body;

  if (!description || !url) {
    console.log(req.body);
    return res
      .status(400)
      .json({ message: "Description ou URL manquants dans la requête." });
  }

  const query =
    "INSERT INTO shorts (description, shorturl, channel_id) VALUES (?, ?, ?)";

  dbConnection.query(query, [description, url, 1], (err, result) => {
    if (err) {
      console.error("Error inserting text into database:", err);
      return res
        .status(500)
        .json({ message: "Erreur lors de l'ajout du texte à la base de données." });
    }
    res
      .status(201)
      .json({ message: "Texte ajouté avec succès à la base de données." });
  });
};
