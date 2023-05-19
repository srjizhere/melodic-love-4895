const express =  require("express")
const bcrypt =  require("bcrypt")
const jwt = require("jsonwebtoken")

const adminRouter = express.Router()

const {AdminModel} = require("../model/admin.model.js")
//const {UserModel} = require("../model/users.model.js)



adminRouter.post("/signup",async(req,res)=>{
    const {name,email,password,role} = req.body
    const adminPresent = await AdminModel.findOne({email});
    if(adminPresent){
       return res.send({"err":`try logging in ${adminPresent.role} already present`})
    }
    try {
        bcrypt.hash(password, 6, async function(err, hash) {
            // Store hash in your password DB.
            const admin  = new AdminModel({name,email,password:hash,role})
            await admin.save()
           return res.send({"msg":"signup successfull"})
        });
    } catch (error) {
        res.status(401).send({"err":"some error in SignUp"})
        console.log("error in signing up")
        console.log(error)
    }
})


adminRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body

    try {
        const admin = await AdminModel.find({email})
        console.log(admin);
        const hash_password  = admin[0].password
        if(admin.length>0){
            if(admin[0].role == "admin"){
                bcrypt.compare(password, hash_password, function(err, result) {
                    // result == true
                    if(result){
                        const token = jwt.sign({"editorID":admin[0]._id},"admin")
                        res.send({"msg":"admin login successfull","token":token,role:"admin",name:admin[0].name})
                    }else{
                        res.send({"err":"login failed"})
                    }
                });
            }else if(admin[0].role == "user"){
                bcrypt.compare(password, hash_password, function(err, result) {
                    // result == true
                    if(result){
                        const token = jwt.sign({"Userid":admin[0]._id},"hush")
                        res.send({"msg":"user login successfull","token":token,role:"user",name:admin.name})
                    }else{
                        res.send({"err":"login failed"})
                    }
                });

            }
            
        }else {
            res.send({"err":"login failed"})
        }
    } catch (error) {
        res.send({"err":"Something went wrong, please try again later"})
    }
})

module.exports = {adminRouter}