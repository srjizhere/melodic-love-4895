const express =  require("express")

const cartRouter = express.Router()

const {CartModel} = require("../model/cart.model.js")


cartRouter.post("/post",async (req,res)=>{

    const payload = req.body

    try {
        const new_cart = new CartModel(payload)

        await new_cart.save()

        res.send({"msg" : "cart created successfully"})
    } catch (error) {
        console.log(err)
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