const { con } = require('../../db/connection')

module.exports.channelAlreadyExist = async (name) => {
  const query = await new Promise((resolve) => {
    const result = con.query2("SELECT id FROM channels WHERE name = ?",[name])
    resolve(result)
  })
  return query
}