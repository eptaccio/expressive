const mongoose = require('@anarklab/expressive-mongo')
const { MONGODB_URI } = require('../config/database')

module.exports = mongoose(MONGODB_URI)
