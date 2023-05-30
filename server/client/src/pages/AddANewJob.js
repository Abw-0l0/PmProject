import React, { useState } from 'react'
import logo from '../pictures/TheBestescafflogo.png'
import FourButtons from '../components/FourButtons';
import Sidebar from '../components/Sidebar';


function AddANewJob() {
    const [ needed, setNeeded ] = useState(false);
    // const navigate = useNavigate()
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
         <p className='text-lg xxl:text-2xl text-slate-400 pb-1 ml-2 mt-4'>Add a new job</p>
           <div className='lg:flex lg:flex-row flex-col'>
             <div className='lg:basis-1/2 w-full'>
             
             <div className='p-2 flex flex-col w-full '>
               <p className='p-1 font-semibold text-xs xxl:text-xl xxl:mb-1'>Select Customer</p>
               <select name="cars" className='bg-gray-200  opacity-50 p-[2px] xxl:p-3 outline-none pl-1' id="cars">
                    <option value="volvo " className='text-xs xxl:text-xl' >Volvo</option>
                    <option value="saab " className='text-xs xxl:text-xl'>Saab</option>
                    <option value="mercedes " className='text-xs xxl:text-xl'>Mercedes</option>
                    <option value="audi "className='text-xs xxl:text-xl' >Audi</option>
                </select>
               {/* <input className='bg-gray-200  opacity-50 p-[2px] xxl:p-3 outline-none pl-1' type="text" required/> */}
               <p className='p-1 font-semibold text-xs xxl:text-xl'>Add New Job</p>
               <input className='bg-gray-200 opacity-50 p-[2px] xxl:p-3 outline-none pl-1' type="text" />
              
             <input className='bg-gray-200 opacity-50 p-[2px] xxl:p-3 outline-none pl-1 mt-5' type="text" />
             <p className='p-1 font-semibold text-xs xxl:text-xl'>PostCode</p>

             <input className='bg-gray-200 opacity-50 p-[2px] xxl:p-3 w-1/2 outline-none pl-1' type="text" required/>    

            </div>
           </div>
       
           <div className='basis-1/2 flex-col flex  justify-between '>
              <div className='p-2 flex flex-col w-full '>
               <p className='p-1 font-semibold text-xs xxl:text-xl'>Job Description</p>
               <textarea className='bg-gray-200 opacity-50 p-[2px] xxl:p-3 outline-none pl-1' id="w3review" name="w3review" rows="5" cols="50"></textarea>
            
               <p className='p-1 font-semibold text-xs xxl:mt-14 xxl:text-xl mt-1'>Access To Job Details</p>
               <div className='flex justify-between'>
               <input className='bg-gray-200 opacity-50 p-[2px] w-full xxl:p-3 outline-none pl-1' type="text" required/>    
               </div>
              </div>
  
          
         </div>
         
       </div>
           <div className='ml-2 lg:w-full xxl:w-full mt-4 '>
           <label className=' w-24 h-8 xxl:w-32 xxl:h-10  p-2 self-end text-white cursor-pointer rounded-md bg-lightgreen text-sm xxl:text-xl hover:bg-darkgreen'   >
            <input type="file" className='hidden'/>
                  Add Photo
            </label>
         
           {/* <button className='w-24 h-8 xxl:w-32 xxl:h-10 mt-2 self-end text-white cursor-pointer rounded-md bg-lightgreen text-sm xxl:text-xl hover:bg-darkgreen'>Add Photo</button> */}
           <div className='grid  sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 xxl:grid-cols-5 mt-4'>

               <div className='mx-2 my-2 flex items-center justify-center'>
                <img className='mt-2 object-contain' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='document' />
              </div>
              <div className='mx-2 my-2 flex items-center justify-center'>
                <img className='mt-2 object-contain' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='document' />
                </div>
                <div className='mx-2 my-2 flex items-center justify-center'>
                <img className='mt-2 object-contain' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='document' />
                </div>
                <div className='mx-2 my-2 flex items-center justify-center'>
                <img className='mt-2 object-contain' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='document' />
                </div>
                <div className='mx-2 my-2 flex items-center justify-center'>
                <img className='mt-2 object-contain' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='document' />
                </div>
                <div className='mx-2 my-2 flex items-center justify-center'>
                <img className='mt-2 object-contain' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='document' />
                 </div>
                 <div className='mx-2 my-2 flex items-center justify-center'>
                <img className='mt-2 object-contain' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='document' />
                 </div>
                 <div className='mx-2 my-2 flex items-center justify-center'>
                <img className='mt-2 object-contain' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='document' />
                 </div>
                 <div className='mx-2 my-2 flex items-center justify-center'>
                <img className='mt-2 object-contain' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='document' />
                 </div>
                 <div className='mx-2 my-2 flex items-center justify-center'>
                <img className='mt-2 object-contain' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='document' />
                 </div>
                 <div className='mx-2 my-2 flex items-center justify-center'>
                <img className='mt-2 object-contain' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='document' />
                 </div>
                 <div className='mx-2 my-2 flex items-center justify-center'>
                <img className='mt-2 object-contain' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='document' />
                 </div>
                 
               
          
                
           </div>

                
            
           
            </div>
         </div>
     </div>
  </div>
    )
}

export default AddANewJob