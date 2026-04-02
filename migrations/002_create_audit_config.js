module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('audit_config', {
      id: { type: Sequelize.UUID, primaryKey: true },
      tableName: Sequelize.STRING,
      fieldName: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('audit_config');
  }
};