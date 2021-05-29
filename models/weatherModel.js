const mongoose = require('mongoose')

const weatherSchema = new mongoose.Schema({
  isDelete: {
    type: Boolean,
    default: false,
  },
})
