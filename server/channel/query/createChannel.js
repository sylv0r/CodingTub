const { con } = require('../../db/connection')
const { channelAlreadyExist } = require('../methods/channelAlreadyExist')
const path = require("path")

module.exports = async (req, res) => {
  const { name, description, image_link, user_id } = req.body
  try {
    if (name.length >= 4 && description.length >= 10) {
      const alreadyExist = await channelAlreadyExist(name)
      // const extension = path.extname(image_link)
      // if (!extension || (extension == ".jpeg" || extension == ".jpg" || extension == ".png")) {
        if (!alreadyExist[0]) {
          await con.query2('INSERT INTO channels (name, description, image_link, user_id) VALUES (?,?,?,?)', [name, description, image_link, user_id]);
          res.status(201).json({
            message: "Chaîne créée avec succès"
          })
        } else {
          res.status(406).json({
            error: "Ce nom de chaîne existe déjà"
          })
        }
      // } else {
      //   res.status(406).json({
      //     error: "Votre miniature doit avoir une extension valide"
      //   })
      // }  
    } else {
      res.status(406).json({
        error: "Veuillez remplir les champs correctement"
      })
    }
  }
  catch(e) {
    res.status(403).json({
      error: e
    })
  }
}