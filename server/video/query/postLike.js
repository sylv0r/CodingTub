const { con } = require('../../db/connection')
const { getDecodedId } = require("../../methods/token")





module.exports = async (req, res) => {
<<<<<<< HEAD
  const {id} = req.body
  await con.query2('UPDATE videos SET likes = likes + 1 WHERE id =?', [id]);
  res.sendStatus(200)
=======
  const token = req.headers.authorization
  const user_id = await getDecodedId(token)
  const {video_id} = req.body
  if (user_id) {
    const result = await con.query2('UPDATE videos SET likes = likes + 1 WHERE id =?', [video_id]);
    await con.query2('INSERT INTO `likes_verrif` (`video_id`, `user_id`) VALUES (?,?);',[ video_id, user_id ]);
    res.sendStatus(200)
} else {
  res.sendStatus(401)
}
} 
>>>>>>> origin/pre_main

