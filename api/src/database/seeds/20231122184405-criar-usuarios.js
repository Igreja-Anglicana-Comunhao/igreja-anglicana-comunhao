const bcryptjs = require('bcryptjs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [{
        nome: 'Administrador',
        email: 'Adm@igrejaanglicanacomunhao.com',
        password_hash: await bcryptjs.hash('Wx8~)82+O!ZjkA?', 8),
      }],
      {},
    );
  },

  down: () => {},
};
