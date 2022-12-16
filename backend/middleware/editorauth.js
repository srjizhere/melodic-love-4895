
const jwt = require("jsonwebtoken")


const authen = (req,res,next)=>{
    const token = req.headers?.authorization.split(" ")[1]

    if(token){
        const decoded = jwt.verify(token,"push")
        console.log(decoded)

        if(decoded){
            const Userid  = decoded.Userid
            req.body.Userid = Userid
            next()
        }else{
            res.send({"msg":"please login"})
        }
    }else{
        res.send({"msg":"please login"})
    }
}

module.exports = {authen}