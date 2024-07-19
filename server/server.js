const express = require('express')
const app = express()
require('dotenv').config()
const userRoute = require('./routes/user')
const mongoose = require('mongoose')
const notRoute = require('./routes/notlar')
const cors = require('cors')

app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log('Database connected')
    app.listen(process.env.PORT || 9001, () => {
      console.log(`Server is started on port ${process.env.PORT || 9001}`)
    })
  })
  .catch((err) => {
    console.log('Database not connected')
    console.log(err)
  })

app.use('/api/notlar', notRoute)
app.use('/api/user', userRoute)
