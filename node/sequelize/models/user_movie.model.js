const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection.js') // Our connection's instance

const User_Movie = sequelize.define('user_movie', {
    rating: {
        type: DataTypes.FLOAT,
        validate: {
            min: 0,
            max: 10

        }
    },

})

module.exports = User_Movie