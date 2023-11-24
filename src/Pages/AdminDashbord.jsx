import React, { useState } from 'react';
import "./admindashbord.css";
import dashboard from "../assets/icons/dashboard.png";

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
              <a href="">
                <span className="icon text-center">
                  <img
                    className="logo-dark"
                    src={dashboard}
                  />               </span>
                Dashboard
              </a>
            </li>


            <li className={showDropdownLocation ? "has-children active" : "has-children"}>
              <a onClick={toggleDropdownLocation}>
                <span className="icon text-center">
                  <i className="icon ion-md-compass" />
                </span>
                Location
              </a>
              <span className="btn-toggle" onClick={toggleDropdownLocation}>
                <i className={`fa ${showDropdown ? 'fa-angle-up' : 'fa-angle-left'} pull-right`} />
              </span>
              {showDropdownLocation && (
                <ul className="children">
                  <li className="has-children">
                    <a >
                      All Location
                    </a>
                  </li>
                  <li className="has-children">
                    <a >
                      All Category
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className={showDropdownHotel ? "has-children active" : "has-children"}>
              <a onClick={toggleDropdownHotel}>
                <span className="icon text-center">
                  <i className="fa fa-building-o" />
                </span>
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
                    Attributes
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_hotel">
                  <a >
                    Room Attributes
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_hotel">
                  <a >
                    Recovery
                  </a>
                </li>
              </ul>
              )}
            </li>
            <li className={showDropdownTour ? "has-children active" : "has-children"}>
              <a onClick={toggleDropdownTour}>
                <span className="icon text-center">
                  <i className="icon ion-md-umbrella" />
                </span>
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
                    Categories
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_tour">
                  <a >
                    Attributes
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_tour">
                  <a >
                    Availability
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_tour">
                  <a >
                    Booking Calendar
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_tour">
                  <a >
                    Recovery
                  </a>
                </li>
              </ul>
              )}
            </li>
            <li className={showDropdownSpace ? "has-children active" : "has-children"}>
              <a onClick={toggleDropdownSpace}>
                <span className="icon text-center">
                  <i className="ion ion-md-home" />
                </span>
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
                  <a>                    Attributes
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_space">
                  <a>                    Availability
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_space">
                  <a>                    Recovery
                  </a>
                </li>
              </ul>
              )}
            </li>
            <li className={showDropdownFlight ? "has-children active" : "has-children"}>
              <a onClick={toggleDropdownFlight}>                
                <span className="icon text-center">
                <i className="ion ion-md-airplane" />
                </span>
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
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_flight">
                  <a>                    Airline
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_flight">
                  <a>                    Airport
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_flight">
                  <a>                    Seat Type
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_flight">
                  <a>                    Attributes
                  </a>
                </li>
              </ul>
              )}
            </li>
            <li className={showDropdownCar ? "has-children active" : "has-children"}>
              <a onClick={toggleDropdownCar}>                <span className="icon text-center">
                <i className="ion-logo-model-s" />
              </span>
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
                  <a>                    Attributes
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_car">
                  <a>                    Availability
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_car">
                  <a>                    Recovery
                  </a>
                </li>
              </ul>
              )}
            </li>
            <li className={showDropdownBoat ? "has-children active" : "has-children"}>
              <a onClick={toggleDropdownBoat}>                <span className="icon text-center">
                <i className="ion-md-boat" />
              </span>
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
                  <a>                    Attributes
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_boat">
                  <a>                    Availability
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_boat">
                  <a>                    Recovery
                  </a>
                </li>
              </ul>
              )}
            </li>
            <li className={showDropdownEvent ? "has-children active" : "has-children"}>
              <a onClick={toggleDropdownEvent}>                <span className="icon text-center">
                <i className="ion-ios-calendar" />
              </span>
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
                  <a>                    Attributes
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_event">
                  <a>                    Availability
                  </a>
                </li>
                <li className=" has-children https:__gotrip.bookingcore.co_admin_module_event">
                  <a>                    Recovery
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
            <li className=" https:__gotrip.bookingcore.co_admin_module_popup">
              <a>                <span className="icon text-center">
                <i className="ion ion-ios-cube" />
              </span>
                Popup
              </a>
            </li>
            <li className=" https:__gotrip.bookingcore.co_admin_module_coupon">
              <a>                <span className="icon text-center">
                <i className="fa fa-ticket" />
              </span>
                Coupon
              </a>
            </li>
            <li className=" https:__gotrip.bookingcore.co_admin_module_review">
              <a>                <span className="icon text-center">
                <i className="icon ion-ios-text" />
              </span>
                Reviews
              </a>
            </li>
            <li className=" https:__gotrip.bookingcore.co_admin_module_media">
              <a>                <span className="icon text-center">
                <i className="fa fa-picture-o" />
              </span>
                Media
              </a>
            </li>
            <li className=" https:__gotrip.bookingcore.co_admin_module_core_menu">
              <a>                <span className="icon text-center">
                <i className="icon ion-ios-apps" />
              </span>
                Menu
              </a>
            </li>
            <li className=" https:__gotrip.bookingcore.co_admin_module_vendor_payout">
              <a>                <span className="icon text-center">
                <i className="icon ion-md-card" />
              </span>
                Payouts
              </a>
            </li>
            
            <li className={showDropdownUsers ? "has-children active" : "has-children"}>
              <a onClick={toggleDropdownUsers}>
                <span className="icon text-center">
                  <i className="icon ion-ios-contacts" />
                </span>
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
                  <i className="icon ion-ios-pie" />
                </span>
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
            </li>
            <li className=" https:__gotrip.bookingcore.co_admin_module_theme">
              <a>                <span className="icon text-center">
                <i className="fa fa-paint-brush" />
              </span>
                Themes
              </a>
            </li>
          </ul>
        </div>
        <div className="main-content"
          // to make it responcive delete this 
          style={{ marginLeft: "200px", marginRight: "20px" }}

        >
          <div className="container-fluid" >
            <div className="dashboard-page">
              <h4 className="welcome-title text-uppercase">Welcome System!</h4>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="dashboard-report-card card purple">
                  <div className="card-content">
                    <span className="card-title">Revenue</span>
                    <span className="card-amount">$7.850</span>
                    <span className="card-desc">Total revenue</span>
                  </div>
                  <div className="card-media">
                    <i className="icon ion-ios-cart" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="dashboard-report-card card pink">
                  <div className="card-content">
                    <span className="card-title">Earning</span>
                    <span className="card-amount">$1.595</span>
                    <span className="card-desc">Total Earning</span>
                  </div>
                  <div className="card-media">
                    <i className="icon ion-ios-gift" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="dashboard-report-card card info">
                  <div className="card-content">
                    <span className="card-title">Bookings</span>
                    <span className="card-amount">7</span>
                    <span className="card-desc">Total bookings</span>
                  </div>
                  <div className="card-media">
                    <i className="icon ion-ios-pricetags" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="dashboard-report-card card success">
                  <div className="card-content">
                    <span className="card-title">Services</span>
                    <span className="card-amount">167</span>
                    <span className="card-desc">Total bookable services</span>
                  </div>
                  <div className="card-media">
                    <i className="icon ion-ios-flash" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-6 mb-3">
                <div className="panel">
                  <div className="panel-title d-flex justify-content-between align-items-center">
                    <strong>Earning statistics</strong>
                    <div
                      id="reportrange"
                      style={{
                        background: "#fff",
                        cursor: "pointer",
                        padding: "5px 10px",
                        border: "1px solid #ccc"
                      }}
                    >
                      <i className="fa fa-calendar" />
                      &nbsp;
                      <span>October 4, 2023 - November 23, 2023</span>{" "}
                      <i className="fa fa-caret-down" />
                    </div>
                  </div>
                  <div className="panel-body">
                    <div className="chartjs-size-monitor">
                      <div className="chartjs-size-monitor-expand">
                        <div className="" />
                      </div>
                      <div className="chartjs-size-monitor-shrink">
                        <div className="" />
                      </div>
                    </div>
                    <canvas
                      id="earning_chart"
                      style={{ display: "block", width: 455, height: 227 }}
                      width={455}
                      height={227}
                      className="chartjs-render-monitor"
                      data-scrapbook-canvas="data:image/png;base64,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"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 ">
                <div className="panel">
                  <div className="panel-title d-flex justify-content-between">
                    <strong>Recent Bookings</strong>
                    <a
                      className="btn-link"
                    >
                      More
                      <i className="icon ion-ios-arrow-forward" />
                    </a>
                  </div>
                  <div className="panel-body">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th width="60px">#</th>
                            <th>Item</th>
                            <th width="100px">Total</th>
                            <th width="100px">Paid</th>
                            <th width="100px">Status</th>
                            <th width="100px">Created At</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#18</td>
                            <td>
                              <a
                                target="_blank"
                              >
                                Vinfast Lux V8 (SUV)
                              </a>
                            </td>
                            <td>$1.400</td>
                            <td>$0</td>
                            <td>
                              <span className="badge badge-primary">
                                Processing
                              </span>
                            </td>
                            <td>10/29/2023 18:45</td>
                          </tr>
                          <tr>
                            <td>#15</td>
                            <td>
                              <a
                                target="_blank"
                              >
                                Eastern Discovery (Start New Orleans)
                              </a>
                            </td>
                            <td>$1.200</td>
                            <td>$0</td>
                            <td>
                              <span className="badge badge-primary">
                                Processing
                              </span>
                            </td>
                            <td>10/28/2023 21:27</td>
                          </tr>
                          <tr>
                            <td>#13</td>
                            <td>
                              <a
                                target="_blank"
                              >
                                Dylan Hotel
                              </a>
                            </td>
                            <td>$450</td>
                            <td>$0</td>
                            <td>
                              <span className="badge badge-primary">
                                Processing
                              </span>
                            </td>
                            <td>10/25/2023 10:17</td>
                          </tr>
                          <tr>
                            <td>#6</td>
                            <td>
                              <a
                                target="_blank"
                              >
                                River Cruise Tour on the Seine
                              </a>
                            </td>
                            <td>$1.100</td>
                            <td>$0</td>
                            <td>
                              <span className="badge badge-primary">
                                Processing
                              </span>
                            </td>
                            <td>10/23/2023 13:23</td>
                          </tr>
                          <tr>
                            <td>#5</td>
                            <td>
                              <a
                                target="_blank"
                              >
                                Dylan Hotel
                              </a>
                            </td>
                            <td>$1.150</td>
                            <td>$0</td>
                            <td>
                              <span className="badge badge-primary">
                                Processing
                              </span>
                            </td>
                            <td>10/23/2023 07:31</td>
                          </tr>
                          <tr>
                            <td>#4</td>
                            <td>
                              <a
                                target="_blank"
                              >
                                Dylan Hotel
                              </a>
                            </td>
                            <td>$1.450</td>
                            <td>$0</td>
                            <td>
                              <span className="badge badge-primary">
                                Processing
                              </span>
                            </td>
                            <td>10/23/2023 01:53</td>
                          </tr>
                          <tr>
                            <td>#2</td>
                            <td>
                              <a
                                target="_blank"
                              >
                                Cannes and Antibes Night Tour
                              </a>
                            </td>
                            <td>$1.100</td>
                            <td>$0</td>
                            <td>
                              <span className="badge badge-info">Confirmed</span>
                            </td>
                            <td>10/20/2023 11:24</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row"></div>
          </div>

        </div>
        <div className="backdrop-sidebar-mobile" />
      </div>
      <div id="cdn-browser-modal" className="modal fade">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div id="cdn-browser" className="cdn-browser d-flex flex-column">
              <div className="files-nav flex-shrink-0">
                <div className="d-flex justify-content-between">
                  <div className="col-left d-flex align-items-center">
                    <div className="filter-item">
                      <input
                        type="text"
                        placeholder="Search file name...."
                        className="form-control"
                        defaultValue=""
                      />
                    </div>
                    <div className="filter-item">
                      <button className="btn btn-default">
                        <i className="fa fa-search" />
                        Search
                      </button>
                    </div>
                    <div className="filter-item">
                      <small>
                        <i>Total: 0 files</i>
                      </small>
                    </div>
                  </div>
                  <div className="div">
                    <div
                      role="group"
                      aria-label="Basic example"
                      className="btn-group"
                    >
                      <button type="button" className="btn btn-secondary">
                        <i className="fa fa-th" />
                      </button>{" "}
                      <button type="button" className="btn btn-outline-secondary">
                        <i className="fa fa-bars" />
                      </button>
                    </div>
                  </div>
                  <div className="col-right">
                    <i
                      className="fa-spin fa fa-spinner icon-loading active"
                      style={{ display: "none" }}
                    />{" "}
                    <button className="btn btn-primary mr-2">
                      <span>
                        <i className="fa fa-folder" /> Add Folder
                      </span>
                    </button>{" "}
                    <button className="btn btn-success btn-pick-files">
                      <span>
                        <i className="fa fa-upload" />
                        Upload
                      </span>{" "}
                      <input
                        multiple="multiple"
                        accept="image/png,image/jpeg,image/gif,image/bmp,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        type="file"
                        name="files[]"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div
                display="none"
                className="upload-new"
                style={{ display: "none" }}
              >
                <input type="file" name="filepond[]" className="my-pond" />
              </div>
              <div className="files-list">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                  </ol>
                </nav>{" "}
                {/**/}
                <div className="files-wraps view-grid"> </div>
                <p
                  className="no-files-text text-center"
                  style={{ display: "none" }}
                >
                  No file found
                </p>{" "}
                {/**/}
              </div>{" "}
              {/**/}
            </div>
          </div>
        </div>
      </div>
      {/* Scripts */}
      <div
        className="daterangepicker ltr show-ranges opensleft"
        style={{ display: "none", top: "362.8px", right: 575, left: "auto" }}
      >
        <div className="ranges">
          <ul>
            <li data-range-key="Today">Today</li>
            <li data-range-key="Yesterday">Yesterday</li>
            <li data-range-key="Last 7 Days">Last 7 Days</li>
            <li data-range-key="Last 30 Days">Last 30 Days</li>
            <li data-range-key="This Month">This Month</li>
            <li data-range-key="Last Month">Last Month</li>
            <li data-range-key="This Year">This Year</li>
            <li data-range-key="This Week" className="">
              This Week
            </li>
            <li data-range-key="Custom" className="active">
              Custom
            </li>
          </ul>
        </div>
        <div className="drp-calendar left">
          <div className="calendar-table">
            <table className="table-condensed">
              <thead>
                <tr>
                  <th className="prev available">
                    <span />
                  </th>
                  <th colSpan={5} className="month">
                    <select className="monthselect">
                      <option value={0}>Jan</option>
                      <option value={1}>Feb</option>
                      <option value={2}>Mar</option>
                      <option value={3}>Apr</option>
                      <option value={4}>May</option>
                      <option value={5}>Jun</option>
                      <option value={6}>Jul</option>
                      <option value={7}>Aug</option>
                      <option value={8}>Sep</option>
                      <option value={9} selected="selected">
                        Oct
                      </option>
                      <option value={10}>Nov</option>
                      <option value={11}>Dec</option>
                    </select>
                    <select className="yearselect">
                      <option value={1923}>1923</option>
                      <option value={1924}>1924</option>
                      <option value={1925}>1925</option>
                      <option value={1926}>1926</option>
                      <option value={1927}>1927</option>
                      <option value={1928}>1928</option>
                      <option value={1929}>1929</option>
                      <option value={1930}>1930</option>
                      <option value={1931}>1931</option>
                      <option value={1932}>1932</option>
                      <option value={1933}>1933</option>
                      <option value={1934}>1934</option>
                      <option value={1935}>1935</option>
                      <option value={1936}>1936</option>
                      <option value={1937}>1937</option>
                      <option value={1938}>1938</option>
                      <option value={1939}>1939</option>
                      <option value={1940}>1940</option>
                      <option value={1941}>1941</option>
                      <option value={1942}>1942</option>
                      <option value={1943}>1943</option>
                      <option value={1944}>1944</option>
                      <option value={1945}>1945</option>
                      <option value={1946}>1946</option>
                      <option value={1947}>1947</option>
                      <option value={1948}>1948</option>
                      <option value={1949}>1949</option>
                      <option value={1950}>1950</option>
                      <option value={1951}>1951</option>
                      <option value={1952}>1952</option>
                      <option value={1953}>1953</option>
                      <option value={1954}>1954</option>
                      <option value={1955}>1955</option>
                      <option value={1956}>1956</option>
                      <option value={1957}>1957</option>
                      <option value={1958}>1958</option>
                      <option value={1959}>1959</option>
                      <option value={1960}>1960</option>
                      <option value={1961}>1961</option>
                      <option value={1962}>1962</option>
                      <option value={1963}>1963</option>
                      <option value={1964}>1964</option>
                      <option value={1965}>1965</option>
                      <option value={1966}>1966</option>
                      <option value={1967}>1967</option>
                      <option value={1968}>1968</option>
                      <option value={1969}>1969</option>
                      <option value={1970}>1970</option>
                      <option value={1971}>1971</option>
                      <option value={1972}>1972</option>
                      <option value={1973}>1973</option>
                      <option value={1974}>1974</option>
                      <option value={1975}>1975</option>
                      <option value={1976}>1976</option>
                      <option value={1977}>1977</option>
                      <option value={1978}>1978</option>
                      <option value={1979}>1979</option>
                      <option value={1980}>1980</option>
                      <option value={1981}>1981</option>
                      <option value={1982}>1982</option>
                      <option value={1983}>1983</option>
                      <option value={1984}>1984</option>
                      <option value={1985}>1985</option>
                      <option value={1986}>1986</option>
                      <option value={1987}>1987</option>
                      <option value={1988}>1988</option>
                      <option value={1989}>1989</option>
                      <option value={1990}>1990</option>
                      <option value={1991}>1991</option>
                      <option value={1992}>1992</option>
                      <option value={1993}>1993</option>
                      <option value={1994}>1994</option>
                      <option value={1995}>1995</option>
                      <option value={1996}>1996</option>
                      <option value={1997}>1997</option>
                      <option value={1998}>1998</option>
                      <option value={1999}>1999</option>
                      <option value={2000}>2000</option>
                      <option value={2001}>2001</option>
                      <option value={2002}>2002</option>
                      <option value={2003}>2003</option>
                      <option value={2004}>2004</option>
                      <option value={2005}>2005</option>
                      <option value={2006}>2006</option>
                      <option value={2007}>2007</option>
                      <option value={2008}>2008</option>
                      <option value={2009}>2009</option>
                      <option value={2010}>2010</option>
                      <option value={2011}>2011</option>
                      <option value={2012}>2012</option>
                      <option value={2013}>2013</option>
                      <option value={2014}>2014</option>
                      <option value={2015}>2015</option>
                      <option value={2016}>2016</option>
                      <option value={2017}>2017</option>
                      <option value={2018}>2018</option>
                      <option value={2019}>2019</option>
                      <option value={2020}>2020</option>
                      <option value={2021}>2021</option>
                      <option value={2022}>2022</option>
                      <option value={2023} selected="selected">
                        2023
                      </option>
                      <option value={2024}>2024</option>
                      <option value={2025}>2025</option>
                      <option value={2026}>2026</option>
                      <option value={2027}>2027</option>
                      <option value={2028}>2028</option>
                      <option value={2029}>2029</option>
                      <option value={2030}>2030</option>
                      <option value={2031}>2031</option>
                      <option value={2032}>2032</option>
                      <option value={2033}>2033</option>
                      <option value={2034}>2034</option>
                      <option value={2035}>2035</option>
                      <option value={2036}>2036</option>
                      <option value={2037}>2037</option>
                      <option value={2038}>2038</option>
                      <option value={2039}>2039</option>
                      <option value={2040}>2040</option>
                      <option value={2041}>2041</option>
                      <option value={2042}>2042</option>
                      <option value={2043}>2043</option>
                      <option value={2044}>2044</option>
                      <option value={2045}>2045</option>
                      <option value={2046}>2046</option>
                      <option value={2047}>2047</option>
                      <option value={2048}>2048</option>
                      <option value={2049}>2049</option>
                      <option value={2050}>2050</option>
                      <option value={2051}>2051</option>
                      <option value={2052}>2052</option>
                      <option value={2053}>2053</option>
                      <option value={2054}>2054</option>
                      <option value={2055}>2055</option>
                      <option value={2056}>2056</option>
                      <option value={2057}>2057</option>
                      <option value={2058}>2058</option>
                      <option value={2059}>2059</option>
                      <option value={2060}>2060</option>
                      <option value={2061}>2061</option>
                      <option value={2062}>2062</option>
                      <option value={2063}>2063</option>
                      <option value={2064}>2064</option>
                      <option value={2065}>2065</option>
                      <option value={2066}>2066</option>
                      <option value={2067}>2067</option>
                      <option value={2068}>2068</option>
                      <option value={2069}>2069</option>
                      <option value={2070}>2070</option>
                      <option value={2071}>2071</option>
                      <option value={2072}>2072</option>
                      <option value={2073}>2073</option>
                      <option value={2074}>2074</option>
                      <option value={2075}>2075</option>
                      <option value={2076}>2076</option>
                      <option value={2077}>2077</option>
                      <option value={2078}>2078</option>
                      <option value={2079}>2079</option>
                      <option value={2080}>2080</option>
                      <option value={2081}>2081</option>
                      <option value={2082}>2082</option>
                      <option value={2083}>2083</option>
                      <option value={2084}>2084</option>
                      <option value={2085}>2085</option>
                      <option value={2086}>2086</option>
                      <option value={2087}>2087</option>
                      <option value={2088}>2088</option>
                      <option value={2089}>2089</option>
                      <option value={2090}>2090</option>
                      <option value={2091}>2091</option>
                      <option value={2092}>2092</option>
                      <option value={2093}>2093</option>
                      <option value={2094}>2094</option>
                      <option value={2095}>2095</option>
                      <option value={2096}>2096</option>
                      <option value={2097}>2097</option>
                      <option value={2098}>2098</option>
                      <option value={2099}>2099</option>
                      <option value={2100}>2100</option>
                      <option value={2101}>2101</option>
                      <option value={2102}>2102</option>
                      <option value={2103}>2103</option>
                      <option value={2104}>2104</option>
                      <option value={2105}>2105</option>
                      <option value={2106}>2106</option>
                      <option value={2107}>2107</option>
                      <option value={2108}>2108</option>
                      <option value={2109}>2109</option>
                      <option value={2110}>2110</option>
                      <option value={2111}>2111</option>
                      <option value={2112}>2112</option>
                      <option value={2113}>2113</option>
                      <option value={2114}>2114</option>
                      <option value={2115}>2115</option>
                      <option value={2116}>2116</option>
                      <option value={2117}>2117</option>
                      <option value={2118}>2118</option>
                      <option value={2119}>2119</option>
                      <option value={2120}>2120</option>
                      <option value={2121}>2121</option>
                      <option value={2122}>2122</option>
                      <option value={2123}>2123</option>
                    </select>
                  </th>
                  <th className="next available">
                    <span />
                  </th>
                </tr>
                <tr>
                  <th>Su</th>
                  <th>Mo</th>
                  <th>Tu</th>
                  <th>We</th>
                  <th>Th</th>
                  <th>Fr</th>
                  <th>Sa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="weekend off   available" data-title="r0c0">
                    24
                  </td>
                  <td className="off   available" data-title="r0c1">
                    25
                  </td>
                  <td className="off   available" data-title="r0c2">
                    26
                  </td>
                  <td className="off   available" data-title="r0c3">
                    27
                  </td>
                  <td className="off   available" data-title="r0c4">
                    28
                  </td>
                  <td className="off   available" data-title="r0c5">
                    29
                  </td>
                  <td className="weekend off   available" data-title="r0c6">
                    30
                  </td>
                </tr>
                <tr>
                  <td className="weekend   available" data-title="r1c0">
                    1
                  </td>
                  <td className="available" data-title="r1c1">
                    2
                  </td>
                  <td className="available" data-title="r1c2">
                    3
                  </td>
                  <td className="active start-date   available" data-title="r1c3">
                    4
                  </td>
                  <td className="in-range   available" data-title="r1c4">
                    5
                  </td>
                  <td className="in-range   available" data-title="r1c5">
                    6
                  </td>
                  <td className="weekend in-range   available" data-title="r1c6">
                    7
                  </td>
                </tr>
                <tr>
                  <td className="weekend in-range   available" data-title="r2c0">
                    8
                  </td>
                  <td className="in-range   available" data-title="r2c1">
                    9
                  </td>
                  <td className="in-range   available" data-title="r2c2">
                    10
                  </td>
                  <td className="in-range   available" data-title="r2c3">
                    11
                  </td>
                  <td className="in-range   available" data-title="r2c4">
                    12
                  </td>
                  <td className="in-range   available" data-title="r2c5">
                    13
                  </td>
                  <td className="weekend in-range   available" data-title="r2c6">
                    14
                  </td>
                </tr>
                <tr>
                  <td className="weekend in-range   available" data-title="r3c0">
                    15
                  </td>
                  <td className="in-range   available" data-title="r3c1">
                    16
                  </td>
                  <td className="in-range   available" data-title="r3c2">
                    17
                  </td>
                  <td className="in-range   available" data-title="r3c3">
                    18
                  </td>
                  <td className="in-range   available" data-title="r3c4">
                    19
                  </td>
                  <td className="in-range   available" data-title="r3c5">
                    20
                  </td>
                  <td className="weekend in-range   available" data-title="r3c6">
                    21
                  </td>
                </tr>
                <tr>
                  <td className="weekend in-range   available" data-title="r4c0">
                    22
                  </td>
                  <td className="in-range   available" data-title="r4c1">
                    23
                  </td>
                  <td className="in-range   available" data-title="r4c2">
                    24
                  </td>
                  <td className="in-range   available" data-title="r4c3">
                    25
                  </td>
                  <td className="in-range   available" data-title="r4c4">
                    26
                  </td>
                  <td className="in-range   available" data-title="r4c5">
                    27
                  </td>
                  <td className="weekend in-range   available" data-title="r4c6">
                    28
                  </td>
                </tr>
                <tr>
                  <td className="weekend in-range   available" data-title="r5c0">
                    29
                  </td>
                  <td className="in-range   available" data-title="r5c1">
                    30
                  </td>
                  <td className="today in-range   available" data-title="r5c2">
                    31
                  </td>
                  <td className="off in-range   available" data-title="r5c3">
                    1
                  </td>
                  <td className="off in-range   available" data-title="r5c4">
                    2
                  </td>
                  <td className="off in-range   available" data-title="r5c5">
                    3
                  </td>
                  <td
                    className="weekend off in-range   available"
                    data-title="r5c6"
                  >
                    4
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="calendar-time" style={{ display: "none" }} />
        </div>
        <div className="drp-calendar right">
          <div className="calendar-table">
            <table className="table-condensed">
              <thead>
                <tr>
                  <th />
                  <th colSpan={5} className="month">
                    <select className="monthselect">
                      <option value={0} disabled="disabled">
                        Jan
                      </option>
                      <option value={1} disabled="disabled">
                        Feb
                      </option>
                      <option value={2} disabled="disabled">
                        Mar
                      </option>
                      <option value={3} disabled="disabled">
                        Apr
                      </option>
                      <option value={4} disabled="disabled">
                        May
                      </option>
                      <option value={5} disabled="disabled">
                        Jun
                      </option>
                      <option value={6} disabled="disabled">
                        Jul
                      </option>
                      <option value={7} disabled="disabled">
                        Aug
                      </option>
                      <option value={8} disabled="disabled">
                        Sep
                      </option>
                      <option value={9}>Oct</option>
                      <option value={10} selected="selected">
                        Nov
                      </option>
                      <option value={11}>Dec</option>
                    </select>
                    <select className="yearselect">
                      <option value={2023} selected="selected">
                        2023
                      </option>
                      <option value={2024}>2024</option>
                      <option value={2025}>2025</option>
                      <option value={2026}>2026</option>
                      <option value={2027}>2027</option>
                      <option value={2028}>2028</option>
                      <option value={2029}>2029</option>
                      <option value={2030}>2030</option>
                      <option value={2031}>2031</option>
                      <option value={2032}>2032</option>
                      <option value={2033}>2033</option>
                      <option value={2034}>2034</option>
                      <option value={2035}>2035</option>
                      <option value={2036}>2036</option>
                      <option value={2037}>2037</option>
                      <option value={2038}>2038</option>
                      <option value={2039}>2039</option>
                      <option value={2040}>2040</option>
                      <option value={2041}>2041</option>
                      <option value={2042}>2042</option>
                      <option value={2043}>2043</option>
                      <option value={2044}>2044</option>
                      <option value={2045}>2045</option>
                      <option value={2046}>2046</option>
                      <option value={2047}>2047</option>
                      <option value={2048}>2048</option>
                      <option value={2049}>2049</option>
                      <option value={2050}>2050</option>
                      <option value={2051}>2051</option>
                      <option value={2052}>2052</option>
                      <option value={2053}>2053</option>
                      <option value={2054}>2054</option>
                      <option value={2055}>2055</option>
                      <option value={2056}>2056</option>
                      <option value={2057}>2057</option>
                      <option value={2058}>2058</option>
                      <option value={2059}>2059</option>
                      <option value={2060}>2060</option>
                      <option value={2061}>2061</option>
                      <option value={2062}>2062</option>
                      <option value={2063}>2063</option>
                      <option value={2064}>2064</option>
                      <option value={2065}>2065</option>
                      <option value={2066}>2066</option>
                      <option value={2067}>2067</option>
                      <option value={2068}>2068</option>
                      <option value={2069}>2069</option>
                      <option value={2070}>2070</option>
                      <option value={2071}>2071</option>
                      <option value={2072}>2072</option>
                      <option value={2073}>2073</option>
                      <option value={2074}>2074</option>
                      <option value={2075}>2075</option>
                      <option value={2076}>2076</option>
                      <option value={2077}>2077</option>
                      <option value={2078}>2078</option>
                      <option value={2079}>2079</option>
                      <option value={2080}>2080</option>
                      <option value={2081}>2081</option>
                      <option value={2082}>2082</option>
                      <option value={2083}>2083</option>
                      <option value={2084}>2084</option>
                      <option value={2085}>2085</option>
                      <option value={2086}>2086</option>
                      <option value={2087}>2087</option>
                      <option value={2088}>2088</option>
                      <option value={2089}>2089</option>
                      <option value={2090}>2090</option>
                      <option value={2091}>2091</option>
                      <option value={2092}>2092</option>
                      <option value={2093}>2093</option>
                      <option value={2094}>2094</option>
                      <option value={2095}>2095</option>
                      <option value={2096}>2096</option>
                      <option value={2097}>2097</option>
                      <option value={2098}>2098</option>
                      <option value={2099}>2099</option>
                      <option value={2100}>2100</option>
                      <option value={2101}>2101</option>
                      <option value={2102}>2102</option>
                      <option value={2103}>2103</option>
                      <option value={2104}>2104</option>
                      <option value={2105}>2105</option>
                      <option value={2106}>2106</option>
                      <option value={2107}>2107</option>
                      <option value={2108}>2108</option>
                      <option value={2109}>2109</option>
                      <option value={2110}>2110</option>
                      <option value={2111}>2111</option>
                      <option value={2112}>2112</option>
                      <option value={2113}>2113</option>
                      <option value={2114}>2114</option>
                      <option value={2115}>2115</option>
                      <option value={2116}>2116</option>
                      <option value={2117}>2117</option>
                      <option value={2118}>2118</option>
                      <option value={2119}>2119</option>
                      <option value={2120}>2120</option>
                      <option value={2121}>2121</option>
                      <option value={2122}>2122</option>
                      <option value={2123}>2123</option>
                    </select>
                  </th>
                  <th className="next available">
                    <span />
                  </th>
                </tr>
                <tr>
                  <th>Su</th>
                  <th>Mo</th>
                  <th>Tu</th>
                  <th>We</th>
                  <th>Th</th>
                  <th>Fr</th>
                  <th>Sa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="weekend off in-range   available"
                    data-title="r0c0"
                  >
                    29
                  </td>
                  <td className="off in-range   available" data-title="r0c1">
                    30
                  </td>
                  <td className="today off in-range   available" data-title="r0c2">
                    31
                  </td>
                  <td className="in-range   available" data-title="r0c3">
                    1
                  </td>
                  <td className="in-range   available" data-title="r0c4">
                    2
                  </td>
                  <td className="in-range   available" data-title="r0c5">
                    3
                  </td>
                  <td className="weekend in-range   available" data-title="r0c6">
                    4
                  </td>
                </tr>
                <tr>
                  <td className="weekend in-range   available" data-title="r1c0">
                    5
                  </td>
                  <td className="in-range   available" data-title="r1c1">
                    6
                  </td>
                  <td className="in-range   available" data-title="r1c2">
                    7
                  </td>
                  <td className="in-range   available" data-title="r1c3">
                    8
                  </td>
                  <td className="in-range   available" data-title="r1c4">
                    9
                  </td>
                  <td className="in-range   available" data-title="r1c5">
                    10
                  </td>
                  <td className="weekend in-range   available" data-title="r1c6">
                    11
                  </td>
                </tr>
                <tr>
                  <td className="weekend in-range   available" data-title="r2c0">
                    12
                  </td>
                  <td className="in-range   available" data-title="r2c1">
                    13
                  </td>
                  <td className="in-range   available" data-title="r2c2">
                    14
                  </td>
                  <td className="in-range   available" data-title="r2c3">
                    15
                  </td>
                  <td className="in-range   available" data-title="r2c4">
                    16
                  </td>
                  <td className="in-range   available" data-title="r2c5">
                    17
                  </td>
                  <td className="weekend in-range   available" data-title="r2c6">
                    18
                  </td>
                </tr>
                <tr>
                  <td className="weekend in-range   available" data-title="r3c0">
                    19
                  </td>
                  <td className="in-range   available" data-title="r3c1">
                    20
                  </td>
                  <td className="in-range   available" data-title="r3c2">
                    21
                  </td>
                  <td className="in-range   available" data-title="r3c3">
                    22
                  </td>
                  <td
                    className="active end-date in-range available is_load_tooltip"
                    data-title="r3c4"
                  >
                    23
                  </td>
                  <td className="available" data-title="r3c5">
                    24
                  </td>
                  <td className="weekend   available" data-title="r3c6">
                    25
                  </td>
                </tr>
                <tr>
                  <td className="weekend   available" data-title="r4c0">
                    26
                  </td>
                  <td className="available" data-title="r4c1">
                    27
                  </td>
                  <td className="available" data-title="r4c2">
                    28
                  </td>
                  <td className="available" data-title="r4c3">
                    29
                  </td>
                  <td className="available is_load_tooltip" data-title="r4c4">
                    30
                  </td>
                  <td className="off   available" data-title="r4c5">
                    1
                  </td>
                  <td className="weekend off   available" data-title="r4c6">
                    2
                  </td>
                </tr>
                <tr>
                  <td className="weekend off   available" data-title="r5c0">
                    3
                  </td>
                  <td className="off   available" data-title="r5c1">
                    4
                  </td>
                  <td className="off   available" data-title="r5c2">
                    5
                  </td>
                  <td className="off   available" data-title="r5c3">
                    6
                  </td>
                  <td className="off available is_load_tooltip" data-title="r5c4">
                    7
                  </td>
                  <td className="off   available" data-title="r5c5">
                    8
                  </td>
                  <td className="weekend off   available" data-title="r5c6">
                    9
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="calendar-time" style={{ display: "none" }} />
        </div>
        <div className="drp-buttons">
          <span className="drp-selected">10/04/2023 - 11/23/2023</span>
          <button className="cancelBtn btn btn-sm btn-default" type="button">
            Cancel
          </button>
          <button className="applyBtn btn btn-sm btn-primary" type="button">
            Apply
          </button>{" "}
        </div>
      </div>
    </>

  );
}
