const { con } = require('../../db/connection')
const { getDecodedId } = require("../../methods/token")

module.exports = async (req, res) => {
  const token = req.headers.authorization
  const { lastname, firstname, pseudo } = req.body
  const user_id = await getDecodedId(token)
  if (user_id) {
    const user = await con.query2('SELECT id FROM users WHERE id = ?', [user_id]);
    if (user.length === 1) {
      if (lastname && firstname && pseudo) {
        if (lastname.length > 3 && lastname.length < 30 && firstname.length > 3 && firstname.length < 30 && pseudo.length > 3 && pseudo.length < 30) {
          try {
            await con.query2("UPDATE users SET prenom = ?, nom = ?, pseudo = ? WHERE id = ?", [firstname, lastname, pseudo, user_id])
            res.status(200).json({
              message: "Profil modifié avec succès"
            })
          } catch (e) {
            res.status(406).json({
              error: "Erreur, veuillez rééssayer plus tard"
            })
          }
        } else {
          res.status(406).json({
            error: "Veuillez remplir tous les champs correctement"
          })
        }
      } else {
        res.status(406).json({
          error: "Veuillez remplir tous les champs"
        })
      }
    } else {
      res.status(406).json({
        error: "Problème d'authentification, veuillez rééssayer plus tard"
      })
    }
  } else {
    res.status(406).json({
      error: "Veuillez vous connecter"
    })
  }    
}