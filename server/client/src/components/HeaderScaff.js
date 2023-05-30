import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../pictures/TheBestescafflogo.png'

function HeaderScaff() {
  const navigate = useNavigate();

  return (
    <header className='border-b-2 border-darkgray w-full h-[155px] xxl:h-[220px] absolute top-0'>
            <img className='w-[280px] h-[100px] xxl:w-[390px] xxl:h-[150px] bottom-[16px] ml-20 xxl:ml-26 absolute left-[40px]' src={logo} alt="logo" />
            <div className='w-full absolute bottom-0'>
                <button onClick={() => navigate("/signup")} className='absolute right-48 z-40 xxl:right-72 bottom-[0px] border-t-2 border-darkgray border-x-2 w-[150px] h-[28px] xxl:w-[250px] xxl:h-[40px] rounded-t-lg text-[11px] xxl:text-[20px] hover:bg-lightgreen'>Login/Signup</button>
            </div>
    </header>
  )
}

export default HeaderScaff