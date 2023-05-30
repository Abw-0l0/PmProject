import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import escapeHtml from '../components/Validator';
import logo from '../pictures/TheBestescafflogo.png'
import { fetchPriceList, savePriceList } from '../store/adminSlice';

function PriceList() {
    const navigate = useNavigate();
    const [ needed, setNeeded ] = useState(false);
    const adminID=useSelector((state)=>state.admin._id);

    const [ priceList, setPriceList] = useState({linearMerterageCost:"35.00",saddleCost:"36.00",throwinCost:"35.00",hakkiLayher:"35.00",temporaryRoof:"28.00",monoflex:"3.00",shrinkwrap:"6.00",fivebyonepointeightTower:"175.00",fivebyonepointeightTowerCostPerLift:"75.00",eightbytwopointfourTower:"200.00",eightbytwopointfourTowerCostPerLift:"85.00",tenbythreeTower:"250.00",tenbythreeTowerCostPerLift:"95.00",thirteenbyfourTower:"300.00",thirteenbyfourTowerCostPerLift:"100.00",scaffoldingInspectionPerVisit:"75.00",overhirePercentage:"10",addItem:[],adminID:adminID});
    const [ temp, setTemp ] = useState({name:"",cost:""})
    const dispatch=useDispatch();

    
    const addHtml = (e) => {
        e.preventDefault();
        if(temp.name !== "" && temp.cost !== ""){
            priceList.addItem.push(temp);
            setTemp({name:"",cost:""});
            console.log(priceList.addItem);
        }
    };

    const removeItem = (a) => {
        setPriceList({...priceList, addItem:priceList.addItem.filter((c) => c.name !== a.name)});
        console.log(priceList.addItem);
    };
    const handleSubmit=()=>{
        dispatch(savePriceList(priceList))
    }
    // const fetchPriceList=async()=>{
    //     const {data:response} = await axios.post("http://localhost:5000/admin/fetchpricelist",{adminID:adminID});
    //     console.log(adminID)
    //       return response
    // }

    useEffect(()=>{
        dispatch(fetchPriceList(adminID))
        // try {
            
        //     const call=fetchPriceList()
        //     console.log(call);
        //     // setPriceList(call);
        // } catch (error) {
            
        // }
    },[])

    return (
    <div className='w-full h-full'>
        <header className='border-b-2 w-full pt-3 xxl:pt-8 px-8 sm:px-20 sticky top-0 bg-white z-40'>
            <img className='w-38 h-14 md:w-[280px] md:h-[100px] xxl:w-[390px] xxl:h-[150px] mb-2 object-contain' src={logo} alt="logo" />
            <div className='w-full flex justify-center md:justify-end px-2 sm:px-2 xl:pr-12 mt-2 lg:-mt-5 xxl:-mt-8'>
                <button onClick={() => navigate('/liveprojects')} className='whitespace-nowrap border-t-2 mr-[1px] sm:mr-1 border-x-2 py-[2px] sm:py-1 px-1 sm:px-4 md:px-7 text-[7px] sm:text-xs xxl:mr-2 xxl:px-12 xxl:py-3 xxl:text-[21px] rounded-t-lg right-2 hover:shadow-sm hover:bg-lightgreen'>Main Menu</button>
            </div>
        </header>
   <div className='w-full flex h-auto p-6'>
        <Sidebar needed={needed}/>

       <div className='md:basis-4/5 flex flex-col -ml-3 sm:ml-2 -mt-1 md:pt-4'>
            <p className='text-lg xxl:text-2xl flex w-full text-gray-500'>This is your price list</p>
            <div className='flex flex-col lg:flex-row w-full'>

                <div className='basis-1 lg:basis-1/2 flex flex-col w-full'>
                    <p className='text-[11px] xxl:text-base w-11/12 font-semibold pr-3'>Please enter your costs per item below or use our default values, these can be changed at anytime.</p>
                    <div className='flex flex-col w-full mt-2'>
                        <p className='px-1 pl-0 font-semibold text-[12px] xxl:text-base'>Your Linear Meterage cost</p>
                        <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-11/12 outline-none pl-4 xxl:pl-6 z-20' onChange={(e)=>setPriceList({...priceList,linearMerterageCost:escapeHtml(e.target.value)})} value={priceList.linearMerterageCost} type="number" required/><i className='z-10 relative pl-1 xxl:pl-2 -mt-6 xxl:-mt-8 xxl:pb-2 text-gray-400'>£</i>
                        <p className='px-1 pt-2 pl-0 font-semibold text-[12px] xxl:text-base'>Saddle Cost</p>
                        <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-11/12 outline-none pl-4 xxl:pl-6 z-20' onChange={(e)=>setPriceList({...priceList,saddleCost:e.target.value})} value={priceList.saddleCost} type="number" required/><i className='z-10 relative pl-1 xxl:pl-2 -mt-6 xxl:-mt-8 xxl:pb-2 text-gray-400'>£</i>
                        <p className='px-1 pt-2 pl-0 font-semibold text-[12px] xxl:text-base'>Throw-in Cost</p>
                        <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-11/12 outline-none pl-4 xxl:pl-6 z-20' onChange={(e)=>setPriceList({...priceList,throwinCost:e.target.value})} value={priceList.throwinCost} type="number" required/><i className='z-10 relative pl-1 xxl:pl-2 -mt-6 xxl:-mt-8 xxl:pb-2 text-gray-400'>£</i>
                        <p className='px-1 pt-2 pl-0 font-semibold text-[12px] xxl:text-base'>Hakki/Layher stairs per lift</p>
                        <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-11/12 outline-none pl-4 xxl:pl-6 z-20' onChange={(e)=>setPriceList({...priceList,hakkiLayher:e.target.value})} value={priceList.hakkiLayher} type="number" required/><i className='z-10 relative pl-1 xxl:pl-2 -mt-6 xxl:-mt-8 xxl:pb-2 text-gray-400'>£</i>

                        <p className='px-1 pt-3 pb-1 pl-0 font-semibold text-sm xxl:text-xl'>Temporary Roofs</p>

                        <p className='px-1 pl-0 font-semibold text-[12px] xxl:text-base'>Temporary Roof per m2</p>
                        <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-11/12 outline-none pl-4 xxl:pl-6 z-20' onChange={(e)=>setPriceList({...priceList,temporaryRoof:escapeHtml(e.target.value)})} value={priceList.temporaryRoof} type="number" required/><i className='z-10 relative pl-1 xxl:pl-2 -mt-6 xxl:-mt-8 xxl:pb-2 text-gray-400'>£</i>
                        <p className='px-1 pt-2 pl-0 font-semibold text-[12px] xxl:text-base'>Monoflex Per m2</p>
                        <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-11/12 outline-none pl-4 xxl:pl-6 z-20' onChange={(e)=>setPriceList({...priceList,monoflex:e.target.value})} value={priceList.monoflex} type="number" required/><i className='z-10 relative pl-1 xxl:pl-2 -mt-6 xxl:-mt-8 xxl:pb-2 text-gray-400'>£</i>
                        <p className='px-1 pt-2 pl-0 font-semibold text-[12px] xxl:text-base'>Shrinkwrap per m2</p>
                        <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-11/12 outline-none pl-4 xxl:pl-6 z-20' onChange={(e)=>setPriceList({...priceList,shrinkwrap:e.target.value})} value={priceList.shrinkwrap} type="number" required/><i className='z-10 relative pl-1 xxl:pl-2 -mt-6 xxl:-mt-8 xxl:pb-2 text-gray-400'>£</i>
                    </div>
                </div>
            
                <div className='basis-1 lg:basis-1/2 flex flex-col w-full pr-5 lg:pr-8 xl:pr-14 mt-5 lg:-mt-1'>
                    <p className='text-sm xxl:text-xl font-semibold'>Towers</p>
                    <div className='flex flex-col w-full mt-2'>
                        <div className='flex flex-row w-full space-x-2'>
                            <div className='basis-3/4 flex flex-col w-full'>
                                <p className='px-1 pl-0 font-semibold text-[12px] xxl:text-base'>Cost for 5 foot/1.8 mtr tower</p>
                                <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-4 xxl:pl-6 z-20' onChange={(e)=>setPriceList({...priceList,fivebyonepointeightTower:e.target.value})} value={priceList.fivebyonepointeightTower} type="number" required/><i className='z-10 relative pl-1 xxl:pl-2 -mt-6 xxl:-mt-8 xxl:pb-2 text-gray-400'>£</i>
                            </div>
                            <div className='basis-1/4 flex flex-col w-full'>
                                <p className='px-1 pl-0 font-semibold text-[12px] xxl:text-base whitespace-nowrap'>Cost per in</p>
                                <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-4 xxl:pl-6 z-20' onChange={(e)=>setPriceList({...priceList,fivebyonepointeightTowerCostPerLift:e.target.value})} value={priceList.fivebyonepointeightTowerCostPerLift} type="number" required/><i className='z-10 relative pl-1 xxl:pl-2 -mt-6 xxl:-mt-8 xxl:pb-2 text-gray-400'>£</i>
                            </div>
                        </div>
                        <div className='flex flex-row w-full space-x-2 pt-2'>
                            <div className='basis-3/4 flex flex-col w-full'>
                                <p className='px-1 pl-0 font-semibold text-[12px] xxl:text-base'>Cost for 8 foot/2.4 mtr tower</p>
                                <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-4 xxl:pl-6 z-20' onChange={(e)=>setPriceList({...priceList,eightbytwopointfourTower:e.target.value})} value={priceList.eightbytwopointfourTower} type="number" required/><i className='z-10 relative pl-1 xxl:pl-2 -mt-6 xxl:-mt-8 xxl:pb-2 text-gray-400'>£</i>
                            </div>
                            <div className='basis-1/4 flex flex-col w-full'>
                                <p className='px-1 pl-0 font-semibold text-[12px] xxl:text-base whitespace-nowrap'>Cost per in</p>
                                <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-4 xxl:pl-6 z-20' onChange={(e)=>setPriceList({...priceList,eightbytwopointfourTowerCostPerLift:e.target.value})} value={priceList.eightbytwopointfourTowerCostPerLift} type="number" required/><i className='z-10 relative pl-1 xxl:pl-2 -mt-6 xxl:-mt-8 xxl:pb-2 text-gray-400'>£</i>
                            </div>
                        </div>
                        <div className='flex flex-row w-full space-x-2 pt-2'>
                            <div className='basis-3/4 flex flex-col w-full'>
                                <p className='px-1 pl-0 font-semibold text-[12px] xxl:text-base'>Cost for 10 foot/3.0 mtr tower</p>
                                <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-4 xxl:pl-6 z-20' onChange={(e)=>setPriceList({...priceList,tenbythreeTower:e.target.value})} value={priceList.tenbythreeTower} type="number" required/><i className='z-10 relative pl-1 xxl:pl-2 -mt-6 xxl:-mt-8 xxl:pb-2 text-gray-400'>£</i>
                            </div>
                            <div className='basis-1/4 flex flex-col w-full'>
                                <p className='px-1 pl-0 font-semibold text-[12px] xxl:text-base whitespace-nowrap'>Cost per in</p>
                                <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-4 xxl:pl-6 z-20' onChange={(e)=>setPriceList({...priceList,tenbythreeTowerCostPerLift:e.target.value})} value={priceList.tenbythreeTowerCostPerLift} type="number" required/><i className='z-10 relative pl-1 xxl:pl-2 -mt-6 xxl:-mt-8 xxl:pb-2 text-gray-400'>£</i>
                            </div>
                        </div>
                        <div className='flex flex-row w-full space-x-2 pt-2'>
                            <div className='basis-3/4 flex flex-col w-full'>
                                <p className='px-1 pl-0 font-semibold text-[12px] xxl:text-base'>Cost for 13 foot/4.0 mtr tower</p>
                                <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-4 xxl:pl-6 z-20' onChange={(e)=>setPriceList({...priceList,thirteenbyfourTower:e.target.value})} value={priceList.thirteenbyfourTower} type="number" required/><i className='z-10 relative pl-1 xxl:pl-2 -mt-6 xxl:-mt-8 xxl:pb-2 text-gray-400'>£</i>
                            </div>
                            <div className='basis-1/4 flex flex-col w-full'>
                                <p className='px-1 pl-0 font-semibold text-[12px] xxl:text-base whitespace-nowrap'>Cost per in</p>
                                <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-4 xxl:pl-6 z-20' onChange={(e)=>setPriceList({...priceList,thirteenbyfourTowerCostPerLift:e.target.value})} value={priceList.thirteenbyfourTowerCostPerLift} type="number" required/><i className='z-10 relative pl-1 xxl:pl-2 -mt-6 xxl:-mt-8 xxl:pb-2 text-gray-400'>£</i>
                            </div>
                        </div>
                        <p className='px-1 pt-3 pb-1 pl-0 font-semibold text-sm xxl:text-xl'>Other Costs</p>

                        <p className='px-1 pl-0 font-semibold text-[12px] xxl:text-base'>Scaffolding Inspections per visit</p>
                        <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-11/12 outline-none pl-4 xxl:pl-6 z-20' onChange={(e)=>setPriceList({...priceList,scaffoldingInspectionPerVisit:e.target.value})} value={priceList.scaffoldingInspectionPerVisit} type="number" required/><i className='z-10 relative pl-1 xxl:pl-2 -mt-6 xxl:-mt-8 xxl:pb-2 text-gray-400'>£</i>
                        <p className='px-1 pt-2 pl-0 font-semibold text-[11px] xxl:text-base'>Enter the percentage of cost for overhire - for example enter 10% so a 4 week hire is say £1000.00 your overhire will be £100.00 per week added to every week over the initial 4 weeks Initial cost</p>
                        <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-11/12 outline-none pl-6 xxl:pl-7 z-20' onChange={(e)=>setPriceList({...priceList,overhirePercentage:e.target.value})} value={priceList.overhirePercentage} type="number" required/><i className='z-10 relative pl-1 xxl:pl-2 -mt-6 xxl:-mt-8 xxl:pb-2 text-gray-400'>%</i>

                        <p className='px-1 pt-5 pb-1 pl-0 font-semibold text-sm xxl:text-xl'>Add a new item you sell</p>
                        <div className='flex flex-row w-11/12 space-x-2 pt-0'>
                            <div className='basis-1/2 flex flex-col w-full'>
                                <p className='px-1 pl-0 font-semibold text-[12px] xxl:text-base'>Enter item name</p>
                                <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-1' type="text" onChange={(e) => setTemp({...temp,name:e.target.value})} value={temp.name} required/>
                            </div>
                            <div className='basis-1/2 flex flex-col w-full'>
                                <p className='px-1 pl-0 font-semibold text-[12px] xxl:text-base'>Enter item cost</p>
                                <input className='bg-gray-200  opacity-50 px-[2px] xxl:p-2 w-full outline-none pl-4 xxl:pl-6 z-20' type="number" onChange={(e) => setTemp({...temp,cost:e.target.value})} value={temp.cost} required/><i className='z-10 relative pl-1 xxl:pl-2 -mt-6 xxl:-mt-8 xxl:pb-2 text-gray-400'>£</i>
                            </div>
                        </div>
                        <div className='flex flex-col w-11/12 space-y-1 pt-3 justify-between'>
                            {/* {priceList.addItem.map((a) => (
                                <div key={a.name} className='flex flex-row h-fit p-1 bg-gray-200  opacity-50 w-full items-center justify-between'>
                                    <div className='flex pr-3 mr-1 flex-row h-fit bg-gray-200 w-full justify-between border-r-2 border-gray-400'>
                                        <p className='px-1 font-semibold text-[12px] xxl:text-base'>item name : {a.name}</p>
                                        <p className='px-1 font-semibold text-[12px] xxl:text-base'>item cost : £ {a.cost}</p>
                                    </div>
                                    <p onClick={(e) => removeItem(a)} className='px-2 hover:font-bold cursor-pointer hover:bg-gray-400'>X</p>
                                </div>
                            ))} */}
                        </div>
                        <div className='flex flex-row w-11/12 space-x-2 pt-2 justify-between'>
                            <button onClick={addHtml} className='self-start w-24 h-8 xxl:w-32 xxl:h-10 mt-2 text-white cursor-pointer rounded-md bg-lightgreen text-sm xxl:text-xl hover:bg-darkgreen'>Add item</button>
                            <button className='w-24 h-8 xxl:w-32 xxl:h-10 mt-2 self-end text-white cursor-pointer rounded-md bg-lightgreen text-sm xxl:text-xl hover:bg-darkgreen' onClick={handleSubmit}>Save</button>
                        </div>
                    </div>
                </div>

            </div>
    
        </div>
    </div>
    </div>
  )
}

export default PriceList