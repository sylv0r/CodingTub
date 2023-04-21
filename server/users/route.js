const { Router } = require("express");
const createInscription = require('./query/createInscription')
const router = Router()

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
const cors = require("cors");
const getUsers = require("./query/getUser");
const getChannel = require("./query/getChannel");
const getSubs = require("./query/getSubs");
const verifyToken = require("./query/verifyConnexion")
const getUnsubs = require("./query/getUnsubs");
const getIfSubbed = require("./query/getIfSubbed")
const getProfile = require("./query/getProfile")
const modifyProfile = require("./query/modifyProfile")
const modifyPassword = require("./query/modifyPassword")
const verifyConnexion = require("./query/verifyConnexion")

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
//router.post('/createChannel', createChannel)

router.use(cors());
router.post('/getUsers', getUsers)
router.post('/getChannel/:name', getChannel)
router.post('/createInscription', createInscription)
router.get('/verifyToken', verifyToken)
router.post('/getSubs', getSubs)
router.post('/getUnsubs', getUnsubs)
router.post('/getIfSubbed', getIfSubbed)
router.get("/getProfile", getProfile)
router.put("/modifyProfile", modifyProfile)
router.put("/modifyPassword", modifyPassword)
router.get("/verifyToken", verifyConnexion)

module.exports.routes = router