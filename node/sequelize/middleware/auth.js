const jwt = require('jsonwebtoken')

const UserModel = require('../models/user.model.js')

const checkAuth = (req, res, next) => {
    try {
        console.log(req.headers)
        if (!req.headers.authorization) return res.status(500).send('Unauthorized')

        jwt.verify(req.headers.authorization, process.env.JWT_SECRET, async (err, payload) => {
            if (err) return res.status(500).send('Unauthorized')
            const user = await UserModel.findOne({
                where: {
                    email: payload.email
                }
            })
            if (!user) return res.status(500).send('Unauthorized')

            console.log(payload)
            res.locals.user = user
            next()
        })
    } catch (err) {
        console.error(err)
        res.status(500).send('Unauthorized')
    }
}

module.exports = checkAuth