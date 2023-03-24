const { Router } = require("express");
const createChannel = require('./query/createChannel');
const getName = require("./query/showNamePp");
const postCommunaute = require("./query/postCommunaute");
const router = Router()

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
router.post('/createChannel', createChannel)
router.get('/showNamePp/:id', getName)
router.post('/postCommunaute', postCommunaute)

module.exports.routes = router
