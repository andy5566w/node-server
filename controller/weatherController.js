const api = require('../api/index')
const City = require('../models/cityModel')
const cityController = require('../controller/cityController')

// exports.getWeatherByWoeid = async (req, res) => {
//   try {
//     const { data } = await api.apiWeather.get(
//       '/api/location/' + req.params.woeid
//     )
//     res.status(200).json({ status: 'success', data })
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: `😱${err}`,
//     })
//   }
// }

exports.getWeatherByCityName = async (req, res) => {
  try {
    const cityName = req.params.cityName
    const result = await City.findOne({ title: cityName })
    let woeid = -1

    if (!result || !result.woeid) {
      const cities = await cityController.apiQueryCity(cityName)
      if (cities.length) woeid = cities[0].woeid
      else {
        res.status(404).json({
          type: 'faill',
          message: `找不到這個城市(${cityName})的woeid`,
        })
      }
    } else {
      woeid = result.woeid
    }
    const { data } = await api.apiWeather.get('/api/location/' + woeid)
    res.status(200).json({ status: 'success', data })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: `😱${err}`,
    })
  }
}
