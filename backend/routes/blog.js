const express = require("express")
const Router = express.Router()

Router.get("/", (request, response)=>{
    response.json("all blogs")
})

module.exports = Router