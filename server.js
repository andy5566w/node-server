const app = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DB_PW
).replace('<DBNAME>', process.env.DB_NAME)

mongoose
  .connect(DB, { useNewUrlParser: true })
  .then(() => console.log('Mongodb connected successfully'))
  .catch((err) => console.log(err))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('listening port is ' + PORT))
