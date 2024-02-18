const mongoose = require('mongoose')

const Schema = mongoose.Schema

    const bookingSchema = new Schema({
        material: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        user_id: {
            type: String,
            required: true
        }
    }, { timestamps: true })

    module.exports = mongoose.model('booking', bookingSchema)