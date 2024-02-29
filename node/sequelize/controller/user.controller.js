const MovieModel = require('../models/movie.model')
const UserModel = require('../models/user.model')


const getUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll()
        if(users.length === 0){
            res.status(404).send('No users found')
        }
        res.status(200).json(users)
    } catch (err) {
        console.error(err)
        res.status(500).send('Error getting user list')
    }
}

const createUsers = async (req, res) => {
    try {
        await UserModel.create(req.body)
        res.status(200).send('USER CREATED')
    } catch {
        console.error(err)
        res.status(500).send('Error creating user')

    }
}

const rateMovie = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.userId)
        const movie = await MovieModel.findByPk(req.params.movieId)
        await user.addMovie(movie), {through: { rating: req.body.rating }}
        res.status(200).send("Movie added")

    } catch (err) {
        console.error(err)
        res.status(500).send('Error rating movie')
    }
}

module.exports = { getUsers, createUsers, rateMovie }