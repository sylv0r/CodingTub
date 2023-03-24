const { Router } = require("express");
const createChannel = require('./query/createChannel')
const uploadVideo = require('./query/uploadVideo')


const router = Router()

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
router.post('/createChannel', createChannel)
router.post('/uploadVideo', uploadVideo)


module.exports.routes = router