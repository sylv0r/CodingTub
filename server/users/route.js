const { Router } = require("express");
const createChannel = require('./query/createinscription')
const router = Router()

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
router.post('/createInscription', createInscription)

module.exports.routes = router