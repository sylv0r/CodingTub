const { Router } = require("express");
const createInscription = require('./query/createinscription')
const router = Router()

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
router.post('/createInscription', createInscription)
const cors = require("cors");
const getUsers = require("./query/getUser");
const getUserBis = require("./query/getUserBis");
const modifyProfile = require('./query/modifyProfile')
const getProfile = require('./query/getProfile')

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
//router.post('/createChannel', createChannel)

router.use(cors());
router.get("/getProfile/:user_id", getProfile)
router.post('/getUsers', getUsers)
router.post('/getUserBis', getUserBis)
router.post('/createInscription', createInscription)
router.put('/modifyProfile', modifyProfile)

module.exports.routes = router