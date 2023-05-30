import React, { useState } from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import FourButtonsOne from '../components/FourButtonsOne';
import logo from '../pictures/TheBestescafflogo.png'
import Sidebar from '../components/Sidebar';
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PanToolIcon from '@mui/icons-material/PanTool';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Data = [
    { id:"6",
      name: "Bell Construction",
      address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
      actionDate:"1/12/2022",
      jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
      setStatus:"Adaption",
      progress:"This comes from Scaffolders phone",
      assignAMemberOfStaff: ["John","Ali","Khan"],
    },
    { id:"6",
      name: "Bell Construction",
      address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
      actionDate:"1/12/2022",
      jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
      setStatus:"Adaption",
      progress:"This comes from Scaffolders phone",
      assignAMemberOfStaff: ["John","Ali","Khan"],
    },
    { id:"6",
      name: "Bell Construction",
      address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
      actionDate:"1/12/2022",
      jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
      setStatus:"Adaption",
      progress:"This comes from Scaffolders phone",
      assignAMemberOfStaff: ["John","Ali","Khan"],
    },
    { id:"6",
      name: "Bell Construction",
      address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
      actionDate:"1/12/2022",
      jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
      setStatus:"Adaption",
      progress:"This comes from Scaffolders phone",
      assignAMemberOfStaff: ["John","Ali","Khan"],
    },
    { id:"6",
      name: "Bell Construction",
      address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
      actionDate:"1/12/2022",
      jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
      setStatus:"Adaption",
      progress:"This comes from Scaffolders phone",
      assignAMemberOfStaff: ["John","Ali","Khan"],
    },
    { id:"6",
      name: "Bell Construction",
      address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
      actionDate:"1/12/2022",
      jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
      setStatus:"Adaption",
      progress:"This comes from Scaffolders phone",
      assignAMemberOfStaff: ["John","Ali","Khan"],
    },
    { id:"6",
      name: "Bell Construction",
      address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
      actionDate:"1/12/2022",
      jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
      setStatus:"Adaption",
      progress:"This comes from Scaffolders phone",
      assignAMemberOfStaff: ["John","Ali","Khan"],
    },
    { id:"6",
      name: "Bell Construction",
      address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
      actionDate:"1/12/2022",
      jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
      setStatus:"Adaption",
      progress:"This comes from Scaffolders phone",
      assignAMemberOfStaff: ["John","Ali","Khan"],
    },
    { id:"6",
      name: "Bell Construction",
      address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
      actionDate:"1/12/2022",
      jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
      setStatus:"Adaption",
      progress:"This comes from Scaffolders phone",
      assignAMemberOfStaff: ["John","Ali","Khan"],
    },
    { id:"6",
      name: "Bell Construction",
      address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
      actionDate:"1/12/2022",
      jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
      setStatus:"Adaption",
      progress:"This comes from Scaffolders phone",
      assignAMemberOfStaff: ["John","Ali","Khan"],
    },
    { id:"6",
      name: "Bell Construction",
      address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
      actionDate:"1/12/2022",
      jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
      setStatus:"Adaption",
      progress:"This comes from Scaffolders phone",
      assignAMemberOfStaff: ["John","Ali","Khan"],
    },
    { id:"6",
      name: "Bell Construction",
      address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
      actionDate:"1/12/2022",
      jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
      setStatus:"Adaption",
      progress:"This comes from Scaffolders phone",
      assignAMemberOfStaff: ["John","Ali","Khan"],
    },
    { id:"6",
      name: "Bell Construction",
      address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
      actionDate:"1/12/2022",
      jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
      setStatus:"Adaption",
      progress:"This comes from Scaffolders phone",
      assignAMemberOfStaff: ["John","Ali","Khan"],
    },
    { id:"6",
      name: "Bell Construction",
      address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
      actionDate:"1/12/2022",
      jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
      setStatus:"Adaption",
      progress:"This comes from Scaffolders phone",
      assignAMemberOfStaff: ["John","Ali","Khan"],
    },
    { id:"6",
      name: "Bell Construction",
      address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
      actionDate:"1/12/2022",
      jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
      setStatus:"Adaption",
      progress:"This comes from Scaffolders phone",
      assignAMemberOfStaff: ["John","Ali","Khan"],
    },
    { id:"6",
      name: "Bell Construction",
      address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
      actionDate:"1/12/2022",
      jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
      setStatus:"Adaption",
      progress:"This comes from Scaffolders phone",
      assignAMemberOfStaff: ["John","Ali","Khan"],
    },
    { id:"6",
      name: "Bell Construction",
      address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
      actionDate:"1/12/2022",
      jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
      setStatus:"Adaption",
      progress:"This comes from Scaffolders phone",
      assignAMemberOfStaff: ["John","Ali","Khan"],
    },
    { id:"6",
      name: "Bell Construction",
      address:"12 Newquay Road Perranporth indent Lane Newquay Cornwall TR7 6HT ",
      actionDate:"1/12/2022",
      jobDescription:"Front elevation 3 lifts with a 3 x 3 gantry and a chute, side elevation requires a beam roof, the rear of the property has a patio that over small needs protecting with scaffold boards",
      setStatus:"Adaption",
      progress:"This comes from Scaffolders phone",
      assignAMemberOfStaff: ["John","Ali","Khan"],
    },
]

