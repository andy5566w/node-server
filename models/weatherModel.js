const mongoose = require('mongoose')

const weatherSchema = new mongoose.Schema({
  consolidated_weather: {
    type: Array,
    default: [],
  },
  time: {
    type: String,
    default: new Date(),
  },
  sun_rise: {
    type: String,
    default: '',
  },
  sun_set: {
    type: String,
    default: '',
  },
  timezone_name: {
    type: String,
    default: '',
  },
  parent: {
    type: Object,
    default: {},
  },
  sources: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    default: '',
  },
  location_type: {
    type: String,
    default: '',
  },
  woeid: {
    type: Number,
    default: '',
  },
  latt_long: {
    type: String,
    default: '',
  },
  timezone: {
    type: String,
    default: '',
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('weathers', weatherSchema)
