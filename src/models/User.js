const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: String,
})

module.exports = exports = mongoose.model('User', UserSchema)