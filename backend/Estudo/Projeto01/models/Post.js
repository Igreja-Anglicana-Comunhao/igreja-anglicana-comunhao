const db = require('./db')
// o ./ serve para dizer que o arquivo esta no mesmo diretorio 

const Post = db.sequelize.define('postagens',{
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

//Post.sync({force: true})

module.exports = Post;