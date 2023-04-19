const { Router } = require("express");
const cors = require("cors");
const addVideo = require('../short/query/addVideo');
const likeVideo = require('../short/query/likeVideo');
const fetchVideo = require('../short/query/fetchVideo');
const addComment = require('../short/query/commentVideo'); 
const fetchComments = require('../short/query/fetchComment')

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
router.post('/video', upload.single("video"), addVideo) 
router.post('/like/:id', likeVideo)
router.get('/fetch', fetchVideo)
router.post('/setcomment/:id', addComment) 
router.get('/fetchcomments/:id', fetchComments)

module.exports.routes = router;
