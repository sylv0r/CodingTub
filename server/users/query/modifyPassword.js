const { con } = require("../../db/connection")
const { compare } = require("bcrypt")
const { getDecodedId } = require("../../methods/token")
const bcrypt = require("bcrypt")

module.exports = async (req, res) => {
  const token  = req.headers.authorization
  const { formerPassword, newPassword, confirmPassword } = req.body
  const user_id = await getDecodedId(token)
  if (user_id) {
    const user = await con.query2('SELECT password FROM users WHERE id = ?', [user_id]);
    if (user.length === 1) {
      if (formerPassword && newPassword && confirmPassword) {
        const isGoodPassword = await compare(formerPassword, user[0].password)
        if (isGoodPassword) {
          if (newPassword === confirmPassword) {
            if (newPassword.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/)) {
              const salt = bcrypt.genSaltSync(10);
              const hashedPassword = bcrypt.hashSync(newPassword, salt);
              await con.query2("UPDATE users SET password = ? WHERE id = ?", [hashedPassword, user_id])
              res.status(200).json({
                message: "Mot de passe modifié avec succès"
              })
            } else {
              res.status(406).json({
                error: "Mot de passe invalide"
              })
            }
          } else {
            res.status(406).json({
              error: "Mot de passe non-confirmé"
            })
          }
        } else {
          res.status(406).json({
            error: "Mot de passe incorrect"
          })
        }
      } else {
        res.status(406).json({
          error: "Paramètres manquants"
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