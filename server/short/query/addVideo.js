const { con } = require("../../db/connection");

const path = require('path');
const fs = require('fs');
const axios = require('axios');
require('dotenv').config();

module.exports = async (req, res) => {
  try {
    const video = req.file;
    const description = req.body.description;
    const videoPath = path.join(__dirname, '../uploads', video.filename);

    const fileStreamVideo = fs.createReadStream(videoPath);

    const urlVideo = `${process.env.NGROK_PATH}shorts/` + video.filename;
    console.log("log")
    console.log(urlVideo)

    await axios.put(urlVideo, fileStreamVideo, {
      headers: {
        'Content-Type': video.mimetype,
      },
    });

    fs.unlink(videoPath, async (err) => {
      if (err) {
        res.status(500).json({ message: 'Error uploading video', err });
      } else {
        const query =
          "INSERT INTO shorts (description, shorturl, channel_id, `like`) VALUES (?, ?, ?, ?)";

        con.query(query, [description, urlVideo, 1, 0], (err, result) => {
          if (err) {
            console.error("Error inserting video into database:", err);
            return res.status(500).json({ message: "Erreur lors de l'ajout de la vidéo à la base de données." });
          }
          res.status(201).json({ message: "Vidéo ajoutée avec succès à la base de données." });
        });
      }
    });

  } catch (error) {
    res.status(500).json({ message: 'Error uploading video', error });
  }
};
