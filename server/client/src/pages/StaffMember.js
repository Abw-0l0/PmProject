import React, { useState } from 'react'
import logo from '../pictures/TheBestescafflogo.png'
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Data = [
  { id:"1",
    name: "Arham",
    email: "i.am.arhamkhan25@gmail.com",
    telephone: "03119708281",
  },
  { id:"1",
    name: "Arham",
    email: "i.am.arhamkhan25@gmail.com",
    telephone: "03119708281",
  },


]
function StaffMember() {
  const [ needed, setNeeded ] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='w-full h-full'>
      <header className='border-b-2 w-full pt-3 xxl:pt-8 px-8 sm:px-24'>
        <img className='w-38 h-14 md:w-[280px] md:h-[100px] xxl:w-[390px] xxl:h-[150px] mb-2 object-contain' src={logo} alt="logo" />
        <div className='w-full flex justify-center md:justify-end px-2 sm:px-2 xl:pr-12 mt-2 lg:-mt-5 xxl:-mt-8'>
                <button onClick={() => navigate('/pricelist')} className='whitespace-nowrap border-t-2 mr-[1px] sm:mr-1 border-x-2 py-[2px] sm:py-1 px-1 sm:px-4 md:px-7 text-[7px] sm:text-xs xxl:mr-2 xxl:px-12 xxl:py-3 xxl:text-[21px] rounded-t-lg right-2 hover:shadow-sm hover:bg-lightgreen'>Your price list</button>
            </div>
        </header>
        <div className='w-full flex h-auto p-6'>
          <Sidebar needed={needed}/>

            <div className='lg:basis-3/4 w-full '>
            <p className='text-lg xxl:text-2xl text-slate-400 pb-1 ml-2 mt-4'>Add key members of staff</p>
              <div className='lg:flex lg:flex-row flex-col'>
                <div className='lg:basis-1/2 w-full'>
                
                <div className='p-2 flex flex-col w-full '>
                  <p className='p-1 font-semibold text-xs xxl:text-xl'>Staff Member Name</p>
                  <input className='bg-gray-200  opacity-50 p-[2px] xxl:p-3 outline-none pl-1' type="text" required/>
                  <p className='p-1 font-semibold text-xs xxl:text-xl'>Telephone</p>
                  <input className='bg-gray-200  opacity-50 p-[2px] xxl:p-3 outline-none pl-1' type="text" />
                  <p className='p-1 font-semibold text-xs xxl:text-xl'>Email</p>
                <input className='bg-gray-200  opacity-50 p-[2px] xxl:p-3 outline-none pl-1' type="text" />
               </div>
              </div>
          
              <div className='basis-1/2 flex-col flex  justify-between items-end'>
                 <div className='p-2 flex flex-col w-full '>
                  <p className='p-1 font-semibold text-xs xxl:text-xl'>Staff Member Name</p>
                  <input className='bg-gray-200  opacity-50 p-[2px] xxl:p-3 outline-none pl-1' type="text" required/>
          
                 </div>
              <div className='w-full pl-2'>
                <button className=' w-24 h-8 xxl:w-32 xxl:h-10 text-white cursor-pointer rounded-md bg-lightgreen text-sm xxl:text-lg hover:bg-darkgreen'>Upload</      button>
              </div>
            </div>
            
          </div>
               <p className='text-lg xxl:text-2xl text-slate-400 pb-1 ml-2 xxl:py-5'>Customer List</p>
              <div className='lg:w-full overflow-x-auto lg:overflow-x-hidden '>
                <table className='editor_listing_table '>
                  <thead className='w-full'>
                  <tr className='bg-gradient-to-b from-lightgreen to-darkgreen'>
                  <th className='text-start px-2 py-1 text-sm xxl:text-base text-white rounded-l-md font-normal border-[1px] border-r-white'>Staff ID</th>
                  <th className='text-start px-2 py-1 text-sm xxl:text-base text-white font-normal border-[1px] border-r-white'>Name</th>
                  <th className='text-start px-2 py-1 text-sm xxl:text-base text-white font-normal border-[1px] border-r-white'>Email</th>
                  <th className='text-start px-2 py-1 text-sm xxl:text-base text-white font-normal border-[1px] border-r-white'>Telephone</th>
                  <th className='rounded-r-lg text-white font-normal text-sm xxl:text-base'>Action</th>
                </tr>
                </thead>
                <div className='h-2'></div>
                  <tbody className=' '>
                {Data.map((data) => {
                  return (

                  <tr className=''>
                  <td className='w-1/12 border-[1px] border-gray-300 pl-3 p-1 text-[11px] xxl:text-sm'>{data.id}</td>
                  <td className='w-4/12 border-[1px] border-gray-300 pl-3 p-1 text-[11px] xxl:text-sm'>{data.name}</td>
                  <td className='w-3/12 border-[1px] border-gray-300 pl-3 p-1 text-[11px] xxl:text-sm'>{data.email}</td>
                  <td className='w-2/12 border-[1px] border-gray-300 pl-3 p-1 text-[11px] xxl:text-sm'>{data.telephone}</td>
                  <td className=' w-2/12 border-[1px] border-gray-300 p-1 text-[11px] xxl:text-sm]'>
                    <div className='flex flex-row justify-center space-x-2 xxl:space-x-5 px-4'>
                      <div className='flex flex-col items-center'>
                      <EditIcon sx={{width:'17px',height:"17px"}} className="text-lightgreen hover:text-darkgreen cursor-pointer"/><p className='text-[10px] xxl:text-sm'>View</p>
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

export default StaffMember