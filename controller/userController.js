const User = require('../models/userModule')
const jwt = require('jsonwebtoken')
const { handleError } = require('../utils/apiError')

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      res.status(400).json({
        status: 'fail',
        message: '請提供email或password',
      })
    }
    const user = await User.findOne({ email, password })
    if (!user) {
      res.status(404).json({
        status: 'fail',
        message: '查無此使用者',
      })
    }

    createSendToken(user, 200, req, res)
  } catch (err) {
    handleError(err, res)
  }
}

exports.getUserByEmail = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email })
    if (user)
      res.status(200).json({
        status: 'success',
        data: user,
      })
    else
      res.status(404).json({
        status: 'fail',
        message: 'not found user by email: ' + req.params.email,
      })
  } catch (err) {
    handleError(err, res)
  }
}

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    createSendToken(newUser, 201, req, res)
  } catch (err) {
    handleError(err, res)
  }
}

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id)

  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
  })

  // Remove password from output
  user.password = undefined

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  })
}

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })
}
