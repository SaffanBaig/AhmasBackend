const mongoose=require("mongoose");


const loginSchema= new mongoose.Schema({

username:{
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

const User=mongoose.model('User',loginSchema);

module.exports=User;