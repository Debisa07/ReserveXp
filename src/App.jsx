import React, { useEffect } from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Home from "./Pages/Home.jsx";
import SignIn from "./Pages/SignIn";

import Register from "./Pages/Register";
import profile from "./Pages/Profile";

import Dashboard from "./Pages/Dashboard";

import Verification from "./Pages/Verification";

import Companycreate from "./Pages/Companycreate";
import Companylogin from "./Pages/Companylogin";
import CompanyDashbord from "./Pages/CompanyDashbord";

import UpdateVerification from "./Pages/UpdateVerification";

import Wishlist from "./Pages/Wishlist";
import Location from "./Pages/Location/Location";
import HotelServices from "./Pages/HotelServices.jsx"
import TourServices from "./Pages/TourServices.jsx"

import SpaceServices from "./Pages/SpaceServices.jsx"
import EventDetail from "./Pages/EventDetail.jsx"

// import AdminDashbord from "./Pages/AdminDashbord";
import AdminDashbord from "./Pages/Admin/AdminDashbord";

import user from "./Pages/user/view/user-view";
import hotel from "./Pages/Hotel/HotelList/view/user-view";
import AddNewHotel from "./Pages/Hotel/AddNewHotel/AddNewHotel"

import AddNewTour from "./Pages/Tour/AddNewTour/AddNewTour"
import HotelAttributes from "./Pages/Hotel/HotelAttributes/HotelAttributes"
import RoomAttributes from "./Pages/Hotel/RoomAttributes/RoomAttributes"

import TourList from './Pages/Tour/TourList/view/user-view'
import TourCatagory from './Pages/Tour/catagory/RoomAttributes'

import TourAttributes from './Pages/Tour/TourAttributes/TourAttributes'

import ToursAvailability from './Pages/Tour/ToursAvailability/view/user-view'
import AddNewSpace from './Pages/Space/AddNewSpace/AddNewSpace'

import SpaceList from './Pages/Space/SpaceList/view/user-view'
import SpaceAvailability  from './Pages/Space/SpaceAvailability/view/user-view'
import SpaceAttributes from './Pages/Space/SpaceAttributes/SpaceAttributes'
import AddNewFlight from './Pages/Flight/AddNewFlight/AddNewFlight'
import FlightList from './Pages/Flight/FlightList/view/user-view'
import Airplane from './Pages/Flight/Airplane/Airplane'
import FlightAttributes from './Pages/Flight/FlightAttributes/FlightAttributes'
import Airport from "./Pages/Flight/Airport/Airport"
import SeatType from './Pages/Flight/Seat Type/SeatType'
import AddNewCars from './Pages/Cars/AddNewCars/AddNewCars'
import AddNewBoats from './Pages/Boats/AddNewBoats/AddNewBoats'
import CreateAnAccount from './Pages/CreateAnAccount/CreateAnAccount.jsx'
import subscription from "./Pages/subscription/subscription.jsx"
import subscriptionlist from "./Pages/subscription/subscriptionlist.jsx"

import VendorDashbord from "./Pages/Vendor/VendorDashbord.jsx"
import VendorTourList from "./Pages/Vendor/Tour/TourList.jsx"
import TourAddContent from "./Pages/Vendor/Tour/TourAddContent.jsx"
import CarServices from "./Pages/CarServices.jsx"
import EventServices  from "./Pages/EventServices.jsx";
import BoatServices from "./Pages/BoatServices.jsx"
import FlightServices from "./Pages/FlightServices.jsx";

import TourDetails from "./Pages/TourDetails.jsx";
import SpaceDetail from "./Pages/SpaceDetail.jsx"
import HomeDetail from "./Pages/HomeDetail.jsx"
import CarDetails from "./Pages/CarDetails.jsx"

export default function App() {

  return (
    <div>




      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/signin" Component={SignIn} />
          
          <Route path="/register" Component={Register} />
          <Route path="/profile" Component={profile} />
          <Route path="/dashboard" Component={Dashboard} />
          
          <Route path="/verification" Component={Verification} />
          
          <Route path="/updateverification" Component={UpdateVerification} />


          <Route path="/companycreate" Component={Companycreate} />
          <Route path="/companylogin" Component={Companylogin} />
          <Route path="/companydashbord" Component={CompanyDashbord} />
          
          <Route path="/wishlist" Component={Wishlist} />
          
          <Route path="/admindashbord" Component={AdminDashbord} />
          <Route path="/user" Component={user} />
          <Route path="/hotel" Component={hotel} />

          
          <Route path="/location" Component={Location} />
          
          <Route path="/addNewHotel" Component={AddNewHotel} />
          
          <Route path="/HotelAttributes" Component={HotelAttributes} />
          <Route path="/RoomAttributes" Component={RoomAttributes} />
          
          <Route path="/AddNewTour" Component={AddNewTour} />
          
          <Route path="/TourList" Component={TourList} />
          
          <Route path="/TourCatagory" Component={TourCatagory} />


          
          <Route path="/TourAttributes" Component={TourAttributes} />
          
          <Route path="/ToursAvailability" Component={ToursAvailability} />
          
          <Route path="/AddNewSpace" Component={AddNewSpace} />
          
          <Route path="/SpaceList" Component={SpaceList} />
          
          <Route path="/SpaceAvailability" Component={SpaceAvailability} />
          
          <Route path="/SpaceAttributes" Component={SpaceAttributes} />
          
          <Route path="/AddNewFlight" Component={AddNewFlight} />
          
          <Route path="/FlightList" Component={FlightList} />
          <Route path="/Airplane" Component={Airplane} />
          
          <Route path="/FlightAttributes" Component={FlightAttributes} />
          <Route path="/Airport" Component={Airport} />
          
          <Route path="/SeatType" Component={SeatType} />
          
          <Route path="/AddNewCars" Component={AddNewCars} />
          
          <Route path="/AddNewBoats" Component={AddNewBoats} />
          
          <Route path="/CreateAnAccount" Component={CreateAnAccount} />

          


          <Route path="/subscription" Component={subscription} />


          <Route path="/subscriptionlist" Component={subscriptionlist} />


          
          <Route path="/VendorDashbord" Component={VendorDashbord} />

          

          <Route path="/VendorTourList" Component={VendorTourList} />
          
          <Route path="/TourAddContent" Component={TourAddContent} />

          
          <Route path="/HotelServices" Component={HotelServices} />
          <Route path="/TourServices" Component={TourServices} />
          <Route path="/SpaceServices" Component={SpaceServices} />

          <Route path="/CarServices" Component={CarServices} />
          <Route path="/EventServices" Component={EventServices} />
          <Route path="/BoatServices" Component={BoatServices} />
          <Route path="/FlightServices" Component={FlightServices} />

          
          
          
          <Route path="/HomeDetail" Component={HomeDetail} />
          <Route path="/TourDetails" Component={TourDetails} />

          
          
          <Route path="/SpaceDetail" Component={SpaceDetail} />
          <Route path="/CarDetails" Component={CarDetails} />
          
          <Route path="/EventDetail" Component={EventDetail} />


          




        </Routes>


      </Router>
    </div>
  );
}
