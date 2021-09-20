const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");

const db ={};
db.mongoose = mongoose;
db.adresses = require("./address.model")(mongoose);
db.orders = require("./order.model")(mongoose);
db.products = require("./product.model")(mongoose);
db.users = require("./user.model")(mongoose);

module.exports = db;