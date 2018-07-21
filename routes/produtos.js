module.exports = function (server){
    console.log("Produtos.js - CRIOU O SERVIDOR")

    server.get("/produtos", function(request, resposta){

        var config = require('../config')

        var mysql = require('mysql')
        var conexao = mysql.createConnection({
            database: config.DB_NAME, 
            user: config.DB_USER, 
            password: config.DB_PASSWORD,
            port: config.DB_PORT,
            host: config.DB_HOST
        })

        // Assíncrono
        // Callback
        conexao.query('SELECT * FROM livros', function processaResultados(erro, livros){
            conexao.end()            
            if(!erro) {
                resposta.render("produtos/lista.ejs", {
                    livros: livros
                })
            } else {
                resposta.send(erro)
            }
        })
        
    })
}