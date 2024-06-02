const express = require('express')
const app = express()
require('dotenv').config()
const userRoot = require('./routes/user')
const mongoose = require('mongoose')
const notRoute = require('./routes/notlar')

// app.use((req, res, next) => {
//   console.log(req.path, req.method)
//   next()
// })

/* gelen isteklerin gövdesinin JSON formatında parse edilmesini (çözülmesini)
sağlamak için kullanılan bir middleware fonksiyonudur. */
// Eğer değerleri json pars etmez isek json gönderilen request body 'i undefined olur.
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Database connected')
    app.listen(process.env.PORT, () => {
      console.log(`Server is started on ${process.env.PORT} port`)
    })
  })
  .catch((err) => {
    console.log('Database not connected')
    console.log(err)
  })

/* notlar dosyasında tanımladığımız url 'lerin başına /api/notlar 'ekler.
  notlar dosyasında url /test olan bir api aşağıdaki değer ile /api/notlar/test
  olarak çalışacağını belirtiriz. api 'ların base path i gibi düşünülebilir*/
app.use('/api/notlar', notRoute)
app.use('/api/user', userRoot)
