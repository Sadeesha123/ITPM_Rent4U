const express = require('express')
const CarManagement = require("./../models/Carmanagement")

const router = express.Router();

router.post("/Carmanagement", async (req,res)=>{
    console.log(req.body)
    const data = new CarManagement(req.body)
    const result = await data.save()

    if(!result){
        res.json({
            status:"FAILED",
            message:"car is not register successfully"
        })
    }
    else{
        res.json({
            status:"SUCCESS",
            message:"car register successfully ",
            data:result
        })
    }
})

module.exports = router