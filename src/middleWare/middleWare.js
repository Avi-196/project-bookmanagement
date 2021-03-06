const jwt =require("jsonwebtoken")
const middleWare=require("../middleWare/middleWare")

const authenticate=async function (req,res,next){
    try{
    let token=req.headers["x-api-key"]
    if(!token){
        return res.status(400).send({status:false,msg:"token is required"})
    }
    let decodetoken=jwt.verify(token,"project3-group37-booksmanagement")
    if(!decodetoken){
        return res.status(400).send({status:false,msg:"please enter the right token"})
    }

      req.userId=decodetoken.userId

     next()
    
    }
   catch(error){
       return res.status(500).send({status:false,msg:error.message})

   }

}







module.exports.authenticate=authenticate