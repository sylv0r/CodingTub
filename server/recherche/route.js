const { Router } = require("express");
const newSearch = require('./query/search_bar');
const hashtagList = require('./query/hashtag');


const router = Router()

//lance la fonction newSearch lorsqu'un post est effecté à /recherche/newSearch
router.get('/search_bar', newSearch)
router.get('/hashtag', hashtagList)


module.exports.routes = router