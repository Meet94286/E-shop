const mongoose = require("mongoose");
require("mongoose-double")(mongoose);

var SchemaTypes = mongoose.Schema.Types;

let orderSchema = new mongoose.Schema({
    orderid:{
        type:Number,
    },
    amount:{
        type:SchemaTypes.Double,
    },
    order_date:{
        type:Date,
    },
    product_product_id:{
        type:Number,
    },
    shipping_adderess_id:{
        type:Number,
    },
    user_id:{
        type:Number,
    }
    
})

const Orders = mongoose.model("orders",orderSchema);

module.exports = Orders;