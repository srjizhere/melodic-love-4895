const mongoose = require("mongoose");

const purchaseSchema = mongoose.Schema(
  {
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
  },
  {
    timestamps: true, // Add timestamps field
  }
);
// product;
// logo,title,category,type,price,brand
const PurchaseModel = mongoose.model("purchase",purchaseSchema)

module.exports = {PurchaseModel};

