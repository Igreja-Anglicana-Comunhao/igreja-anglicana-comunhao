const express = require('express');
const bodyParser = require('body-parser'); // Importe o módulo 'body-parser'.
const Post = require ('./models/Post')

const app = express();

// Templante engine
app.set('view engine', 'ejs');

// Template bodyParse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas

app.get('/', function(req,res){
    res.render('home')
})

// Rota para a página do usuário
app.get('/cad', function (req, res) {
    res.render('formulario');
});

/* Rota do tipo POST recebida pelo formulário
app.post('/add', function (req, res) {
    const titulo = req.body.titulo; //  atribuindo uma const ao titulo para imprimilo no res.send
    const conteudo = req.body.conteudo; // atribuindo uma const ao conteudo para imprimilo no res.send
    
    // Faça algo com os valores (por exemplo, salve-os no banco de dados).
    
    res.send("Formulário recebido! Título: " + titulo + " Conteúdo: " + conteudo);
});
*/

//Rota post para os dados irem para o banco
app.post('/add', function(req,res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
    //função para ver se o post deu certo
    .then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Houve um erro " + erro)
    })
})

// Inicialização do servidor
const PORT = process.env.PORT || 8081;
app.listen(PORT, function () {
    console.log(`O servidor está rodando na URL http://localhost:${PORT}`);
});
