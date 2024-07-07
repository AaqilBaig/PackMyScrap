require('dotenv').config()
const express = require('express')
const userRoutes = require('./routes/userRoutes')
const bookingRoutes = require('./routes/bookingRoutes')
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000;

const app = express()

app.use(
    cors({
      origin: ["http://localhost:3000", "http://localhost:5173", "https://robofetch.onrender.com/"],
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
      allowedHeaders: 'Content-Type,Authorization'
    })
  );

app.use(express.json())

app.use('/auth', userRoutes)

app.use('/bookings', bookingRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to database')
        // listen to port
        app.listen(port, () => {
            console.log('listening for requests on port', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })
