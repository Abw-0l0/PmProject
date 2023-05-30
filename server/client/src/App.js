import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./pages/Main";
import MobileAdmin from "./pages/MobileAdmin";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import SubscriptionPage from "./pages/SubscriptionPage";
import Payment from "./pages/Payment";
import StaffMember from "./pages/StaffMember";
import CreateNewCustomer from "./pages/CreateNewCustomer";
import PendingProjectQoutes from "./pages/PendingProjectQuotes";
import QuotesDecline from "./pages/QuotesDeclined";
import QoutesApproved from "./pages/QuotesApproved";
import PriceList from "./pages/PriceList";
import LiveProjects from "./pages/LiveProjects";
import OverHiredProjects from "./pages/OverHiredProjects";
import CreateQuotation from "./pages/CreateQuotation";
import React, { useState } from "react";
import { Switch } from '@mui/material';
import ApprovedYourQoutes from "./pages/ApprovedYourQoutes";
import ScaffoldInspectionList from "./pages/ScaffoldInspectionList";
import ScaffoldInspectionComplete from "./pages/ScaffoldInspectionComplete";
import AddANewJob from "./pages/AddANewJob";
import TemporaryRoofQuotes from "./pages/TemporaryRoofQuotes";
import ScaffoldingInspections from "./pages/ScaffoldingInspections";
import QuotationPDF from "./pages/QuotationPDF";
import AdminUpload from "./pages/AdminUpload";

function App() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setToggle(event.target.checked)
  }

  return (
    <div className="w-full h-full flex justify-center m-0 p-0 items-center">

      <div className="absolute p-3 z-50 left-0 top-2">
        <div className="flex-col flex space-y-1">
          <Switch checked={toggle} onChange={handleChange}/>
          <div className={`${toggle? "flex-col flex space-y-1 xxl:space-y-2": "hidden" }`}>
            <div className="flex-row flex items-center">
              <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[18px] pl-[10px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
              onClick={()=> navigate('/')}>1</p>
              <p className="text-xs ml-1">Main page</p>
            </div>
            <div className="flex-row flex items-center">
              <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[18px] pl-[10px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
              onClick={()=> navigate('/signup')}>2</p>
              <p className="text-xs ml-1">SignUp page</p>
            </div>
            <div className="flex-row flex items-center">
              <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[18px] pl-[10px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
              onClick={()=> navigate('/signin')}>3</p>
              <p className="text-xs ml-1">signin page</p>
            </div>
            <div className="flex-row flex items-center">
              <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[18px] pl-[10px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
              onClick={()=> navigate('/subscription')}>4</p>
              <p className="text-xs ml-1">subscrition page</p>
            </div>
            <div className="flex-row flex items-center">
              <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[18px] pl-[10px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
              onClick={()=> navigate('/payment')}>5</p>
              <p className="text-xs ml-1">payement page</p>
            </div>
            <div className="flex-row flex items-center">
              <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[18px] pl-[10px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
              onClick={()=> navigate('/adminupload')}>6</p>
              <p className="text-xs ml-1">customerupload page</p>
            </div>
            <div className="flex-row flex items-center">
              <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[18px] pl-[10px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
              onClick={()=> navigate('/pricelist')}>7</p>
              <p className="text-xs ml-1">pricelist page</p>
            </div>
            <div className="flex-row flex items-center">
              <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[18px] pl-[10px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
              onClick={()=> navigate('/liveprojects')}>8</p>
              <p className="text-xs ml-1">liveprojects page</p>
            </div>
            <div className="flex-row flex items-center">
              <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[18px] pl-[10px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
              onClick={()=> navigate('/overhiredprojects')}>9</p>
              <p className="text-xs ml-1">overhiredprojects page</p>
            </div>
            <div className="flex-row flex items-center">
              <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[12px] pl-[6px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
              onClick={()=> navigate('/createquotation')}>10</p>
              <p className="text-xs ml-1">createquotation page</p>
            </div>
            <div className="flex-row flex items-center">
              <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[12px] pl-[6px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
              onClick={()=> navigate('/mobileadmin')}>11</p>
              <p className="text-xs ml-1">mobileadmin page</p>
            </div>
            <div className="flex-row flex items-center">
              <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[12px] pl-[6px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
              onClick={()=> navigate('/createnewcustomer')}>12</p>
              <p className="text-xs ml-1">createnewcustomer page</p>
            </div>
            <div className="flex-row flex items-center">
              <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[12px] pl-[6px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
              onClick={()=> navigate('/pendingprojectqoutes')}>14</p>
              <p className="text-xs ml-1">pendingprojectqoutes page</p>
            </div>
            <div className="flex-row flex items-center">
              <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[12px] pl-[6px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
              onClick={()=> navigate('/quotesdeclined')}>15</p>
              <p className="text-xs ml-1">quotesdeclined page</p>
            </div>
            <div className="flex-row flex items-center">
              <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[12px] pl-[6px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
              onClick={()=> navigate('/quotesapproved')}>16</p>
              <p className="text-xs ml-1">quotesapproved page</p>
            </div>
            <div className="flex-row flex items-center">
              <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[12px] pl-[6px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
              onClick={()=> navigate('/staffmember')}>17 </p>
              <p className="text-xs ml-1">staffmember page</p>
            </div>
            <div className="flex-row flex items-center">
              <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[12px] pl-[6px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
              onClick={()=> navigate('/approveyourqoutes')}>18 </p>
              <p className="text-xs ml-1">Approve your qoutes page</p>
            </div>

            <div className="flex flex-row space-x-2">

              <div className="flex-row flex items-center w-fit">
                <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[12px] pl-[6px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
                onClick={()=> navigate('/scaffoldinspectionlist')}>19 </p>
                <p className="text-xs ml-1">scaffold inspection list</p>
              </div>
              <div className="flex-row flex items-center">
                <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[12px] pl-[6px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
                onClick={()=> navigate('/scaffoldinspectioncomplete')}>20 </p>
                <p className="text-xs ml-1">scaffoldInspectionComplete</p>
              </div>
              <div className="flex-row flex items-center">
                <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[12px] pl-[6px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
                onClick={()=> navigate('/addanewjob')}>21</p>
                <p className="text-xs ml-1">Add a new job</p>
              </div>
              <div className="flex-row flex items-center">
                <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[12px] pl-[6px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
                onClick={()=> navigate('/temporaryroofquotes')}>22</p>
                <p className="text-xs ml-1">temporaryroofquotes</p>
              </div>
              <div className="flex-row flex items-center">
                <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[12px] pl-[6px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
                onClick={()=> navigate('/scaffoldinginspections')}>23</p>
                <p className="text-xs ml-1">scaffoldinginspections</p>
              </div>
              <div className="flex-row flex items-center">
                <p className="bg-blue-300 text-white rounded-full w-8 xxl:w-12 xxl:h-12 h-8 xxl:pl-[12px] pl-[6px] xxl:pt-[12px] pt-[2px] cursor-pointer hover:bg-blue-500"
                onClick={()=> navigate('/quotationpdf')}>23</p>
                <p className="text-xs ml-1">quotationpdf</p>
              </div>

            </div>
          </div>
        </div>

      </div>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/pricelist" element={<PriceList />} />
          <Route path="/liveprojects" element={<LiveProjects />} />

          <Route path="/adminupload" element={<AdminUpload />} />
          <Route path="/createnewcustomer" element={<CreateNewCustomer />} />
          <Route path="/createquotation" element={<CreateQuotation />} />
          <Route path="/staffmember" element={<StaffMember/>} />
          <Route path="/overhiredprojects" element={<OverHiredProjects />} />
          <Route path="/temporaryroofquotes" element={<TemporaryRoofQuotes />} />
          <Route path="/scaffoldinginspections" element={<ScaffoldingInspections />} />
          <Route path="/quotationpdf" element={<QuotationPDF />} />

          <Route path="/mobileadmin" element={<MobileAdmin />} />
          <Route path="/pendingprojectqoutes" element={<PendingProjectQoutes />} />
          <Route path="/quotesdeclined" element={<QuotesDecline />} />
          <Route path="/quotesapproved" element={<QoutesApproved />} />
          <Route path="/scaffoldinspectionlist" element={<ScaffoldInspectionList />} />
          <Route path="/scaffoldinspectioncomplete" element={<ScaffoldInspectionComplete />} />
          <Route path="/approveyourqoutes" element={<ApprovedYourQoutes />} />
          <Route path="/addanewjob" element={<AddANewJob />} />
        </Routes>

    </div>
  );
}

export default App;
