//atribuir constantes 

const express = require('express');
const bodyParse = require('body-parser');
//importar os posts da classe 
const Doar = require('./models/Doar')
const app = express();


//Templates: 

    //ejs
    app.set('view engine', 'ejs');

    //bodyparser
    app.use(bodyParse.urlencoded({extended: false}));
    app.use(bodyParse.json());


//ROTAS:


app.get('/', function(req,res){
    res.render('Form');
})

app.get('/Obrigado', function(req,res){
    res.render('Aproved')
})

app.post('/add', function(req, res){
    
    Doar.create({

        Nome: req.body.Nome,
        Doacao: req.body.Doacao,
        email: req.body.email
    })
    .then(function(){
        res.redirect('/Obrigado')
    })
});

const PORT = process.env.PORT || 8085; ///porta que o servidor local vai ser aberto
app.listen(PORT, function () {
    //Retorno no console, exibindo a URL que o localhost esta hospedado
    console.log(`O servidor está rodando na URL http://localhost:${PORT}`);
});
