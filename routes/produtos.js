// Singleton
var connectionFactory = require('../db/connectionFactory')

var LivrosDAO = require('../db/LivrosDAO')

module.exports = function (server){    
    server.get("/produtos", async function(request, resposta){
        try {
            var conexao = await connectionFactory.getConnection()
            
            var livrosDAO = LivrosDAO(conexao)
            var livros = await livrosDAO.lista()

            conexao.release()

            resposta.render("produtos/lista.ejs", {
                livros: livros
            })
        } catch (erro){
            resposta.send(erro.message)
        }
    })

    server.get("/produtos/form", function(request, resposta){
        resposta.render("produtos/form.ejs", {validationErrors: []})
    })

    server.post("/produtos", async function(request, resposta){
        var livro = request.body
        
        request.assert("titulo", "Título inválido").notEmpty()
        request.assert("preco", "Preço obrigatório").notEmpty()
        request.assert("preco", "Preço inválido").isNumeric()
        
        try {
            await request.asyncValidationErrors()

            var conexao = await connectionFactory.getConnection()

            try {

                var livrosDAO = LivrosDAO(conexao)
                await livrosDAO.salvar(livro)

                conexao.release()

                resposta.redirect("/produtos")
            } catch(erroDB) {
                resposta.send(erroDB)
            }

        } catch(validationErrors) {
            resposta.render("produtos/form.ejs", {validationErrors})
        }
    })
}