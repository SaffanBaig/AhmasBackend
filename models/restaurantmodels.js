const mongoose=require("mongoose");


const restaurantSchema= new mongoose.Schema({

restaurantname:{
    type:String,
    minlength:3,
    required:true,
},

password:{
    type:String,
    minlength:3,
    required:true,
},

email:{
    type:String,
    minlength:5,
    required:true,
},

contact:{
    type:Number,
    minlength:10,
    required:true,
},

address:{
    type:String,
    minlength:8,
    required:true,
}

})

const Restaurant=mongoose.model('Restaurant',restaurantSchema);

module.exports=Restaurant;