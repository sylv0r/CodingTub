const { Router } = require("express");
const playlist = require('./query/getPlaylists');
const playlist_videos = require('./query/getPlaylistsVideos');
const createPlaylists = require("./query/createPlaylists");
const addVideoToPlaylist = require("./query/addVideoToPlaylist");
const getPlaylistId = require("./query/getPlaylistId");

const router = Router()

router.post('/playlist?list=WL', playlist)
router.post('/playlist.list=LL', playlist)
router.post('/createPlaylists', createPlaylists)
router.post('/addVideo', addVideoToPlaylist)
router.post('/getPlaylistId', getPlaylistId)

module.exports.routes = router