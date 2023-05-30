import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import googleMaps from '../pictures/googleMaps.png'

const imageData = [
    { 
        link:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
    },
    { 
        link:"https://media.istockphoto.com/id/619503842/photo/wazir-khan-mosque-lahore-pakistan.jpg?s=612x612&w=0&k=20&c=3vrR52_8PkripvQhwP_TOVCW4e9xvv4lIjlSRyPd9Hs=",
    },
    { 
        link:"https://media.istockphoto.com/id/538601654/photo/sunehri-mosque-peshawar-pakistan.jpg?s=612x612&w=0&k=20&c=-P-90BMVitvcbTp46wmt-0iojU7uK_Wbme4erbpDjaE=",
    },
    { 
        link:"https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2022/07/webb_s_first_images_-_highlights/24358377-1-eng-GB/Webb_s_first_images_-_highlights_pillars.jpg",
    },
]

function ImageSlider() {
    const [image, setImage] = useState(imageData[0].link);

    const next = () => {
        if(image === imageData[imageData.length - 1].link){
            setImage(imageData[0].link)
            return image;
        } else {
            imageData.map((im,index) => {
                if(im.link === image){
                    setImage(imageData[index+1].link)
                }
                return image;
            })
        }
        return image;
    };

    const back = () => {
        if(image === imageData[0].link){
            setImage(imageData[imageData.length-1].link)
            return image;
        } else {
            imageData.map((im,index) => {
                if(im.link === image){
                    setImage(imageData[index-1].link)
                }
                return image;
            })
        }
        return image;
    };

    return (
    <div className='flex h-full flex-col w-full mt-5 sm:mt-0'>
        <div className='sm:sticky sm:top-32 md:top-44 lg:top-36 xxl:top-56 -mb-10'>
            <div className='flex flex-col w-full bg-darkgreen border-[2px] border-darkgreen shadow-xl xxl:mt-6'>
                <div className='flex h-[410px] xl:h-[470px] justify-center w-full bg-white'>
                    <img className='object-cover' src={image} alt="" />
                </div>
                <div className='bg-darkgreen flex justify-center space-x-32 p-[2px] xxl:p-2'>
                    <ArrowBackIosNewIcon onClick={back} sx={{width:'20px',height:"20px"}} className="text-white hover:text-lightgreen hover:translate-x-[2px] cursor-pointer"/>
                    <ArrowForwardIosIcon onClick={next} sx={{width:'20px',height:"20px"}} className="text-white hover:text-lightgreen hover:translate-x-[2px] cursor-pointer"/>
                </div>
            </div>
            <a href="https://www.google.com/maps" rel="noreferrer" target="_blank"><div className='flex bg-white flex-row space-x-4 w-full justify-center items-center py-3 xl:py-8 z-10' >
                <img src={googleMaps} alt="mape" className='object-contain w-10 h-10'/>
                <p className='text-sm xxl:text-xl'>Open Google maps in a separate window</p>
            </div></a>
        </div>
    </div>
  )
}

export default ImageSlider