const { Router } = require("express");
const live = require('./query/getLive');

const router = Router()

router.post('/live', live)

module.exports.routes = router