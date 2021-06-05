const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'unknown name'],
    unique: true,
  },
  email: { type: String, unique: true, required: true },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  articles: {
    type: Array,
    default: [],
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('User', userSchema)
