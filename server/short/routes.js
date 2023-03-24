const { Router } = require("express");
const cors = require("cors");
const addVideo = require('../short/query/addVideo')
const likeVideo = require('../short/query/likeVideo')


const router = Router()
router.use(cors());
router.post('/video', addVideo)
router.post('/like', likeVideo)

module.exports.routes = router