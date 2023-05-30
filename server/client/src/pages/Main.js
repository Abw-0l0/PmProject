import React from 'react'
import FooterScaff from '../components/FooterScaff'
import HeaderScaff from '../components/HeaderScaff'
import image from '../pictures/MeSmall.png'

function Main() {
    return (
    <div className='w-full h-screen flex flex-col items-center justify-center overflow-hidden'>
        <HeaderScaff />
        <div className='flex flex-col items-center justify-between pt-24 w-2/3 h-2/3 z-20'>
            <h1 className='font-sans text-center sm:text-xl xxl:text-[35px] xxl:whitespace-nowrap align-top text-darkgreen'><i>Wellcome to eScaff - the most powerful scaffolding management software on the market</i> </h1>
            <div className='flex-col border-l-4 border-lightgreen z-20 flex w-2/3 mt-9 h-fit'>
                <p className='text-darkgreen font-sans ml-2 z-20 xxl:text-[24px] whitespace-nowrap'>Automate your everyday tasks<br/>
                    Work remotely to add new projects or from your office<br/>
                    Your quotations automatically appear on your dashboard once the customer has approved<br/>
                    Make instant decisions to your daily workload from the dashboard<br/>
                    Quote projects with the built in estimator which notify the customer for approval<br/>
                    Set your company up once and its reflected throughout - including due diligence<br/>
                    Customers can view the status of each job you are working on from the dashboard
                </p>
            </div>
            <div className='flex w-11/12 items-start'>
                <p className='relative font-sans items-start self-start mb-4 ml-14 text-lg xxl:text-[30px] text-darkgreen z-20'>Simple to use, easy to set up, works on any device</p>
            </div>
            <div className='bg-watermark opacity-5 bg-contain w-1/3 h-5/6 md:h-11/12 bg-bottom -left-8 md:-left-32 bottom-[140px] bg-no-repeat absolute z-10'></div>
            <div className='flex items-start w-full z-20'>
                <img className='hidden lg:block lg:absolute w-48 xxl:w-64 bottom-32 xxl:bottom-44 opacity-70 xxl:right-[10%] right-[15%] z-10' src={image} alt="" />
            </div>
        </div>
        <FooterScaff />
    </div>
  )
}

export default Main