const { con } = require('../../../db/connection')


module.exports = async (req, res) => {

    const filtre = await con.query("SELECT * FROM video ORDER BY " + { filter });

    if (DateSup => onclick) {
        filter = "published_at ASC";
    }
    else if (Dateinf => onclick) {
        filter = "published_at DESC";
    }
    else if (lessview => onclick) {
        filter = "vues DESC";
    }
    else if (moreview => onclick) {
        filter = "vues ASC";
    }
    else if (lesslike => onclick) {
        filter = "likes DESC";
    }
    else if (morelike => onclick) {
        filter = "likes ASC";
    }
    res.json(filtre);
    
}

