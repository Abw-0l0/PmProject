import React, { useState } from 'react'
import logo from '../pictures/TheBestescafflogo.png'
import Sidebar from '../components/Sidebar'
import FourButtons from '../components/FourButtons'
import UploadFileIcon from '@mui/icons-material/UploadFile';

const Data = [
    { id:"1",
      name: "Muhammad  ",
      address:"hayatabad phase1 sector E2 house 542 peshawar pakistan ",
      date:"12/12/12",
      nextDate:"12/12/12"

    },
    { id:"1",
      name: "Muhammad  ",
      address:"hayatabad phase1 sector E2 house 542 peshawar pakistan ",
      date:"12/12/12",
      nextDate:"12/12/12"

    },
]

function ScaffoldInspectionComplete() {
    const [ needed, setNeeded ] = useState(false);

    return (
        <div className='w-full h-full'>
        <header className='border-b-2 w-full pt-3 xxl:pt-8 px-8 sm:px-24'>
            <img className='w-38 h-14 md:w-[280px] md:h-[100px] xxl:w-[390px] xxl:h-[150px] mb-2 object-contain' src={logo} alt="logo" />
            <div className='w-full flex justify-center md:justify-end px-2 sm:px-2 xl:pr-12 mt-2 lg:-mt-5 xxl:-mt-8'>
            <FourButtons/>
          </div>
       </header>
       <div className='w-full flex h-auto p-6'>
          <Sidebar needed={needed}/>
    
           <div className='lg:basis-3/4 w-full '>
           <p className='text-lg xxl:text-2xl text-slate-400 pb-1 ml-2 mt-4 mb-3'>Scaffold inspections Complete</p>
             
             <div className='lg:w-full overflow-x-auto lg:overflow-x-hidden pr-1 '>
               <table className='editor_listing_table '>
                 <thead className='w-full'>
                 <tr className='bg-gradient-to-b from-lightgreen to-darkgreen'>
                 <th className='whitespace-nowrap text-start px-2 py-1 text-sm xxl:text-base text-white rounded-l-md font-normal border-[1px] border-r-white'>Job ID</th>
                
                 <th className='text-start px-2 py-1 text-sm xxl:text-base text-white font-normal border-[1px] border-r-white'>Name</th>
                 <th className='text-start px-2 py-1 text-sm xxl:text-base text-white font-normal border-[1px] border-r-white'>Job Address</th>
                 <th className='text-start px-2 py-1 text-sm xxl:text-base text-white font-normal border-[1px] border-r-white'>First inspection date</th>
                 <th className='text-start px-2 py-1 text-sm xxl:text-base text-white font-normal '>Next inspection Date</th>
          
                 <th className='  text-sm xxl:text-base text-white font-normal rounded-r-lg '>Create Inspection</th>
               </tr>
               </thead>
               <div className='h-2'></div>
                 <tbody className=' '>
               {Data.map((data) => {
                 return (
    
                 <tr className=''>
                 <td className='w-1/12 border-[1px] border-gray-300 pl-3 p-1 text-[11px] xxl:text-sm text-center'>{data.id}</td>
                 <td className='w-1/12 border-[1px] border-gray-300 pl-3 p-1 text-[11px] xxl:text-sm text-center'>{data.name}</td>
                 <td className='w-3 /12 border-[1px] border-gray-300 pl-3 p-1 text-[11px] xxl:text-sm'>{data.address}</td>
                 <td className='w-2/12 border-[1px] border-gray-300 pl-3 p-1 text-[10px] xxl:text-[13px]'>{data.date}</td>
                 <td className='w-2/12 border-t-[1px] border-l-[1px] border-b-[1px] border-gray-300 pl-3 p-1 text-[10px] xxl:text-sm text-center'>{data.nextDate}</td>
                
                 <td className=' w-2/12 border-t-[1px] border-r-[1px] border-b-[1px] border-gray-300 p-1'>
                   <div className='flex flex-row justify-center space-x-2 xxl:space-x-5 px-4'>
                     <div className='flex flex-col items-center'>
                     <UploadFileIcon sx={{width:'25px',height:"25px"}} className="text-lightgreen hover:text-darkgreen cursor-pointer"/><p className='text-[8px] xxl:text-sm'>View</p>
                    </div>
                                        
                   </div>
                 </td>
                 </tr>
                 )})}
    </tbody>
    
    </table>
             
    </div>
           </div>
       </div>
    </div>
      )
}

export default ScaffoldInspectionComplete