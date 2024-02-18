const bookingModel = require('../models/bookingModel')
const mongoose = require('mongoose')

const getBookings = async (req, res) => {
    const user_id = req.user._id
    const bookings = await bookingModel.find({user_id});
    res.json(bookings)
}

const getOneBooking = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such booking'})
    }

    const booking = await bookingModel.findById(id)

    if(!booking) {
        return res.status(404).json({error: 'no such booking'})
    }

    res.status(200).json(booking)
}

const createBooking = async (req, res) => {
    const {material,phone,date,time,address} = req.body
    let emptyFields = []

    if (!material) {
      emptyFields.push('material')
    }
    if (!phone) {
        emptyFields.push('phone')
      }
    if (!date) {
      emptyFields.push('date')
    }
    if(!time) {
        emptyFields.push('time')
    }
    if(!address) {
        emptyFields.push('address')
    }
    if (emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    try {
        const newBooking = await bookingModel.create({material,phone,date,time,address,user_id: req.user._id})
        res.status(200).json(newBooking)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const deleteBooking = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such bookings'})
    }

    const booking = await bookingModel.findOneAndDelete({_id: id})

    if(!booking) {
        return res.status(404).json({error: 'no such bookings'})
    }
    res.status(200).json({booking})
}

const updateBooking = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such booking'})
    }

    const booking = await bookingModel.findOneAndUpdate({_id: id}, {...req.body})

    if(!booking) {
        return res.status(404).json({error: 'no such booking'})
    }
    res.status(200).json({booking})
}

module.exports = {
    getBookings,
    getOneBooking,
    createBooking,
    deleteBooking,
    updateBooking
}