function LiveProjects() {
  const [ sidebarOpen, setSidebarOpen ] = useState(false);
  const [ needed, setNeeded ] = useState(true);
  const navigate = useNavigate();

    return (
        <div className='w-full h-full'>
        <header className='border-b-2 w-full pt-3 xxl:pt-8 px-8 sm:px-24'>
          <img className='w-38 h-14 md:w-[280px] md:h-[100px] xxl:w-[390px] xxl:h-[150px] mb-2 object-contain' src={logo} alt="logo" />
          <div className='w-full flex justify-center md:justify-end px-2 sm:px-2 xl:pr-12 mt-2 lg:-mt-5 xxl:-mt-8'>
              <FourButtonsOne />
            </div>
        </header>
       <div className='w-full flex h-auto p-6'>
          <div className={`${sidebarOpen? "basis-1/5" : "hidden"} "w-full h-full"`}>
            <Sidebar setSidebarOpen={setSidebarOpen} needed={needed}/>
          </div>

          <div className={`${sidebarOpen?" hidden":"flex" } " w-12 h-fit justify-center"`}>
            <IconButton onClick={() => setSidebarOpen(true)}>
              <ArrowForwardIosIcon/>
            </IconButton>
          </div>

           <div className={`${sidebarOpen? "lg:basis-3/4 w-full" : "w-full" } " overflow-x-scroll scrollbar-hide"`}>
            <div className='w-full flex justify-between mt-4'>
                <div className='flex space-x-2'>
                    <p className='text-base xxl:text-2xl text-slate-400 pb-1 ml-2 hover:text-black cursor-pointer whitespace-nowrap'>
                        Your live projects
                        <CircleIcon sx={{width:'17px',height:"17px"}} className="text-green-600 ml-1"/>
                    </p>
                    <p onClick={() => navigate('/overhiredprojects')} className='text-base xxl:text-2xl text-slate-400 pb-1 ml-2 whitespace-nowrap hover:text-black cursor-pointer'>
                        Overhired project
                        <CircleIcon sx={{width:'17px',height:"17px"}} className="text-red-600 ml-1"/>
                    </p>
                </div>
                <div className='flex space-x-4 items-center'>
                    <p className='text-xs xxl:text-base text-slate-700 ml-2 whitespace-nowrap'>Search for a customer</p>
                    <div className='flex items-center'>
                        <SearchIcon sx={{width:'17px',height:"17px"}} className="-mr-5 relative left-0 text-lightgreen"/>
                        <input type="text" className='outline-none border-[1px] pl-5 h-6 xxl:h-7 rounded-md border-lightgreen'/>
                    </div>
                </div>
            </div>
             
             <div className='lg:w-full pr-1 '>
               <table className='editor_listing_table '>
                 <thead className='w-full'>
                 <tr className='bg-gradient-to-b from-lightgreen to-darkgreen'>
                 <th className='text-start px-2 py-1 text-sm xxl:text-base whitespace-nowrap text-white rounded-l-md font-normal border-[1px] border-r-white'>No. of Weeks</th>
                 <th className='text-start px-2 py-1 text-sm xxl:text-base whitespace-nowrap text-white font-normal border-[1px] border-r-white'>Name</th>
                 <th className='text-start px-2 py-1 text-sm xxl:text-base whitespace-nowrap text-white font-normal border-[1px] border-r-white'>Address</th>
                 <th className='text-start px-2 py-1 text-sm xxl:text-base whitespace-nowrap text-white font-normal border-[1px] border-r-white'>Action Date</th>
                 <th className='text-start px-2 py-1 text-sm xxl:text-base whitespace-nowrap text-white font-normal border-[1px] border-r-white'>Job Description</th>
                 <th className='text-start px-2 py-1 text-sm xxl:text-base whitespace-nowrap text-white font-normal border-[1px] border-r-white'>Set Status</th>
                 <th className='text-start px-2 py-1 text-sm xxl:text-base whitespace-nowrap text-white font-normal border-[1px] border-r-white'>Progress</th>
                 <th className='text-start px-2 py-1 text-sm xxl:text-base whitespace-nowrap text-white font-normal border-[1px] border-r-white'>Assign a member of staff</th>
                 <th className='text-sm xxl:text-base text-white font-normal rounded-r-lg '>Action</th>
               </tr>
               </thead>
               <div className='h-2'></div>
                 <tbody className=' '>
               {Data.map((data) => {
                 return (
    
                 <tr className=''>
                 <td className='w-1/12 border-[1px] border-gray-300 p-1 text-[11px] xxl:text-sm text-center'>{data.id}</td>
                 <td className='w-1/12 border-[1px] border-gray-300 p-1 text-[11px] xxl:text-sm text-center'>{data.name}</td>
                 <td className='w-3/12 border-[1px] border-gray-300 p-1 text-[11px] xxl:text-sm text-center'>{data.address}</td>
                 <td className='w-1/12 border-[1px] border-gray-300 p-1 text-[11px] xxl:text-sm  text-center'>{data.actionDate}</td>
                 <td className='w-4/12 border-[1px] border-gray-300 p-1 text-[10px] xxl:text-[13px]'>{data.jobDescription}</td>
                 <td className='w-1/12 border-[1px] border-gray-300 p-1 text-[11px] xxl:text-sm text-center'>{data.setStatus}</td>
                 <td className='w-1/12 border-[1px] border-gray-300 p-1 text-[11px] xxl:text-sm text-center bg-teal-200'>{data.progress}</td>
                 <td className='w-1/12 border-[1px] border-gray-300 p-1 text-[11px] xxl:text-sm text-start align-top'>
                    <label for="staff">Choose:</label>
                    <select name="staff" id="staff" className='outline-none w-4'>
                        {data.assignAMemberOfStaff.map((staff) => (
                            <option value={staff} className='px-1'>{staff}a</option>
                            ))}
                    </select>
                 </td>
                 <td className=' w-1/12 border-[1px] border-gray-300 p-1'>
                 <div className='flex flex-row justify-center space-x-2 xxl:space-x-3 px-1'>
                      <div className='flex flex-col items-center'>
                        <PanToolIcon sx={{width:'17px',height:"17px"}} className="text-lightgreen hover:text-darkgreen cursor-pointer"/><p className='text-[10px] xxl:text-sm'>Handover</p>
                      </div>
                      <div className='flex flex-col items-center'>
                        <EditIcon onClick={() => navigate('/createquotation')} sx={{width:'17px',height:"17px"}} className="text-lightgreen hover:text-darkgreen cursor-pointer"/><p className='text-[10px] xxl:text-sm'>Edit</p>
                      </div>
                      <div className='flex flex-col items-center'>
                        <UploadFileIcon sx={{width:'17px',height:"17px"}} className="text-lightgreen hover:text-darkgreen cursor-pointer"/><p className='text-[10px] xxl:text-sm'>Quote</p>
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

export default LiveProjects