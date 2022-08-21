const express = require("express")
const path = require("path")
const app = express()

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, "../frontend/")));

app.get("/", (request, response)=>{
    response.render("../frontend/index.html")
})

app.get("/data", (request, response)=>{
    response.json({"count":1})
})

app.get("/resume", (request, response)=>{
    const file = `${__dirname}/docs/resume.pdf`;
    response.download(file);
})

app.listen(process.env.PORT, ()=> console.log("Server Started"))