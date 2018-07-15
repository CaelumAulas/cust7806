var express = require("express")

var server = express()

server.get("/", function(request, resposta){
    resposta.render("index.ejs")
})

require('./routes/produtos')(server)

server.use(express.static("./public"))

module.exports = server
