const MovieModel = require('../models/movie.model')


const getMovies = async (req, res) => {
    try {
        const movies = await MovieModel.findAll()
        if(movies.length === 0){
            res.status(404).send('No movies found')
        }
        res.status(200).json(movies)
    } catch (err) {
        console.error(err)
        res.status(500).send('Error getting movie list')
    }
}

const createMovies = async (req, res) => {
    try {
        const movie = await MovieModel.create(req.body)
        res.status(200).json(movie)
    } catch {
        console.error(err)
        res.status(500).send('Error creating movie')
    }
}

module.exports = { getMovies, createMovies }