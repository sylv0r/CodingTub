const { Router } = require("express");
const addVideo = require('../short/query/addVideo')
const likeVideo = require('../short/query/likeVideo')


const router = Router()

router.post('/video', addVideo)
router.post('/like', likeVideo)

module.exports.routes = router