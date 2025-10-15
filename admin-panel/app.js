const express = require("express");
const port = 8005;
const dbConnect = require('./config/dbConnection');
const app = express();
const cookieParser = require('cookie-parser');

// middleware
app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static('public'))
app.use("/uploads", express.static('uploads'))
app.use(cookieParser());


//routes
app.use("/", require("./routes/index.routes"))


app.listen(port, () => console.log(`Server start at http://localhost:${port}/`));
