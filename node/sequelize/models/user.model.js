const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection.js') // Our connection's instance

const UserModel = sequelize.define('user', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        validate: {
            isInt: true, // Validation
            min: 5, // Validation
            max: 100 // Validation
        }
    }
    //,
    //email: {
     //   type: DataTypes.STRING,
        //allowNull: false,
      //  unique: true
   // }
})

async function createUser() {
	const newUser = await UserModel.create({ firstName: 'Iratze', age: '12' }, {
		fields: ['firstName'], // Only insert the 'firstName' value
		validate: false        // Don't run Sequelize validations
	})
	console.log(newUser)
}

module.exports = UserModel, createUser // Export the model definition so it can be used in other files

