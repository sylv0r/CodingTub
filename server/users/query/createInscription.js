const { con } = require('../../db/connection');

module.exports = async (req, res) => {
  console.log(req.body)
  const { nom, prenom, pseudo, email, password } = req.body;

  // Hasher le mot de passe avec bcrypt
  //const hashedPassword = await bcrypt.hash(password, 10); // "10" représente le nombre de "salt rounds"

  console.log(req.body)

  // Insérer les données dans la base de données
  await con.query2('INSERT INTO users (nom, prenom, pseudo, email, password) VALUES (?,?,?,?,?)', [nom, prenom, pseudo, email, password]);

  // Répondre à la requête
  res.status(201).json({ message: 'Utilisateur créé avec succès.' });
}
