const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingSchema = new Schema({

    name: {
        type:String,
        required: true
        
    },
    contact_no: {
        type:String,
        required: true,
                
    },
    email: {
        type:String,
        required: true,
        
    },
    handover_location: {
        type:String,
        required: true
    },
   
    handover_date: {
        type:String,
        required: true
    },
   
    handover_time: {
        type:String,
        required: true
    },

    return_date: {
        type:String,
        required: true
    },
   
   
   
}) 

const Booking =  mongoose.model('Booking', BookingSchema);

module.exports = Booking;