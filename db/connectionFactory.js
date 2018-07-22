var config = require('../config')


var mysql = require('mysql')
var connectionPool = mysql.createPool({
    database: config.DB_NAME, 
    user: config.DB_USER, 
    password: config.DB_PASSWORD,
    port: config.DB_PORT,
    host: config.DB_HOST
})

module.exports = {
    getConnection: function(){
        return new Promise(function(resolve, reject){

            connectionPool.getConnection(function(err, conexao){
                if(!err){
                    resolve(conexao)
                } else {
                    reject(err)
                }
            })

        })   
    }
}
