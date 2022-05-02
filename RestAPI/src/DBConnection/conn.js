const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://nuha:Mongo123@crud.fezih.mongodb.net/Rent4U")


.then(()=>{
    console.log("connection is setup successfully...")
}).catch((err)=>{
    console.log("connection not setup")
    console.log(err)

})

 


