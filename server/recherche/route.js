const { Router } = require("express");
const newSearch = require('./query/search');
const hashtag = require('./query/hashtag');
const searchBar =  require('./query/search_bar');
const dateajout =  require('./query/filtre/dateajout');
const hashtag = require('./query/hashtag/Hashtag');
const ResultHashtag = require('./query/hashtag/ResultHashtag');


const router = Router()

//lance la fonction newSearch lorsqu'un post est effecté à /recherche/newSearch
router.get('/hashtag', hashtag)
router.get('/search_bar', searchBar)
router.get('/dateajout', dateajout)
router.get('/resulthashtag/:id_tag', ResultHashtag)


module.exports.routes = router