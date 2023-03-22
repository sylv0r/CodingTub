/*import con from '../../db/connection'

app.get("/videos/getVideos", (req, res) => {
    //res.sendStatus(200)
    con.query('SELECT * FROM videos INNER JOIN channels ON videos.channel_id = channels.id', function (err, results) {
      if (err) throw err;
      //console.log("results")
      res.send(results)
      console.log(results)
      
    });
  })*/


const { con } = require('../../db/connection')

module.exports = async (req, res) => {
console.log(req.body)
//const { name, description, image_link, user_id } = req.body
console.log(req.body.description)
//await con.query2('INSERT INTO channels (name, description, image_link, user_id) VALUES (?,?,?,?)', [name, description, image_link, user_id]);
//res.sendStatus(200)
await con.query('SELECT * FROM videos INNER JOIN channels ON videos.channel_id = channels.id', function (err, results) {
    if (err) throw err;
    //console.log("results")
    res.send(results)
})}