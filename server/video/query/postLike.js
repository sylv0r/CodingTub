const { con } = require('../../db/connection')





module.exports = async (req, res) => {
  const {video_id, user_id} = req.body
  console.log(req.body)
  const result = await con.query2('UPDATE videos SET likes = likes + 1 WHERE id =?', [video_id]);
  console.log(result)
  await con.query2('INSERT INTO `likes_verrif` (`video_id`, `user_id`) VALUES (?,?);',[ video_id, user_id ]);
  res.sendStatus(200)
  console.log(req.body)


} 

