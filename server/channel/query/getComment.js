const { con } = require('../../db/connection')


    
module.exports = async (req, res) => {
  result = await con.query2('SELECT comment FROM comment Where id_video = ?',[req.params.id_video])
  console.log(result)
  res.json(result).status(200)
}