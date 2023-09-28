const express = require('express');
const bodyParser = require('body-parser'); // Importe o módulo 'body-parser'.
const Post = require ('./models/Post') //importar o banco de dados e criar os atributos do banco de dados.

const app = express(); //atribuir a função do express a uma variavel

//TEMPLATE NECESSARIO PARA O SISTEMA PRINCIPAL

// Templante engine
app.set('view engine', 'ejs'); //template de view engine com a ferramente do ejs

// Template bodyParse
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); //transformar o texto do body-parse em um arquivo json

// Rotas




//Rota get inrelevante para o sistema pricipal
app.get('/', function(req,res){ //rota para a função home, que é um arquivo ejs
    Post.findAll()
        .then(function(post){
            console.log(post)
            res.render('home', {post: post})
        })
})





// Rota para a página do usuário
app.get('/cad', function (req, res) {
    res.render('formulario'); //vai redenrizar o formulario
});






//Teste de post, para ver se ta dando m retorno

/* Rota do tipo POST recebida pelo formulário
app.post('/add', function (req, res) {
    const titulo = req.body.titulo; //  atribuindo uma const ao titulo para imprimilo no res.send
    const conteudo = req.body.conteudo; // atribuindo uma const ao conteudo para imprimilo no res.send
    
    // Faça algo com os valores (por exemplo, salve-os no banco de dados).
    
    res.send("Formulário recebido! Título: " + titulo + " Conteúdo: " + conteudo);
});
*/




//Rota necessaria 
//Rota post para os dados irem para o banco
app.post('/add', function(req,res){
    //criar uma tabela com Post, que sera atribuida ao banco de dados
    Post.create({

        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
    //função para ver se o post deu certo
    //caso a função de certo, o usuario vai ser redirecionado para outra aba
    .then(function(){
        res.redirect('/')
    })

    //caso der certo, vai aparecer uma mensagem informando o seu erro 
    .catch(function(erro){
        res.send("Houve um erro " + erro)
    })
})







// Inicialização do servidor
const PORT = process.env.PORT || 8082; ///porta que o servidor local vai ser aberto
app.listen(PORT, function () {
    //Retorno no console, exibindo a URL que o localhost esta hospedado
    console.log(`O servidor está rodando na URL http://localhost:${PORT}`);
});
