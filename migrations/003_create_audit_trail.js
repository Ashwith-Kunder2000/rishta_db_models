module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('audit_trail', {
      id: { type: Sequelize.UUID, primaryKey: true },
      tableName: Sequelize.STRING,
      recordId: Sequelize.UUID,
      fieldName: Sequelize.STRING,
      oldValue: Sequelize.STRING,
      newValue: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('audit_trail');
  }
};