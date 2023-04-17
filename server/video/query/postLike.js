const { con } = require('../../db/connection')





module.exports = async (req, res) => {
  const {id} = req.body
  await con.query2('UPDATE videos SET likes = likes + 1 WHERE id =?', [id]);
  res.sendStatus(200)
  console.log(req.body)



}