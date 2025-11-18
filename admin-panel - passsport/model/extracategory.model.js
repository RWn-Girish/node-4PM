const mongoose = require('mongoose');

const expraCategorySchema = mongoose.Schema({
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category' 
    },
    subCategory:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory' 
    },
    extracategory: String
});

module.exports = mongoose.model('ExtraCategory', expraCategorySchema);