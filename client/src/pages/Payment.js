import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Payment() {
    const navigate = useNavigate();
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


    return (
    <div className='w-full h-screen bg-gray-50/90 flex items-center justify-center'>
        <div className='w-[80%] sm:w-[50%] xl:w-[22%] lg:w-[40%] h-11/12 bg-white rounded-md shadow-xl p-4 flex flex-col justify-center'>
            <div className='flex flex-col w-full items-start pl-3 justify-center'>
                <div className='flex flex-col w-full sm:w-11/12 lg:w-2/4 h-fit pb-4 pl-1 space-y-3'>
                    <p onClick={() => navigate('/subscription')} className='flex items-center w-full text-gray-700 text-sm xxl:text-xl -ml-0 sm:-ml-5 text-center pb-2 hover:underline cursor-pointer'><ArrowBackIcon sx={{width:25,height:15}}/> Back</p>
                    <p className='text-xs text-gray-700 flex flex-col xxl:text-xl'>
                        Subscribe to eScaff - Basic<br/>
                        <span className='text-lg sm:text-2xl flex flex-col sm:flex-row xxl:text-4xl'>
                            £588.00
                            <span className='flex flex-row text-xs pl-0 sm:pl-1'>
                                per<br/>year
                            </span>
                        </span> 
                    </p>
                </div>
            </div>
            <div className='flex flex-col space-y-2'>
                <div className='flex flex-col w-full items-start justify-center'>
                    <div className='flex flex-col w-full h-fit space-y-3'>
                        <h1 className='text-md font-semibold font-mono'>Pay with card</h1>
                        <div className='grid grid-cols-3 grid-rows-2 bg-white p-2 items-center border-[1px] rounded-md space-y-1'>
                            <p className='col-span-1 text-gray-700 text-xs sm:text-base'>Email</p>
                            <input className='col-span-2 outline-none' type="email" placeholder="info@gmail.com" />
                            <p className='col-span-1 text-gray-700 text-xs sm:text-base'>Pay with</p>
                            <input className='col-span-2 outline-none w-full' type="tel" placeholder="Card Number" required class="name"/>
                        </div>
                        <button onClick={()=>createSession(email,priceId)} className='w-full p-2 bg-lightgreen rounded-md text-white hover:bg-darkgreen hover:shadow-md'>Subscribe</button>
                        <p className='text-[10px] text-center'>
                            the 1960s with the release of Letraset sheets 
                            containing Lorem Ipsum passages, and more recently 
                            with desktop publishing software 
                            like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment