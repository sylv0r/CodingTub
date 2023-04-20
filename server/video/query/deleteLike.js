const { con } = require('../../db/connection');
const { getDecodedId } = require("../../methods/token")


module.exports = async (req, res) => {
  const token = req.headers.authorization
  const user_id = await getDecodedId(token)
  const {video_id} = req.body
  if (user_id) {
    const result = await con.query2('DELETE FROM likes_verrif WHERE video_id = ? AND user_id = ?', [video_id, user_id]);
    await con.query2('UPDATE videos SET likes = likes - 1 WHERE id =?', [video_id]);
  res.sendStatus(200);
} else {
    res.sendStatus(401)
}
};
