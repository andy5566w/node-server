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

exports.getTourById = async (req, res) => {
  const tour = await Tour.findById(req.params.id)
  try {
    res.status(200).json({
      status: 'success',
      data: { tour },
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: `😱${err}`,
    })
  }
}

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body)
    res.status(201).json({
      status: 'success',
      data: { newTour },
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: `😱${err}`,
    })
  }
}

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({
      status: 'success',
      data: { tour },
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: `😱${err}`,
    })
  }
}

exports.deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id)
    tour.isDelete = true
    const newTour = await Tour.findByIdAndUpdate(req.params.id, tour, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({
      status: 'success',
      data: { newTour },
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: `😱${err}`,
    })
  }
}
