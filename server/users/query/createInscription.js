const { con } = require('../../db/connection');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
  console.log(req.body)
  const { nom, prenom, pseudo, email, password } = req.body;

  // Hasher le mot de passe avec bcrypt
  
  const salt = bcrypt.genSaltSync(10); // "10" représente le nombre de "salt rounds"
  const hashedPassword = bcrypt.hashSync(password, salt);

  console.log(req.body)

  // Insérer les données dans la base de données
  const result = await con.query2('INSERT INTO users (nom, prenom, pseudo, email, password) VALUES (?,?,?,?,?)', [nom, prenom, pseudo, email, hashedPassword]);

  const userId = result.insertId;

  console.log('userId', userId);

  // Répondre à la requête
  res.status(200).json({ userId });
}
