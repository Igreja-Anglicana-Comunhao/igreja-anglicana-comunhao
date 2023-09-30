const db = require('./db');

const Doar = db.sequelize.define('doador', {
    Nome: {
        type: db.Sequelize.STRING // Correção aqui
    },
    Doacao: {
        type: db.Sequelize.STRING
    }, 
    email: {
        type: db.Sequelize.STRING
    }
});

//Doar.sync({force: true})
module.exports = Doar;
