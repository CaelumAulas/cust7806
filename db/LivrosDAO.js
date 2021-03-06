function pegaLivros(conexao){
    return new Promise(function(resolve, reject){
        conexao.query('SELECT * from Livros', function(err, livros){
            if(!err){
                resolve(livros)
            } else {
                reject(err)
            }
        })
    })
}

function salvaLivro(conexao, livro){
    return new Promise(function(resolve, reject){
        conexao.query("INSERT INTO livros SET ?", livro, function(err){
            if(!err){
                resolve()
            } else {
                reject(err)
            }
        })
    })
}

module.exports = function(conexao){
    return {
        salvar: (livro) => salvaLivro(conexao, livro)
        ,lista: () => pegaLivros(conexao)
    }
}