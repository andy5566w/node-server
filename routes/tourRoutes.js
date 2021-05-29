const express = require('express')
const router = express.Router()
const tourController = require('../controller/tourController')

router.route('/').get(tourController.getAllTours)

module.exports = router
