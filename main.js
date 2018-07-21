// Módulo server
var config = require("./config")

var server = require('./server')

// Async não trava Thread principal
// Começou a pedir pro 
// Lambda // função anônima

var porta = config.CDC_PORT

// Assíncrono esperando o SO
server.listen(porta, function (){
    console.log("Rodando na porta " + porta) 
})

