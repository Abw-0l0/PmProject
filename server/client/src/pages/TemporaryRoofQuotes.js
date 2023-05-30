import React, { useState } from 'react'
import logo from '../pictures/TheBestescafflogo.png'
import Sidebar from '../components/Sidebar'
import FourButtons from '../components/FourButtons'
import { Switch } from '@mui/material';
import outro from '../pictures/outro.png'

const Data = [
    { id:"1",
      name: "Muhammad Arham khan ",
      address:"hayatabad phase1 sector E2 house 542 peshawar pakistan ",
      postCode:"005",
      email: "i.am.arhamkhan25@gmail.com",
      telephone: "03119708281",
    },
    { id:"1",
      name: "Arham",
      address:"hayatabad phase1 sector E2 house 542",
      postCode:"005",
      email: "i.am.arhamkhan25@gmail.com",
      telephone: "03119708281",
    },
]
function TemporaryRoofQuotes() {
  const [ needed, setNeeded ] = useState(false);

  return (
    <div className='w-full h-full'>
      <header className='border-b-2 w-full pt-3 xxl:pt-8 px-8 sm:px-24'>
        <img className='w-38 h-14 md:w-[280px] md:h-[100px] xxl:w-[390px] xxl:h-[150px] mb-2 object-contain' src={logo} alt="logo" />
        <div className='w-full flex justify-center md:justify-end px-2 sm:px-2 xl:pr-12 mt-2 xl:-mt-5 xxl:-mt-8'>
          <FourButtons/>
       </div>
   </header>
   <div className='w-full flex h-auto p-6'>
    <Sidebar needed={needed}/>

      <div className='lg:basis-3/4 flex w-full flex-col lg:flex-row'>

        <div className='flex flex-col basis-1 sm:basis-1/2 w-full px-1 xxl:mt-4'>

        <p className='text-base xxl:text-2xl text-slate-400'>Temporary roof quote</p>
        <p className='text-xs xxl:text-base font-semibold'>Create a quotation filling out the details below.</p>
        <div className='flex flex-col w-full mt-2'>
            <p className='px-1 pl-0 font-semibold text-[12px] xxl:text-base'>Select a customer from your customer list or go back and create new customer</p>
            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
            <p className='px-1 pt-2 pl-0 font-semibold text-[12px] xxl:text-base'>Choose the address associated with that customer</p>
            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
            <p className='px-1 pt-2 pl-0 font-semibold text-[12px] xxl:text-base'>Enter the job description including access to the site</p>
            <textarea rows='4' className='bg-gray-200 opacity-50 px-[2px] xxl:p-3 w-full outline-none pl-1'  required/>
            <p className='px-1 pt-2 pl-0 font-semibold text-[12px] xxl:text-base'>Access to site details</p>
            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
            <p className='px-1 pt-2 pl-0 font-semibold text-[12px] xxl:text-base'>Select the date of erection</p>
            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Enter the number of weeks required</p>
            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>

            <div className='flex flex-row w-full space-x-1 pr-8 items-center justify-start pt-4'>
                <p className='pr-1 xxl:mr-20 font-semibold text-[12px] xxl:text-base whitespace-nowrap w-52'>Weekly Scaffolding Inspections</p>
                <Switch className='ml-4 text-lightgreen -my-2' color='success' />
            </div>
            <div className='flex flex-row w-full space-x-1 pr-8 items-center justify-start pt-4'>
                <p className='pr-1 xxl:mr-20 font-semibold text-[12px] xxl:text-base whitespace-nowrap w-52'>Street License</p>
                <Switch className='ml-4 text-lightgreen -my-2' color='success' />
            </div>

            <p className='px-1 pt-3 -mb-2 pl-0 font-semibold text-xs xxl:text-xl'>Additional items</p>
            <div className='flex w-full space-x-1'>
                <div className='basis-2/3 flex flex-col items-center'>
                    <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base self-start'>Select an item from your list</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                </div>
                <div className='basis-1/3 flex flex-col items-center'>
                    <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Number of items</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                </div>
            </div>

            <p className='px-1 pt-3 pb-1 pl-0 font-semibold text-xs xxl:text-xl'>Temporary roof dimensions</p>
            <p className='px-1 pt-0 pl-0 font-semibold text-[12px] xxl:text-base'>Enter the perimeter of your building (Represented by the red line in the illustration)</p>
            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
            <p className='px-1 pt-2 pl-0 font-semibold text-[12px] xxl:text-base'>Create a quotation filling out the details below.</p>
            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
            <div className='flex w-full space-x-1'>
                <div className='basis-2/3 flex flex-col items-center'>
                    <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base self-start'>Enter the length of building</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                </div>
                <div className='basis-1/3 flex flex-col items-center'>
                    <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base self-start'>Width X length</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                </div>
            </div>
            <div className='flex w-full space-x-1'>
                <div className='basis-2/3 flex flex-col items-center'>
                    <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base self-start'>Enter the height to guttering(The blue line in the illustration)</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                </div>
                <div className='basis-1/3 flex flex-col items-center'>
                    <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base self-start'>Number of lifts</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                </div>
            </div>

            <p className='px-1 pt-2 pl-0 font-semibold text-[12px] xxl:text-base'>Enter the height from gutter to the height to your roof(Represented byShrinkwrap or Monoflex)</p>
            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
            <p className='px-1 pt-2 pl-0 font-semibold text-[12px] xxl:text-base'>Shrinkwrap or Monoflex</p>
            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-3/5 outline-none pl-1' type="text" required/>
            <p className='px-1 pt-2 pl-0 font-semibold text-[12px] xxl:text-base'>Number of weeks hire</p>
            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-3/5 outline-none pl-1' type="text" required/>

            <div className='flex w-full space-x-1'>
                <div className='basis-1/2 flex flex-col items-start'>
                    <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Cost of Temporary roof with covering 1 month</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                </div>
                <div className='basis-2/6 flex flex-col items-start'>
                    <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Enter number of weeks hire</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                </div>
                <div className='basis-1/6 flex flex-col items-start'>
                    <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Total overhire</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                </div>
            </div>

            <p className='px-1 pt-2 pl-0 font-semibold text-[12px] xxl:text-base'>Total cost</p>
            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-3/5 outline-none pl-1' type="text" required/>

            <hr className='my-2 bg-black h-[2px] w-full opacity-25'/>

            <p className='text-base xxl:text-xl font-semibold text-slate-400'>Add Adaption</p>
            <p className='px-1 py-1 pl-0 font-semibold text-[12px] xxl:text-base'>Add Details of the adaption required</p>
            <textarea rows='4' className='bg-gray-200 opacity-50 px-[2px] xxl:p-3 w-full outline-none pl-1'  required/>
            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Adaption cost</p>
            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>

            <div className='flex flex-row w-full space-x-1 pr-8 items-center justify-start pt-4'>
                <p className='pr-1 xxl:mr-20 font-semibold text-[12px] xxl:text-base whitespace-nowrap w-[220px]'>Adaptions are included in the quotation</p>
                <Switch className=' text-lightgreen -my-2' color='success' />
            </div>

            <div className='flex flex-row space-x-1 pt-2'>
                <button className='self-start bg-lightgreen py-[2px] rounded-md text-white hover:bg-darkgreen px-4 mt-2 text-sm xxl:text-lg'>Calculate</button>
                <button className='self-start bg-lightgreen py-[2px] rounded-md text-white hover:bg-darkgreen px-4 mt-2 text-sm xxl:text-lg'>Edit</button>
                <button className='self-start bg-lightgreen py-[2px] rounded-md text-white hover:bg-darkgreen px-4 mt-2 text-sm xxl:text-lg'>Submit</button>
            </div>

        </div>
        </div>
        
        <div className='flex w-full basis-1/2 h-fit sticky top-16'>
          <div className='sticky top-24 flex xxl:pt-40'>
            <img src={outro} alt="" className='object-contain flex' />
          </div>
        </div>

       </div>

   </div>
</div>
  )
}

export default TemporaryRoofQuotes