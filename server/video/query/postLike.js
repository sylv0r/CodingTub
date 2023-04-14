const { con } = require('../../db/connection')





module.exports = async (req, res) => {
  console.log(req.body)
  const {id} = req.body
  console.log(req.body.description)
  await con.query2('UPDATE videos SET likes = likes + 1 WHERE id =?', [id]);
  res.sendStatus(200)


}