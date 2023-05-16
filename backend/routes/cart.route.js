
const express =  require("express")
const cartRouter = express.Router();

const {CartModel} = require("../model/cart.model.js");

cartRouter.get("/",async(req,res)=>{
    const Userid = req.body.Userid   // got from middleware 
    const data = await CartModel.find({ Userid: Userid }).populate("productid");
    res.send(data)
})

  



cartRouter.post("/post",async (req,res)=>{
    const Userid= req.body.Userid;
    const productid = req.body.productid;
    try {
                    const new_cart = new CartModel({
                        Userid,
                        productid
                        });

                await new_cart.save();
                              
       return res.send({"msg" : "added to cart successfully"});
    } catch (error) {
        console.log(error)
        res.send({"err" : "Something went wrong"})
    }
    })

    

cartRouter.delete("/delete",async(req,res)=>{
    try {
        //const cartID = req.params.cartID
    const Userid = req.body.Userid

     await CartModel.deleteMany({"Userid":Userid})

   
        res.send({msg:"item deleted successfully"})
    
    } catch (error) {
        console.log(error)
    } 
})

module.exports = {cartRouter}