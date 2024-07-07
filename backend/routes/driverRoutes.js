const express = require('express')
const { loginDriver,signupDriver } = require('../controllers/driverController')

const router = express.Router()

router.post('/login', loginDriver)

router.post('/signup', signupDriver)

module.exports = router