const express =  require("express")
const jwt = require("jsonwebtoken")

const productRouter = express.Router()

const {ProductModel} = require("../model/products.model")

productRouter.get("/",async(req,res)=>{
    let editorID = req.body.editorID
    const data = await ProductModel.find({"editorID":editorID})
    res.send(data)
});



productRouter.post("/post",async (req,res)=>{
     const {logo,title,category,type,price,brand,editorID} = req.body
     if(!logo || !title || !category || !type || !price || !brand || !editorID){
       return  res.send({msg:"please fillout all details"})
     }
    try {
                    const adminProd = new ProductModel({
                     logo,
                    title,
                    category,
                    type,
                    price,
                    brand,
                    editorID
                     })
                   await adminProd.save();      
        return res.send({"msg" : "product added  successfully"})
    } catch (error) {
        console.log(error)
        res.send({"err" : "Something went wrong"})
    }
    })

    productRouter.patch("/update/:productID", async (req, res) => {
        const productID = req.params.productID
        const editorID = req.body.editorID
        const payload = req.body
        //console.log(payload);
        const note = await ProductModel.findOne({_id:productID})
        console.log(editorID,note.editorID);
        if(editorID != note.editorID){
           return res.status(401).send({err:"you are not authorised "})
        }
        else{
            await ProductModel.findByIdAndUpdate({_id : productID},payload)
           return  res.status(202).send({msg : "cart updated successfully"})
        }
})

productRouter.delete("/delete/:productID",async(req,res)=>{

    try {
        const productID = req.params.productID
    const editorID = req.body.editorID

    const cart = await ProductModel.findOne({_id:productID})

    if(editorID !== cart.editorID){
      return res.status(401).send({ msg: "you are not authorised " });
        
    }else{
        await ProductModel.findByIdAndDelete({_id:productID});
        res.send({ msg: "cart updated successfully" });
    }
    } catch (error) {
        console.log(error)
    }
    
    

})

module.exports = {productRouter}