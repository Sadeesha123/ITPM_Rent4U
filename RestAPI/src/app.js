const express = require('express')
const app = express()
const port = process.env.PORT || 8000
require("./DBConnection/conn")
const CarmanagementRoute = require("./Routers/CarmanagementRoute")

app.use(express.json())
app.use(CarmanagementRoute)

app.get('/Carmanagement', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    
    })


app.listen(port,() =>{
    console.log(`connection is setup at Port ${port}`)
})