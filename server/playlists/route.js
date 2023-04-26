const { Router } = require("express");
const createPlaylists = require("./query/createPlaylists");
const addVideoToPlaylist = require("./query/addVideoToPlaylist");
const getPlaylistId = require("./query/getPlaylistId");
const getPlaylistsVideos = require("./query/getPlaylistsVideos");
const getVids = require("./query/getVids");
const delVidPlay = require("./query/delVidPlay");

const router = Router()

router.post('/createPlaylists', createPlaylists)
router.post('/addVideo', addVideoToPlaylist)
router.post('/getPlaylistId', getPlaylistId)
router.post('/getPlaylistsVideos', getPlaylistsVideos)
router.post('/getVids', getVids)
router.delete('/delVidPlay', delVidPlay)

module.exports.routes = router