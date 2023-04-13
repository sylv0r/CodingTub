const { Router } = require("express");
const newSearch = require('./query/search');

const router = Router()

//lance la fonction newSearch lorsqu'un post est effecté à /recherche/newSearch
router.post('/search', newSearch)

module.exports.routes = router