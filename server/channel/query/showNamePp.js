const { con } = require('../../db/connection')

module.exports = async (req, res) => {
    const id = req.params.id;
    resultat = await con.query2('SELECT name, imgae_link FROM channels WHERE id = ?;', [id])
    console.log(resultat)
    res.json(resultat).status(200)
}