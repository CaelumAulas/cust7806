var express = require("express")

var server = express()

// Assíncrono esperando requests
server.get("/", function(request, resposta){
    resposta.render("index.ejs")
})

require('./routes/produtos')(server)

server.use(express.static("./public"))

module.exports = server
