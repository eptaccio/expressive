const { Bookshelf } = require('../../bootstrap/database')

const Author = Bookshelf.Model.extend({
  tableName: 'authors',
  books () {
    return this.hasMany('Book')
  }
})

module.exports = Bookshelf.model('Author', Author)
