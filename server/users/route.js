const { Router } = require("express");
const getUsers = require("./query/getUsers");
const router = Router()

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
//router.post('/createChannel', createChannel)

router.get('/getUsers', getUsers)


module.exports.routes = router