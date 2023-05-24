
const jwt = require("jsonwebtoken")
const authen = (req,res,next)=>{
    const token = req.headers?.authorization?.split(" ")[1] || undefined
    if(token){
        try {
       const decoded = jwt.verify(token,"admin")
        if (decoded?.editorID) {
          const editorID = decoded.editorID;
          req.body.editorID = editorID;
          next();

        } else return res.send({ err: "please login" });
        } catch (error) {
            res.send({err:"Please Login"})
        }   
    }


    else return res.send({"err":"please login"})
    
}

module.exports = {authen}