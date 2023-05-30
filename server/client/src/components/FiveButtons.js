import React from 'react'
import { useNavigate } from 'react-router-dom';

function FiveButtons() {
    const navigate = useNavigate();

    return (
    <>
        <button className='whitespace-nowrap border-t-2 mr-[1px] sm:mr-1 border-x-2 py-[2px] sm:py-1 px-1 sm:px-4 md:px-7 text-[7px] sm:text-xs xxl:mr-2 xxl:px-12 xxl:py-3 xxl:text-[21px] rounded-t-lg right-2 hover:shadow-sm hover:bg-lightgreen' onClick={() => navigate('')}>Temp roof</button>
        <button className='whitespace-nowrap border-t-2 mr-[1px] sm:mr-1 border-x-2 py-[2px] sm:py-1 px-1 sm:px-4 md:px-7 text-[7px] sm:text-xs xxl:mr-2 xxl:px-12 xxl:py-3 xxl:text-[21px] rounded-t-lg right-2 hover:shadow-sm hover:bg-lightgreen' onClick={() => navigate('/liveprojects')}>Live projects</button>
        <button className='whitespace-nowrap border-t-2 mr-[1px] sm:mr-1 border-x-2 py-[2px] sm:py-1 px-1 sm:px-4 md:px-7 text-[7px] sm:text-xs xxl:mr-2 xxl:px-12 xxl:py-3 xxl:text-[21px] rounded-t-lg right-2 hover:shadow-sm hover:bg-lightgreen' onClick={() => navigate('/createnewcustomer')}>Create a new customer</button>
        <button className='whitespace-nowrap border-t-2 mr-[1px] sm:mr-1 border-x-2 py-[2px] sm:py-1 px-1 sm:px-4 md:px-7 text-[7px] sm:text-xs xxl:mr-2 xxl:px-12 xxl:py-3 xxl:text-[21px] rounded-t-lg right-2 hover:shadow-sm hover:bg-lightgreen' onClick={() => navigate()}>Add new job</button>
        <button className='whitespace-nowrap border-t-2 mr-[1px] sm:mr-1 border-x-2 py-[2px] sm:py-1 px-1 sm:px-4 md:px-7 text-[7px] sm:text-xs xxl:mr-2 xxl:px-12 xxl:py-3 xxl:text-[21px] rounded-t-lg right-2 hover:shadow-sm hover:bg-lightgreen' onClick={() => navigate('/quotesapproved')}>Quotes approved</button>
    </>
  )
}

export default FiveButtons