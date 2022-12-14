const express =  require("express")
const multer = require("multer")
const jwt = require("jsonwebtoken")

const cartRouter = express.Router()

const {CartModel} = require("../model/cart.model.js")


const Storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null,Date.now+file.originalname)
    }
})

const upload = multer({
    storage:Storage
}).single('logo')

cartRouter.post("/post",async (req,res)=>{

    try {
        const token = req.headers?.authorization.split(" ")[1]

    if(token){
        const decoded = jwt.verify(token,"push")

        if(decoded){
            const Userid  = decoded.Userid
            req.body.Userid = Userid

            upload(req,res,async(err)=>{

                if(err){
                    console.log(err)
                }else{
                    const new_cart = new CartModel({
                     logo:{
                        data:req.file.filename,
                        contentType:'image/png'
        
                     },   
                    title:req.body.title,
                    category:req.body.category,
                    type:req.body.type,
                    price:req.body.price,
                    rating:req.body.rating,
                    Userid:Userid
                    
                        })
                        await new_cart.save()
        
                }
                    
                })
            
        }else{
            res.send({"msg":"please login"})
        }
    }else{
        res.send({"msg":"please login"})
    }

   


        

        res.send({"msg" : "cart created successfully"})
    } catch (error) {
        console.log(error)
        res.send({"err" : "Something went wrong"})
    }
    })

    cartRouter.patch("/update/:cartID", async (req, res) => {
        const cartID = req.params.cartID
        const Userid = req.body.Userid
        const payload = req.body
        const note = await NoteModel.findOne({_id:cartID})
        if(Userid !== note.Userid){
            res.send("Not authorised")
        }
        else{
            await NoteModel.findByIdAndUpdate({_id : cartID},payload)
            res.send({"msg" : "cart updated successfully"})
        }
})

cartRouter.delete("/delete/:cartID",async(req,res)=>{
    
    const cartID = req.params.cartID

    const cart = await CartModel.findOne({_id:cartID})

    if(cartID == task.Userid){
        await CartModel.findByIdAndDelete({_id:CartID})
        res.send("vart deleted successfully")
    }else{
        res.send("not authorised")
    }

})

module.exports = {cartRouter}