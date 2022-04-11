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
router.get("/Carmanagement", async (req,res)=>{
    await CarManagement.find()
    .then(result => {
        if(!result){
            res.json({
                status:"FAILED",
                message:"zero records"
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:`${result.length} cars found successfully`,
                data:result
            })
        }
    })
    .catch(error => {
        res.status(400).json({error: error})
    })
})
module.exports = router