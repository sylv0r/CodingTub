const { Router } = require("express");
const createInscription = require('./query/createInscription')
const router = Router()

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
router.post('/createInscription', createInscription)
const cors = require("cors");
const getUsers = require("./query/getUser");
const getUserBis = require("./query/getUserBis");
const getUserId = require("./query/getUserId");

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
//router.post('/createChannel', createChannel)

router.use(cors());
router.post('/getUsers', getUsers)
router.post('/getUserBis', getUserBis)
router.post('/createInscription', createInscription)
router.post('/getUserId', getUserId)

module.exports.routes = router