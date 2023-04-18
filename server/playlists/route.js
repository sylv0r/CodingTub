const { Router } = require("express");
const playlist = require('./query/getPlaylists');
const playlist_videos = require('./query/getPlaylistsVideos');
const createPlaylists = require("./query/createPlaylists");

const router = Router()

router.post('/playlist?list=WL', playlist)
router.post('/playlist.list=LL', playlist)
router.post('/createPlaylists', createPlaylists)

module.exports.routes = router