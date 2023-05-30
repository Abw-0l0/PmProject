import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt"
const {isEmail} =validator;
const AdminSchema=mongoose.Schema({
    fullName:{type:String,required:true },
    email:{
        type:String,
        required:true,
        unique: true ,
        lowercase:true,
        validate:[isEmail,"Please enter valid email"]           
      },
    password:{
        type:String,
        required:true,
        minLength: 6                 },
    
    plan:{type:String,enum :['none','basic','pro'],default:"none" },
    stripeCutomerId:{
        type:String,
        required:true
    },
    subscribed:{type:Boolean,default:false}
})
AdminSchema.pre("save",async function(next){
    const salt= await bcrypt.genSalt();
    this.password=  await bcrypt.hash(this.password,salt);
    next()

})

const adminLogin = mongoose.model('adminLogin',AdminSchema);
 export default adminLogin;