const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tasks', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;