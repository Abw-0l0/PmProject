import React from 'react'
import { useNavigate } from 'react-router-dom'

function FourButtons() {
    const navigate = useNavigate();
  return (
    <>
        <button className='whitespace-nowrap border-t-2 mr-1 border-x-2 py-[2px] sm:py-1 px-1 sm:px-5 md:px-10 text-[7px] sm:text-xs xxl:mr-2 xxl:px-12 xxl:py-3 xxl:text-[21px] rounded-t-lg right-2 hover:shadow-sm hover:bg-lightgreen' onClick={() => navigate('/liveprojects')}>Live Projects</button>
        <button className='whitespace-nowrap border-t-2 mr-1 border-x-2 py-[2px] sm:py-1 px-1 sm:px-5 md:px-10 text-[7px] sm:text-xs xxl:mr-2 xxl:px-12 xxl:py-3 xxl:text-[21px] rounded-t-lg right-2 hover:shadow-sm hover:bg-lightgreen' onClick={() => navigate('/createnewcustomer')}>Create a new customer</button>
        <button className='whitespace-nowrap border-t-2 mr-1 border-x-2 py-[2px] sm:py-1 px-1 sm:px-5 md:px-10 text-[7px] sm:text-xs xxl:mr-2 xxl:px-12 xxl:py-3 xxl:text-[21px] rounded-t-lg right-2 hover:shadow-sm hover:bg-lightgreen' onClick={() => navigate('/pendingprojectqoutes')}>Pending quotes</button>
        <button className='whitespace-nowrap border-t-2 mr-1 border-x-2 py-[2px] sm:py-1 px-1 sm:px-5 md:px-10 text-[7px] sm:text-xs xxl:mr-2 xxl:px-12 xxl:py-3 xxl:text-[21px] rounded-t-lg right-2 hover:shadow-sm hover:bg-lightgreen' onClick={() => navigate('/quotesapproved')}>Quotes approved</button>
    </>
)
}

export default FourButtons