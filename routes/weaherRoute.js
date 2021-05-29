const express = require('express')
const router = express.Router()
const weatherController = require('../controller/weatherController')

router.route('/:woeid').get(weatherController.getWeatherByWoeid)

module.exports = router
