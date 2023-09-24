const express = require("express");
const app = express();


/*criando rotas!


app.get("/", function(req,res){
    //req referesse a requisição
    //res é o objeto ultilizado para mandar informação para o cliente
    res.send("Seja bem vindo!")
})

app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre")
})

app.get("/Blog", function(req, res){
    res.send("Seja bem vindo ao meu blog")
})
*/

/*
Parametros


app.get("/:nome/:cargo", function(req, res){
    res.send(req.params)
    //vai mostrar os parametros que foram passados
})

app.get("/ola/:nome/:cargo", function(req, res){
    res.send( "Seja bem vido "+ req.params.nome + "!! Voce possui o cargo de " + req.params.cargo)
});
*/

/*

Usando html
app.get("/", function(req,res){
    res.sendFile(__dirname+ "/html/index.html")
});

app.get("/Sobre", function(req,res){
    res.sendFile(__dirname + "/html/Sobre.html")
})

*/

app.listen(8081, function(){
    console.log("Servidor esta rodando na url http://localhost:8081")
});
//localhost:8081
//função de callback