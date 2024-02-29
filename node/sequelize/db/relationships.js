const UserModel = require("../models/user.model")
const MovieModel = require("../models/movie.model")
const User_Movie = require("../models/user_movie.model")


const createRelationship = () => {
    MovieModel.belongsToMany(UserModel, {through: User_Movie})
    UserModel.belongsToMany(MovieModel, {through: User_Movie})

}

module.exports = createRelationship