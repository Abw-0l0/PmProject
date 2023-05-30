import React, { useEffect } from 'react'
import logo from '../pictures/TheBestescafflogo.png'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminSubscribed } from '../store/adminSlice';

const Data = [
  {
    text: "Method statement"
  },
  {
    text: "Risk Assessment"
  },
  {
    text: "Public Liability"
  },
  {
    text: "Company Insurance"
  },
  {
    text: "Method statement"
  },
  {
    text: "Method statement"
  },
]

function AdminUpload() {
  const dispatch=useDispatch();

  const navigate = useNavigate();
  const subscribed=useSelector((state)=>state.admin.subscribed);
  const email=useSelector((state)=>state.admin.email);
  const _id=useSelector((state)=>state.admin._id);


  const queryParameters = new URLSearchParams(window.location.search)
  const session_id = queryParameters.get("session_id")

  useEffect(() => {
    if(session_id){
     
      dispatch(adminSubscribed({_id:_id}))
    }else if(subscribed===false){

      navigate("/signin")
    }else if(!email){
      navigate("/signin")

    }
   

  },[])


  return (
    <div className='w-full flex flex-col h-full'>
      <header className='border-b-2 w-full pt-3 xxl:pt-8 px-8 sm:px-24'>
        <img className='w-38 h-14 md:w-[280px] md:h-[100px] xxl:w-[390px] xxl:h-[150px] mb-2 object-contain' src={logo} alt="logo" />
      </header>

      <p className='p-3 pb-2 pt-10 px-4 sm:px-12 xxl:text-3xl md:px-36 text-center md:text-start'>Welcome to eScaff lets get started by setting up your company, upload your documents and set up your staff</p>

      <div className='flex flex-col w-full p-1 sm:p-6 md:-mt-5'>

          <div className='flex flex-col md:flex-row w-full overflow-hidden'>

            <div className='flex w-full pr-5 md:pr-0 md:w-1/2 ml-1 xl:ml-10 h-fit flex-row'>
              <p className='mt-4 -mr-5 xl:-mr-0 rounded-full bg-lightgreen flex-shrink-0 h-fit p-1 sm:p-2 w-10 sm:w-12 xxl:w-[66px] xxl:p-4 xxl:text-3xl text-2xl text-white'><span className='ml-[10px]'>1</span></p>
              <div className='p-2 flex flex-col w-full ml-5 sm:ml-8'>
                <p className='p-1 font-semibold text-xs xxl:text-xl'>Customer / Company Name</p>
                <input className='bg-gray-200  opacity-50 p-[2px] xxl:p-3 w-full lg:w-10/12 outline-none pl-1' type="text" required/>
                <p className='p-1 font-semibold text-xs xxl:text-xl'>Telephone</p>
                <input className='bg-gray-200  opacity-50 p-[2px] xxl:p-3 w-full lg:w-10/12 outline-none pl-1' type="text" />
                <p className='p-1 font-semibold text-xs xxl:text-xl'>Email</p>
                <input className='bg-gray-200  opacity-50 p-[2px] xxl:p-3 w-full lg:w-10/12 outline-none pl-1' type="text" />
              </div>
            </div>

            <div className='flex w-full md:w-1/2 ml-10 pr-16 md:pr-0 md:ml-5 h-fit flex-row'>
              <div className='p-2 flex flex-col w-full ml-4 space-y-1'>
                <p className='p-1 font-semibold text-xs xxl:text-xl'>Address</p>
                <input className='bg-gray-200  opacity-50 p-[2px] xxl:p-3 outline-none pl-1 w-full md:w-2/3' type="text" required/>
                <p className='opacity-0 font-semibold text-xs xxl:text-xs'>Telephone</p>
                <input className='bg-gray-200  opacity-50 p-[2px] xxl:p-3 outline-none pl-1 w-full md:w-2/3' type="text" />
                <p className='p-1 font-semibold text-xs xxl:text-xl'>Postcode</p>
                <div className='flex flex-col sm:flex-row w-full items-start sm:items-center'>
                  <input className='bg-gray-200  opacity-50 p-[2px] xxl:p-3 outline-none w-full sm:w-28 xl:w-36 pl-1' type="text" />
                  <p className='text-[12px] break-words sm:text-xs xxl:text-xl xl:text-sm font-semibold px-1 py-1 sm:py-0 sm:px-4'>Upload your company Logo</p>
                  <label htmlFor="file-upload" className='h-8 rounded-md flex items-center px-3 sm:px-6 text-white cursor-pointer bg-lightgreen'>
                    <input className='absolute -ml-5 opacity-0' style={{width:'90px',cursor: 'pointer'}} id="file-upload" type="file" />Upload
                  </label>
                </div>
              </div>
            </div>

          </div>

{/* second */}

          <div className='flex flex-col md:flex-row w-full xxl:pt-6'>

            <div className='flex flex-col w-full md:w-2/5 space-y-3 md:pt-4 xl:pt-0'>
              <p className='p-2 pl-5 sm:pl-14 md:pl-24 lg:pl-32 whitespace-nowrap text-normal sm:text-lg xxl:text-3xl pt-10 md:pt-0 lg:pt-3 xl:pt-0 text-center sm:text-start'>Your uploaded company documents</p>

              <div className='flex w-full pl-2 xl:pl-10 h-fit flex-row'>
                <p className='rounded-full bg-lightgreen h-fit flex-shrink-0 p-1 sm:p-2 w-10 sm:w-12 xxl:w-[66px] xxl:p-4 xxl:text-3xl text-2xl text-white'><span className='ml-[10px]'>2</span></p>
                <div className='p-2 flex flex-row w-full ml-2 xl:ml-8 items-center justify-between'>
                  <div className='flex flex-col w-fit justify-center'>
                    <p className='pl-0 p-1 pt-0 font-semibold text-sm xxl:text-xl'>Upload your company documents</p>
                    <p className='text-xs xxl:text-base'>i.e Insurance, public, Liability, RAMS</p>
                  </div>
                  <button className='w-24 h-8 xxl:w-32 xxl:h-10 text-white cursor-pointer rounded-md bg-lightgreen text-sm xxl:text-xl hover:bg-darkgreen'>Upload</button>
                </div>
              </div>

              <div className='flex w-full pl-2 xl:pl-10 h-fit flex-row'>
                <p className='opacity-0 rounded-full bg-lightgreen h-fit flex-shrink-0 p-1 sm:p-2 w-10 sm:w-12 xxl:w-[66px] xxl:p-4 xxl:text-3xl text-2xl text-white'><span className='ml-[10px]'>8</span></p>
                <div className='p-2 flex flex-col w-full ml-2 xl:ml-8 items-center justify-between'>
                  <div className='flex flex-col w-fit justify-center'>
                    <p className='pl-0 p-1 pt-0 font-semibold text-sm xxl:text-xl'>Extra Bonus</p>
                    <p className='text-xs xxl:text-base'>Download our ready made documents for you to add your logo edit to suit your use and upload them as your personal company documents</p>
                  </div>
                  <button className='w-24 h-8 xxl:w-32 xxl:h-10 mt-2 self-end text-white cursor-pointer rounded-md bg-lightgreen text-sm xxl:text-xl hover:bg-darkgreen'>Download</button>
                </div>
              </div>

              <div className='flex w-full pl-2 xl:pl-10 h-fit flex-row'>
                <p className='rounded-full bg-lightgreen h-fit flex-shrink-0 p-1 sm:p-2 w-10 sm:w-12 xxl:w-[66px] xxl:p-4 xxl:text-3xl text-2xl text-white'><span className='ml-[10px]'>3</span></p>
                <div className='p-2 flex flex-col w-full ml-2 xl:ml-8 items-center justify-between'>
                  <div className='flex flex-col w-full justify-center'>
                    <p className='pl-0 p-1 pt-0 font-semibold text-sm xxl:text-xl'>Add key members of staff</p>
                    <p className='text-xs xxl:text-base'>Add your key members of staff that will be allocated to jobs, so you can keep track of who is working on what job.</p>
                  </div>
                  <button onClick={() => navigate('/staffMember')} className='w-24 h-8 xxl:w-32 xxl:h-10 mt-2 self-end text-white cursor-pointer rounded-md bg-lightgreen text-sm xxl:text-xl hover:bg-darkgreen'>Add staff</button>
                </div>
              </div>

            </div>

            <div className='flex flex-col w-full md:w-3/5'>
              <div className='flex flex-col w-full p-4 sm:px-14 md:px-32 md:pr-20'>
              <p className='text-sm xxl:text-2xl font-semibold pb-1'>Uploaded Documents</p>
              <table className='w-full'>

                <tr className='bg-gradient-to-b from-lightgreen to-darkgreen'>
                  <th className='text-start px-2 py-1 text-xs xxl:text-lg text-white rounded-l-md font-normal border-[1px] border-r-white'>File Name</th>
                  <th className='rounded-r-md'></th>
                </tr>
                <div className='h-2'></div>

                {Data.map((data) => {
                  return (
                  <tr className=''>
                  <td className='w-2/3 border-[1px] border-gray-300 pl-3 p-1 text-sm xxl:text-lg'>{data.text}</td>
                  <td className=' border-[1px] border-gray-300 p-1'>
                    <div className='flex flex-row justify-center space-x-2 xxl:space-x-6'>
                      <div className='flex flex-col items-center cursor-pointer'>
                        <UploadFileIcon sx={{width:'25px',height:"25px"}} className="text-lightgreen hover:text-darkgreen cursor-pointer"/><p className='text-[8px] xxl:text-sm'>View</p>
                      </div>
                      <div className='flex flex-col items-center cursor-pointer'>
                        <DeleteIcon sx={{width:'25px',height:"25px"}} className="text-lightgreen hover:text-darkgreen cursor-pointer"/><p className='text-[8px] xxl:text-sm'>Delete</p>
                      </div>                      
                    </div>
                  </td>
                  </tr>
                  )})}

              </table>


              </div>

            </div>

          </div>

      </div>
    </div>
  )
}

export default AdminUpload