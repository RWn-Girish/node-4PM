require('dotenv').config();
const express = require('express');
const port = process.env.PORT;
const app = express();
const dbConnect = require('./config/dbConnection');
const cors = require('cors');


// middleware
app.use(cors({
    origin: "your forntend live url"
}));
app.use(express.urlencoded());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

//routes
app.use("/api", require('./routes/index.routes'));

app.listen(port, () => {
    console.log(`Server Start at http://localhost:${port}`);
})


// localhost:5173/api/v1/add-product/denim

// base url : localhost:5173
// routes : add-product
// end-points : denim