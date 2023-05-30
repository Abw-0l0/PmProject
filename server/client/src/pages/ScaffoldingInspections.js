import React, { useState } from 'react'
import logo from '../pictures/TheBestescafflogo.png'
import Sidebar from '../components/Sidebar'
import FourButtons from '../components/FourButtons'

function ScaffoldingInspections() {
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

      <div className='lg:basis-3/4 w-full flex flex-col'>
        <div className='flex flex-col md:flex-row w-full h-[170px] justify-between items-center'>
            <div className='basis-1 md:basis-1/3 h-full flex w-full items-center justify-center'>
                <img className='w-[280px] h-[100px] xxl:w-[390px] xxl:h-[150px] bottom-[16px] ml-2 flex object-contain left-[40px]' src={logo} alt="logo" />
            </div>
            <div className='basis-1 md:basis-1/3 py-4 md:py-0 h-full flex w-full justify-center items-end'>
                <p className='text-xl xxl:text-3xl whitespace-nowrap'>Scaffolding Inspections</p>
            </div>
            <div className='basis-1 md:basis-1/3 h-full flex flex-col w-full'>
                <p className='text-sm xxl:text-lg'>Customer Name:</p>
                <p className='text-sm xxl:text-lg'>Address:</p>
            </div>
        </div>

        <div className='w-full flex flex-col xl:flex-row py-8'>
            <div className='w-full basis-1/2 flex flex-row h-5 items-center justify-start pr-4'>
                <p className='text-sm pr-2 whitespace-nowrap w-fit'>Site address</p>
                <input type="text" className='w-full h-6 border-[2px] border-gray-200 pl-2 outline-none' />
            </div>
            <div className='w-full basis-1/2 pt-1 xl:pt-0 flex flex-row h-5 items-center justify-start'>
                <p className='text-sm pr-2 md:whitespace-nowrap w-fit'>Name of person administering this checklist</p>
                <input type="text" className='w-full h-6 border-[2px] border-gray-200 pl-2 outline-none' />
            </div>
        </div>

        <div className='flex w-full flex-col space-y-1 md:space-y-[2px] xxl:space-y-1'>
            <div className='w-full flex flex-row items-center justify-start pr-4 space-x-[1px]'>
                <div className='flex border-[2px] border-gray-200 basis-[90%] md:h-6 break-words'>
                    <p className='text-xs md:text-sm xxl:text-base pr-2 md:whitespace-nowrap w-fit pl-2'>Are all the sufficient scaffolding components in place and without any defects?</p>
                </div>
                <div className='flex border-[2px] border-gray-200 basis-[10%] h-9 md:h-6 space-x-2 justify-center items-center'>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>Yes</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>No</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start pr-4 space-x-[1px]'>
                <div className='flex border-[2px] border-gray-200 basis-[90%] md:h-6 break-words'>
                    <p className='text-xs md:text-sm xxl:text-base pr-2 md:whitespace-nowrap w-fit pl-2'>Are all the sufficient scaffolding components in place and without any defects?</p>
                </div>
                <div className='flex border-[2px] border-gray-200 basis-[10%] h-9 md:h-6 space-x-2 justify-center items-center'>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>Yes</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>No</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start pr-4 space-x-[1px]'>
                <div className='flex border-[2px] border-gray-200 basis-[90%] md:h-6 break-words'>
                    <p className='text-xs md:text-sm xxl:text-base pr-2 md:whitespace-nowrap w-fit pl-2'>Are all the sufficient scaffolding components in place and without any defects?</p>
                </div>
                <div className='flex border-[2px] border-gray-200 basis-[10%] h-9 md:h-6 space-x-2 justify-center items-center'>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>Yes</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>No</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start pr-4 space-x-[1px]'>
                <div className='flex border-[2px] border-gray-200 basis-[90%] md:h-6 break-words'>
                    <p className='text-xs md:text-sm xxl:text-base pr-2 md:whitespace-nowrap w-fit pl-2'>Are all the sufficient scaffolding components in place and without any defects?</p>
                </div>
                <div className='flex border-[2px] border-gray-200 basis-[10%] h-9 md:h-6 space-x-2 justify-center items-center'>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>Yes</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>No</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start pr-4 space-x-[1px]'>
                <div className='flex border-[2px] border-gray-200 basis-[90%] md:h-6 break-words'>
                    <p className='text-xs md:text-sm xxl:text-base pr-2 md:whitespace-nowrap w-fit pl-2'>Are all the sufficient scaffolding components in place and without any defects?</p>
                </div>
                <div className='flex border-[2px] border-gray-200 basis-[10%] h-9 md:h-6 space-x-2 justify-center items-center'>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>Yes</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>No</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start pr-4 space-x-[1px]'>
                <div className='flex border-[2px] border-gray-200 basis-[90%] md:h-6 break-words'>
                    <p className='text-xs md:text-sm xxl:text-base pr-2 md:whitespace-nowrap w-fit pl-2'>Are all the sufficient scaffolding components in place and without any defects?</p>
                </div>
                <div className='flex border-[2px] border-gray-200 basis-[10%] h-9 md:h-6 space-x-2 justify-center items-center'>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>Yes</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>No</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start pr-4 space-x-[1px]'>
                <div className='flex border-[2px] border-gray-200 basis-[90%] md:h-6 break-words'>
                    <p className='text-xs md:text-sm xxl:text-base pr-2 md:whitespace-nowrap w-fit pl-2'>Are all the sufficient scaffolding components in place and without any defects?</p>
                </div>
                <div className='flex border-[2px] border-gray-200 basis-[10%] h-9 md:h-6 space-x-2 justify-center items-center'>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>Yes</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>No</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start pr-4 space-x-[1px]'>
                <div className='flex border-[2px] border-gray-200 basis-[90%] md:h-6 break-words'>
                    <p className='text-xs md:text-sm xxl:text-base pr-2 md:whitespace-nowrap w-fit pl-2'>Are all the sufficient scaffolding components in place and without any defects?</p>
                </div>
                <div className='flex border-[2px] border-gray-200 basis-[10%] h-9 md:h-6 space-x-2 justify-center items-center'>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>Yes</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>No</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start pr-4 space-x-[1px]'>
                <div className='flex border-[2px] border-gray-200 basis-[90%] md:h-6 break-words'>
                    <p className='text-xs md:text-sm xxl:text-base pr-2 md:whitespace-nowrap w-fit pl-2'>Are all the sufficient scaffolding components in place and without any defects?</p>
                </div>
                <div className='flex border-[2px] border-gray-200 basis-[10%] h-9 md:h-6 space-x-2 justify-center items-center'>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>Yes</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>No</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start pr-4 space-x-[1px]'>
                <div className='flex border-[2px] border-gray-200 basis-[90%] md:h-6 break-words'>
                    <p className='text-xs md:text-sm xxl:text-base pr-2 md:whitespace-nowrap w-fit pl-2'>Are all the sufficient scaffolding components in place and without any defects?</p>
                </div>
                <div className='flex border-[2px] border-gray-200 basis-[10%] h-9 md:h-6 space-x-2 justify-center items-center'>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>Yes</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>No</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start pr-4 space-x-[1px]'>
                <div className='flex border-[2px] border-gray-200 basis-[90%] md:h-6 break-words'>
                    <p className='text-xs md:text-sm xxl:text-base pr-2 md:whitespace-nowrap w-fit pl-2'>Are all the sufficient scaffolding components in place and without any defects?</p>
                </div>
                <div className='flex border-[2px] border-gray-200 basis-[10%] h-9 md:h-6 space-x-2 justify-center items-center'>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>Yes</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>No</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start pr-4 space-x-[1px]'>
                <div className='flex border-[2px] border-gray-200 basis-[90%] md:h-6 break-words'>
                    <p className='text-xs md:text-sm xxl:text-base pr-2 md:whitespace-nowrap w-fit pl-2'>Are all the sufficient scaffolding components in place and without any defects?</p>
                </div>
                <div className='flex border-[2px] border-gray-200 basis-[10%] h-9 md:h-6 space-x-2 justify-center items-center'>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>Yes</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>No</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start pr-4 space-x-[1px]'>
                <div className='flex border-[2px] border-gray-200 basis-[90%] md:h-6 break-words'>
                    <p className='text-xs md:text-sm xxl:text-base pr-2 md:whitespace-nowrap w-fit pl-2'>Are all the sufficient scaffolding components in place and without any defects?</p>
                </div>
                <div className='flex border-[2px] border-gray-200 basis-[10%] h-9 md:h-6 space-x-2 justify-center items-center'>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>Yes</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>No</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start pr-4 space-x-[1px]'>
                <div className='flex border-[2px] border-gray-200 basis-[90%] md:h-6 break-words'>
                    <p className='text-xs md:text-sm xxl:text-base pr-2 md:whitespace-nowrap w-fit pl-2'>Are all the sufficient scaffolding components in place and without any defects?</p>
                </div>
                <div className='flex border-[2px] border-gray-200 basis-[10%] h-9 md:h-6 space-x-2 justify-center items-center'>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>Yes</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>No</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start pr-4 space-x-[1px]'>
                <div className='flex border-[2px] border-gray-200 basis-[90%] md:h-6 break-words'>
                    <p className='text-xs md:text-sm xxl:text-base pr-2 md:whitespace-nowrap w-fit pl-2'>Are all the sufficient scaffolding components in place and without any defects?</p>
                </div>
                <div className='flex border-[2px] border-gray-200 basis-[10%] h-9 md:h-6 space-x-2 justify-center items-center'>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>Yes</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>No</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start pr-4 space-x-[1px]'>
                <div className='flex border-[2px] border-gray-200 basis-[90%] md:h-6 break-words'>
                    <p className='text-xs md:text-sm xxl:text-base pr-2 md:whitespace-nowrap w-fit pl-2'>Are all the sufficient scaffolding components in place and without any defects?</p>
                </div>
                <div className='flex border-[2px] border-gray-200 basis-[10%] h-9 md:h-6 space-x-2 justify-center items-center'>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>Yes</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>No</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start pr-4 space-x-[1px]'>
                <div className='flex border-[2px] border-gray-200 basis-[90%] md:h-6 break-words'>
                    <p className='text-xs md:text-sm xxl:text-base pr-2 md:whitespace-nowrap w-fit pl-2'>Are all the sufficient scaffolding components in place and without any defects?</p>
                </div>
                <div className='flex border-[2px] border-gray-200 basis-[10%] h-9 md:h-6 space-x-2 justify-center items-center'>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>Yes</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>No</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start pr-4 space-x-[1px]'>
                <div className='flex border-[2px] border-gray-200 basis-[90%] md:h-6 break-words'>
                    <p className='text-xs md:text-sm xxl:text-base pr-2 md:whitespace-nowrap w-fit pl-2'>Are all the sufficient scaffolding components in place and without any defects?</p>
                </div>
                <div className='flex border-[2px] border-gray-200 basis-[10%] h-9 md:h-6 space-x-2 justify-center items-center'>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>Yes</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>No</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start pr-4 space-x-[1px]'>
                <div className='flex border-[2px] border-gray-200 basis-[90%] md:h-6 break-words'>
                    <p className='text-xs md:text-sm xxl:text-base pr-2 md:whitespace-nowrap w-fit pl-2'>Are all the sufficient scaffolding components in place and without any defects?</p>
                </div>
                <div className='flex border-[2px] border-gray-200 basis-[10%] h-9 md:h-6 space-x-2 justify-center items-center'>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>Yes</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>No</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start pr-4 space-x-[1px]'>
                <div className='flex border-[2px] border-gray-200 basis-[90%] md:h-6 break-words'>
                    <p className='text-xs md:text-sm xxl:text-base pr-2 md:whitespace-nowrap w-fit pl-2'>Are all the sufficient scaffolding components in place and without any defects?</p>
                </div>
                <div className='flex border-[2px] border-gray-200 basis-[10%] h-9 md:h-6 space-x-2 justify-center items-center'>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>Yes</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <input type="checkbox" className='w-4 h-4 cursor-pointer'/>
                        <p className='text-xs xxl:text-sm'>No</p>
                    </div>
                </div>
            </div>

        </div>

        <div className='flex w-full flex-col py-5'>
            <p className='font-semibold text-sm xxl:text-base pb-1'>Notes</p>
            <textarea rows='4' className='w-[90%] flex h-6 border-[2px] border-gray-200 pl-2 outline-none'/>
        </div>

        <div className='flex w-full flex-col md:flex-row'>
            <div className='flex w-full flex-row basis-[70%]'>
                <div className='w-full basis-1/2 flex flex-row h-5 items-center justify-start pr-4'>
                    <p className='text-sm pr-2 whitespace-nowrap w-fit'>Signed</p>
                    <input type="text" className='w-full h-6 border-[2px] border-gray-200 pl-2 outline-none' />
                </div>
                <div className='w-full basis-1/2 flex flex-row h-5 items-center justify-start'>
                    <p className='text-sm pr-2 whitespace-nowrap w-fit'>Today's Date</p>
                    <input type="text" className='w-full h-6 border-[2px] border-gray-200 pl-2 outline-none' />
                </div>
            </div>

            <div className='flex flex-row space-x-4 pt-3 md:pt-0 md:justify-center basis-[30%]'>
                <button className='bg-lightgreen py-[3px] rounded-md text-white hover:bg-darkgreen px-4 text-sm xxl:text-lg'>Back</button>
                <button className='bg-lightgreen py-[3px] rounded-md text-white hover:bg-darkgreen px-4 text-sm xxl:text-lg'>Submit</button>
            </div>

        </div>

       </div>
   </div>
</div>
  )
}

export default ScaffoldingInspections