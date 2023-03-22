const { Router } = require("express");
const createChannel = require('./query/createChannel')

const router = Router()

router.post('/createChannel', createChannel)
router.get("/channel", getChannel)

module.exports.routes = router