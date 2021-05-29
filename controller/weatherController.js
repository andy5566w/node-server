const api = require('../api/index')

exports.getWeatherByWoeid = async (req, res) => {
  try {
    const { data } = await api.apiWeather.get(
      '/api/location/' + req.params.woeid
    )
    res.status(200).json({ status: 'success', data })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: `😱${err}`,
    })
  }
}
