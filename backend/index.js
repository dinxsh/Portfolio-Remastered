const express = require("express")
const path = require("path")
const app = express()

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, "../frontend/")));

app.get("/", (request, response)=>{
    response.render("../frontend/index.html")
})

app.get("/certificate", (request, response)=>{
    response.render("../frontend/certificate.html")
})

app.get("/resume", (request, response)=>{
    const file = `${__dirname}/docs/resume.pdf`;
    response.download(file);
})

app.listen(3000, ()=> console.log("Server Started"))