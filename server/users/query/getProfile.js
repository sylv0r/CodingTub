const { con } = require("../../db/connection")
const { getDecodedId } = require("../../methods/token")

module.exports = async (req, res) => {
  const token = req.headers.authorization
  const user_id = await getDecodedId(token)
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