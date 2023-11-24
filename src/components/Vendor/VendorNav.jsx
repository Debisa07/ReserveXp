import React, { useState } from 'react';
import "../Admin/admindashbord.css";
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
import avatar from "../../assets/avatar_25.jpg"
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
        
<div className="MuiBox-root css-17o5ig">
                      <div className="MuiAvatar-root MuiAvatar-circular css-1ciwozm">
                        <img alt="photoURL" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1699134270~exp=1699134870~hmac=4a734574dd844e96c103de254b422caa4c122a0811553aee77ceb205543f0eb1" className="MuiAvatar-img css-1hy9t21" /></div>
                      <div className="MuiBox-root css-d0uhtl">
                        <h6 className="MuiTypography-root MuiTypography-subtitle2 css-yemnbq">Jaydon Mes </h6>
                        <h6 className="MuiTypography-root MuiTypography-subtitle2 css-yemnbq" style={{fontSize:"10px", marginTop:"10px"}}>Vendor </h6>

                        <p className="MuiTypography-root MuiTypography-body2 css-11r9ii4" />
                      </div>
                    </div>

          <ul className="main-menu pb-5">
            <li className=" https:__gotrip.bookingcore.co_admin">
              <a href="">
                <span className="icon text-center">
                  <img
                    className="logo-dark"
                    src={dashboard}
                  />               </span>
                Dashboard
              </a>
            </li>
            <li className=" https:__gotrip.bookingcore.co_admin">
              <a href="">
                <span className="icon text-center">
                  <img
                    className="logo-dark"
                    src={Location}
                  />               </span>
                
Booking History

              </a>
            </li>
            <li className=" https:__gotrip.bookingcore.co_admin">
              <a href="">
                <span className="icon text-center">
                  <img
                    className="logo-dark"
                    src={Location}
                  />               </span>
                
                Wishlist 
              </a>
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
              <span className="btn-toggle"onClick={toggleDropdownHotel}>
                <i className="fa fa-angle-left pull-right" />
              </span>
              {showDropdownHotel && (
              <ul className="children">
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_hotel">
                  <a >
                    All Hotels
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_hotel">
                  <a >
                    Add new Hotel
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_hotel">
                  <a >
                  Availability 
                  </a>
                </li>
             
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
              <span className="btn-toggle"onClick={toggleDropdownTour}>
                <i className="fa fa-angle-left pull-right" />
              </span>
              {showDropdownTour && (
              <ul className="children">
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_tour">
                  <a >
                    All Tours
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_tour">
                  <a >
                    Add Tour
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_tour">
                  <a >
                  Availability 
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_tour">
                  <a >
                    Attributes
                  </a>
                </li>
               
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
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_space">
                  <a>                    All Spaces
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_space">
                  <a>                    Add new Space
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_space">
                  <a>                    Availability 
                  </a>
                </li>
               
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
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_flight">
                  <a>                    All Flights
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_flight">
                  <a>                    Add new Flight
                  </a>
                </li>
               
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
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_car">
                  <a>                    All Cars
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_car">
                  <a>                    Add new Car
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_car">
                  <a>                    Availability 
                  </a>
                </li>
               
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
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_boat">
                  <a>                    All Boats
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_boat">
                  <a>                    Add new Boat
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_boat">
                  <a>                    Availability 
                  </a>
                </li>
               
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
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_event">
                  <a>                    All Events
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_event">
                  <a>                    Add new Event
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_event">
                  <a>                    Availability 
                  </a>
                </li>
               
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
           <li className=" https:__gotrip.bookingcore.co_admin_module_vendor_payout">
              <a>                <span className="icon text-center">
              <img
                    className="logo-dark"
                    src={report}
                  />              </span>
                            Booking Report 

              </a>
            </li>
            <li className=" https:__gotrip.bookingcore.co_admin_module_vendor_payout">
              <a>                <span className="icon text-center">
              <img
                    className="logo-dark"
                    src={payment}
                  />              </span>
                Payouts
              </a>
            </li>
            
            
            {/* <li className={showDropdownUsers ? "has-children active" : "has-children"}>
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
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_user">
                  <a >
                    <i className="fa fa-user" />
                    All Users
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_user">
                  <a >
                    <i className="fa fa-lock" />
                    Role Manager
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_user">
                  <a >
                    Subscribers
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_user">
                  <a >
                    Upgrade Request <span className="badge badge-warning">6</span>
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_user">
                  <a >
                    Verification Request{" "}
                  </a>
                </li>
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
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_report_booking">
                  <a >
                    <i className="icon ion-ios-pricetags" />
                    Enquiry Reports
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_report_booking">
                  <a >
                    <i className="icon ion-ios-pricetags" />
                    Booking Reports
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_report_booking">
                  <a >
                    <i className="icon ion ion-md-podium" />
                    Booking Statistic
                  </a>
                </li>
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
            </li> */}
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
  )};