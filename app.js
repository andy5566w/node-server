const express = require('express')
// const morgan = require('morgan')

const tourRoute = require('./routes/tourRoutes')

const app = express()

// if (process.env.NODE_EVN === 'development') {
//   app.use(morgan('dev'))
// }

app.use(express.json())
app.use(express.static(`${__dirname}/public`))

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString()
  next()
})

app.use('/api/v1/tours', tourRoute)

module.exports = app
