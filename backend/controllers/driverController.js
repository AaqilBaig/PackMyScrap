const driverModel = require('../models/driverModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

const loginDriver = async (req, res) => {
    const { email, password } = req.body
    try {
        const driver = await driverModel.login(email,password)
        const token = createToken(driver._id)
        res.status(200).json({ email,token })
    }
    catch (error) {
        res.status(404).json({error: error.message})
    }
}

const signupDriver = async (req, res) => {
    const { email, password } = req.body
    try {
        const driver = await driverModel.signup(email, password)
        const token = createToken(driver._id)
        res.status(200).json({ email, token })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    loginDriver,
    signupDriver
}