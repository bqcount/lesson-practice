const router = require('express').Router()
const { getUsers, createUsers, rateMovie } = require('../controller/user.controller.js')
const checkAuth = require('../middleware/auth.js')



router.get('', checkAuth, getUsers)
router.post('', createUsers)
router.put('/:userId/movies/:movieId', rateMovie)

module.exports = router
