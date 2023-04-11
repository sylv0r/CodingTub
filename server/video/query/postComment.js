const { con } = require('../../db/connection')





module.exports = async (req, res) => {
  console.log(req.body)
  const { comment, id_users, id_video} = req.body
  console.log(req.body.description)
  await con.query2('INSERT INTO comment (comment, id_user, id_video) VALUES (?,?,?)', [comment, id_users, id_video]);
  res.sendStatus(200)


}