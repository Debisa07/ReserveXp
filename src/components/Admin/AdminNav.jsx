import React, { useState } from 'react';
import "./admindashbord.css";
import dashboard from "../../assets/icons/dashboard.png";
import user from "../../assets/icons/user.png";
import plane from "../../assets/icons/plane.png";
import tour from "../../assets/icons/tour.png";
import space from "../../assets/icons/space.png";
import report from "../../assets/icons/report.png";
import payment from "../../assets/icons/payment.png";
import Location from "../../assets/icons/Location.png";
import hotel from "../../assets/icons/hotel.png";
import event from "../../assets/icons/event.png";
import car from "../../assets/icons/car.png";
import boat from "../../assets/icons/boat.png";
import { Link } from 'react-router-dom';

export default function AdminDashbord() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  // location
  const [showDropdownLocation, setShowDropdownLocation] = useState(false);

  const toggleDropdownLocation = () => {
    setShowDropdownLocation(!showDropdownLocation);
  };
  // Hotel

  const [showDropdownHotel, setShowDropdownHotel] = useState(false);

  const toggleDropdownHotel = () => {
    setShowDropdownHotel(!showDropdownHotel);
  };

  // Tour
  const [showDropdownTour, setShowDropdownTour] = useState(false);

  const toggleDropdownTour = () => {
    setShowDropdownTour(!showDropdownTour);
  };
  // Space
  const [showDropdownSpace, setShowDropdownSpace] = useState(false);

  const toggleDropdownSpace = () => {
    setShowDropdownSpace(!showDropdownSpace);
  };

  // Flight
  const [showDropdownFlight, setShowDropdownFlight] = useState(false);

  const toggleDropdownFlight = () => {
    setShowDropdownFlight(!showDropdownFlight);
  };

  // Car
  const [showDropdownCar, setShowDropdownCar] = useState(false);

  const toggleDropdownCar = () => {
    setShowDropdownCar(!showDropdownCar);
  };
  // Boat
  const [showDropdownBoat, setShowDropdownBoat] = useState(false);

  const toggleDropdownBoat = () => {
    setShowDropdownBoat(!showDropdownBoat);
  };
  // Event
  const [showDropdownEvent, setShowDropdownEvent] = useState(false);

  const toggleDropdownEvent = () => {
    setShowDropdownEvent(!showDropdownEvent);
  };
  // Users
  const [showDropdownUsers, setShowDropdownUsers] = useState(false);

  const toggleDropdownUsers = () => {
    setShowDropdownUsers(!showDropdownUsers);
  };
  // Reports
  const [showDropdownReports, setShowDropdownReports] = useState(false);

  const toggleDropdownReports = () => {
    setShowDropdownReports(!showDropdownReports);
  };
  return (
    <>
      <div id="app" >
        <div className="main-sidebar" style={{ marginTop: "30px" }}>
          <ul className="main-menu pb-5">
            
              <li className=" https:__gotrip.bookingcore.co_admin">
                <Link to="">
                <a href="">
                  <span className="icon text-center">
                    <img
                      className="logo-dark"
                      src={dashboard}
                    />    Dashboard           </span>
                  
                </a>
                </Link>
              </li>
           
            
              <li className={showDropdownLocation ? "has-children active" : "has-children"}>
                <a onClick={toggleDropdownLocation}>
                  <span className="icon text-center">
                    <img
                      className="logo-dark"
                      src={Location}
                    />                 </span>
                  Location
                </a>
                <span className="btn-toggle" onClick={toggleDropdownLocation}>
                  <i className={`fa ${showDropdown ? 'fa-angle-up' : 'fa-angle-left'} pull-right`} />
                </span>
                {showDropdownLocation && (
                  <ul className="children">
                    <Link to="/location">
                    <li className="has-children">
                      <a >
                        All Location
                      </a>
                    </li>
                    </Link>
                    <Link to="">
                    <li className="has-children">
                      <a >
                        All Category
                      </a>
                    </li>
                    </Link>
                  </ul>
                )}
              </li>
           
              <li className={showDropdownHotel ? "has-children active" : "has-children"}>
                <a onClick={toggleDropdownHotel}>
                  <span className="icon text-center">
                    <img
                      className="logo-dark"
                      src={hotel}
                    />                 </span>
                  Hotel
                </a>
                <span className="btn-toggle" onClick={toggleDropdownHotel}>
                  <i className="fa fa-angle-left pull-right" />
                </span>
                {showDropdownHotel && (
                  <ul className="children">
                     <Link to="/hotel">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_hotel">
                      <a >
                        All Hotels
                      </a>
                    </li>
                    </Link>
                    <Link to="/addNewHotel">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_hotel">
                      <a >
                        Add new Hotel
                      </a>
                    </li>
                    </Link>
                    <Link to="/HotelAttributes">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_hotel">
                      <a >
                        Attributes
                      </a>
                    </li>
                    </Link>
                    <Link to="/RoomAttributes">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_hotel">
                      <a >
                        Room Attributes
                      </a>
                    </li>
                    </Link>
                    
                  </ul>
                )}
              </li>
          
            <li className={showDropdownTour ? "has-children active" : "has-children"}>
              <a onClick={toggleDropdownTour}>
                <span className="icon text-center">
                  <img
                    className="logo-dark"
                    src={tour}
                  />                 </span>
                Tour
              </a>
              <span className="btn-toggle" onClick={toggleDropdownTour}>
                <i className="fa fa-angle-left pull-right" />
              </span>
              {showDropdownTour && (
                <ul className="children">
                   <Link to="">
                  <li className=" has-children https:__gotrip.bookingcore.co_admin_module_tour">
                    <a >
                      All Tours
                    </a>
                  </li>
                  </Link>
                  <Link to="">
                  <li className=" has-children https:__gotrip.bookingcore.co_admin_module_tour">
                    <a >
                      Add Tour
                    </a>
                  </li>
                  </Link>
                  <Link to="">
                  <li className=" has-children https:__gotrip.bookingcore.co_admin_module_tour">
                    <a >
                      Categories
                    </a>
                  </li>
                  </Link>
                  <Link to="">
                  <li className=" has-children https:__gotrip.bookingcore.co_admin_module_tour">
                    <a >
                      Attributes
                    </a>
                  </li>
                  </Link>
                  <Link to="">
                  <li className=" has-children https:__gotrip.bookingcore.co_admin_module_tour">
                    <a >
                      Availability
                    </a>
                  </li>
                  </Link>
                  <Link to="">
                  <li className=" has-children https:__gotrip.bookingcore.co_admin_module_tour">
                    <a >
                      Booking Calendar
                    </a>
                  </li>
                  </Link>
                  <Link to="">
                  <li className=" has-children https:__gotrip.bookingcore.co_admin_module_tour">
                    <a >
                      Recovery
                    </a>
                  </li>
                  </Link>
                </ul>
              )}
            </li>
           
              <li className={showDropdownSpace ? "has-children active" : "has-children"}>
                <a onClick={toggleDropdownSpace}>
                  <span className="icon text-center">
                    <img
                      className="logo-dark"
                      src={space}
                    />                </span>
                  Space
                </a>
                <span className="btn-toggle" onClick={toggleDropdownSpace}>
                  <i className="fa fa-angle-left pull-right" />
                </span>
                {showDropdownSpace && (
                  <ul className="children">
                     <Link to="/SpaceList">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_space">
                      <a>                    All Spaces
                      </a>
                    </li>
                    </Link>
                    <Link to="/AddNewSpace">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_space">
                      <a>                    Add new Space
                      </a>
                    </li>
                    </Link>
                    <Link to="/SpaceAttributes">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_space">
                      <a>                    Attributes
                      </a>
                    </li>
                    </Link>
                    <Link to="/SpaceAvailability">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_space">
                      <a>                    Availability
                      </a>
                    </li>
                    </Link>

                    
                  </ul>
                )}
              </li>
          
            
              <li className={showDropdownFlight ? "has-children active" : "has-children"}>
                <a onClick={toggleDropdownFlight}>
                  <span className="icon text-center" >
                    <img
                      className="logo-dark"
                      src={plane}
                    />                     </span>
                  Flight
                </a>
                <span className="btn-toggle" onClick={toggleDropdownFlight}>
                  <i className="fa fa-angle-left pull-right" />
                </span>
                {showDropdownFlight && (
                  <ul className="children">
                    <Link to="/FlightList">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_flight">
                      <a>                    All Flights
                      </a>
                    </li>
                    </Link>
                    <Link to="/AddNewFlight">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_flight">
                      <a>                    Add new Flight
                      </a>
                    </li>
                    </Link>
                    <Link to="/Airplane">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_flight">
                      <a>                    Airline
                      </a>
                    </li>
                    </Link>
                    <Link to="/Airport">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_flight">
                      <a>                    Airport
                      </a>
                    </li>
                    </Link>
                    <Link to="/SeatType">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_flight">
                      <a>                    Seat Type
                      </a>
                    </li>
                    </Link>
                    <Link to="/FlightAttributes">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_flight">
                      <a>                    Attributes
                      </a>
                    </li>
                    </Link>
                  </ul>
                )}
              </li>
    
            
              <li className={showDropdownCar ? "has-children active" : "has-children"}>
                <a onClick={toggleDropdownCar}>                <span className="icon text-center">
                  <img
                    className="logo-dark"
                    src={car}
                  />              </span>
                  Car
                </a>
                <span className="btn-toggle" onClick={toggleDropdownCar}>
                  <i className="fa fa-angle-left pull-right" />
                </span>
                {showDropdownCar && (
                  <ul className="children">
                    <Link to="">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_car">
                      <a>                    All Cars
                      </a>
                    </li>
                    </Link>
                    <Link to="/AddNewCars">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_car">
                      <a>                    Add new Car
                      </a>
                    </li>
                    </Link>
                    <Link to="">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_car">
                      <a>                    Attributes
                      </a>
                    </li>
                    </Link>
                    <Link to="">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_car">
                      <a>                    Availability
                      </a>
                    </li>
                    </Link>
                  
                  </ul>
                )}
              </li>
           
           
              <li className={showDropdownBoat ? "has-children active" : "has-children"}>
                <a onClick={toggleDropdownBoat}>                <span className="icon text-center">
                  <img
                    className="logo-dark"
                    src={boat}
                  />              </span>
                  Boat
                </a>
                <span className="btn-toggle" onClick={toggleDropdownBoat}>
                  <i className="fa fa-angle-left pull-right" />
                </span>
                {showDropdownBoat && (
                  <ul className="children">
                     <Link to=""
                     >
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_boat">
                      <a>                    All Boats
                      </a>
                    </li>
                    </Link>
                    <Link to="/AddNewBoats">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_boat">
                      <a>                    Add new Boat
                      </a>
                    </li>
                    </Link>
                    <Link to="">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_boat">
                      <a>                    Attributes
                      </a>
                    </li>
                    </Link>
                    <Link to="">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_boat">
                      <a>                    Availability
                      </a>
                    </li>
                    </Link>

                   
                  </ul>
                )}
              </li>
            
              <li className={showDropdownEvent ? "has-children active" : "has-children"}>
                <a onClick={toggleDropdownEvent}>                <span className="icon text-center">
                  <img
                    className="logo-dark"
                    src={event}
                  />              </span>
                  Event
                </a>
                <span className="btn-toggle" onClick={toggleDropdownEvent}>
                  <i className="fa fa-angle-left pull-right" />
                </span>
                {showDropdownEvent && (
                  <ul className="children">
                    <Link to="">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_event">
                      <a>                    All Events
                      </a>
                    </li>
                    </Link>
                    <Link to="">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_event">
                      <a>                    Add new Event
                      </a>
                    </li>
                    </Link>
                    <Link to="">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_event">
                      <a>                    Attributes
                      </a>
                    </li>
                    </Link>
                    <Link to="">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_event">
                      <a>                    Availability
                      </a>
                    </li>
                    </Link>
                 
                  </ul>
                )}
              </li>
            {/* <li className=" has-children https:__gotrip.bookingcore.co_admin_module_user_plan">
              <a>                <span className="icon text-center">
                <i className="fa fa-list-alt" />
              </span>
                User Plans
              </a>
              <span className="btn-toggle">
                <i className="fa fa-angle-left pull-right" />
              </span>
              <ul className="children">
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_user_plan">
                  <a>                    User Plans
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_user_plan">
                  <a>                    Plan Report
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_user_plan">
                  <a>                    Plan Request{" "}
                  </a>
                </li>
              </ul>
            </li> */}
            <Link to="">
              <li className=" https:__gotrip.bookingcore.co_admin_module_vendor_payout">
                <a>                <span className="icon text-center">
                  <img
                    className="logo-dark"
                    src={payment}
                  />              </span>
                  Payouts
                </a>
              </li>
            </Link>
            

              <li className={showDropdownUsers ? "has-children active" : "has-children"}>
                <a onClick={toggleDropdownUsers}>
                  <span className="icon text-center">
                    <img
                      className="logo-dark"
                      src={user}
                    />                </span>
                  Users
                </a>
                <span className="btn-toggle" onClick={toggleDropdownUsers}>
                  <i className="fa fa-angle-left pull-right" />
                </span>
                {showDropdownUsers && (
                  <ul className="children">
                    <Link to="/user">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_user">
                      <a >
                        <i className="fa fa-user" />
                        All Users
                      </a>
                    </li>
                    </Link>
                    <Link to="">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_user">
                      <a >
                        <i className="fa fa-lock" />
                        Role Manager
                      </a>
                    </li>
                    </Link>
                    <Link to="">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_user">
                      <a >
                        Subscribers
                      </a>
                    </li>
                    </Link>
                    <Link to="">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_user">
                      <a >
                        Upgrade Request <span className="badge badge-warning">6</span>
                      </a>
                    </li>
                    </Link>
                    <Link to="">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_user">
                      <a >
                        Verification Request{" "}
                      </a>
                    </li>
                    </Link>
                  </ul>
                )}
              </li>
         
            
              <li className={showDropdownReports ? "has-children active" : "has-children"}>
                <a onClick={toggleDropdownReports}>
                  <span className="icon text-center">
                    <img
                      className="logo-dark"
                      src={report}
                    />                </span>
                  Reports
                </a>
                <span className="btn-toggle" onClick={toggleDropdownReports}>
                  <i className="fa fa-angle-left pull-right" />
                </span>
                {showDropdownReports && (
                  <ul className="children">
                    <Link to="">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_report_booking">
                      <a >
                        <i className="icon ion-ios-pricetags" />
                        Enquiry Reports
                      </a>
                    </li>
                    </Link>
                    <Link to="">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_report_booking">
                      <a >
                        <i className="icon ion-ios-pricetags" />
                        Booking Reports
                      </a>
                    </li>
                    </Link>
                    <Link to="">
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_report_booking">
                      <a >
                        <i className="icon ion ion-md-podium" />
                        Booking Statistic
                      </a>
                    </li>
                    </Link>
                    <Link to=""></Link>
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_report_booking">
                      <a >
                        <i className="icon ion ion-md-mail" />
                        Contact Submissions
                      </a>
                    </li>
                    <li className=" has-children https:__gotrip.bookingcore.co_admin_module_report_booking">
                      <a >
                        <i className="fa fa-money" />
                        Credit Purchase Report{" "}
                      </a>
                    </li>
                  </ul>
                )}
              </li>
         
            {/* <li className=" https:__gotrip.bookingcore.co_admin_module_theme">
              <a>                <span className="icon text-center">
                <i className="fa fa-paint-brush" />
              </span>
                Themes
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  )
};