const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const  Sequelize = require("sequelize");


    //config 
    //template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set("view engine", 'handlebars');


    //conexão com banco de dados mysql:
    const sequelize = new Sequelize('test', 'root', '525715',{
        host: "localhost",
        dialect: 'mysql'
    });

    //Rotas:

    app.get('/cad', function(req, res){
        res.send("Funcionou")
    })


app.listen(8081, function(){
    console.log("O servidor estar rodando da url http://localhost:8081")
});