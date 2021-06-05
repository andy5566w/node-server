exports.handleError = (err, res, { status = 400, message } = {}) =>
  res.status(status).json({
    status: 'fail',
    message: message ? message : `😱${err}`,
  })
