const express = require("express")
const path = require("path")
const app = express()

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, "../frontend/")));

app.get("/", (request, response)=>{
    response.render("../frontend/index.html")
})

app.listen(process.env.PORT, ()=> console.log("Server Started"))