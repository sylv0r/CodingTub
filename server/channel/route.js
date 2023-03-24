const { Router } = require("express");
const createChannel = require('./query/createChannel')
const uploadVideo = require('./query/uploadVideo')
const multer = require('multer');
const upload = multer()


const router = Router()

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel
router.post('/createChannel', createChannel)

const cpUpload = upload.fields([{ name: 'video', maxCount: 1 }, { name: 'miniature', maxCount: 1 }])
router.post('/uploadVideo', cpUpload, uploadVideo)


module.exports.routes = router