const { Router } = require("express");
const getVideos = require('./query/getVideos')
const getSubscriptionsVideos = require('./query/getSubscriptionsVideos')

const router = Router()

//lance la fonction getVideos lorsqu'un get est effecté à /videos/getVideos
router.get('/getVideos', getVideos)  // --> chercher toutes les videos
router.get('/getSubscriptionsVideos', getSubscriptionsVideos)

module.exports.routes = router