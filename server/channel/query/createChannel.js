const { con } = require('../../db/connection')
const { channelAlreadyExist } = require('../methods/channelAlreadyExist')
const path = require("path")
const fs = require('fs');
const axios = require('axios')
require('dotenv').config()

module.exports = async (req, res) => {
  console.log(req.body)
  const { name, description, user_id } = req.body
  const image = req.file
  try {
    if (name && description && name.length >= 4 && description.length >= 10) {
      const alreadyExist = await channelAlreadyExist(name)
      if (image && (image.mimetype == "image/jpeg" || image.mimetype == "image/jpg" || image.mimetype == "image/png")) {
        if (!alreadyExist[0]) {
          const imagePath = path.join(__dirname, '../uploads', req.file.filename);
          const fileStream = fs.createReadStream(imagePath);
          const url = `${process.env.NGROK_PATH}/miniatures/` + req.file.filename;

          await axios.put(url, fileStream, {
            headers: {
              'Content-Type': req.file.mimetype,
            },
          });

          fs.unlink(imagePath, () => {});
        
          await con.query2('INSERT INTO channels (name, description, image_link, user_id) VALUES (?,?,?,?)', [name, description, `miniatures/${image.filename}`, user_id]);
          res.status(201).json({
            message: "Chaîne créée avec succès"
          })
        } else {
          res.status(406).json({
            error: "Ce nom de chaîne existe déjà"
          })
        }
      } else {
        res.status(406).json({
          error: "Votre miniature doit avoir une extension valide"
        })
      }  
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