const City = require('../models/cityModel')
const api = require('../api/index')
const { handleError } = require('../utils/apiError')

exports.queryCity = async (req, res) => {
  try {
    let cities
    const result = await City.findOne({ title: req.params.query })
    if (result) cities = result
    else {
      cities = await apiQueryCity(req.params.query)
    }
    res.status(200).json({ status: 'success', cities })
  } catch (err) {
    handleError(err, res)
  }
}
const apiQueryCity = async (query) => {
  const { data = [] } = await api.apiWeather.get('/api/location/search', {
    params: { query },
  })
  if (Array.isArray(data) && data.length) {
    data.forEach((city) => City.create(city))
  }
  return data
}

exports.apiQueryCity = apiQueryCity
