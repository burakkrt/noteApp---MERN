const express = require('express')
const app = express()
require('dotenv').config()
const userRoute = require('./routes/user')
const mongoose = require('mongoose')
const notRoute = require('./routes/notlar')

app.use(express.json())

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connected')
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is started on port ${process.env.PORT || 3000}`)
    })
  })
  .catch((err) => {
    console.log('Database not connected')
    console.log(err)
  })

app.use('/api/notlar', notRoute)
app.use('/api/user', userRoute)
