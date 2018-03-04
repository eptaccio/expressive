const mongoose = require('../../bootstrap/database')
const { Schema } = mongoose

const AuthorScheme = new Schema({
  name: String
})

module.exports = mongoose.model('Author', AuthorScheme)
