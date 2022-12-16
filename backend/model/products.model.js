
const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    logo:{
        data:Buffer,
        contentType:String
    },
    
    title:String,
    category:String,
    type:String,
    price:Number,
    rating:Number,
    Userid:String
})

const ProductModel = mongoose.model("product",productSchema)

module.exports = {ProductModel}