const mongoose = require('mongoose')
const Schema = mongoose.Schema

const notSchema = new Schema(
  {
    title: {
      type: String, // title 'in tipi
      required: [true, 'Title must be mandatory.'], // hata olması durumudna mesaj
    },
    description: {
      type: String,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // zaman damgası aktif. veri ekleme ve değiştirilmesinde zamanı ekler
  }
)

/* model oluşturma ve dışarı aktarma işlemi. Database 'in altına yoksa
belirtilen isimde collection oluşturur ve SONUNA OTOMATİK "S" EKLER. */
module.exports = mongoose.model('Not', notSchema)
