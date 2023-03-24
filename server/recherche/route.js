const { Router } = require("express");
//const createChannel = require('./query/createChannel')
const newSearch = require('./query/search');

const router = Router()

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
//router.post('/createChannel', createChannel)
router.post('/search', newSearch)

module.exports.routes = router