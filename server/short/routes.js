const { Router } = require("express");
const cors = require("cors");
const addVideo = require('../short/query/addVideo');
const likeVideo = require('../short/query/likeVideo');
const fetchVideo = require('../short/query/fetchVideo');


const router = Router()
router.use(cors());
router.post('/video', addVideo)
router.post('/like/:id', likeVideo)
router.get('/fetch', fetchVideo)

module.exports.routes = router