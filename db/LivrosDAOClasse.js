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

module.exports = class LivrosDAO{
    constructor(conexao){
        this._conexao = conexao
    }

    salvar(livro) {
        return salvaLivro(this._conexao, livro)
    }

    lista() {
        return pegaLivros(this._conexao)
    }
}