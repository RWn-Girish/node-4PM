const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    author: {
        type: String
    },
    postDate: {
        type: String
    },
    category: {
        type: String
    },
    blogImage: {
        type: String
    },
});

module.exports = mongoose.model("Blog", blogSchema);