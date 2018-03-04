const Author = require('./model')

const find = () => Author.find()
const findOne = id => Author.find({ _id: id })

module.exports = {
  find,
  findOne
}
