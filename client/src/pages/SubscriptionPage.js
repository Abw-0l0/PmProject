import React, { useEffect } from 'react'
import logo from '../pictures/TheBestescafflogo.png'
import recom from '../pictures/recomme.png'
import pay from '../pictures/pay.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
function SubscriptionPage() {
  const email=useSelector((state)=>state.admin.email);
  const priceId=useSelector((state)=>state.admin.priceId);
  const createSession=async()=>{
      
      const {data:response}= await axios.post("http://localhost:5000/admin/payment",{priceId,email},{
          headers:{
              authorization: 'arham BnD3Tb4QN4xGzX85XQNH252qvb07K05MrAEgHblyOkssyHLXlqOTVqnpfH6lvhj',
          
          }
        })
      window.location.href=response.url;
       
  }
  const subscribed=useSelector((state)=>state.admin.subscribed);

    const navigate = useNavigate();
    useEffect(() => {
        if(subscribed===true){
    
          navigate("/adminupload")
        }
       
    
      },[])
    return (
    <div className='w-full h-screen'>
        <header className='border-b-2 border-darkgray w-full h-[155px] xxl:h-[220px] absolute top-0'>
            <img className='w-[280px] h-[100px] xxl:w-[390px] xxl:h-[150px] bottom-[16px] ml-20 xxl:ml-26 absolute left-[40px]' src={logo} alt="logo" />
            <div className='w-full absolute bottom-0'>
                <button onClick={() => navigate("/signup")} className='absolute right-48 z-40 xxl:right-72 bottom-[0px] border-t-2 border-darkgray border-x-2 w-[150px] h-[28px] xxl:w-[250px] xxl:h-[40px] rounded-t-lg text-[11px] xxl:text-[20px] hover:bg-lightgreen'>Login/Signup</button>
            </div>
        </header>
        <div className='flex flex-col h-full w-full items-center xxl:space-y-2 justify-center pt-16 '>
            <img className='w-44 h-26 xxl:w-56 xxl:h-26 mb-1' src={recom} alt="" />
            <div className='flex flex-col w-60 xxl:w-96 xxl:h-[470px] h-fit border-2 p-2 xxl:p-5 space-y-1 rounded-lg justify-between items-center'>
                <h1 className='font-bold font-mono text-gray-600 text-lg xxl:text-3xl'>PRO Packages</h1>
                <p className='text-[10px] xxl:text-[17px] text-gray-600'>This package is aimed at the smaller business user</p>

                <div className='flex items-start w-full pt-1 text-gray-600'>
                    <p className='font-sans text-sm xxl:text-base xxl:ml-1'>
                        Single User Login<br/>
                        Two User Remote Login<br/>
                        Email Support<br/>
                        Access to online FAQ's<br/>
                        Telephone Support
                    </p>
                </div>

                <p className='text-gray-600 xxl:text-xl'>£ 890.0</p>
               
                <button onClick={()=>createSession(email,priceId)} className='w-10/12 p-1 xxl:text-xl bg-grayy text-gray-600 border-2 border-gray-400 rounded-md hover:bg-slate-600/50 hover:shadow-md'>Select</button>
                <img className='w-52' src={pay} alt="" />
            </div>
        </div>
    </div>
  )
}

export default SubscriptionPage