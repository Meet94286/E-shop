const mongoose = require("mongoose");

let addressSchema = new mongoose.Schema({
    id:{
        type:Number,
       },
   city:{
        type:String,
       },
  landmark:{
        type:String,
       },
   name:{
        type:String,
       },
   phone:{
        type:String,
       },
   state:{
        type:String,
       },
   street:{
        type:String,
       },
   zipcode:{
        type:String,
       },
   user_id:{
        type:String,
       },
    
    
})



const Addresses = mongoose.model("adresses",addressSchema);

module.exports = Addresses;
