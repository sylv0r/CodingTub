const { con } = require('../../db/connection');

module.exports = async (req, res) => {
  const { video_id, user_id } = req.body;
  const result = await con.query2('DELETE FROM likes_verrif WHERE video_id = ? AND user_id = ?', [video_id, user_id]);
  await con.query2('UPDATE videos SET likes = likes - 1 WHERE id =?', [video_id]);
  res.sendStatus(200);
};
