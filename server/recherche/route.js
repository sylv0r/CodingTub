const { Router } = require("express");
<<<<<<< HEAD
const newSearch = require('./query/search_bar');
const hashtagList = require('./query/hashtag');
=======
const newSearch = require('./query/search');
const hashtag = require('./query/hashtag/Hashtag');
const SearchBar = require('./query/search_bar');
const ResultHashtag = require('./query/hashtag/ResultHashtag');
>>>>>>> origin/pre_main


const router = Router()

//lance la fonction newSearch lorsqu'un post est effecté à /recherche/newSearch
<<<<<<< HEAD
router.get('/search_bar', newSearch)
router.get('/hashtag', hashtagList)
=======
router.get('/hashtag', hashtag)
router.get('/search_bar', SearchBar)
router.get('/resulthashtag/:id_tag', ResultHashtag)
>>>>>>> origin/pre_main


module.exports.routes = router