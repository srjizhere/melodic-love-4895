const express = require("express");
const cartRouter = express.Router();

const { CartModel } = require("../model/cart.model.js");
const { PurchaseModel } = require("../model/purchase.model.js");

cartRouter.get("/", async (req, res) => {
  const Userid = req.body.Userid; // got from middleware
  const data = await CartModel.find({ Userid: Userid }).populate("productid");
  res.send(data);
});

cartRouter.post("/post", async (req, res) => {
  const Userid = req.body.Userid;
  const productid = req.body.productid;
  try {
    const new_cart = new CartModel({
      Userid,
      productid,
    });

    await new_cart.save();

    return res.send({ msg: "added to cart successfully" });
  } catch (error) {
    console.log(error);
    res.send({ err: "Something went wrong" });
  }
});

cartRouter.delete("/remove/:id", async (req, res) => {
  let id = req.params.id;
  console.log(id, "thisis a id");
  try {
    let removed = await CartModel.findByIdAndDelete(id);
    // console.log(removed);
    if (removed) {
      res.status(202).send({ msg: "Item removed" });
    } else {
      res.send({ err: "could not able to " });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ err: error.message });
  }
});

cartRouter.post("/buy", async (req, res) => {
  try {
    //const cartID = req.params.cartID
    const Userid = req.body.Userid;
    let Cartdata = await CartModel.find({ Userid: Userid }).exec()
 
    if (Cartdata.length) {
      Cartdata = Cartdata.map((obj) => {
        let doc =  obj._doc
        delete doc._id
        delete doc.__v
        return doc
      });
      console.log(Cartdata, "without Key");
    }
    let Purchased  = await PurchaseModel.insertMany(Cartdata)
    console.log(Purchased);
    let deletedDAta = await CartModel.deleteMany({"Userid":Userid})
    console.log(deletedDAta);
    res.send({ msg: "item Purchased successfully" });
  } catch (error) {
    console.log(error);
    res.send({"err":"something went worng"})
  }
});
cartRouter.get("/history",async(req,res)=>{
  let Userid = req.body.Userid
  try{
    let data = await PurchaseModel.find({ Userid }).populate("productid");
    res.send(data)
  }catch(err){
    console.log(err.stack);
    res.send({err:err.message})
  }
})

module.exports = { cartRouter };
