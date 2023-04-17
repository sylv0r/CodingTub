const { Router } = require("express");
const createInscription = require('./query/createinscription')
const router = Router()

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
router.post('/createInscription', createInscription)
const cors = require("cors");
const getUsers = require("./query/getUser");
const getUserBis = require("./query/getUserBis");

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
//router.post('/createChannel', createChannel)

router.use(cors());
router.post('/getUsers', getUsers)
router.get('/getUserBis/:name', getUserBis)
router.post('/createInscription', createInscription)

module.exports.routes = router