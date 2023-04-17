const { con } = require('../../db/connection')

module.exports = async (req, res) => {
  console.log(req.body)
  const { id_video, hashtag} = req.body
  console.log(req.body.description)
  //await con.query2("SELECT tag_name FROM hashtag", [id_video, hashtag]);
  res.sendStatus(200)
}