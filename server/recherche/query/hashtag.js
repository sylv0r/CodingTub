const { con } = require('../../db/connection')

module.exports = async (req, res) => {
  const tags = await con.query2('SELECT nom FROM tags');
  res.json(tags)
}