import React ,{useEffect, useState}from 'react'
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux"
import {  adminActions, loginUser} from '../store/adminSlice';
import Alert from '../components/Alert';
function SignIn() {
  
  const dispatch=useDispatch();
  const stateAlert=useSelector((state)=>state.admin.alert);
  const [data,setData]=useState({email:'',password:"",role:'1'})
  const [alert,SetAlert]=useState(false);
  const navigate = useNavigate();

  useEffect(() => {
          

    if(stateAlert[0]==="success"){
    console.log("hello");
      navigate("/subscription")
    } else {
      navigate("/signin")
    }

  },[stateAlert[0]])

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(data.role==="1"){
      dispatch(loginUser(data));
      
      SetAlert(true);
      

       
    }else if(data.role==="2"){
       
    }else if(data.role==="3"){
      
    }
    
   
}
  return (
    <form autoComplete='off' noValidate onSubmit={handleSubmit}>
    <div className='w-full h-screen bg-white flex items-center justify-center'>
        <div className='w-80 h-11/12 bg-white rounded-md shadow-xl p-4 flex flex-col justify-center'>
            <div className='flex items-center flex-col'>
                <h1 className='font-bold font-sans text-lg'>Sign In To eScaff</h1>
                <p className='text-sm font-sans text-grayy'>New here?<span className='text-gray-800 hover:underline cursor-pointer' onClick={() => navigate('/signup')}> Sign up?</span></p>
                {alert && <Alert type={stateAlert[0]} title={stateAlert[1]} message={stateAlert[2]}/>}

            </div>
            <div className='flex flex-col space-y-2'>
              <p className='font-sans font-semibold text-gray-800 text-sm'>Email</p>
              <input className='bg-gray-200 opacity-50 outline-none p-1 rounded-md'onChange={(e)=>setData({...data,email:e.target.value})} type="email" />
              <p className='font-sans font-semibold text-gray-800 text-sm'>Password</p>
              <input className='bg-gray-200 opacity-50 outline-none p-1 rounded-md' onChange={(e)=>setData({...data,password:e.target.value})} type="password" />

              <p className='font-sans font-semibold text-white text-sm'>AA</p>
              <select className='bg-blue-50/90 p-1 outline-none' onChange={(e)=>setData({...data,role:e.target.value})} name="cars" id="cars">
                <option value="1">Admin</option>
                <option value="2">Customer</option>
                <option value="3">Staff</option>
              </select>

            </div>
            <div className='flex items-center flex-col py-3 pt-5'>
                <button type='submit' className='w-full bg-lightgreen rounded-md p-1 my-2 text-white hover:bg-darkgreen'>Continue</button>
                <p className='text-sm text-gray-700'>OR</p>
                <button className='w-full bg-lightgreen rounded-md p-1 my-2 text-white hover:bg-darkgreen' onClick={() => navigate("/")}>Cancel</button>
            </div>
        </div>
    </div>
    </form>

  )
}

export default SignIn