const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
  Userid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "admin",
  },
  productid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "product",
  },
});
const CartModel = mongoose.model("cart",cartSchema)

module.exports = {CartModel}