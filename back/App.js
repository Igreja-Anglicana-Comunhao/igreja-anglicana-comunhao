// Atribuir constantes
const express = require('express');
const bodyParser = require('body-parser'); // Corrigido o nome do módulo body-parser
const Doar = require('./models/Doar');
const app = express();

// Templates:
// EJS
app.set('view engine', 'ejs');

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.get('/', function (req, res) {
    res.render('Form');
});

app.get('/adm', function (req, res) {
    // Rota para a função home, que é um arquivo EJS
    Doar.findAll()
        .then(function (doar) { // Corrigido para 'doares' aqui para usar o nome no plural
            console.log(doar);
            res.render('adm', { doar: doar }); // Corrigido para 'doares' aqui para usar o nome no plural
        })
        .catch(function (erro) {
            console.error(erro);
            res.status(500).send("Ocorreu um erro ao buscar os doadores");
        });
});

