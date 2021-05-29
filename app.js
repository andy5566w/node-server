const express = require('express')
const cors = require('cors')

const tourRoute = require('./routes/tourRoutes')
const cityRoute = require('./routes/cityRoutes')
const weatherRoute = require('./routes/weaherRoute')

const app = express()
app.use(express.json())
app.use(express.static(`${__dirname}/public`))

const corsOptions = {
  origin: [
    'https://lucid-hamilton-04c863.netlify.app',
    'http://localhost:3006',
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
}
app.use(cors(corsOptions))

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString()
  next()
})

app.use('/api/v1/tours', tourRoute)
app.use('/api/v1/city', cityRoute)
app.use('/api/v1/weather', weatherRoute)

module.exports = app
