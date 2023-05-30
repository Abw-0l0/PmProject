import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
const adminData= localStorage.getItem("adminData")!==null ? JSON.parse(localStorage.getItem("adminData")):{_id:"",email:"",fullName:"",isLoading:false,alert:[]} 
const config = {
    headers:{
        authorization: 'arham BnD3Tb4QN4xGzX85XQNH252qvb07K05MrAEgHblyOkssyHLXlqOTVqnpfH6lvhj',
    }
  };
export const registerUser = createAsyncThunk('/regiterUser',async(user)=>{
    const res = await axios.post("http://localhost:5000/admin/signup",user,config);
    return res.data;
})
export const loginUser = createAsyncThunk('/loginUser',async(user)=>{
    const res = await axios.post("http://localhost:5000/admin/login",user,config);
    return res.data;
})
export const savePriceList = createAsyncThunk('/savepriceList',async(user)=>{
    const res = await axios.post("http://localhost:5000/admin/savepricelist",user,config);
    return res.data;
})
export const fetchPriceList = createAsyncThunk('/fetchpriceList',async(user)=>{
    const res = await axios.post("http://localhost:5000/admin/fetchpricelist",{adminID:user},config);
    return res.data;
})
export const adminSubscribed = createAsyncThunk(`/subscribed`,async(user)=>{
    const res = await axios.patch(`http://localhost:5000/admin/subscibed/${user._id}`,user,config);
    return res.data;
})
const adminSlice=createSlice({
    name:"post",
    initialState:{
        _id:adminData._id,
        email:adminData.email,
        fullName:adminData.fullName,
        isLoading:adminData.isLoading,
        alert:adminData.alert,
        stripeCustomerId:adminData.stripeCustomerId,
        priceId:"price_1MZAvSL4AlFFiyI0GwvwIqaT",
        subscribed:adminData.subscribed
        
        

    },
    reducers:{
        addAlert(state,action){
            console.log(action);
            state.alert=[action.payload.type,action.payload.title,action.payload.message]


        },
        removeAlert(state,action){
            state.alert=[];
        }

    },
    extraReducers:{
        [registerUser.fulfilled]:(state,{payload})=>{
          
            
            state.alert=["success","Registered Successfully","kindly LogIn !"]
            

            
            
        },
        [registerUser.pending]:(state,{payload})=>{
          
            state.isLoading=true

            
        },
        [registerUser.rejected]:(state,{payload})=>{
            state.isLoading=false
          state.alert=["unsuccess","Unsuccessfull","E-mail is already registered !"]
            
            
            
        },
        [loginUser.fulfilled]:(state,{payload})=>{
            if(payload.message==="email"){

                state.alert=["unsuccess","Unsuccessfull","E-mail Not Found!"]
            }else if(payload.message==="password"){
                state.alert=["unsuccess","Unsuccessfull","Incorrect Password!"]
            }else{
                localStorage.setItem('adminData',JSON.stringify( {_id:payload._id,fullName:payload.fullName,email:payload.email,isLoading:false,alert:["success","LoggedIn Successfully!",""],subscribed:payload.subscribed}))

                state._id=payload._id
                state.fullName=payload.fullName
                state.email=payload.email
                state.isLoading=false
                state.alert=["success","LoggedIn Successfully!",""]
                state.subscribed=payload.subscribed
            }
           

            
            
        },
         [adminSubscribed.fulfilled]:(state,{payload})=>{
            localStorage.setItem('adminData',JSON.stringify( {_id:payload._id,fullName:payload.fullName,email:payload.email,isLoading:false,alert:["success","LoggedIn Successfully!",""],subscribed:payload.subscribed}))

            state.subscribed=payload.subscribed
            
            
            
        },
        [savePriceList.fulfilled]:(state,{payload})=>{

         
            
            
            
        },
    
    }
})

export const adminActions=adminSlice.actions;
export default adminSlice;