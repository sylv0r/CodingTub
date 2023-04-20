const { verifyToken } = require("../../methods/token");
require("dotenv").config()

module.exports = async (req, res) => {
  const token = req.headers.authorization
  if (token) {
    const isTokenValid = await verifyToken(token)
    if (isTokenValid) {
      res.status(200).json({
        message: "Vous êtes connecté"
      })
    } else {
      res.status(404).json({
        error: "Vous avez été déconnecté"
      })
    }
  } else {
    res.status(404).json({
      error: "Vous n'êtes pas connecté"
    })
  }
}