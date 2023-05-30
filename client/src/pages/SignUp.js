import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import { registerUser ,adminActions} from '../store/adminSlice';
import Alert from '../components/Alert';



function SignUp() {
    const dispatch=useDispatch();
    const stateAlert=useSelector((state)=>state.admin.alert);
    console.log(stateAlert);

      

    const [signupData,setSignupData]=useState({fullName:'',email:'',password:"",cPassword:''})
    const [alert,SetAlert]=useState(false);
    const navigate = useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(signupData.password===signupData.cPassword){
            dispatch(registerUser(signupData));
            SetAlert(true);
            
        }else{
            dispatch(adminActions.addAlert({type:"unsuccess",title:"UnsuccessFull" ,message:" Password Not Matched"}))
            SetAlert(true);
        }
        
       
    }
    const signIn=()=>{
        dispatch(adminActions.removeAlert())
        navigate("/signin")

    }
    return (
    <form autoComplete='off' noValidate onSubmit={handleSubmit}>
    <div className='w-full h-screen bg-white flex items-center justify-center'>
        <div className='w-80 h-11/12 bg-white rounded-md p-4 flex flex-col justify-center shadow-xl'>
            <div className='flex items-center flex-col'>
                <h1 className='font-bold font-sans text-lg'>Create an Account</h1>
                <p className='text-sm font-sans text-grayy'>Already have an account?<span className='text-gray-800 hover:underline cursor-pointer' onClick={signIn}> Sign in?</span></p>
                {alert && <Alert type={stateAlert[0]} title={stateAlert[1]} message={stateAlert[2]}/>}
                <p className='flex flex-row w-full items-center py-4'>
                    <hr className='bg-grayy w-11/12 h-[1px]'/><span className='bg-white text-xs px-2 text-gray-500 font-sans'>OR</span><hr className='bg-grayy w-11/12 h-[1px]'/>                    
                </p>
            </div>
            <div className='flex flex-col space-y-2'>
            <p className='font-sans font-semibold text-gray-800 text-sm'>Fullname</p>
                    <input className='bg-gray-200 opacity-50 outline-none p-1 rounded-md'onChange={(e)=>setSignupData({...signupData,fullName:e.target.value})} type="text" />
                    <p className='font-sans font-semibold text-gray-800 text-sm'>Email</p>
                    <input className='bg-gray-200 opacity-50 outline-none p-1 rounded-md' onChange={(e)=>setSignupData({...signupData,email:e.target.value})} type="email" />
                    <p className='font-sans font-semibold text-gray-800 text-sm'>Password</p>
                    <input className='bg-gray-200 opacity-50 outline-none p-1 rounded-md'onChange={(e)=>setSignupData({...signupData,password:e.target.value})} type="password" />
                    <p className='font-sans font-semibold text-gray-800 text-sm'>Confirm Password</p>
                    <input className='bg-gray-200 opacity-50 outline-none p-1 rounded-md'onChange={(e)=>setSignupData({...signupData,cPassword:e.target.value})} type="password" />
                <div className='flex flex-row'>
                    <input className='cursor-pointer' type="checkbox" /><p className='text-xs px-1'>I Agree to the terms and conditions.</p>
                </div>
            </div>
            <div className='flex flex-col py-3'>
                <button type='submit' className='w-full bg-lightgreen rounded-md p-1 my-2 text-white hover:bg-darkgreen'>Submit</button>
                <button className='w-full bg-lightgreen rounded-md p-1 my-2 text-white hover:bg-darkgreen' onClick={() => navigate("/")}>Cancel</button>
            </div>
        </div>
    </div>
    </form>
  )
}

export default SignUp