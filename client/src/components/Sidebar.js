import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../pictures/TheBestescafflogo.png'
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useSelector } from 'react-redux';

function Sidebar({setSidebarOpen, needed }) {
    const navigate = useNavigate();
    const stateAlert=useSelector((state)=>state.admin.alert);

    return (
    <div className=' sticky top-24 basis-1/5 -ml-4 sm:-ml-4 md:-ml-0 mt-0 md:mt-5 xxl:mt-8 w-full hidden md:flex flex-col h-fit justify-between mr-5 items-center lg:inline-block'>
    <div className='flex justify-center flex-col content-center  flex-wrap'>
            <div className='border-lightgreen cursor-pointer border-[1px] hover:text-white hover:bg-lightgreen whitespace-nowrap px-1 sm:px-3 sm:py-[2px] py-[1px] text-[8px] sm:text-sm lg:text-base xxl:px-4 xxl:py-1 xxl:text-xl text-center border-b-0 rounded-t-lg' onClick={() => navigate('/pricelist')} >Your price list</div>
            <div className='border-lightgreen cursor-pointer border-[1px] hover:text-white hover:bg-lightgreen whitespace-nowrap px-1 sm:px-3 sm:py-[2px] py-[1px] text-[8px] sm:text-sm lg:text-base xxl:px-4 xxl:py-1 xxl:text-xl text-center border-b-0'>Scoffolding Inspections</div>
            <div className='border-lightgreen cursor-pointer border-[1px] hover:text-white hover:bg-lightgreen whitespace-nowrap px-1 sm:px-3 sm:py-[2px] py-[1px] text-[8px] sm:text-sm lg:text-base xxl:px-4 xxl:py-1 xxl:text-xl text-center'>Key Staff</div> 
    </div>
    <div className={`${needed? "flex" : "flex opacity-0" } w-full items-center justify-center pt-4`}>
      <IconButton onClick={() => setSidebarOpen(false)}>
        <ArrowBackIosIcon/>
      </IconButton>
    </div>
    <div className='flex justify-center md:pb-2 flex-col content-center w-full flex-wrap mt-12 xxl:mt-12'>
         <div className='cursor-pointer whitespace-nowrap text-xs py-[2px] sm:py-[3px] bg-grayy opacity-50 hover:text-white hover:bg-darkgray px-5 sm:px-12 lg:px-10 mb-[1px] text-[8px] sm:text-sm md:text-base xxl:py-2 xxl:px-14 xxl:text-xl hover:opacity-100 text-center'>Company Details</div>
         <div className='cursor-pointer whitespace-nowrap text-xs py-[2px] sm:py-[3px] bg-grayy opacity-50 hover:text-white hover:bg-darkgray px-5 sm:px-12 lg:px-10 mb-[1px] text-[8px] sm:text-sm md:text-base xxl:py-2 xxl:px-14 xxl:text-xl hover:opacity-100 text-center'>My Subscription</div>
         <div className='cursor-pointer whitespace-nowrap text-xs py-[2px] sm:py-[3px] bg-grayy opacity-50 hover:text-white hover:bg-darkgray px-5 sm:px-12 lg:px-10 mb-[1px] text-[8px] sm:text-sm md:text-base xxl:py-2 xxl:px-14 xxl:text-xl hover:opacity-100 text-center'>Account Settings</div>
         <div className='cursor-pointer whitespace-nowrap text-xs py-[2px] sm:py-[3px] bg-grayy opacity-50 hover:text-white hover:bg-darkgray px-5 sm:px-12 lg:px-10 mb-[1px] text-[8px] sm:text-sm md:text-base xxl:py-2 xxl:px-14 xxl:text-xl hover:opacity-100 text-center'>Sign Out</div>
    </div>
     <header className='w-full flex items-center justify-center pt-10'>
         <img onClick={() => navigate('/createnewcustomer')} className='w-32 h-8 sm:w-36 sm:h-10 md:w-36 md:h-16 xxl:w-48 xxl:h-32 object-contain ' src={logo} alt="logo" />
     </header>
 </div>
)
}

export default Sidebar