const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

userSchema.statics.singup = async function (email, password) {
  if (!email || !password) {
    throw Error('Fields cannot be left blank.')
  }

  if (!validator.isEmail(email)) {
    throw Error('The email does not comply with the rules.')
  }

  if (
    validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 0,
      minUppercase: 0,
      minNumbers: 0,
      minSymbols: 0,
      returnScore: true,
    }) <= 15.5
  ) {
    throw Error('The password is not strong enough.')
  }

  const checkUser = await this.findOne({ email })

  if (checkUser) {
    throw Error('This email is already in use.')
  }

  const salt = await bcrypt.genSalt(10)
  const encryptededPassword = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: encryptededPassword })

  return user
}

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error('Fields cannot be left blank.')
  }

  const user = await this.findOne({ email })

  if (!user) {
    throw Error('This email is not registered.')
  }

  const passwordCheck = await bcrypt.compare(password, user.password)

  if (!passwordCheck) {
    throw Error('You entered an incorrect password.')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)
