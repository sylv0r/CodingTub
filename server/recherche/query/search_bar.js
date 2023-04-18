const { con } = require('../../db/connection')

module.exports = async (req, res) => {
  const query = `
    SELECT videos.video_link, videos.title, videos.id, videos.miniature, videos.channel_id, videos.vues, videos.published_at, users.pseudo, channels.name, channels.image_link
    FROM videos
    INNER JOIN channels ON videos.channel_id = channels.id
    INNER JOIN users ON channels.user_id = users.id
  `
  con.query(query, function (err, results) {
    if (err) {
      console.log(err)
      return res.status(500).json({ message: 'Internal server error' })
    }
    
    const data = results.map(result => ({
      videoLink: result.video_link,
      videoTitle: result.title,
      videoId: result.id,
      videoMiniature: result.miniature,
      videoChannelId: result.channel_id,
      videoViews: result.vues,
      videoPublishedAt: result.published_at,
      userPseudo: result.pseudo,
      channelName: result.name,
      channelImageLink: result.image_link
    }))
    
    res.json(data).status(200)
  })
}



/* const { con } = require('../../db/connection')

module.exports = async (req, res) => {
  let videoTitles = []
  let userPseudos = []
  let liveTitles = []
  let channelNames = []

  con.query('SELECT * FROM videos;', function (err, results) {
    if (err) throw err;
    results.forEach(result => {
      videoTitles.push(result)

    })

    con.query('SELECT pseudo FROM users;', function (err, results) {
      if (err) throw err;
      results.forEach(result => {
        userPseudos.push(result)
      })

      con.query('SELECT title FROM lives;', function (err, results) {
        if (err) throw err;
        results.forEach(result => {
          liveTitles.push(result)
        })

        con.query('SELECT * FROM channels;', function (err, results) {
          if (err) throw err;
          results.forEach(result => {
            channelNames.push(result)
          })

          let data = []
          for (let i = 0; i < videoTitles.length; i++) {
   
           data.push({
              videoTitle: videoTitles[i],
              userPseudo: userPseudos[i],
              liveTitle: liveTitles[i],
              channelName: channelNames[i]
            }) 
          }
          res.json(data).status(200)
        })
      })
    })
  })
}
 */