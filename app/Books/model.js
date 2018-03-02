/**
 * Book Model
 */
const { Bookshelf } = require('../../bootstrap/database')

const Book = Bookshelf.Model.extend({
  tableName: 'books',
  author () {
    return this.belongsTo('Author')
  }
})

module.exports = Bookshelf.model('Book', Book)
