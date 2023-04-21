const { Router } = require("express");
const createChannel = require('./query/createChannel');
const showNamePp = require("./query/showNamePp");
const addContent = require("./query/addContent");
const uploadVideo = require('./query/uploadVideo');
const getSubscriptions = require('./query/getSubscriptions');
const getContent = require('./query/getContent');
const showAllChannels = require('./query/showAllChannels');
const getInfosChannel = require('./query/getInfosChannel');
const redirectChannel = require("./query/redirectChannel");
const getNbSubscribers = require('./query/getNbSubscribers');

const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads');
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const router = Router()

//lance la fonction createChannel lorsqu'un post est effecté à /channels/createChannel

router.get('/showNamePp/:id', showNamePp)
router.post('/addContent', addContent)
router.get('/getContent/:name', getContent)
router.get('/showAllChannels/:channel_user_id', showAllChannels)
router.get('/getInfosChannel/:name', getInfosChannel)
router.get('/redirectChannel', redirectChannel)
router.get('/getNbSubscribers', getNbSubscribers)

router.post('/createChannel', upload.single('image'), createChannel)
const cpUpload = upload.fields([{ name: 'video', maxCount: 1 }, { name: 'miniature', maxCount: 1 }])
router.post('/uploadVideo', cpUpload, uploadVideo)
router.get('/getSubscriptions', getSubscriptions)

module.exports.routes = router