const { Router } = require("express");
const newSearch = require('./query/search');
const hashtag = require('./query/hashtag');
const searchBar =  require('./query/search_bar');

const router = Router()

//lance la fonction newSearch lorsqu'un post est effecté à /recherche/newSearch
router.post('/search', newSearch)
router.get('/hashtag', hashtag)
router.get('/search_bar', searchBar)
module.exports.routes = router