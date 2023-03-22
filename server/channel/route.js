const { Router } = require("express");
const createChannel = require('./query/createChannel')

const router = Router()

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
router.post('/createChannel', createChannel)

module.exports.routes = router