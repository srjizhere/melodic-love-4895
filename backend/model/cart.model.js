const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    logo:String,
    title:String,
    category:String,
    type:String,
    price:Number
})

const CartModel = mongoose.model("cart",cartSchema)

module.exports = {CartModel}