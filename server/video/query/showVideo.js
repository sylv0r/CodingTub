const { con } = require('../../db/connection')


    
module.exports = async (req, res) => {
  result = await con.query2('SELECT videos.*, channels.* FROM videos INNER JOIN channels on videos.channel_id = channels.id WHERE videos.id = ?',[req.params.id])
  res.json(result).status(200)
}

