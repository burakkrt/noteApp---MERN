const express = require('express')
const router = express.Router()
const {
  createNote,
  getNote,
  getNoteById,
  notDeleteById,
  notUpdateById,
} = require('../controllers/notController')
const authControl = require('../middlewares/authControl')

router.use(authControl)

router.get('/', getNote)

router.get('/:id', getNoteById)

router.post('/', createNote)

router.delete('/:id', notDeleteById)

router.patch('/:id', notUpdateById)

module.exports = router
