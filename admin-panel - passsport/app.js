const express = require("express");
const port = 8005;
const dbConnect = require('./config/dbConnection');
const app = express();
const cookieParser = require('cookie-parser');
const passport = require('passport');
const localStrategy = require('./middleware/localStrategy');
const session = require('express-session');
const flash = require('connect-flash');
const { flashMessage } = require("./middleware/flashMessage");

// middleware
app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static('public'))
app.use("/uploads", express.static('uploads'))
app.use(cookieParser());
app.use(session({
    name: 'adminanel',
    secret: 'node4pm',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60
    }
}))
app.use(flash());

app.use(passport.session());
app.use(passport.initialize());
app.use(passport.setValidateUser);
app.use(flashMessage)

//routes
app.use("/", require("./routes/index.routes"))



app.listen(port, () => console.log(`Server start at http://localhost:${port}/`));
