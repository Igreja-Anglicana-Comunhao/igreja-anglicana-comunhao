const db = require('./db');

const Doar = db.sequelize.define('Doador', {
    Nome: {
        type: db.Sequelize.STRING // Correção aqui
    },
    Doacao: {
        type: db.Sequelize.STRING
    }, 
    email: {
        type: db.Sequelize.TEXT
    }
});

//Doar.sync({force: true})
module.exports = Doar;
