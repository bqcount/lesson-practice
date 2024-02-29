const router = require('express').Router()

const {signup, login} = require('../controller/auth.controller')

router.post('/login', login)
router.post('/signup', signup)

module.exports = router