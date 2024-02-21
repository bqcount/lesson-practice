const { Sequelize } = require('sequelize')
require('dotenv').config()
console.log(process.env.DB_NAME)
console.log(process.env.DB_DIALECT)
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT
});

module.exports = sequelize

