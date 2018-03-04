const Book = require('./model')

/**
 * Books Repository
 */

const find = () => Book.find()
const findOne = id => Book.findById(id)
const create = book => new Book(book).save()
const update = (id, data) => Book.findByIdAndUpdate(id, data)
const remove = id => Book.findByIdAndRemove(id)

module.exports = {
  find,
  findOne,
  create,
  update,
  remove
}
