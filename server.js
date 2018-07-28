var express = require("express")

var server = express()

var expressValidator = require("express-validator")

// Plugin do express
server.use(expressValidator())
server.use(express.urlencoded())
server.use(express.json())

// Assíncrono esperando requests
server.get("/", function(request, resposta){
    resposta.render("index.ejs")
})

require('./routes/produtos')(server)

server.use(express.static("./public"))

module.exports = server

// var queryString = require('query-string')
// server.use(functison(request, resposta, next){
//     if(request.method == "POST" && request.header("Content-Type") == "application/form-data"){
//         request.body = ""
    
//         request.on("data", function(tecoBody){
//             request.body += tecoBody.toString()
//         })
    
//         request.on("end", function(){
//             console.log("Criou o body")
            
            // request.body = queryString.parse(request.body)
//             next()
//         })
//     } else {
//         next()
//     }
// })

// server.use(function(request, resposta, next){
//     if(request.method == "POST" && request.header("Content-Type") == "application/json"){
//         request.body = ""
    
//         request.on("data", function(tecoBody){
//             request.body += tecoBody.toString()
//         })
    
//         request.on("end", function(){
//             console.log("Criou o body")
//             request.body = JSON.parse(request.body)
//             next()
//         })
//     } else {
//         next()
//     }
// })
