const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require('sequelize');

// Configuração do Handlebars
    app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');

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
        res.send('Rota de cadastro');
    });

// Inicialização do servidor
const PORT = process.env.PORT || 8081;
app.listen(PORT, function () {
    console.log(`O servidor está rodando na url http://localhost:${PORT}`);
});
