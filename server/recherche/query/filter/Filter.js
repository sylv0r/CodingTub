const { con } = require('../../db/connection')

module.exports = async (req, res) => {

    if (filteredDat && pluslike == 1) {
        const likemore = await con.query2('SELECT * FROM videos ORDER BY likes DESC;')
        res.json(likemore);
    }
    else if (filteredDat && moinslike == 1) {
        const likeless = await con.query2('SELECT * FROM videos ORDER BY likes ASC;')
        res.json(likeless);
    }
    else if (filteredDat && plusvues == 1) {
        const viewmore = await con.query2('SELECT * FROM videos ORDER BY views DESC;')
        res.json(viewmore);
    }
    else if (filteredDat && moinsvues == 1) {
        const viewless = await con.query2('SELECT * FROM videos ORDER BY views ASC;')
        res.json(viewless);
    } else {
        console.log(err)
    }

}