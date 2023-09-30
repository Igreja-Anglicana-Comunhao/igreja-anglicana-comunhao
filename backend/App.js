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

app.get('/deletar/:id', function (req, res) {
    Doar.destroy({ where: { 'id': req.params.id } }).then(function () {
        res.send("Doador deletado");
    }).catch(function (erro) {
        res.send("Esse doador não existe");
    });
});

app.get('/Obrigado', function (req, res) {
    res.render('Aproved');
});

app.post('/add', function (req, res) {
    Doar.create({
        Nome: req.body.Nome,
        Doacao: req.body.Doacao,
        email: req.body.email
    })
        .then(function () {
            res.redirect('/Obrigado');
        })
        .catch(function (erro) {
            console.error(erro);
            res.status(500).send("Ocorreu um erro ao adicionar o doador");
        });
});

const PORT = process.env.PORT || 8085; // Porta que o servidor local vai ser aberto
app.listen(PORT, function () {
    // Retorno no console, exibindo a URL que o localhost está hospedado
    console.log(`O servidor está rodando na URL http://localhost:${PORT}`);
});
