const express = require('express')
const router = express.Router()
const weatherController = require('../controller/weatherController')

router.route('/:cityName').get(weatherController.getWeatherByCityName)

module.exports = router
