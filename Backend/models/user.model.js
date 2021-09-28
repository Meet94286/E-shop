const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

let userSchema = new mongoose.Schema({
   
    
    email:{
        type:String,
        required:true
      },
    
    firstName:{
        type:String,
       required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
       required:true
    },
    role :{
        type:String,
        default:"user",
       },
    token: {
        type:String,
    },
    isAuthenticated:{
        type:Boolean
    },
    name:String
    
    
    
},{timestamps:true})

userSchema.pre("save",function(next){
 this.name = this.firstName + " " + this.lastName;
 next();
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
      { _id: this._id, isAuthenticated: this.isAuthenticated },
      "myprivatekey"
    );
    return token;
  };


const Users = mongoose.model("users",userSchema);

module.exports = Users;
