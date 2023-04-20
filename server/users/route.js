const { Router } = require("express");
const router = Router()

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
const createInscription = require('./query/createInscription')
const cors = require("cors");
const getUsers = require("./query/getUser");
const getChannel = require("./query/getChannel");
const getSubs = require("./query/getSubs");
const getUnsubs = require("./query/getUnsubs");

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
//router.post('/createChannel', createChannel)

router.use(cors());
router.post('/getUsers', getUsers)
router.post('/getChannel/:name', getChannel)
router.post('/createInscription', createInscription)
router.post('/getSubs', getSubs)
router.post('/getUnsubs', getUnsubs)

module.exports.routes = router