const { con } = require("../../db/connection")
const { compare } = require("bcrypt")

module.exports = async (req, res) => {
  const { user_id, formerPassword, newPassword, confirmPassword } = req.body
  if (user_id) {
    const user = await con.query2('SELECT password FROM users WHERE id = ?', [user_id]);
    if (user.length === 1) {
      if (formerPassword && newPassword && confirmPassword) {
        const isGoodPassword = await compare(formerPassword, user[0].password)
        if (isGoodPassword) {
          res.sendStatus(200)
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