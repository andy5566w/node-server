const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
  isDelete: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    unique: true,
    default: 'not found city',
  },
  woeid: {
    type: Number,
    unique: true,
    default: -1,
  },
  latt_long: {
    type: String,
    required: [true, ''],
  },
})

module.exports = mongoose.model('city', citySchema)
