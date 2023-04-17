const { Router } = require("express");
const createChannel = require('./query/createChannel');
const showNamePp = require("./query/showNamePp");
const addContent = require("./query/addContent");
const uploadVideo = require('./query/uploadVideo')
const getSubscriptions = require('./query/getSubscriptions')

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

router.post('/createChannel', upload.single('image'), createChannel)


const cpUpload = upload.fields([{ name: 'video', maxCount: 1 }, { name: 'miniature', maxCount: 1 }])
router.post('/uploadVideo', cpUpload, uploadVideo)
router.get('/getSubscriptions', getSubscriptions)

module.exports.routes = router