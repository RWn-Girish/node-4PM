const express = require('express');
const app = express();
const port = 8005;
const dbConnect = require('./config/dbConnect');

// middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use("/uploads", express.static("uploads"));

app.use("/", require("./routes/index.routes"));

app.listen(port, () => {
    dbConnect();
    console.log(`Server start at http://localhost:${port}`);
});