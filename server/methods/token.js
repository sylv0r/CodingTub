const jwt = require("jsonwebtoken")
require("dotenv").config()

exports.getDecodedId = async (token) => {
  const response = await new Promise((resolve) => {
    try {
      const payload = jwt.decode(token, process.env.JWT_SECRET)
      if (payload.userId) {
        resolve(payload.userId)
      } else {
        resolve(null)
      }
    } catch (e) {
      resolve(null)
    }
  })

  return response
}

exports.verifyToken = async (token) => {
  const response = await new Promise((resolve) => {
    try {
      jwt.verify(token, process.env.JWT_SECRET)
      resolve(true)
    } catch (e) {
      console.log(e)
      resolve(false)
    }
  })

  return response
}