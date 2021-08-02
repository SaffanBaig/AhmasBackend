const mongoose=require("mongoose");


const paymentSchema= new mongoose.Schema({


username:{
    type:String,
    minlength:3,
    required:true,
},

paymentmethod:{
    type:String,
    minlength:3,
    required:true,
},


price:{
    type:Number,
    minlength:2,
    required:true,
},

status:{
    type:String,
    minlength:3,
    required:true,
},

},
{
    timestamps:true,
})

const Payment=mongoose.model('Payment',paymentSchema);

module.exports=Payment;