const db = require('./db');
const { loadModels } = require('./models');

module.exports = {
  ...db,
  loadModels
};