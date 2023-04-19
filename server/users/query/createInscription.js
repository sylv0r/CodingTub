const { con } = require('../../db/connection');
const bcrypt = require('bcrypt');
const { sign } = require("jsonwebtoken")
require('dotenv').config()

module.exports = async (req, res) => {
  const { nom, prenom, pseudo, email, password } = req.body;

  // Vérifier si l'utilisateur existe déjà
  const verif = await con.query2('SELECT * FROM users WHERE users.email = ?', [email]);

  if (verif.length > 0) {
    return res.status(400).json({ message: 'Cet email est déjà utilisé' });
  }

  // Hasher le mot de passe avec bcrypt
  const salt = bcrypt.genSaltSync(10); // "10" représente le nombre de "salt rounds"
  const hashedPassword = bcrypt.hashSync(password, salt);


  // Insérer les données dans la base de données
  const result = await con.query2('INSERT INTO users (nom, prenom, pseudo, email, password, hashedUserId) VALUES (?,?,?,?,?,?)', [nom, prenom, pseudo, email, hashedPassword, 'NULL']);

  const userId = result.insertId;

  const hashedUserId = bcrypt.hashSync(userId.toString(), salt);

  await con.query2('UPDATE users SET hashedUserId = ? WHERE id = ?', [hashedUserId, userId]);
  const token = sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" })

  // Répondre à la requête
  res.status(200).json({ token }); 
}
