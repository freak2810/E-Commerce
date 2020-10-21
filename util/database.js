const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-js-course', 'root', 'Sheena&mani01', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;