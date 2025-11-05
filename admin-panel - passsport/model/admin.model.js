const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    hobbies: {
        type: Array,
    },
    contactNo: {
        type: String,
    },
    profileImage: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female']
    },

});

module.exports = mongoose.model('Admin', adminSchema);