const Sequelize = require('sequelize');

// Configuração da conexão com o banco de dados
const sequelize = new Sequelize('postapp', 'root', '525715', {
    host: 'localhost',
    dialect: 'mysql'
});

// Teste a conexão com o banco de dados
sequelize
    .authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};