const userSchema = require('../models/userModel')
const jwt = require('jsonwebtoken')

// jwt.sing token oluşturuyoruz.
// (id ye göre oluşturacağım,secret key,geçerlilik süresi 1 saat)
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: '1h' })
}

const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await userSchema.login(email, password)
    const token = createToken(user._id)
    res.status(200).json({ email, token })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const singupUser = async (req, res) => {
  const { email, password } = req.body

  try {
    // password 'u şifreleyerek model oluşturma metodu.
    const user = await userSchema.singup(email, password)

    // token oluşturma metodunu çağırıp id ye göre token oluşturuyoruz.
    // istediğin veriye göre token oluşturabilirsin.
    const token = createToken(user._id)

    res.status(200).json({ user, token })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = {
  loginUser,
  singupUser,
}
