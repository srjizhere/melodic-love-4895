const express = require("express")

const app = express()
require('dotenv').config()

const {connection} = require("./config/db.js")
const {userRouter} = require("./routes/user.route.js")
const {cartRouter} = require("./routes/cart.route.js")
const {authentication} = require("./middleware/auth.js")
const {adminRouter}  = require("./routes/admin.route.js")

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome to our ecommerce website")
})
app.use("/user",userRouter)
app.use("/admin",adminRouter)
app.use(authentication)
app.use("/cart",cartRouter)
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