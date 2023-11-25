/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cadastros', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: Sequelize.STRING,
      },
      valor: {
        type: Sequelize.STRING,
        allowNull: Sequelize.STRING,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: Sequelize.STRING,
      },
      projeto: {
        type: Sequelize.STRING,
        allowNull: Sequelize.STRING,
      },

    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('cadastros');
  },
};
