const { Router } = require("express");
const cors = require("cors");
const getUsers = require("./query/getUser");
const router = Router()

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
//router.post('/createChannel', createChannel)

router.use(cors());
router.post('/getUsers', getUsers)


module.exports.routes = router