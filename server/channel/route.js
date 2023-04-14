const { Router } = require("express");
const createChannel = require('./query/createChannel');
const showNamePp = require("./query/showNamePp");
const postCommunaute = require("./query/postCommunaute");
const uploadVideo = require('./query/uploadVideo')
const getSubscriptions = require('./query/getSubscriptions')
const multer = require('multer');
const upload = multer()

const router = Router()

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
router.post('/createChannel', createChannel)
router.get('/showNamePp/:id', showNamePp)
router.post('/postCommunaute', postCommunaute)

const cpUpload = upload.fields([{ name: 'video', maxCount: 1 }, { name: 'miniature', maxCount: 1 }])
router.post('/uploadVideo', cpUpload, uploadVideo)
router.get('/getSubscriptions', getSubscriptions)

module.exports.routes = router