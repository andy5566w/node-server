const Tour = require('../models/tourModel')

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find()

    res.status(200).json({
      status: 'success',
      data: { tours },
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: `😱${err}`,
    })
  }
}
