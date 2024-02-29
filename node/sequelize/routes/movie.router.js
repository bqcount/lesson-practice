const router = require('express').Router()
const { getMovies, createMovies } = require('../controller/movie.controller.js')


router.get('', getMovies)
router.post('', createMovies)

module.exports = router