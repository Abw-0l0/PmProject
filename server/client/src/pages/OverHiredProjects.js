import React, { useState } from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';
import logo from '../pictures/TheBestescafflogo.png'
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Sidebar from '../components/Sidebar';

const Data = [
    { id:"6",
    name: "Bell Construction",
    address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
    actionDate:"1/12/2022",
    jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
    telNumber:"Adaption",
  },
  { id:"6",
  name: "Bell Construction",
  address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
  actionDate:"1/12/2022",
  jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
  telNumber:"Adaption",
  },
  { id:"6",
  name: "Bell Construction",
  address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
  actionDate:"1/12/2022",
  jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
  telNumber:"Adaption",
  },
  { id:"6",
  name: "Bell Construction",
  address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
  actionDate:"1/12/2022",
  jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
  telNumber:"Adaption",
  },
]

function OverHiredProjects() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [ needed, setNeeded ] = useState(true);
  const navigate = useNavigate();

  return (
        <div className='w-full h-full'>
          <header className='border-b-2 w-full pt-3 xxl:pt-8 px-8 sm:px-24'>
            <img className='w-38 h-14 md:w-[280px] md:h-[100px] xxl:w-[390px] xxl:h-[150px] mb-2 object-contain' src={logo} alt="logo" />
            <div className='w-full flex justify-center md:justify-end px-2 sm:px-2 xl:pr-12 mt-2 lg:-mt-5 xxl:-mt-8'>
                <button onClick={() => navigate("/liveprojects")} className='whitespace-nowrap border-t-2 mr-[1px] sm:mr-1 border-x-2 py-[2px] sm:py-1 px-1 sm:px-4 md:px-7 text-[7px] sm:text-xs xxl:mr-2 xxl:px-12 xxl:py-3 xxl:text-[21px] rounded-t-lg right-2 hover:shadow-sm hover:bg-lightgreen'>Live projects</button>
            </div>
          </header>
       <div className='w-full flex h-auto p-6'>
       <div className={`${sidebarOpen? "basis-1/5" : "hidden"} "w-full h-full sticky top-16"`}>
            <Sidebar setSidebarOpen={setSidebarOpen} needed={needed}/>
          </div>

          <div className={`${sidebarOpen?" hidden":"flex" } " w-12 h-fit justify-center"`}>
            <IconButton onClick={() => setSidebarOpen(true)}>
              <ArrowForwardIosIcon/>
            </IconButton>
          </div>

          <div className={`${sidebarOpen? "lg:basis-3/4 w-full" : "w-full" } " overflow-x-scroll"`}>
            <div className='w-full flex justify-start items-center mt-4'>
              <p onClick={() => navigate('/overhiredprojects')} className='text-base xxl:text-2xl text-slate-400 pb-1 ml-2 whitespace-nowrap hover:text-black cursor-pointer'>
                  Overhired project
                  <CircleIcon sx={{width:'17px',height:"17px"}} className="text-red-600 ml-1"/>
              </p>
              <p className='text-xs xxl:text-base text-slate-700 ml-2 whitespace-nowrap'>These jobs have gone over the date requested in the quotation - contact the customer and edit the quotation in the action panel below</p>
            </div>
             
             <div className='lg:w-full pr-1 '>
               <table className='editor_listing_table scrollbar-hide'>
                 <thead className='w-full'>
                 <tr className='bg-gradient-to-b from-lightgreen to-darkgreen'>
                 <th className='text-start px-2 py-1 text-sm xxl:text-base whitespace-nowrap text-white rounded-l-md font-normal border-[1px] border-r-white'>No. of Weeks</th>
                 <th className='text-start px-2 py-1 text-sm xxl:text-base whitespace-nowrap text-white font-normal border-[1px] border-r-white'>Name</th>
                 <th className='text-start px-2 py-1 text-sm xxl:text-base whitespace-nowrap text-white font-normal border-[1px] border-r-white'>Address</th>
                 <th className='text-start px-2 py-1 text-sm xxl:text-base whitespace-nowrap text-white font-normal border-[1px] border-r-white'>Action Date</th>
                 <th className='text-start px-2 py-1 text-sm xxl:text-base whitespace-nowrap text-white font-normal border-[1px] border-r-white'>Job Description</th>
                 <th className='text-start px-2 py-1 text-sm xxl:text-base whitespace-nowrap text-white font-normal border-[1px] border-r-white'>Telephone number</th>
                 <th className='  text-sm xxl:text-base text-white font-normal rounded-r-lg '>Action</th>
               </tr>
               </thead>
               <div className='h-2'></div>
                 <tbody className=' '>
               {Data.map((data) => {
                 return (
    
                 <tr className=''>
                 <td className='w-1/12 border-[1px] border-gray-300 p-1 text-[11px] xxl:text-sm text-center'>{data.id}</td>
                 <td className='w-1/12 border-[1px] border-gray-300 p-1 text-[11px] xxl:text-sm text-center'>{data.name}</td>
                 <td className='w-3/12 border-[1px] border-gray-300 p-1 text-[10px] xxl:text-[13px] text-center'>{data.address}</td>
                 <td className='w-1/12 border-[1px] border-gray-300 p-1 text-[11px] xxl:text-sm  text-center'>{data.actionDate}</td>
                 <td className='w-4/12 border-[1px] border-gray-300 p-1 text-[11px] xxl:text-sm'>{data.jobDescription}</td>
                 <td className='w-1/12 border-[1px] border-gray-300 p-1 text-[11px] xxl:text-sm text-center'>{data.telNumber}</td>
                 <td className=' w-1/12 border-[1px] border-gray-300 p-1'>
                 <div className='flex flex-row justify-center space-x-2 xxl:space-x-5 px-4'>
                      <div className='flex flex-col items-center'>
                        <UploadFileIcon sx={{width:'17px',height:"17px"}} className="text-lightgreen hover:text-darkgreen cursor-pointer"/><p className='whitespace-nowrap text-[10px] xxl:text-sm'>Edit Quote</p>
                      </div>
                      <div className='flex flex-col items-center'>
                        <DeleteIcon sx={{width:'17px',height:"17px"}} className="text-lightgreen hover:text-darkgreen cursor-pointer"/><p className='text-[10px] xxl:text-sm'>Delete</p>
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

export default OverHiredProjects