import React from 'react'
import FiveButtonsOne from '../components/FiveButtons';
import logo from '../pictures/TheBestescafflogo.png'
// import { useNavigate } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import { Switch } from '@mui/material';

function CreateQuotation() {
    // const navigate = useNavigate();
    return (
    <div className='w-full'>
        <header className='border-b-2 w-full pt-3 xxl:pt-8 px-8 sm:px-20 sticky top-0 bg-white z-40'>
            <img className='w-38 h-14 md:w-[280px] md:h-[100px] xxl:w-[390px] xxl:h-[150px] mb-2 object-contain' src={logo} alt="logo" />
            <div className='w-full flex justify-center md:justify-end px-2 sm:px-2 xl:pr-12 mt-2 lg:-mt-5 xxl:-mt-8'>
                <FiveButtonsOne />
            </div>
        </header>
        <div className='w-full flex flex-col sm:flex-row h-fit p-6'>
            <div className='flex flex-col basis-1 sm:basis-1/2 w-full px-0 sm:px-12 xxl:mt-4'>

                <p className='text-base xxl:text-2xl text-slate-400'>Create your quotation</p>
                <p className='text-xs xxl:text-base font-semibold'>create a quotation filling out the details below</p>
                <div className='flex flex-col w-full mt-2'>
                    <p className='px-1 pl-0 font-semibold text-[12px] xxl:text-base'>Select a customer from the list to add the quotation to that customer</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                    <p className='px-1 pt-2 pl-0 font-semibold text-[12px] xxl:text-base'>Choose the address associated with that customer</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                    <p className='px-1 pt-2 pl-0 font-semibold text-[12px] xxl:text-base'>Enter the job description including access to the site</p>
                    <textarea rows='4' className='bg-gray-200 opacity-50 px-[2px] xxl:p-3 w-full outline-none pl-1'  required/>
                    <p className='px-1 pt-2 pl-0 font-semibold text-[12px] xxl:text-base'>Access to site details</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                    <p className='px-1 pt-2 pl-0 font-semibold text-[12px] xxl:text-base'>Select the date of erection</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                    <p className='px-1 pt-2 pl-0 font-semibold text-[12px] xxl:text-base'>Enter the number of weeks required</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                    <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Enter elevation length in meters and number of lifts</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>

                    <button className='self-start bg-lightgreen py-[2px] rounded-md text-white hover:bg-darkgreen px-5 mt-2 text-sm xxl:text-lg'>Add</button>

                    <p className='px-1 pt-3 pb-1 pl-0 font-semibold text-xs xxl:text-xl'>Add a Gantry</p>
                    <p className='px-1 pt-0 pl-0 font-semibold text-[12px] xxl:text-base'>Select the elevation the Gantry is going to be erected on</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                    <div className='flex w-full space-x-1'>
                        <div className='basis-1/3 flex flex-col items-center'>
                            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Gantry length</p>
                            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                        </div>
                        <div className='basis-1/3 flex flex-col items-center'>
                            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Gantry Width</p>
                            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                        </div>
                        <div className='basis-1/3 flex flex-col items-center'>
                            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Number of lifts</p>
                            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                        </div>
                    </div>

                    <p className='px-1 pt-3 pb-1 pl-0 font-semibold text-xs xxl:text-xl'>Add a Loading Bay</p>
                    <p className='px-1 pt-0 pl-0 font-semibold text-[12px] xxl:text-base'>Select if the elevation the Loading Bay is going to be erected on</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                    <div className='flex w-full space-x-1'>
                        <div className='basis-1/3 flex flex-col items-center'>
                            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Bay length</p>
                            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                        </div>
                        <div className='basis-1/3 flex flex-col items-center'>
                            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Bay width</p>
                            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                        </div>
                        <div className='basis-1/3 flex flex-col items-center'>
                            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Number of lifts</p>
                            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                        </div>
                    </div>

                    <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Enter the number of Hop-Ups</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                    <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Enter the number of Saddles</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                    <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Enter the number of Throw-Ins</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>

                    <p className='px-1 pt-3 -mb-2 pl-0 font-semibold text-xs xxl:text-xl'>Bird Cage/Crash Deck</p>
                    <div className='flex w-full space-x-1'>
                        <div className='basis-1/3 flex flex-col items-center'>
                            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>length</p>
                            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                        </div>
                        <div className='basis-1/3 flex flex-col items-center'>
                            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Width</p>
                            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                        </div>
                        <div className='basis-1/3 flex flex-col items-center'>
                            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Number of lifts</p>
                            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                        </div>
                    </div>

                    <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Hakki/Lahyer Stair number of lifts</p>
                    <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>

                    <p className='px-1 pt-3 -mb-2 pl-0 font-semibold text-xs xxl:text-xl'>Towers - enter the number of towers required of each size</p>
                    <div className='flex w-full space-x-1'>
                        <div className='basis-2/3 flex flex-col items-center'>
                            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base self-start'>5 foot/1.8 metr tower</p>
                            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                        </div>
                        <div className='basis-1/3 flex flex-col items-center'>
                            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Number of lifts</p>
                            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                        </div>
                    </div>
                    <div className='flex w-full space-x-1'>
                        <div className='basis-2/3 flex flex-col items-center'>
                            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base self-start'>8 foot/2.4 metr tower</p>
                            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                        </div>
                        <div className='basis-1/3 flex flex-col items-center'>
                            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Number of lifts</p>
                            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                        </div>
                    </div>
                    <div className='flex w-full space-x-1'>
                        <div className='basis-2/3 flex flex-col items-center'>
                            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base self-start'>10 foot/3.0 metr tower</p>
                            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                        </div>
                        <div className='basis-1/3 flex flex-col items-center'>
                            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Number of lifts</p>
                            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                        </div>
                    </div>
                    <div className='flex w-full space-x-1'>
                        <div className='basis-2/3 flex flex-col items-center'>
                            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base self-start'>13 foot/4.0 metr tower</p>
                            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                        </div>
                        <div className='basis-1/3 flex flex-col items-center'>
                            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Number of lifts</p>
                            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                        </div>
                    </div>

                    <div className='flex flex-row w-full space-x-1 pr-8 items-center justify-start pt-4'>
                        <p className='pr-1 xxl:mr-20 font-semibold text-[12px] xxl:text-base whitespace-nowrap w-52'>Weekly Scaffolding Inspections</p>
                        <Switch className='ml-4 text-lightgreen -my-2' color='success' />
                    </div>

                    <div className='flex flex-col w-full'>
                        <p className='pt-3 font-semibold text-[12px] xxl:text-base'>Enter the Street license Cost</p>
                        <div className='flex flex-row justify-start w-full'>
                            <input className='xxl:mr-20 bg-gray-200  opacity-60 px-[2px] xxl:p-2 w-52 outline-none pl-1' type="text" required/>
                            <Switch className='ml-1 text-lightgreen -my-2' color='success' />
                        </div>
                    </div>

                    <p className='px-1 pt-3 -mb-2 pl-0 font-semibold text-xs xxl:text-xl'>Select an item from your list</p>
                    <div className='flex w-full space-x-1'>
                        <div className='basis-2/3 flex flex-col items-center'>
                            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base self-start'>Additional items</p>
                            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                        </div>
                        <div className='basis-1/3 flex flex-col items-center'>
                            <p className='px-1 pt-3 pl-0 font-semibold text-[12px] xxl:text-base'>Number of items</p>
                            <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" required/>
                        </div>
                    </div>

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

            <div className='basis-1/2 w-full bg-white z-20'>
                <ImageSlider/>
            </div>

        </div>
    </div>
    )
    }

export default CreateQuotation