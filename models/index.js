const { getInstance } = require('../db');

let models;

function loadModels() {
  if (models) return models;

  const sequelize = getInstance();

  const User = require('./user')(sequelize);
  const AuditConfig = require('./auditConfig')(sequelize);
  const AuditTrail = require('./auditTrail')(sequelize);

  models = { User, AuditConfig, AuditTrail };
  return models;
}

module.exports = { loadModels };