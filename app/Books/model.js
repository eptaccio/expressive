const mongoose = require('../../bootstrap/database')
const { Schema } = mongoose

const BooksScheme = new Schema({
  title: String,
  value: Number,
  author: Number
})

module.exports = mongoose.model('Books', BooksScheme)
