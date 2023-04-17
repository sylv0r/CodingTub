const { con } = require('../../db/connection')

module.exports = async (req, res) => {
  await con.query2("SELECT tag_name FROM hashtag");
}