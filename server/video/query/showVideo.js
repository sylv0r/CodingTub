const { con } = require('../../db/connection')


    
module.exports = async (req, res) => {
  result = await con.query2('SELECT videos.*, channels.* FROM videos INNER JOIN channels on videos.channel_id = channels.id WHERE videos.id = ?',[req.params.id])
  console.log(result)
  res.json(result).status(200)
}

// module.exports = async  (req, res) => {
//   console.log('avant')

//   let result
//   try {
//       result = await con.query2('SELECT * FROM videos')
//   }
//   catch (err) {
//       console.error(err)
//   }

//   console.log(result)
//   console.log('apres')
// }

