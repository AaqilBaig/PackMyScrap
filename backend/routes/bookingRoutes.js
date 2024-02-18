const express = require('express')
const {
    getBookings,
    getOneBooking,
    createBooking,
    deleteBooking,
    updateBooking
} = require('../controllers/bookingControllers')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

router.get('/', getBookings)

router.get('/:id', getOneBooking)

router.post('/', createBooking)

router.delete('/:id', deleteBooking)

router.patch('/:id', updateBooking)

module.exports = router