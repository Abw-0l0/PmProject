import React from 'react'
import logo from '../pictures/TheBestescafflogo.png'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { Switch } from '@mui/material'
import { styled } from '@mui/material/styles';

const Data = [
    { id:"1",
      name: "Mr Arham khan ",
      address:"hayatabad phase1 sector E2 house 542 peshawar pakistan ",
      date:"12/12/2022",
      job: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
      cost: "$ 1234.0",
    },
    { id:"1",
    name: "Mr Arham khan ",
    address:"hayatabad phase1 sector E2 house 542 peshawar pakistan ",
    date:"12/12/2022",
    job: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
    cost: "$ 1234.0",
  },
]
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 68,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      transform: 'translateX(30px)',
    },
  },
  '& .MuiSwitch-thumb': {
    width: 32,
    height: 32,
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
  },
}));

function ApprovedYourQoutes() {
    const navigate = useNavigate();
    return (
        <div className='w-full'>
        
       <header className='border-b-2 w-full pt-3 xxl:pt-8 px-8 sm:px-24'>
            <img className='w-38 h-14 md:w-[280px] md:h-[100px] xxl:w-[390px] xxl:h-[150px] mb-2 object-contain' src={logo} alt="logo" />
            <div className='w-full flex justify-center md:justify-end px-2 sm:px-2 xl:pr-12 mt-2 lg:-mt-5 xxl:-mt-8'>
            <button className='whitespace-nowrap border-t-2 mr-1 border-x-2 py-[2px] sm:py-1 px-1 sm:px-5 md:px-10 text-[7px] sm:text-xs xxl:mr-2 xxl:px-12 xxl:py-3 xxl:text-[21px] rounded-t-lg right-2 hover:shadow-sm hover:bg-lightgreen' onClick={() => navigate('/createnewcustomer')}>Add new job</button>
          <button className='whitespace-nowrap border-t-2 mr-1 border-x-2 py-[2px] sm:py-1 px-1 sm:px-5 md:px-10 text-[7px] sm:text-xs xxl:mr-2 xxl:px-12 xxl:py-3 xxl:text-[21px] rounded-t-lg right-2 hover:shadow-sm hover:bg-lightgreen' onClick={() => navigate('/liveprojects')}>live Projects</button>
        <button className='whitespace-nowrap border-t-2 mr-1 border-x-2 py-[2px] sm:py-1 px-1 sm:px-5 md:px-10 text-[7px] sm:text-xs xxl:mr-2 xxl:px-12 xxl:py-3 xxl:text-[21px] rounded-t-lg right-2 hover:shadow-sm hover:bg-lightgreen' onClick={() => navigate('/pendingprojectqoutes')}>Qoutes Approved</button>
          </div>
       </header>
       <div className='w-full flex h-auto p-6'>
        <Sidebar/>
    
           <div className='lg:basis-3/4 w-full overflow-x-scroll scrollbar-hide'>
           <p className='text-lg text-slate-400 pb-1 ml-2 mt-4 mb-3'>Approve Your Quotes</p>
             
             <div className='lg:w-full overflow-x-auto lg:overflow-x-hidden pr-1 '>
               <table className='editor_listing_table '>
                 <thead className='w-full'>
                 <tr className='bg-gradient-to-b from-lightgreen to-darkgreen'>
                 <th className='text-start px-2 py-1 text-xs text-white rounded-l-md font-normal border-[1px] border-r-white'>Job ID</th>
                 <th className='text-start px-2 py-1 text-xs text-white font-normal border-[1px] border-r-white'>Name</th>
                 <th className='text-start px-2 py-1 text-xs text-white font-normal border-[1px] border-r-white'>Address</th>
                 <th className='text-start px-2 py-1 text-xs text-white font-normal border-[1px] border-r-white'>Erection Date</th>
                 <th className='text-start px-2 py-1 text-xs text-white font-normal border-[1px] border-r-white'>Job Description</th>
                 <th className='text-start px-2 py-1 text-xs text-white font-normal border-[1px] border-r-white'>Project Cost</th>
                 <th className='text-start px-2 py-1 text-xs text-white font-normal border-[1px] border-r-white'>Quotation Approval </th>
               </tr>
               </thead>
               <div className='h-2'></div>
                 <tbody className=' '>
               {Data.map((data) => {
                 return (
    
                 <tr className=''>
                 <td className='w-1/12 border-[1px] border-gray-300 pl-3 p-1 text-center text-[11px]'>{data.id}</td>
                 <td className='w-1/12 border-[1px] border-gray-300 pl-3 p-1 text-center text-[11px]'>{data.name}</td>
                 <td className='w-3 /12 border-[1px] border-gray-300 pl-3 p-1 text-[11px]'>{data.address}</td>
                 <td className='w-1/12 border-[1px] border-gray-300 pl-3 p-1 text-[10px]'>{data.date}</td>
                 <td className='w-4/12 border-[1px] border-gray-300 pl-3 p-1 text-[11px]'>{data.job}</td>
                 <td className='w-1/12 border-[1px] border-gray-300 pl-3 p-1 text-[11px]'>{data.cost}</td>
                 <td className='w-2/12 border-[1px] border-gray-300 pl-3 p-1 text-[11px] text-center' > 
                 {/* <Switch className='ml-1 text-lightgreen my-2'  color='success' /> */}
                 <MaterialUISwitch color='success' />
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

export default ApprovedYourQoutes