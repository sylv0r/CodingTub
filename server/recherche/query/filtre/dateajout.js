const { con } = require('../../../db/connection')

module.exports = async (req, res) => {
    let dateACS = []
    let dateDESC = []
    con.query('SELECT * FROM videos WHERE ? ORDER BY data ASC;', function (err, results) {
        if (err) throw err;
        results.forEach(result => {
            dateACS.push(result.title)
            console.log(dateACS)
        })

        con.query('SELECT * FROM videos WHERE ? ORDER BY date DESC;', function (err, results) {
            if (err) throw err;
            results.forEach(result => {
                dateDESC.push(result.pseudo)
                console.log(dateDESC)
            })

            let data = []
            for (let i = 0; i < videoTitles.length; i++) {
                data.push({
                    dateACS: dateACS[i],
                    dateDESC: dateDESC[i],
                })
            }
            res.json(data).status(200)
        })
    })
}
