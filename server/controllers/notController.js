const notModel = require('../models/notModel')
const mongoose = require('mongoose')

const createNote = async (req, res) => {
  const { title, description } = req.body

  const checkRepeat = await notModel.findOne({ title: title })
  if (checkRepeat) {
    return res
      .status(400)
      .json({ message: 'Data with this title already exists.' })
  }

  if (!title) {
    return res
      .status(400)
      .json({ message: 'The title field cannot be left blank.' })
  }

  try {
    const user_id = req.user._id
    const not = await notModel.create({ title, description, user_id })
    res.status(200).json(not)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const getNote = async (req, res) => {
  const user_id = req.user._id
  const notes = await notModel.find({ user_id }).sort({ createdAt: -1 })
  res.status(200).json(notes)
}

const getNoteById = async (req, res) => {
  const { id } = req.params
  if (mongoose.Types.ObjectId.isValid(id)) {
    const note = await notModel.findById(id)
    if (note) {
      res.status(200).json(note)
    } else {
      res.status(404).json({ message: 'data not found' })
    }
  } else {
    res.status(404).json({ message: 'The specified id is invalid' })
  }
}

const notDeleteById = async (req, res) => {
  const { id } = req.params
  if (mongoose.Types.ObjectId.isValid(id)) {
    const note = await notModel.findById(id)
    if (note) {
      await notModel.findOneAndDelete({ _id: id })
      res
        .status(200)
        .json({ message: 'The data was deleted successfully.', data: note })
    } else {
      res.status(400).json({ message: 'data not found' })
    }
  } else {
    res.status(404).json({ message: 'The specified id is invalid' })
  }
}

const notUpdateById = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'The specified id is invalid' })
  }

  const note = await notModel.findOneAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }
  )

  if (!note) {
    res.status(400).json({ message: 'data not found' })
  }

  res.status(200).json({
    message: 'The data has been updated successfully.',
    data: note,
  })
}

module.exports = {
  createNote,
  getNote,
  getNoteById,
  notDeleteById,
  notUpdateById,
}
