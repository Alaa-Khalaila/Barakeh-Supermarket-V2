const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  isFeatured: {
    type: Boolean,
    default: true,
  },
});

exports.Product = mongoose.model("Product", productSchema);
