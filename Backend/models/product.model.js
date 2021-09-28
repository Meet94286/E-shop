const mongoose = require("mongoose")
require("mongoose-double")(mongoose);

var SchemaTypes = mongoose.Schema.Types;


let productSchema = new mongoose.Schema({
   
    availableItems:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    description:{
        type:String,
        required:true
    },
    imageURL:{
        type:String,
        required:true
    },
    manufacturer:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:SchemaTypes.Double,
        required:true

    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }
})

const Products = mongoose.model("products",productSchema);

module.exports = Products;