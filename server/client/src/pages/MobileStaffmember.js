import React from 'react'
import logo from '../pictures/TheBestescafflogo.png'
import builderImage from '../pictures/builderImageWaterMark.jpeg'
import {CgArrowRightR} from "react-icons/cg"
import { Link } from 'react-router-dom'

function MobileAdmin() {
  return (
    <div>
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative sm:hidden lg:block" role="alert">
       <strong class="font-bold">Warning!</strong>
       <span class="block sm:inline"> This page is only visible to medium and small devices.</span>
       <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
       <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
       </span>
   </div>
    <div className='w-full h-screen flex-col flex lg:hidden items-center justify-between'>
        <div className='w-48 mt-4 h-30'>
            <img src={logo} alt="logo"/>
    </div>
     <div className='mt-56'>

            <Link className='flex w-52 ' to ={"/*"}>
               
                <CgArrowRightR style={{height:"25px",width:"33px"}}/> 
               
                <div className='ml-2 font-bold'  style={{color:"#7E94AF"}}>
                Add a new customer
                </div>
            </Link>
     
            <Link  className='flex w-54  mt-4'to ={"/*"}> 
                
                     <CgArrowRightR style={{height:"25px",width:"33px"}}/> 
            
                <div className='ml-2 font-bold' style={{color:"#7E94AF"}}>
                    Add Job Details/Photos
                </div>
            </Link>
        
            <Link className='flex w-52 mt-4' to ={"/*"}>
                <CgArrowRightR style={{height:"25px",width:"33px"}}/> 
                
                <div className='ml-2 font-bold'  style={{color:"#7E94AF"}}>
                Scaffold Inspections
                </div>
            </Link>
     </div>
        <div className='flex w-full justify-end'>
       
        <img src={builderImage}  className="w-3/4" style={{opacity:"0.05",height:"336px"}}alt="builderImage"/>
       
        </div>

           

        
    </div>
    </div>
  )
}

export default MobileAdmin