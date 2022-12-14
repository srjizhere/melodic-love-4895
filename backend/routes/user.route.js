const express =  require("express")
const bcrypt =  require("bcrypt")
const jwt = require("jsonwebtoken")

const userRouter = express.Router()

const {UserModel} = require("../model/users.model.js")

userRouter.post("/signup",async(req,res)=>{

    const {Name,email,password} = req.body
    const userPresent = await UserModel.findOne({email})

    if(userPresent){
        res.send({"msg":"try logging in user already present"})
    }
    try {
        bcrypt.hash(password, 6, async function(err, hash) {
            // Store hash in your password DB.
            const user  = new UserModel({Name,email,password:hash})
            await user.save()
            res.send({"msg":"signup successfull"})
        });
    } catch (error) {
        console.log("error in signing up")
        console.log(error)
    }
})


userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body

    try {
        const user = await UserModel.find({email})
        if(user.length>0){
            const hash_password  = user[0].password
            bcrypt.compare(password, hash_password, function(err, result) {
                // result == true
                if(result){
                    const token = jwt.sign({"Userid":user[0]._id},"push")
                    res.send({"msg":"login successfull","token":token})
                }else{
                    res.send({"msg":"login failed"})
                }
            });
        }else{
            res.send({"msg":"login failed"})
        }
    } catch (error) {
        res.send({"msg":"Something went wrong, please try again later"})
    }
})

module.exports = {userRouter}