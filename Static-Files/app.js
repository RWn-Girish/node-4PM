const express = require('express');
const port = 8005;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    return res.render('dashboard');
})
app.get("/charts", (req, res) => {
    return res.render('charts');
})

app.listen(port, () => {
    console.log('Server Start at http://localhost:8005');
})