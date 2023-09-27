const db = require('./db')
// o ./ serve para dizer que o arquivo esta no mesmo diretorio 

const Post = db.sequelize.define('postagens',{ //define o caminho do banco; 
    //Database postagens
    //e atribui os atributos do banco e seus tipos;
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

//função para criar um banco Post
//Post.sync({force: true})

//exportar o modulo Post;
module.exports = Post;