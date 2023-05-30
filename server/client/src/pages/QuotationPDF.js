import React, { useState } from 'react'
import logo from '../pictures/TheBestescafflogo.png'
import Sidebar from '../components/Sidebar'
import FourButtons from '../components/FourButtons'

function QuotationPDF() {
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

      <div className='lg:basis-3/4 w-full flex flex-col md:px-16'>

        <div className='flex flex-row w-full h-fit justify-center items-center'>
            <div className='h-[150px] flex overflow-hidden w-[150px] mb-2'>
                <img className='flex object-contain' src={logo} alt="logo" />
            </div>
        </div>

        <div className='flex flex-col md:flex-row w-full h-fit justify-center items-center'>

            <div className='basis-1 md:basis-1/3 h-full p-2 flex flex-col w-full items-start justify-start'>
                <p className='text-lg xxl:text-2xl'>Stobbs Scaffolding</p>
                <p className='text-xs xxl:text-base'>19-21 Sit Day Industrial Estate</p>
                <p className='text-xs xxl:text-base'>Redruth Cornwall TR15 6HR</p>

                <p className='text-xs xxl:text-base mt-3'>Tel: 01209 612345</p>
                <p className='text-xs xxl:text-base'>Mail: stobbs@hotmail.com</p>

                <p className='text-base xxl:text-xl font-bold mt-3'>To:</p>
                <p className='text-xs xxl:text-base'>Bell Construction</p>
                <p className='text-xs xxl:text-base'> No. 5 Field of Dreams</p>
                <p className='text-xs xxl:text-base'>Ponsanooth</p>
                <p className='text-xs xxl:text-base'>Cornwall TR3 7HR</p>

                <p className='text-base xxl:text-xl font-bold mt-3'>Job Details:</p>
                <p className='text-xs xxl:text-base'>Bell Construction no 6 Ludgvan Road Penzance - 3 Lift perimeter scaffolding with a beam over front porch,</p>
                <p className='text-xs xxl:text-base'>Hakki stairs to the front elevation with a gantry to access the roof. As per photographs</p>

                <p className='text-base xxl:text-xl font-bold mt-3'>Adaption Details:</p>
                <p className='text-xs xxl:text-base'>Bell Construction no 6 Ludgvan Road Penzance - 2nd lift to rear elevation</p>
            </div>
            <div className='basis-1 md:basis-1/3 py-4 md:py-0 h-full flex w-full justify-center items-start'>
                <p className='text-xl xxl:text-3xl whitespace-nowrap text-gray-300'>Quotation</p>
            </div>
            <div className='basis-1 md:basis-1/3 h-full flex flex-col items-end w-full p-2'>
                <p className='text-base xxl:text-xl font-bold mt-3'>Job Quote 123456</p>
                <p className='text-xs xxl:text-base'>Customer ID id7629374</p>
                <p className='text-xs xxl:text-base'>Date 12/12/2023</p>
            </div>
        </div>

        <div className='flex w-full flex-col mt-12'>

            <div className='w-full flex flex-row items-center justify-start'>
                <div className='flex border-[2px] items-center border-gray-200 border-y-0 border-x-0 basis-[70%] md:basis-[90%] md:h-6 break-words'>
                    <p className='text-sm xxl:text-base font-bold pr-2 md:whitespace-nowrap w-fit pl-2'>Quotation Details</p>
                </div>
                <div className='flex border-[2px] border-gray-200 border-y-0 border-r-0 basis-[30%] md:basis-[10%] h-9 md:h-6 justify-start items-center'>
                    <p className='text-sm xxl:text-base pl-2 font-bold'>Totals</p>
                </div>
            </div>


            <div className='w-full flex flex-row items-center justify-start'>
                <div className='flex border-[2px] items-center border-gray-200 border-x-0 basis-[70%] md:basis-[90%] h-9 md:h-6 break-words'>
                    <p className='text-xs xxl:text-sm pr-2 md:whitespace-nowrap w-fit pl-2'>Duration of Scaffold</p>
                </div>
                <div className='flex border-[2px] border-gray-200 border-r-0 basis-[30%] md:basis-[10%] h-9 md:h-6 justify-start items-center'>
                    <p className='text-xs xxl:text-sm whitespace-nowrap pl-2'>6 weeks</p>
                </div>
            </div>

            <div className='w-full flex flex-row items-center justify-start'>
                <div className='flex border-[2px] items-center border-gray-200 border-x-0 border-t-0 basis-[70%] md:basis-[90%] h-9 md:h-6 break-words'>
                    <p className='text-xs xxl:text-sm whitespace-nowrap pr-2 md:whitespace-nowrap w-fit pl-2'>Installation Date</p>
                </div>
                <div className='flex border-[2px] border-gray-200 border-r-0 border-t-0 basis-[30%] md:basis-[10%] h-9 md:h-6 justify-start items-center'>
                    <p className='text-xs xxl:text-sm whitespace-nowrap pl-2'>1/12/2022</p>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start'>
                <div className='flex border-[2px] items-center border-gray-200 border-x-0 border-t-0 basis-[70%] md:basis-[90%] h-9 md:h-6 break-words'>
                    <p className='text-xs xxl:text-sm whitespace-nowrap pr-2 md:whitespace-nowrap w-fit pl-2'>Installation Date</p>
                </div>
                <div className='flex border-[2px] border-gray-200 border-r-0 border-t-0 basis-[30%] md:basis-[10%] h-9 md:h-6 justify-start items-center'>
                    <p className='text-xs xxl:text-sm whitespace-nowrap pl-2'>1/12/2022</p>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start'>
                <div className='flex border-[2px] items-center border-gray-200 border-x-0 border-t-0 basis-[70%] md:basis-[90%] h-9 md:h-6 break-words'>
                    <p className='text-xs xxl:text-sm whitespace-nowrap pr-2 md:whitespace-nowrap w-fit pl-2'>Installation Date</p>
                </div>
                <div className='flex border-[2px] border-gray-200 border-r-0 border-t-0 basis-[30%] md:basis-[10%] h-9 md:h-6 justify-start items-center'>
                    <p className='text-xs xxl:text-sm whitespace-nowrap pl-2'>1/12/2022</p>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start'>
                <div className='flex border-[2px] items-center border-gray-200 border-x-0 border-t-0 basis-[70%] md:basis-[90%] h-9 md:h-6 break-words'>
                    <p className='text-xs xxl:text-sm whitespace-nowrap pr-2 md:whitespace-nowrap w-fit pl-2'>Installation Date</p>
                </div>
                <div className='flex border-[2px] border-gray-200 border-r-0 border-t-0 basis-[30%] md:basis-[10%] h-9 md:h-6 justify-start items-center'>
                    <p className='text-xs xxl:text-sm whitespace-nowrap pl-2'>1/12/2022</p>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start'>
                <div className='flex border-[2px] items-center border-gray-200 border-x-0 border-t-0 basis-[70%] md:basis-[90%] h-9 md:h-6 break-words'>
                    <p className='text-xs xxl:text-sm whitespace-nowrap pr-2 md:whitespace-nowrap w-fit pl-2'>Installation Date</p>
                </div>
                <div className='flex border-[2px] border-gray-200 border-r-0 border-t-0 basis-[30%] md:basis-[10%] h-9 md:h-6 justify-start items-center'>
                    <p className='text-xs xxl:text-sm whitespace-nowrap pl-2'>1/12/2022</p>
                </div>
            </div>

            <div className='w-full flex flex-row items-center justify-start'>
                <div className='flex items-center basis-[70%] md:basis-[90%] md:h-6 w-full justify-end'>
                    <div className='flex border-[2px] items-center border-gray-200 border-x-0 border-t-0 basis-[10%] md:h-6 break-words'>
                        <p className='text-xs xxl:text-sm whitespace-nowrap pr-2 md:whitespace-nowrap w-fit pl-3 font-semibold'>Sub Total</p>
                    </div>
                </div>
                <div className='flex border-[2px] border-gray-200 border-r-0 border-t-0 basis-[30%] md:basis-[10%] h-9 md:h-6 justify-start items-center'>
                    <p className='text-xs xxl:text-sm whitespace-nowrap pl-2 font-semibold'>$ 0.00</p>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start'>
                <div className='flex items-center basis-[70%] md:basis-[90%] md:h-6 w-full justify-end'>
                    <div className='flex border-[2px] items-center border-gray-200 border-x-0 border-t-0 basis-[10%] md:h-6 break-words'>
                        <p className='text-xs xxl:text-sm whitespace-nowrap pr-2 md:whitespace-nowrap w-fit pl-3 font-semibold'>Vat</p>
                    </div>
                </div>
                <div className='flex border-[2px] border-gray-200 border-r-0 border-t-0 basis-[30%] md:basis-[10%] h-9 md:h-6 justify-start items-center'>
                   <p className='text-xs xxl:text-sm whitespace-nowrap pl-2 font-semibold'>$ 0.00</p>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-start'>
                <div className='flex items-center basis-[70%] md:basis-[90%] md:h-6 w-full justify-end'>
                    <div className='flex border-[2px] items-center border-gray-200 border-x-0 border-t-0 basis-[10%] md:h-6 break-words'>
                        <p className='text-xs xxl:text-sm whitespace-nowrap pr-2 md:whitespace-nowrap w-fit pl-3 font-semibold'>Total Due</p>
                    </div>
                </div>
                <div className='flex border-[2px] border-gray-200 border-r-0 border-t-0 basis-[30%] md:basis-[10%] h-9 md:h-6 justify-start items-center'>
                   <p className='text-xs xxl:text-sm whitespace-nowrap pl-2 font-semibold'>$ 0.00</p>
                </div>
            </div>



        </div>

 
        <div className='flex w-full flex-row mt-5 justify-end px-5'>
            <button className='bg-lightgreen py-[3px] rounded-md text-white hover:bg-darkgreen px-4 text-sm xxl:text-lg'>Submit</button>
        </div>

       </div>
   </div>
</div>
  )
}

export default QuotationPDF