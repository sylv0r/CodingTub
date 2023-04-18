const { con } = require("../../db/connection")
const { compare } = require("")

module.exports = async (req, res) => {
  const { user_id, formerPassword, newPassword, confirmPassword } = req.body
  if (user_id) {
    const user = await con.query2('SELECT password FROM users WHERE id = ?', [user_id]);
    if (user.length === 1) {
      
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