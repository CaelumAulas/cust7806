// Singleton
var connectionFactory = require('../db/connectionFactory')

function pegaLivros(conexao){
    return new Promise(function(resolve, reject){
        conexao.query('SELECT * from livros', function(err, livros){
            if(!err){
                resolve(livros)
            } else {
                reject(err)
            }
        })
    })
}

module.exports = function (server){    
    server.get("/produtos", function(request, resposta){
        connectionFactory.getConnection()
            .then(function(conexao){
                return pegaLivros(conexao)
            })
            .then(function(livros){
                resposta.render("produtos/lista.ejs", {
                    livros: livros
                })
            })
            .catch(function(erro){
                resposta.send(erro.message)
            })
        // try {
        //     var conexao = await connectionFactory.getConnection()
        //     var livros = await pegaLivros(conexao)
        //     resposta.render("produtos/lista.ejs", {
        //         livros: livros
        //     })
        // } catch (e){
        //     resposta.send(erro.message)
        // }
    })
}