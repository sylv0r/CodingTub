const { Router } = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const addVideo = require('../short/query/addVideo');
const likeVideo = require('../short/query/likeVideo');
const fetchVideo = require('../short/query/fetchVideo');
const fetchLikes = require('../short/query/fetchLike');

const addComment = require('../short/query/commentVideo'); 
const fetchComments = require('../short/query/fetchComment')
const getShortChaine = require('./query/getShortChaine');

const multer = require("multer");

const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = Router()
router.use(cors());
router.post('/video', upload.single('video'), async (req, res) => {

    const videoFile = req.file;
    const textData = JSON.parse(req.body.textData);
    const { x, y, text } = textData;

    try {
        await addVideo(req, res, videoFile, x, y, text);
    } catch (error) {
        console.error('Error in API route:', error);
        res.status(500).json({ message: 'Error uploading video la ', error });
    }
});
router.post('/like/:id', likeVideo)
router.get('/fetch', fetchVideo)
router.post('/setcomment/:id', addComment) 
router.get('/fetchcomments/:id', fetchComments)
router.get('/fetchlikes/:id', fetchLikes)
router.get('/getShortChaine/:channel_id', getShortChaine)

module.exports.routes = router;
