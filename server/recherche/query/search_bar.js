const { con } = require('../../db/connection')

module.exports = async (req, res) => {
  let videoTitles = []
  let userPseudos = []
  let liveTitles = []
  let channelNames = []

  con.query('SELECT title FROM videos;', function (err, results) {
    if (err) throw err;
    results.forEach(result => {
      videoTitles.push(result.title)
    })

    con.query('SELECT pseudo FROM users;', function (err, results) {
      if (err) throw err;
      results.forEach(result => {
        userPseudos.push(result.pseudo)
      })

      con.query('SELECT title FROM lives;', function (err, results) {
        if (err) throw err;
        results.forEach(result => {
          liveTitles.push(result.title)
        })

        con.query('SELECT name FROM channels;', function (err, results) {
          if (err) throw err;
          results.forEach(result => {
            channelNames.push(result.name)
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
          res.send(data)
        })
      })
    })
  })
}
