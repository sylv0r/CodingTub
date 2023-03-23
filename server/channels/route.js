const { Router } = require("express");
const getSubscriptions = require('./query/getSubscriptions')

const router = Router()

//lance la fonction getSubscriptions lorsqu'un get est effecté à /videos/getVideos
router.get('/getSubscriptions', getSubscriptions)

module.exports.routes = router