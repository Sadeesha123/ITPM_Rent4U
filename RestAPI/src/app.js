const express = require('express')
const cors = require("cors");
const app = express()
const port = process.env.PORT || 5000
require("./DBConnection/conn")
const dotenv = require('dotenv');
const CarmanagementRoute = require("./Routers/CarmanagementRoute")
const UserRoute = require("./Routers/UserRoute.js");
const authRoute = require('./Routers/auth')
const bookingRoute =require('./Routers/booking');
const BookingRoute = require("./Routers/BookingRoute.js");

dotenv.config()

app.use(express.json())
app.use(cors())
app.use(CarmanagementRoute)
app.use("/User",UserRoute);
app.use(BookingRoute)

app.get('/CarManagement', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    
    })
//Admin Route middlewares
app.use('/api/user',authRoute)
app.use('/api/booking',bookingRoute)

app.listen(port,() =>{
    console.log(`connection is setup at Port ${port}`)
})