const { Sequelize } = require('sequelize');

let instance = null;

function initialise(connectionString) {
  if (instance) return instance;

  instance = new Sequelize(connectionString, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: { require: true, rejectUnauthorized: false }
    }
  });

  return instance;
}

function getInstance() {
  if (!instance) throw new Error('DB not initialized');
  return instance;
}

module.exports = { initialise, getInstance };