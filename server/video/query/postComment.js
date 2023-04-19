const { con } = require('../../db/connection')





module.exports = async (req, res) => {
  const { comment, id_users, id_video} = req.body
  await con.query2('INSERT INTO comment (comment, id_user, id_video) VALUES (?,?,?)', [comment, id_users, id_video]);
  res.sendStatus(200)


}