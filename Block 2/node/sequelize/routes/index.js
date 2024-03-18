const router = require('express').Router()

const AuthRouter = require('./auth.router.js')

const UserRouter = require('./user.router.js')
const MovieRouter = require('./movie.router.js')


router.use('/users', UserRouter)
router.use('/movies', MovieRouter)
router.use('/auth', AuthRouter)

module.exports = router