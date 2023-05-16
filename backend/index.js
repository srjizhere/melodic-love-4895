const express = require("express");

const app = express();
require('dotenv').config();
const cors = require('cors');

const {connection} = require("./config/db.js");

const {cartRouter} = require("./routes/cart.route.js");
//const {authentication} = require("./middleware/auth.js")
const {adminRouter}  = require("./routes/admin.route.js");
const {productRouter} = require("./routes/products.route.js");
//const {authen}   =  require("./middleware/editorauth.js")

const {ProductModel} = require("./model/products.model");
const { authentication } = require("./middleware/auth.js");
const { authen } = require("./middleware/editorauth.js");

app.use(express.json());

 
app.use(cors());


app.get("/",async(req,res)=>{
    const query = req.query
    console.log(query)
    const data = await ProductModel.find(query)
    res.send(data)
});
// app.post('/insert',async(req,res)=>{
//     let arr = req.body
// let ans  =await  ProductModel.insertMany(arr)
// console.log(ans);
// res.send({msg:"done"})
// })

app.use("/api",adminRouter);
app.use("/api/cart", cartRouter);
app.use("/api/adminproducts", productRouter);

app.listen(process.env.port, async()=>{
    try {
        await connection
        console.log("connected to db successfully")
    } catch (error) {
        console.log("error in getting connected to db")
        console.log(error)
    }
    console.log(`listening on port ${process.env.port}`)

})