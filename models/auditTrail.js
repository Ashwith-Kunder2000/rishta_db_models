const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define('AuditTrail', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    tableName: DataTypes.STRING,
    recordId: DataTypes.UUID,
    fieldName: DataTypes.STRING,
    oldValue: DataTypes.STRING,
    newValue: DataTypes.STRING
  }, {
    tableName: 'audit_trail',
    timestamps: true
  });