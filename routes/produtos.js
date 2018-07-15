module.exports = function (server){
    console.log("Produtos.js - CRIOU O SERVIDOR")

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
        
        // https://github.com/CaelumAulas/cust7806
        resposta.render("produtos/lista.ejs", {
            livros: livros
        })
    })
}