import React from 'react'
import logo from '../pictures/EcoLogo.png'
import logo1 from '../pictures/poc.png'
import { useMediaQuery } from '@mui/material'

function FooterScaff() {
    const footerResponce = useMediaQuery("(min-width: 768px)");

    return (
    <footer className='absolute bottom-0 w-full xxl:h-[174px] z-20'>
        <div className='flex flex-col md:flex-row h-full w-full justify-between items-center px-16 py-2 sm:py-4 bg-darkgreen'>
        <img className={`${!footerResponce? "hidden":""} w-28 h-20`} src={logo1} alt="" />
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-center text-base sm:text-2xl py-0 sm:py-1'>Contact us for a free trail</h1>
                <p className='text-center text-xs'>
                    tel: 07525 648263<br/>
                    email: info@escaff.co.uk
                </p>
                <p className='text-center text-xs font-semibold py-1'>Copyright @ 2023 eScaff. All rights reserved</p>
            </div>
            <div className={`${footerResponce? "":"flex"}`}>
                <img className='w-12 h-12 sm:w-20 sm:h-20 mx-2 sm:mx-8' src={logo} alt="" />
                <img className={`${footerResponce? "hidden":"p-1"} w-16 h-14 sm:w-28 sm:h-20`} src={logo1} alt="" />
            </div>
        </div>
    </footer>
  )
}

export default FooterScaff