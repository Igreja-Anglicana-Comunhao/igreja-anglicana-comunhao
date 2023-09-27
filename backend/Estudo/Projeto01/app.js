const express = require("express");
const app = express();
const Sequelize = require('sequelize');


    app.set('view engine', 'ejs')


    // Configuração da conexão com o banco de dados
    const sequelize = new Sequelize('teste', 'root', '525715', {
        host: 'localhost',
        dialect: 'mysql'
    });

// Teste a conexão com o banco de dados
    sequelize
        .authenticate()
        .then(() => {
            console.log('Conexão com o banco de dados estabelecida com sucesso.');
        })
        .catch(err => {
            console.error('Erro ao conectar ao banco de dados:', err);
        });

    // Rotas
    app.get('/cad', function (req, res) {
        res.render('formulario');
    });

    //rotas ejs
    app.get('/inicio',function(req, res){
        res.render('inicio')
    });

// Inicialização do servidor
const PORT = process.env.PORT || 8081;
app.listen(PORT, function () {
    console.log(`O servidor está rodando na url http://localhost:${PORT}`);
});
