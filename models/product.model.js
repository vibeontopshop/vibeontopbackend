const mongoose = require('mongoose');
const Product = mongoose.model(
    "Product",
    new mongoose.Schema({
        name: {
            type: String,
          },
          description:{
            type: String,
          },
          price: {
            type: Number,
          },
          oldPrice: {
            type: Number,
          },
          rating: {
            type: Number,
          },
          reviews: {
            type: Number,
          },
          discount: {
            type: Number,
          },
          images: {
            type: [String],
          },
}, {
    timestamps: true,
    })
);

module.exports = Product