const mongoose=require("mongoose");


const orderSchema= new mongoose.Schema({

productname:{
    type:String,
    minlength:3,
    required:true,
},

// date:{
//     type:new Date(),
//     minlength:2,
//     required:true,
// },

username:{
    type:String,
    minlength:3,
    required:true,
},

restaurantname:{
    type:String,
    minlength:3,
    required:true,
},

quantity:{
    type:Number,
    minlength:1,
    required:true,
},

price:{
    type:Number,
    minlength:2,
    required:true,
},

status:{
    type:String,
    minlength:5,
    required:true,
}

})

const Order=mongoose.model('Order',orderSchema);

module.exports=Order;