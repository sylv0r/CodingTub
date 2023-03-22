const { Router } = require("express");
const addVideo = require('../short/query/addVideo')

const router = Router()

router.post('/shorts', addVideo)

module.exports.routes = router