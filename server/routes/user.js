const express = require('express')
const router = express.Router()

const { loginUser, singupUser } = require('../controllers/userCheck')

router.post('/login', loginUser)
router.post('/singup', singupUser)

module.exports = router
