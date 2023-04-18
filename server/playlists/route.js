const { Router } = require("express");
const playlist = require('./query/getPlaylists');
const playlist_videos = require('./query/getPlaylistsVideos');

const router = Router()

router.post('/playlist?list=WL', playlist)
router.post('/playlist.list=LL', playlist)

module.exports.routes = router