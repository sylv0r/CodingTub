const { con } = require('../../db/connection')

module.exports = async (req, res) => {
  console.log(req.body)
  const { id_user, content} = req.body
  console.log(req.body.description)
  await con.query2('SELECT hashtag VALUES (?,?, NOW())', [id_user, content]);
  res.sendStatus(200)
}