const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define('AuditConfig', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    tableName: DataTypes.STRING,
    fieldName: DataTypes.STRING
  }, {
    tableName: 'audit_config',
    timestamps: true
  });