const express = require('express').Router();
let User = require("../models/User");
const router = require('./CarmanagementRoute');


router.route("/add").post((req,res) =>{
    const username = req.body.username ;
    const nic = req.body.nic ;
    const email = req.body.email ;
    const password = req.body.password ;

    const NewUser = new User({
        username,
        nic,
        email,
        password,

    })

NewUser.save().then(()=>{
    res.json("User Added")
}).catch(()=>{
    console.log(err);
})

})

router.route("/display").get((req,res) =>{
    
    User.find().them((User)=>{
        res.json(User)
    }).catch((err)=>{
        console.log(err);
    })

    })

    router.route("/update/:id").put(async(req,res)=>{
        let userId = req.params.id;
        const{username,nic,email,password} =req.body;

        const updateUser = {
            username,
            nic,
            email,
            password
        }
        const update = await User.findByIdAndUpdate(userId,updateUser)
        .then(()=>{
            res.status(200).send({status : "User updated",user :update })
         }).catch((err)=>{
             console.log(err);
             res.status(500).send({status : "Error in updating data"});
         })
        })

        

module.exports = router;




