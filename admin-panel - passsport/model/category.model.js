const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    categoryName: String,
    categoryImage: String,
})

module.exports = mongoose.model('Category', categorySchema);