const sequelize = require('../../database');
const Item = require('./Item');

const models = {
  Item
};

sequelize.sync({ alter: true });

module.exports = models;
