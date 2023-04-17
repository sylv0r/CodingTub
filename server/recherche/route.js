const { Router } = require("express");
const newSearch = require('./query/search_bar');

const router = Router()

//lance la fonction newSearch lorsqu'un post est effecté à /recherche/newSearch
router.get('/search_bar', newSearch)

module.exports.routes = router