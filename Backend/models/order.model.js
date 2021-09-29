const mongoose = require("mongoose");
require("mongoose-double")(mongoose);

var SchemaTypes = mongoose.Schema.Types;

let orderSchema = new mongoose.Schema({
  orderId: {
    type: Number,
  },
  amount: {
    type: SchemaTypes.Double,
  },
  orderDate: {
    type: Date,
    default: Date.now(),
  },
  product: {
    type: Object,
  },
  address: {
    type: Object,
  },
  user: {
    type: Object,
  },
  quantity: Number,
  productId: {
    type: Number,
    required: true,
  },

  addressId: {
    type: Number,
    required: true,
  },
});

const Orders = mongoose.model("orders", orderSchema);

module.exports = Orders;
