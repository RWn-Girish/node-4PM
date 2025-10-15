const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect("mongodb+srv://rw3girishgk:Decode%40123@cluster0.c1whb.mongodb.net/Blogify-4PM")
    .then(()=> console.log('DB is Connectd ✔✔'))
    .catch(err => console.log(err));
}

module.exports = dbConnect;