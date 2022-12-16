const express = require("express")

const app = express()
require('dotenv').config()

const {connection} = require("./config/db.js")

const {cartRouter} = require("./routes/cart.route.js")
const {authentication} = require("./middleware/auth.js")
const {adminRouter}  = require("./routes/admin.route.js")
const {productRouter} = require("./routes/products.route.js")
const {authen}   =  require("./middleware/editorauth.js")

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome to our ecommerce website")
})

app.use("/",adminRouter)
app.use(authentication)
app.use("/cart",cartRouter)
app.use(authen)
app.use("/products",productRouter)
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to db successfully")
    } catch (error) {
        console.log("error in getting connected to db")
        console.log(error)
    }
    console.log(`listening on port ${process.env.port}`)


})