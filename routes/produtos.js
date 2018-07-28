// Singleton
var connectionFactory = require('../db/connectionFactory')

var LivrosDAO = require('../db/LivrosDAO')

module.exports = function (server){    
    server.get("/produtos", async function(request, resposta, next){
        try {
            var conexao = await connectionFactory.getConnection()

            var livrosDAO = new LivrosDAO(conexao)

            var livros = await livrosDAO.lista()

            conexao.release()

            resposta.format({
                html: () => resposta.render("produtos/lista.ejs", {
                    livros: livros
                })
                ,json: () => resposta.send({livros: livros})
            })
            
        } catch (erro){
            next(erro)
        }
    })

    server.get("/produtos/form", function(request, resposta){
        resposta.render("produtos/form.ejs", {validationErrors: []})
    })

    server.post("/produtos", async function(request, resposta, next){
        var livro = request.body
        
        request.assert("titulo", "Título inválido").notEmpty()
        request.assert("preco", "Preço obrigatório").notEmpty()
        request.assert("preco", "Preço inválido").isNumeric()
        
        try {
            await request.asyncValidationErrors()

            var conexao = await connectionFactory.getConnection()

            try {
                var livrosDAO = new LivrosDAO(conexao)

                await livrosDAO.salvar(livro)
                conexao.release()

                resposta.redirect("/produtos")
            } catch(erroDB) {
                next(erroDB)
            }

        } catch(validationErrors) {
            resposta.status(400).render("produtos/form.ejs", {validationErrors})
        }
    })
}