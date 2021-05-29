const City = require('../models/cityModel')
const api = require('../api/index')

exports.queryCity = async (req, res) => {
  try {
    let cities = null
    const result = await City.findOne({ title: req.params.query })
    if (result) cities = result
    else {
      const { data } = await api.apiWeather.get('/api/location/search', {
        params: { query: req.params.query },
      })
      if (Array.isArray(data) && data.length) {
        data.forEach((city) => City.create(city))
        cities = data
      }
    }
    res.status(200).json({ status: 'success', cities })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: `😱${err}`,
    })
  }
}
