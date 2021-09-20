const mongoose = require("mongoose")
require("mongoose-double")(mongoose);

var SchemaTypes = mongoose.Schema.Types;


let productSchema = new mongoose.Schema({
    product_id:{
        type:Number,
    },
    available_items:{
        type:Number,
    },
    category:{
        type:String,
    },
    created:{
        type:Date,default:Date.now
    },
    description:{
        type:String,
    },
    image_url:{
        type:String,
    },
    manufacturer:{
        type:String,
    },
    name:{
        type:String,
    },
    price:{
        type:SchemaTypes.Double,
    },
    updated:{
        type:Date,
    }
})

const Products = mongoose.model("products",productSchema);

module.exports = Products;