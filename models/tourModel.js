const mongoose = require('mongoose')

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have price'],
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Tour', tourSchema)
