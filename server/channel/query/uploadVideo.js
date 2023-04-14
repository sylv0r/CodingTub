const { con } = require('../../db/connection')
const path = require('path');
const fs = require('fs');
const axios = require('axios')
require('dotenv').config()

module.exports = async (req, res) => {
  try {
    const video = req.files.video[0];
    const miniature = req.files.miniature[0];
    const title = req.body.title;
    const description = req.body.description;
    const tags = req.body.tags;

    const videoPath = path.join(__dirname, '../uploads', video.originalname);
    const miniaturePath = path.join(__dirname, '../uploads', miniature.originalname);

    const fileStreamMinia = fs.createReadStream(miniaturePath);
    const fileStreamVideo = fs.createReadStream(videoPath);

    const urlVideo = `${process.env.NGROK_PATH}/videos/`+ video.originalname;
    const urlMiniature = `${process.env.NGROK_PATH}/miniatures/` + miniature.originalname;

    await axios.put(urlVideo, fileStreamVideo, {
      headers: {
        'Content-Type': video.mimetype,
      },
    });

    fs.unlink(videoPath, async (err) => {
      if (err) {
        res.status(500).json({ message: 'Error uploading video', err });
      } else {
        await axios.put(urlMiniature, fileStreamMinia, {
          headers: {
            'Content-Type': miniature.mimetype,
          },
        });

        fs.unlink(miniaturePath, (err) => {
          if (err) {
            res.status(500).json({ message: 'Error uploading miniature', err });
          } else {
            con.query(`INSERT INTO videos (title, video_link, description, miniature, channel_id, published_at) VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP);`, [title, `videos/${video.originalname}`, description,`miniatures/${miniature.originalname}`, 1], (err, result, fields) => {
            if (err) {
              console.error(err);
              res.status(500).send(err);
              return;
            }
            res.json({ message: 'Video and miniature have been saved successfully' });
          });
          }
        });
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading', error });
  }
}
  

