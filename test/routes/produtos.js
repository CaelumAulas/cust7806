var server = require('../../server')
var supertest = require("supertest")
var request = supertest(server)

describe("/produtos", function(){

    it("retornar status 400 caso produto seja invalido", function(next){
        request.post("/produtos")
            .set({
                "Content-Type": "application/json"
            })
            .send({
                titulo: "",
                preco: null,
                descricao: ""
            })
            .expect(400, next)
    })


    it("listagem produtos volta JSON quando eu peço JSON", function(next){

            request.get("/produtos")
                .set({
                    "Accept": "application/json"
                })
                .expect("Content-Type", "application/json; charset=utf-8", next)
    })
})

