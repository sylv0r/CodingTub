const { con } = require('../../db/connection')

module.exports = async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const tags = req.body.tags;

    res.json(req.body);

    // Enregistrement de la vidéo et de la miniature sur le serveur
    //const videoPath = path.join(__dirname, `../client/src/video/ma_chaine`, title);
    //const miniaturePath = path.join(__dirname, `../client/src/video/ma_chaine`, `miniature_${title}`);


    /*con.query(`INSERT INTO videos (title, video_link, description, image_link, tags_id, channel_id, published_at) VALUES (?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP);`, [title, "videoPath", description, "miniaturePath", tags, 1], (err, result, fields) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
        return;
      }
      console.log(result);
      res.json({ message: 'Video and miniature have been saved successfully' });
    });*/
}