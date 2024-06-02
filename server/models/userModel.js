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

// singup adında static metot oluşturuyoruz.
userSchema.statics.singup = async function (email, password) {
  if (!email || !password) {
    throw Error('Fields cannot be left blank.')
  }

  // validater ile e mail in kurallara uygunluğunu kontrol ediyorum.
  if (!validator.isEmail(email)) {
    throw Error('The email does not comply with the rules.')
  }

  // parolanın güçlü olup olmadığını kontrol etmek için belirli koşullar tanımlıyorum.
  // default olarak koşulları barındırır o yüzden tanımlamalara gerek yok.
  // returnScore: true, default false 'dır eüer false olursa geriye güç duruma göre
  // true veya false döndürür eğer returnScore: true yaparsak şifre gücüne göre geriye
  // bir puan döndürür. çoğu zaman returnScore: false, olarak kullanılır.
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

  // aynı mailde kullanıcı olup olmadığı kontrol edilir. gelen email parametresi find ile
  // aranır, eğer varsa checkUser 'a ilgili user 'ın bilgisi gelir.
  const checkUser = await this.findOne({ email })

  if (checkUser) {
    throw Error('This email is already in use.')
  }

  const salt = await bcrypt.genSalt(10) // 10 birimlik bir şifreleme oluştur.
  // paraloa şifreleme. (şifrelencek veri,şifrelenmiş salt verisi.)
  const encryptededPassword = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: encryptededPassword })

  return user
}
// yukarıdaki methodu kullanmak için userSchema modelinin içerisindeki singup motodunu
// çağırmamız yeterli.

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error('Fields cannot be left blank.')
  }

  const user = await this.findOne({ email })

  if (!user) {
    throw Error('This email is not registered.')
  }

  // parolanın doğruluğunu kontrol ediyorum fakat bcrypt ile şifrelediğimiz için
  // ilk bunu bcrypt ile doğruluğunu karşılaştırıyoruz. ilk değer api isteğinden
  //  gelen parola ikinci değer database 'de tutulan şifreli parola. return boolean
  const passwordCheck = await bcrypt.compare(password, user.password)

  if (!passwordCheck) {
    throw Error('You entered an incorrect password.')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)
