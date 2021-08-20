const mongoose = require("mongoose");

const orderSchema = {
  orderItems: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "OrderItem",
    require: true,
  },
  shippingAddress: {
    type: String,
  },
  phone: {
    type: Number,
    require: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
  totalPrice: {
    type: Number,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  notes: {
    type: String,
  },
};

orderSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

orderSchema.set("toJSON", {
  virtuals: true,
});

exports.Order = mongoose.model("Order", orderSchema);
