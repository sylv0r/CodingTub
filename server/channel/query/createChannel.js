const { con } = require('../../db/connection')
const { channelAlreadyExist } = require('../methods/channelAlreadyExist')
const path = require("path")
const fs = require('fs');
const axios = require('axios')
require('dotenv').config()

module.exports = async (req, res) => {
  const { name, description, user_id } = req.body
  const image = req.file
  try {
    if (user_id) {
      const user = await con.query2('SELECT id FROM users WHERE id = ?', [user_id]);
      if (user.length > 0) {
        const canCreateChannel = await con.query2("SELECT id FROM channels WHERE user_id = ?",[user_id])
        if (canCreateChannel.length < 5) {
          if (name && description && name.length >= 4 && name.length <= 30 && description.length >= 10 && description.length <= 254) {
            if (image && (image.mimetype == "image/jpeg" || image.mimetype == "image/jpg" || image.mimetype == "image/png")) {
              const imageAlreadyExist = await con.query2("SELECT id FROM channels WHERE image_link = ?",[`channel_pictures/${image.filename}`]) 
              if (imageAlreadyExist.length === 0) {
                const alreadyExist = await channelAlreadyExist(name)
                if (!alreadyExist[0]) {
                  const imagePath = path.join(__dirname, '../uploads', req.file.filename);
                  const fileStream = fs.createReadStream(imagePath);
                  const url = `${process.env.NGROK_PATH}channel_pictures/` + req.file.filename;

                  await axios.put(url, fileStream, {
                    headers: {
                      'Content-Type': req.file.mimetype,
                    },
                  });

                  fs.unlink(imagePath, () => {
                    console.log("Image deleted successfully")
                  });
                
                  await con.query2('INSERT INTO channels (name, description, image_link, user_id) VALUES (?,?,?,?)', [name, description, `channel_pictures/${image.filename}`, user_id]);
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
                  error: "Ce nom d'image est déjà pris"
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
        } else {
          res.status(406).json({
              error: "Vous ne pouvez plus créer de chaînes avec ce compte"
            })
        }  
      } else {
        res.status(406).json({
          error: "Cet utilisateur n'existe pas"
        })
      }  
    } else {
      res.status(401).json({
        error: "Vous n'êtes pas connecté pour créer une chaîne"
      })
    }
  }
  catch(e) {
    res.status(403).json({
      error: e
    })
  }
}