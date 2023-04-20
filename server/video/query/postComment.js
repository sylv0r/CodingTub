const { con } = require('../../db/connection')
const { getDecodedId } = require("../../methods/token")




module.exports = async (req, res) => {
<<<<<<< HEAD
  const { comment, id_users, id_video} = req.body
  await con.query2('INSERT INTO comment (comment, id_user, id_video) VALUES (?,?,?)', [comment, id_users, id_video]);
  res.sendStatus(200)
=======
  const token = req.headers.authorization
  const { comment, id_video} = req.body
  const user_id = await getDecodedId(token)
  if (user_id) {
    await con.query2('INSERT INTO comment (comment, id_user, id_video) VALUES (?,?,?)', [comment, user_id, id_video]);
    res.sendStatus(200)
  
  } else {
    res.sendStatus(401)
  }
>>>>>>> origin/pre_main


}

/* module.exports = async (req, res) => {
  const token = req.headers.authorization
  const { name, description } = req.body
  const image = req.file
  const user_id = await getDecodedId(token)
  try {
    if (user_id) {
      const user = await con.query2('SELECT id FROM users WHERE id = ?', [user_id]);
      if (user.length > 0) {
        const canCreateChannel = await con.query2("SELECT id FROM channels WHERE user_id = ?",[user_id]) */