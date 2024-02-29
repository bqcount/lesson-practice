const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection.js') // Our connection's instance

const MovieModel = sequelize.define('movie', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING
    }
    
})



module.exports = MovieModel // Export the model definition so it can be used in other files

