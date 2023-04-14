const { Router } = require("express");
const createChannel = require('./query/createChannel');
const getName = require("./query/showNamePp");
const addContent = require("./query/addContent");
const uploadVideo = require('./query/uploadVideo')
const getSubscriptions = require('./query/getSubscriptions')
const multer = require('multer');
const upload = multer()

const router = Router()

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
router.post('/createChannel', createChannel)
router.get('/showNamePp/:id', getName)
router.post('/addContent', addContent)

const cpUpload = upload.fields([{ name: 'video', maxCount: 1 }, { name: 'miniature', maxCount: 1 }])
router.post('/uploadVideo', cpUpload, uploadVideo)
router.get('/getSubscriptions', getSubscriptions)

module.exports.routes = router