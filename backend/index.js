const express = require("express")
fs = require('fs');
const path = require("path")
const app = express()

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, "../frontend/")));

app.get("/", (request, response)=>{
    response.render("../frontend/index.html")
})

app.get("/certificates", (request, response)=>{
    response.render("../frontend/certificate.html")
})

app.get("/resume", (request, response)=>{
    const file = `${__dirname}/docs/resume.pdf`;
    response.download(file);    
})

app.get('/viewresume', function(request, response){
    var tempFile="backend/docs/resume.pdf";
    fs.readFile(tempFile, function (err,data){
       response.contentType("application/pdf");
       response.send(data);
    });
});

app.listen(process.env.PORT, ()=> console.log("Server Started"))