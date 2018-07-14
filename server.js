var express = require("express")
var config = require("./config")

// Ouvindo eventos
// Esperando Request
// Essa função é um Listener // Handler
var server = express()

server.get("/", function(request, resposta){
    resposta.render("index.ejs")
})

server.get("/produtos", function(request, resposta){
    var livros = [
        {
            titulo: "Avanade",
            preco: 50,
            descricao: "kbjdlnkasdbjkas"
        },
        {
            titulo: "Avanade 2",
            preco: 60,
            descricao: "kbjdlnkasdbjkas"
        }
    ]
    
    resposta.render("produtos/lista.ejs", {
        livros: livros
    })
})

// Async não trava Thread principal
// Começou a pedir pro 
// Lambda // função anônima

var porta = config.CDC_PORT

server.listen(porta, function (){
    console.log("Rodando na porta " + porta) 
})
