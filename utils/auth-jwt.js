const { promisify } = require('util')
const jwt = require('jsonwebtoken')
const User = require('../models/userModule')
const { handleError } = require('../utils/apiError')

module.exports = async (req, res, next) => {
  try {
    let token
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1]
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt
    }
    const { id } = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
    const user = await User.findById(id)
    if (!user) {
      res
        .status(404)
        .json({ status: 'fail', message: '查無此使用者， id為: ' + id })
    }
    next()
  } catch (err) {
    handleError(err, res)
  }
}
