/* MYSQL
const mysql = require('mysql2')


const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    database: 'sakila',
    password: 'root'
});

const query = 'SELECT * FROM actor limit 3'

connection.query(query, (err, results, fields) => {
    if (err) console.log(err)
    console.log(results)  // results contains rows returned by server
    console.log(fields)   // fields contains extra metadata about results, if available
    return results
});

*/

require('dotenv').config()
const sequelize = require('./db/connection.js')
const dbSync = require('./db/sync.js')
const UserModel = require('./models/user.model.js')
const { Op } = require('sequelize')

async function checkDB() {
    try {
        await sequelize.authenticate()
        console.log('Connection succesful', sequelize.getDatabaseName())
        await dbSync()
        //sequelize.close()
    } catch (err) {
        console.error(err)
    }
}

checkDB().then(async () => {
    //UserModel.createUser()
    /* UserModel.create({ firstName: 'Iratze', age: '12' }, {
        fields: ['firstName'],
        validate: false
    }) */
    const users = await UserModel.findAll({
        /*
        where: {
            firstname: {
                [Op.like]: 'Iratze'
            },
        }
        */
        where: {
            firstname: 'Iratze'
        },
        limit: 10,
        offset: 0
    })
    const [{ dataValues }] = await users
    //await console.log(users[0].dataValues)
    await console.log(dataValues)
    //.then((newUser) => {
    //	console.log(newUser)
    //})
})