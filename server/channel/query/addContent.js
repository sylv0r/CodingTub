const { con } = require('../../db/connection')

module.exports = async (req, res) => {
  const { id_channel, content} = req.body
  await con.query2('INSERT INTO communaute (id_channel, content, published_at) VALUES (?,?, NOW())', [id_channel, content]);
  res.sendStatus(200)
}