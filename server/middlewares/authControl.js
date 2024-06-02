const jwt = require('jsonwebtoken')
const user = require('../models/userModel')

const authControl = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ message: 'Authorization token required.' })
  }

  const [, token] = authorization.split(' ')

  try {
    const { _id } = jwt.verify(token, process.env.SECRET_KEY)

    req.user = await user.findOne({ _id }).select('_id')

    next()
  } catch (error) {
    return res.status(401).json({ message: 'Authorization token required.' })
  }
}

module.exports = authControl
