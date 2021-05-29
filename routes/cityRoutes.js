const express = require('express')
const router = express.Router()
const cityController = require('../controller/cityController')

router.route('/:query').get(cityController.queryCity)

module.exports = router
