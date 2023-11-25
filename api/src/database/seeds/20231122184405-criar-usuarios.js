const bcryptjs = require('bcryptjs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [{
        nome: 'jaao',
        email: 'jaaosde@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
      }],
      {},
    );
  },

  down: () => {},
};
