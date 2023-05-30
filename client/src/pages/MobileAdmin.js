import React from 'react'
import logo from '../pictures/TheBestescafflogo.png'
import builderImage from '../pictures/builderImageWaterMark.jpeg'
import {CgArrowRightR} from "react-icons/cg"
import { Link } from 'react-router-dom'

function MobileAdmin() {
  return (
    <div className='w-full'>
        <div className='lg:w-full lg:flex lg:justify-center hidden lg:flex-wrap lg:h-screen lg:content-center'>
         <div className=" bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative   lg:block" role="alert">
            <strong className="font-bold">Warning!</strong>
            <span className="block sm:inline"> This page is only visible with medium and small devices.</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            </span>
        </div>
        </div>
     <div className='w-full h-screen flex-col  lg:hidden  flex items-center justify-between'>
        <div className='w-48 mt-4 h-30'>
            <img src={logo} alt="logo"/>
        </div>
        <div className='mt-56'>

            <Link className='flex w-52 ' to ={"/*"}>
               
                <CgArrowRightR style={{height:"25px",width:"33px"}}/> 
               
                <div className='ml-2 font-bold font-sans'  style={{color:"#7E94AF"}}>
                Add a new customer
                </div>
            </Link>
     
            <Link  className='flex w-54  mt-4'to ={"/*"}> 
                
                     <CgArrowRightR style={{height:"25px",width:"33px"}}/> 
            
                <div className='ml-2 font-bold font-sans' style={{color:"#7E94AF"}}>
                    Add Job Details/Photos
                </div>
            </Link>
        
            <Link className='flex w-52 mt-4' to ={"/*"}>
                <CgArrowRightR style={{height:"25px",width:"33px"}}/> 
                
                <div className='ml-2 font-bold font-sans'  style={{color:"#7E94AF"}}>
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