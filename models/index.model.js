const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.user = require("./users.model");
db.product = require("./product.model")
db.orders = require("./orders.model")
module.exports=db