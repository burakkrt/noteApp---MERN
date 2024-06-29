const mongoose = require('mongoose')
const Schema = mongoose.Schema

const notSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title must be mandatory.'],
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
    timestamps: true,
  }
)

module.exports = mongoose.model('Not', notSchema)
