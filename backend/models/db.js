const Sequelize = require('sequelize');

// Definindo onde está o database
const sequelize = new Sequelize('sistemadedoacao', 'root', '525715', {
  host: 'localhost',
  dialect: 'mysql'
});

// Testar a comunicação com o banco
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão bem-sucedida');
  })
  .catch(err => {
    console.log('Erro ao se comunicar: ' + err);
  });

module.exports = {
  Sequelize, // A propriedade e a variável têm o mesmo nome, então você pode omitir a duplicação
  sequelize // A mesma otimização se aplica aqui
};
