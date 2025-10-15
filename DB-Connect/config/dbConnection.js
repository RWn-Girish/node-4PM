const mongoose = require('mongoose');

const dbConnection = () => {
    // mongoose.connect("mongodb://localhost:27017/node-4PM")
    mongoose.connect("mongodb+srv://rw3girishgk:<db_password>@cluster0.c1whb.mongodb.net/DB_NAME")
    .then(()=> console.log('DB is Connected'))
    .catch(err => console.log(err));
}

module.exports = dbConnection;