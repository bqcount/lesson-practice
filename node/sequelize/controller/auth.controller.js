const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const UserModel = require('../models/user.model.js')

const signup = async (req, res) => {
    try {
        const saltRounds = await bcrypt.genSalt(parseInt(process.env.SALTROUNDS))
        req.body.password = await bcrypt.hash(req.body.password, saltRounds)
        const user = await UserModel.create(req.body)
        const token = jwt.sign({
            email: user.email
        }, process.env.JWT_SECRET)
        res.status(200).json({ token: token })
    } catch (err) {
        console.error(err)
        res.status(500).send('Cannot sign up')
    }
}

const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({
            where: {
                email: req.body.email
            }
        })

        if (user.email !== req.body.email) {
            return res.status(500).send('Email incorrect')
        }

        const comparePass = bcrypt.compareSync(req.body.password, user.password)

        if (!comparePass) {
            return res.status(404).json('Error: Password incorrect')
        }
        if (user.email !== req.body.email) {
            return res.status(500).send('Error: Email incorrect')
        }
        const token = jwt.sign({
            email: user.email
        }, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.status(200).json({ token: token })

    } catch (err) {
        console.error(err)
        res.status(500).send('Cannot log in')
    }
}


module.exports = {
    signup,
    login
}