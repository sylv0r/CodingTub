const { Router } = require("express");
const getUsers = require("./query/getUser");
const router = Router()

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
//router.post('/createChannel', createChannel)

router.post('/getUsers', getUsers)


module.exports.routes = router