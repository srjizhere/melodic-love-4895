const express =  require("express")
const multer = require("multer")
const jwt = require("jsonwebtoken")

const productRouter = express.Router()

const {ProductModel} = require("../model/products.model")


const Storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null,Date.now+file.originalname)
    }
})

const upload = multer({
    storage:Storage
}).single('logo')
// /Adminproducts/xyz

productRouter.get("/",async(req,res)=>{
    let editorID = req.body.editorID
    const data = await ProductModel.find({"editorID":editorID})
    res.send(data)
});



productRouter.post("/post",async (req,res)=>{

    try {
            upload(req,res,async(err)=>{
                if(err){
                    console.log(err)
                }else{
                    const adminProd = new ProductModel({
                     logo:{
                        data:req.file.filename,
                        contentType:'image/png'
                     },
                        
                    title:req.body.title,
                    category:req.body.category,
                    type:req.body.type,
                    price:req.body.price,
                    rating:req.body.rating,
                    editorID:req.body.editorID
                     })
                   await adminProd.save()
        
                }   
                })
        res.send({"msg" : "cproduct added  successfully"})
    } catch (error) {
        console.log(error)
        res.send({"err" : "Something went wrong"})
    }
    })

    productRouter.patch("/update/:cartID", async (req, res) => {
        const cartID = req.params.cartID
        const Userid = req.body.Userid
        const payload = req.body
        //console.log(payload);
        const note = await ProductModel.findOne({_id:cartID})
        if(Userid !== note.Userid){
            res.send("Not authorised")
        }
        else{
            await ProductModel.findByIdAndUpdate({_id : cartID},payload)
            res.send({"msg" : "cart updated successfully"})
        }
})

productRouter.delete("/delete/:cartID",async(req,res)=>{

    try {
        const cartID = req.params.cartID
    const Userid = req.body.Userid

    const cart = await ProductModel.findOne({_id:cartID})

    if(Userid !== cart.Userid){
        res.send("not authorised")
        
    }else{
        await ProductModel.findByIdAndDelete({_id:cartID})
        res.send("vart deleted successfully")
    }
    } catch (error) {
        console.log(error)
    }
    
    

})

module.exports = {productRouter}