const UserModel = require('../models/user.model.js')
const MovieModel = require('../models/movie.model.js')

async function dbSync(){
    try {
        await UserModel.sync({alter: false})
        await MovieModel.sync({alter: false})
        console.log('DB Sync successful')
    } catch (err) {
        console.error(err)
    }
}

module.exports = dbSync