const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', '525715', {
  host: 'localhost',
  dialect: 'mysql'
});



/*
FUNÇÃO PARA SABER SE O SEQUELIZE ESTA FUNCIOANDO 

OU SEJA, SABER SE ELE TA SE CONECTANDO DE MANEIRA CORRETA COM O BANCO DE DADOS

//essa função quando tenta se conectar ao banco de dados so pode ter duas saidas, deu certo ou deu errado
sequelize.authenticate().then(function() {
    console.log('Conectado com sucesso');
    //then é quando a conexão deu certo
}).catch(function(erro) {
    console.log('Falha ao conectar: ' + erro);
    //catch é quando a conexão deu errado
});
*/




const Postagem = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})


//Postagem.sync({force: true})


const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    }, 
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
});

//Usuario.sync({force: true})


//função para criar os atributos da tabela
const Doador = sequelize.define('doadores', {
    nome:{
        type: Sequelize.STRING
    }, 
    celular:{
        type: Sequelize.INTEGER
    }, 
    email:{
        type: Sequelize.STRING
    },
    maneiraDePagamento:{
        type: Sequelize.STRING
    }
});

//comando para criar tabela
//Doador.sync({force: true});

Doador.create({
    nome: "Humberto",
    celular: 11234,
    email: "humberto@gmail.com",
    maneiraDePagamento: "Cartão de credito"
})