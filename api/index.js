const axios = require('axios')

exports.apiWeather = axios.create({
  baseURL: 'https://www.metaweather.com',
})
