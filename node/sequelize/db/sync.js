const UserModel = require('../models/user.model')

async function dbSync(){
    try {
        await UserModel.sync({alter: false})
        console.log('DB Sync successful')
    } catch (err) {
        console.error(err)
    }
}

module.exports = dbSync