const { con } = require('../../db/connection')
const path = require('path');
const fs = require('fs');

module.exports = async (req, res) => {
  const video = req.files.video[0];
  const miniature = req.files.miniature[0];
  const title = req.body.title;
  const description = req.body.description;
  const tags = req.body.tags;

  const videoExt = path.extname(video.originalname);
  const miniatureExt = path.extname(miniature.originalname);


  const videoPath = path.join(__dirname, '../uploads', `${title}${videoExt}`);
  const miniaturePath = path.join(__dirname, '../uploads', `miniature_${title}${miniatureExt}`);


  fs.writeFile(videoPath, video.buffer, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error uploading video');
    } else {
      console.log(`Video uploaded successfully: ${videoPath}`);
    }
  });

  fs.writeFile(miniaturePath, miniature.buffer, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error uploading video');
    } else {
      console.log(`Video uploaded successfully: ${miniaturePath}`);
    }


    con.query(`INSERT INTO videos (title, video_link, description, image_link, channel_id, published_at) VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP);`, [title, videoPath, description, miniaturePath, 1], (err, result, fields) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
        return;
      }
      res.json({ message: 'Video and miniature have been saved successfully' });
    });
  });
}
  

