const express = require('express');
const port = 8001;

const server = express();       // server create

const middlweware = (req, res, next) => {
    // console.log(req.query);
    if(req.query.age >= 18){
        next();
    }
    else{
        return res.end("You Are not Eligible for this Web");
    }

}


server.set("view engine", "ejs");
server.use(express.urlencoded());   // form data parse => x-urlendcoded
server.use(express.json());   // form JSON parse 
// server.use(middlweware);


let students = [
    {
        id: "101",
        name: "John Peter",
        email: "john@test.in",
        course: "Full-stack Deleveloment"
    },
    {
        id: "102",
        name: "Jolly Peter",
        email: "jolly@test.in",
        course: "Game Develoment"
    },
    {
        id: "103",
        name: "Smith Peter",
        email: "smith@test.in",
        course: "Animation"
    },
    {
        id: "104",
        name: "Shubman Gill",
        email: "shubh@test.in",
        course: "Graphic Designer"
    },
]




server.get("/", middlweware,  (req, res) => {
    res.render("index", { students })
})

server.get("/add-student", (req, res) => {
    res.render('addStudent');
})

server.post("/add-student", (req, res) => {
    // console.log(req.body);
    students.push(req.body);
    return res.redirect("/")
})

server.get("/delete-student/:id", (req, res) => {
    // console.log(req.params);
    let id = req.params.id;
    students = students.filter(std => std.id != id);
    return res.redirect("/");
});

server.get("/edit-student/:id", (req, res) => {
    let id = req.params.id;
    let record = students.find(std => std.id == id);
    return res.render('editStudent', {record});
})

server.post("/edit-student/:id", (req, res) => {
    let id = req.params.id;
    let updateData = students.map(std => {
        if(std.id == id)
            return {id , ...req.body}
        else
            return std;
    })
    students = updateData
    return res.redirect("/")
})

server.listen(port, () => {
    console.log(`server start at http://localhost:${port}`);
})


// nodemon