
import JWT from "jsonwebtoken";
export const checkAuth =async(req,res,next)=>{
 let token =req.header("authorization")
if(!token){
    return res.status(403).json({message:"you are unAuthorized"})
}


token= token.split(" ")[1]
try {
   
   if(token===process.env.JWT_SECRET){
    next();
   }
} catch (error) {
    res.status(403).json({message:"invalid token"})
}
// next()

}