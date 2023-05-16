const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  logo: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number},
  editorID: {type:mongoose.Schema.Types.ObjectId,required:true,ref:"admin"}
});
// product;
// logo,title,category,type,price,brand
const ProductModel = mongoose.model("product",productSchema)

module.exports = {ProductModel};

