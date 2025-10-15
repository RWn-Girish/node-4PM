const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    // console.log(req.url);
    let filePath = "";
    switch(req.url){
        case "/":
            filePath = "./index.html"
            break;
        case "/about":
            filePath = "./about.html"
            break;
        case "/contact":
            filePath = "./contact.html"
            break;
        default:
            filePath = "./notfound.html"
            break;
    }
    let data = fs.readFileSync(filePath, 'utf-8');
    res.end(data);
    
});
const port = 8000;

server.listen(port, ()=> {
    console.log(`server start at http://localhost:${port}`);
});


// file => open openSync, readfile, write, append, update, rename, delete, close

// const fs = require('fs');

// fs.open('./module.txt', (err)=> {
//     err ? console.log(err): console.log("File Open Success");
// })

// let data = fs.readFileSync("./module.js", 'utf-8');
// console.log(data);

// fs.unlinkSync('./package.json');
// console.log("Delete Success");