const { con } = require('../../db/connection')

module.exports = async (req, res) => {
  console.log(req.body)
  const { nom, prenom, pseudo, email, password} = req.body
  console.log(req.body)
  const result = await con.query2('INSERT INTO users (nom, prenom, pseudo, email, password) VALUES (?,?,?,?,?)', [nom, prenom, pseudo, email, password]);
  console.log(result)
  res.sendStatus(200)
}