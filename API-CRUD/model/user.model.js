const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    profileImage: {
        type: String
    },
    gender: {
        type: String,
        enum: ['Male', 'Female']
    },
    mobileNo: {
        type: String
    },
});

module.exports = mongoose.model('users', userSchema);