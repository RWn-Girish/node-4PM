const express = require('express');
const port = 8005;

const app = express();
const dbConnection = require("./config/dbConnection");


//Middleware
app.set("view engine", 'ejs');
app.use(express.urlencoded());
app.use("/uploads", express.static('uploads'));

//Routes
app.use("/", require("./routes/index.routes"));

app.listen(port, () => {
    dbConnection(); // dbConnect
    console.log(`Server start at http://localhost:${port}`);
})


// MVC => M - Model , V - Views, C- Controller R- Routes