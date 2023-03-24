const { con } = require('../../db/connection')

module.exports = async (req, res) => {
  console.log(req.body)
  const { nom, prenom, pseudo, password, cpassword, user_id } = req.body
  console.log(req.body.description)
  await con.query2('INSERT INTO users (nom, prenom, pseudo, password, cpassword, user_id) VALUES (?,?,?,?)', [nom, prenom, pseudo, password, cpassword, user_id]);
  res.sendStatus(200)
}