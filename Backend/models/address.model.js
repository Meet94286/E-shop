const mongoose = require("mongoose");

let addressSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    // required:true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  user: {
    type: Object,
  },
});

const Addresses = mongoose.model("adresses", addressSchema);

module.exports = Addresses;
