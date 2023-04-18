const { con } = require("../../db/connection")

module.exports = async (req, res) => {
  const { user_id } = req.params
  if (user_id) {
    try {
      const user = await con.query2("SELECT * FROM users WHERE id = ?", [user_id])
      res.status(200).json({
        user
      })
    } catch (e) {
      res.status(406).json({
        error: e
      })
    }
  } else {
    res.status(406).json({
      error: "Veuillez renseigner un utilisateur"
    })
  }
}