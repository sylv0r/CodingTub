const { Router } = require("express");
const getVideos = require('./query/getVideos')

const router = Router()

//lance la fonction getVideos lorsqu'un get est effecté à /videos/getVideos
router.get('/getVideos', getVideos)

module.exports.routes = router