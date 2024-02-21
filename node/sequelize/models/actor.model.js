const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection.js') // Our connection's instance

const ActorModel = sequelize.define('actor', {
    /* firstName: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    } */
})

module.exports = ActorModel // Export the model definition so it can be used in other files

