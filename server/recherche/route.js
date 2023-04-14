const { Router } = require("express");
const newSearch = require('./query/search');
const hashtag = require('./query/hashtag');


const router = Router()

//lance la fonction newSearch lorsqu'un post est effecté à /recherche/newSearch
router.post('/search', newSearch)
router.post('/hashtag', hashtag)

module.exports.routes = router