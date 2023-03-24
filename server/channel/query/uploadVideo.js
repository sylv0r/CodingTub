const { con } = require('../../db/connection')
const path = require('path');
const fs = require('fs');


module.exports = async (req, res) => {
  const video = req.files.video;
  const miniature = req.files.miniature;
  const title = req.body.title;
  const description = req.body.description;
  const tags = req.body.tags;





  //Enregistrement de la vidéo et de la miniature sur le serveur
  const videoPath = path.join(__dirname, `../../channel/uploads/${title}.mp4`);
  const miniaturePath = path.join(__dirname, `../../channel/uploads/miniature_${title}.jpg`);

  fs.writeFile(videoPath, video, (err) => {
    if (err) throw err;
    console.log(`The video file has been saved to ${videoPath}`);
  });

  fs.writeFile(miniaturePath, miniature, (err) => {
    if (err) throw err;
    console.log(`The miniature file has been saved to ${miniaturePath}`);
  });


    /*con.query(`INSERT INTO videos (title, video_link, description, image_link, channel_id, published_at) VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP);`, [title, videoPath, description, miniaturePath, 1], (err, result, fields) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
        return;
      }
      console.log(result);
      res.json({ message: 'Video and miniature have been saved successfully' });
    });*/
  }