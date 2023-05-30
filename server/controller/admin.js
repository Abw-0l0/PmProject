import mongoose from "mongoose";
import adminLogin from "../models/adminModel.js";
import priceList from "../models/priceList.js";
import bcrypt from "bcrypt"
import Stripe from "stripe";
import asyncHandler from "express-async-handler"

const stripe = new Stripe(process.env.STRIPE_PUBLISHABLE_KEY,{
    apiVersion:"2022-11-15"
})

 const products= {
      basic:'price_1MYyTOL4AlFFiyI0UXiDyj4v',
      pro:'price_1MYyWML4AlFFiyI035WeS9gU'
 }

export const admin=async (req,res)=>{
      const {fullName,email,password}=req.body;
    
console.log(req.body);
    try{
      const customer = await stripe.customers.create({
            email,
            description:"Escaff customer"
         },{
            apiKey:process.env.STRIPE_SECRET_KEY
         })
         const user = await  adminLogin.create({fullName,email,password,stripeCutomerId:customer.id})
        
         res.status(202).json({_id:user._id,email:user.email,password:user.password,stripeCutomerId:customer.id,subscribed:user.subscribed});

       
          
    }catch(error){
          res.status(404).json({message:error.message})
    }
}
export const payment=async (req,res)=>{
      const user= await adminLogin.findOne({email:req.body.email});
      console.log(user.stripeCutomerId);
      const session = await stripe.checkout.sessions.create({
            mode:"subscription",
            payment_method_types:["card"],
            line_items:[
                  {
                        price:req.body.priceId,
                        quantity:1
                  }
            ],
            subscription_data:{
                  trial_period_days:30
            },
            success_url:"http://localhost:3000/adminupload?session_id={CHECKOUT_SESSION_ID}",
             cancel_url:"http://localhost:3000/login?session_id={CHECKOUT_SESSION_ID}",
             customer:user.stripeCutomerId
      },{
            apiKey:process.env.STRIPE_SECRET_KEY
      })

    return res.json(session);
}

export const login=async (req,res)=>{
      const {email,password}=req.body;
    
console.log(req.body);
    try{
         const user = await  adminLogin.findOne({email})
         if(!user){
            res.status(202).send({message:"email"})
         }else{
            const isValid=await bcrypt.compare(password,user.password);
            if(isValid){
                 res.status(202).send(user);
            }else{
                 res.status(202).send({message:"password"})
            }
         }
                
    }catch(error){
          res.status(404).json({message:error.message})
    }
}
export const subscibed=async (req,res)=>{
      const {id : _id} =req.params;
      if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("no post with this id ")
console.log(req.body);
    try{
      const user=await adminLogin.findByIdAndUpdate(_id,{subscribed:true},{new:true})
      if(!user){
            res.status(202).send(user)
         }else{
            res.status(202).send(user)
         }
      
    }catch(error){
          res.status(404).json({message:error.message})
    }
}

export const helloworld=async (req,res)=>{

      res.status(201).json("helloworld");
    try{
          
    }catch(error){
          res.status(404).json({message:error.message})
    }
}

export const savePriceList = async (req, res)=>{
      const priceLists=req.body;

      const newPriceList= new priceList(priceLists);
      try {
            const result=await newPriceList.save();
            // console.log(result); 

            
      } catch (error) {
            res.json({message:error})
            
      }
};
export const fetchPriceList = asyncHandler(async (req, res)=>{
      const adminID=req.body.adminID;
      // if(!mongoose.Types.ObjectId.isValid(adminID)) return res.status(404).send("no post with this id ")
      console.log(adminID);
      
      try {
            const result=await priceList.findOne({adminID:adminID});
            res.status(202).json(result)
            

            
      } catch (error) {
            res.json({message:error})
            
      }
});