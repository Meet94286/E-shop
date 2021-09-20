const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    userid:{
        type:Number,
        required:true,
        unique:true
    },
    created:{
        type:Date,
        required:true,default:Date.now
    },
    email:{
        type:String,
        required:true,
    },
    
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    phone_number:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    updated:{
        type:Date,
        required:true,
    },
    user_name:{
        type:String,
        required:true
    }
})

userSchema.pre("save",function(next){
 this.user_name = this.first_name + this.last_name;
 next();
})


const Users = mongoose.model("users",userSchema);

module.exports = Users;
