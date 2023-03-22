const { Router } = require("express");
const newSearch = require('./query/search')

const router = Router()

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
router.post('/newSearch', newSearch)

module.exports.routes = router