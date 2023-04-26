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
