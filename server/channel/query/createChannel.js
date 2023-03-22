const { con } = require('../../db/connection')

module.exports = async (req, res) => {
  console.log(req.body)
  const { name, description, image_link, user_id } = req.body
  console.log(req.body.description)
  try {
    await con.query2('INSERT INTO channels (name, description, image_link, user_id) VALUES (?,?,?,?)', [name, description, image_link, user_id]);
    res.json({
      messsage: "Chaîne créée avec succès"
    }).status(201)
  }
  catch(e) {
    res.json({
      error: e
    }).status(403)
  }
 

  res.sendStatus(200)
}