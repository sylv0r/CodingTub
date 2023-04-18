const { Router } = require("express");
const newSearch = require('./query/search');
const hashtag = require('./query/hashtag/hashtag');
const searchBar = require('./query/search_bar');
const ResultHashtag = require('./query/hashtag/ResultHashtag');


const router = Router()

//lance la fonction newSearch lorsqu'un post est effecté à /recherche/newSearch
router.post('/search', newSearch)
router.get('/hashtag', hashtag)
router.get('/search_bar', searchBar)
router.get('/resulthashtag/:id_tag', ResultHashtag)


module.exports.routes = router