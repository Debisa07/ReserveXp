import React, { useState } from 'react';
import logo1 from "../assets/image/logo-light.png"
import menues from "../assets/image/mega-menu-bg.png"
import dropdown from "../assets/image/down-arrow.png"
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

function Header() {
  const [isSignInVisible, setSignInVisible] = useState(false);

  const handleLogInClick = () => {
    setSignInVisible(true);
  };
  let user = JSON.parse(localStorage.getItem('user-info'))
  console.log(user)
  function logout() {
    localStorage.clear()
    window.location.href = '/';

  }
  return (
    <div className="frontend-page header-transparent   ">


      <div className="bravo_wrap overflow-hidden">
        <header
          data-add-bg="bg-dark-1"
          className="header bg-green js-header bravo_header"
          data-x="header"
          data-x-toggle="is-menu-opened"
        >
          <div
            data-anim="fade"
            className="header__container px-30 sm:px-20 is-in-view"
          >
            <div className="row justify-between items-center">
              <div className="col-auto ">
                <div className="d-flex items-center gotrip-header-transparent">
                  <a
                    href=""
                    className=" header-logo mr-20"
                    data-x="header-logo"
                    data-x-toggle="is-logo-dark"
                  >
                    <img
                      className="logo-light"
                      src={logo1}
                      alt="Reserve XP"
                    />
                    <img
                      className="logo-dark"
                      src={logo1}
                      alt="Reserve XP"
                    />
                  </a>
                  <div
                    className="header-menu "
                    data-x="mobile-menu"
                    data-x-toggle="is-menu-active"
                  >
                    <div className="mobile-overlay" />
                    <div className="header-menu__content">
                      <div className="mobile-bg js-mobile-bg" />
                      <div className="menu js-navList">
                        <ul className="menu__nav text-white -is-active">
                          <li className=" menu-item-has-children depth-0">
                            <a data-barba="" target="">
                              <span className="mr-10">Home</span>
                            </a>

                          </li>
                          <li className=" menu-item-has-children depth-0">
                            <a data-barba="" target="">
                              <span className="mr-10">Service</span>
                              <i className="icon icon-chevron-sm-down" />
                            </a>
                            <ul className="subnav">
                              <Link to="/HotelServices">
                            <li className=" depth-1">
                                <a
                                  data-barba=""
                                  target=""
                                >
                                  Hotel
                                </a>
                              </li></Link>
                              <Link to="/SpaceServices">
                              <li className=" depth-1">
                                <a
                                  data-barba=""
                                  target=""
                                >
                                  Space
                                </a>
                              </li>
                              </Link>
                              <Link to="/TourServices">
                              <li className=" depth-1">
                                <a
                                  data-barba=""
                                  target=""
                                >
Tour                                </a>
                              </li>
                              </Link>
                              <Link to="/CarServices">
                              <li className=" depth-1">
                                <a
                                  data-barba=""
                                  target=""
                                >
                                  Car
                                </a>
                              </li>
                              </Link>
                              <Link to="/EventServices">
                              <li className=" depth-1">
                                <a
                                  data-barba=""
                                  target=""
                                >
                                  Event
                                </a>
                              </li>
                              </Link>
                              <Link to="/BoatServices">
                              <li className=" depth-1">
                                <a
                                  data-barba=""
                                  target=""
                                >
                                  Boat
                                </a>
                              </li>
                              </Link>
                              <Link to="/FlightServices">
                              <li className=" depth-1">
                                <a
                                  data-barba=""
                                  target=""
                                >
                                  Filght
                                </a>
                              </li></Link>
                            </ul>
                          </li>
                          <li className=" menu-item-has-children -has-mega-menu depth-0">
                            <a data-barba="" target="">
                              <span className="mr-10">Experiences</span>
                            </a>
                            {/* <div className="mega mb-menu-none column-4 --has-mega-image">
                              <ul className="subnav">
                                <li className=" menu-item-has-children depth-1">
                                  <a data-barba="" target="">
                                    <span className="mr-10">Hotel</span>
                                    <i className="icon icon-chevron-sm-down" />
                                  </a>
                                  <ul className="subnav">
                                    <li className="subnav__backBtn js-nav-list-back">
                                      <a href="#">
                                        <i className="icon icon-chevron-sm-down" />
                                        Hotel
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Hotel List
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Hotel Grid
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Hotel Map
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Hotel Detail
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className=" menu-item-has-children depth-1">
                                  <a data-barba="" target="">
                                    <span className="mr-10">Tour</span>
                                    <i className="icon icon-chevron-sm-down" />
                                  </a>
                                  <ul className="subnav">
                                    <li className="subnav__backBtn js-nav-list-back">
                                      <a href="#">
                                        <i className="icon icon-chevron-sm-down" />
                                        Tour
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Tour List
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Tour Grid
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Tour Map
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Tour Detail
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className=" menu-item-has-children depth-1">
                                  <a data-barba="" target="">
                                    <span className="mr-10">Space</span>
                                    <i className="icon icon-chevron-sm-down" />
                                  </a>
                                  <ul className="subnav">
                                    <li className="subnav__backBtn js-nav-list-back">
                                      <a href="#">
                                        <i className="icon icon-chevron-sm-down" />
                                        Space
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Space List
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Space Gird
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Space Map
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Space Detail
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className=" menu-item-has-children depth-1">
                                  <a data-barba="" target="">
                                    <span className="mr-10">Car</span>
                                    <i className="icon icon-chevron-sm-down" />
                                  </a>
                                  <ul className="subnav">
                                    <li className="subnav__backBtn js-nav-list-back">
                                      <a href="#">
                                        <i className="icon icon-chevron-sm-down" />
                                        Car
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Car List
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Car Grid
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Car Map
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Car Detail
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className=" menu-item-has-children depth-1">
                                  <a data-barba="" target="">
                                    <span className="mr-10">Event</span>
                                    <i className="icon icon-chevron-sm-down" />
                                  </a>
                                  <ul className="subnav">
                                    <li className="subnav__backBtn js-nav-list-back">
                                      <a href="#">
                                        <i className="icon icon-chevron-sm-down" />
                                        Event
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Event List
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Event Grid
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Event Map
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Event Detail
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className=" menu-item-has-children depth-1">
                                  <a data-barba="" target="">
                                    <span className="mr-10">Boat</span>
                                    <i className="icon icon-chevron-sm-down" />
                                  </a>
                                  <ul className="subnav">
                                    <li className="subnav__backBtn js-nav-list-back">
                                      <a href="#">
                                        <i className="icon icon-chevron-sm-down" />
                                        Boat
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Boat List
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Boat Grid
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Boat Map
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Boat Detail
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className=" menu-item-has-children depth-1">
                                  <a data-barba="" target="">
                                    <span className="mr-10">Flight</span>
                                    <i className="icon icon-chevron-sm-down" />
                                  </a>
                                  <ul className="subnav">
                                    <li className="subnav__backBtn js-nav-list-back">
                                      <a href="#">
                                        <i className="icon icon-chevron-sm-down" />
                                        Flight
                                      </a>
                                    </li>
                                    <li className=" depth-2">
                                      <a
                                        data-barba=""
                                        target=""
                                      >
                                        Flight List
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="mega-image">
                                <img src={menues} alt="Services" />
                              </div>
                            </div>
                            <ul className="subnav mega-mobile pc-menu-none">
                              <li className="subnav__backBtn js-nav-list-back">
                                <a href="#">
                                  <i className="icon icon-chevron-sm-down" />
                                  Services
                                </a>
                              </li>
                              <li className=" menu-item-has-children depth-1">
                                <a data-barba="" target="">
                                  <span className="mr-10">Hotel</span>
                                  <i className="icon icon-chevron-sm-down" />
                                </a>
                                <ul className="subnav">
                                  <li className="subnav__backBtn js-nav-list-back">
                                    <a href="#">
                                      <i className="icon icon-chevron-sm-down" />
                                      Hotel
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Hotel List
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Hotel Grid
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Hotel Map
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Hotel Detail
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className=" menu-item-has-children depth-1">
                                <a data-barba="" target="">
                                  <span className="mr-10">Tour</span>
                                  <i className="icon icon-chevron-sm-down" />
                                </a>
                                <ul className="subnav">
                                  <li className="subnav__backBtn js-nav-list-back">
                                    <a href="#">
                                      <i className="icon icon-chevron-sm-down" />
                                      Tour
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Tour List
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Tour Grid
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Tour Map
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Tour Detail
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className=" menu-item-has-children depth-1">
                                <a data-barba="" target="">
                                  <span className="mr-10">Space</span>
                                  <i className="icon icon-chevron-sm-down" />
                                </a>
                                <ul className="subnav">
                                  <li className="subnav__backBtn js-nav-list-back">
                                    <a href="#">
                                      <i className="icon icon-chevron-sm-down" />
                                      Space
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Space List
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Space Gird
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Space Map
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Space Detail
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className=" menu-item-has-children depth-1">
                                <a data-barba="" target="">
                                  <span className="mr-10">Car</span>
                                  <i className="icon icon-chevron-sm-down" />
                                </a>
                                <ul className="subnav">
                                  <li className="subnav__backBtn js-nav-list-back">
                                    <a href="#">
                                      <i className="icon icon-chevron-sm-down" />
                                      Car
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Car List
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Car Grid
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Car Map
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Car Detail
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className=" menu-item-has-children depth-1">
                                <a data-barba="" target="">
                                  <span className="mr-10">Event</span>
                                  <i className="icon icon-chevron-sm-down" />
                                </a>
                                <ul className="subnav">
                                  <li className="subnav__backBtn js-nav-list-back">
                                    <a href="#">
                                      <i className="icon icon-chevron-sm-down" />
                                      Event
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Event List
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Event Grid
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Event Map
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Event Detail
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className=" menu-item-has-children depth-1">
                                <a data-barba="" target="">
                                  <span className="mr-10">Boat</span>
                                  <i className="icon icon-chevron-sm-down" />
                                </a>
                                <ul className="subnav">
                                  <li className="subnav__backBtn js-nav-list-back">
                                    <a href="#">
                                      <i className="icon icon-chevron-sm-down" />
                                      Boat
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Boat List
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Boat Grid
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Boat Map
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Boat Detail
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className=" menu-item-has-children depth-1">
                                <a data-barba="" target="">
                                  <span className="mr-10">Flight</span>
                                  <i className="icon icon-chevron-sm-down" />
                                </a>
                                <ul className="subnav">
                                  <li className="subnav__backBtn js-nav-list-back">
                                    <a href="#">
                                      <i className="icon icon-chevron-sm-down" />
                                      Flight
                                    </a>
                                  </li>
                                  <li className=" depth-2">
                                    <a
                                      data-barba=""
                                      target=""
                                    >
                                      Flight List
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul> */}
                          </li>
                          <li className=" depth-0">
                            <a
                              data-barba=""
                              target=""
                            >
                              Destinations
                            </a>
                          </li>
                          {/* <li className=" menu-item-has-children depth-0">
                            <a data-barba="" target="">
                              <span className="mr-10">Blog</span>
                              <i className="icon icon-chevron-sm-down" />
                            </a>
                            <ul className="subnav">
                              <li className="subnav__backBtn js-nav-list-back">
                                <a href="#">
                                  <i className="icon icon-chevron-sm-down" /> Blog
                                </a>
                              </li>
                              <li className=" depth-1">
                                <a
                                  data-barba=""
                                  target=""
                                >
                                  Blog List
                                </a>
                              </li>
                              <li className=" depth-1">
                                <a
                                  data-barba=""
                                  target=""
                                >
                                  Blog Detail
                                </a>
                              </li>
                            </ul>
                          </li> */}
                          
                          <li className=" depth-0">
                            <a
                              data-barba=""
                              target=""
                            >
                              Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="mobile-footer px-20 py-10 border-top-light js-mobile-footer">


                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="d-flex items-center">
                  <div className="header-menu menu-right">
                    <div className="mobile-overlay" />
                    <div className="header-menu__content">
                      <div className="menu js-navList">
                        <ul className="menu__nav text-white -is-active">
                          <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none" style={{ height: "80px" }}>
                            <a
                              className="-white bg-white text-dark-1 button px-30 fw-400 text-14  h-50"
                            >
                              AI Trip Planner                                  
                            </a>




                          </div>
                          {
                            localStorage.getItem('user-info') ?
                              <>
                                <li className=" menu-item-has-children depth-0">
                                  <a data-barba="" target="">
                                    <span className="mr-10"> {user && user.username}</span>
                                    <img
                                      className="logo-dark"
                                      src={dropdown}
                                      alt="Reserve XP"
                                    />                                  </a>
                                  <ul className="subnav">
                                    <li className="subnav__backBtn js-nav-list-back">
                                      <a href="#">
                                        <i className="icon icon-chevron-sm-down" /> Email
                                      </a>
                                    </li>
                                    <li className=" depth-1">
                                      <Link className="links" to="/dashboard">


                                        <a
                                          data-barba=""
                                          target=""
                                        >
                                          Dashbord
                                        </a>
                                      </Link>
                                    </li>
                                    <li className=" depth-1">
                                      <Link className="links" to="/admindashbord">


                                        <a
                                          data-barba=""
                                          target=""
                                        >
                                          Admin Dashbord
                                        </a>
                                      </Link>
                                    </li>
                                    <li className=" depth-1">
                                      <Link className="links" to="/VendorTourList">


                                        <a
                                          data-barba=""
                                          target=""
                                        >
                                          Vendor Dashbord
                                        </a>
                                      </Link>
                                    </li>
                                    <li className=" depth-1">
                                      <Link className="links" to="/profile">
                                        <a
                                          data-barba=""
                                          target=""
                                        >
                                          Profile
                                        </a>
                                      </Link>
                                    </li>
                                    <li className=" depth-1">
                                      <a
                                        data-barba=""
                                        target=""
                                        onClick={logout}
                                      >
                                        LogOut
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </> :
                              <>
                                <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none" style={{ height: "80px" }}>


                                  <Link className="links" to="/signin">
                                    <a
                                      data-bs-toggle="modal"
                                      className="border-white -outline-white text-white button px-30 fw-400 text-14  h-50 ml-20"

                                    >
                                      Sign In / Register
                                    </a>
                                  </Link>



                                </div>
                                <div
                                  className="d-none xl:d-flex x-gap-20 items-center pl-30 text-white"
                                  data-x="header-mobile-icons"
                                  data-x-toggle="text-white"
                                >
                                  <div>
                                    <a
                                      className="d-flex items-center icon-user text-inherit text-22"
                                    />
                                  </div>
                                  <div>
                                    <button
                                      className="d-flex items-center icon-menu text-inherit text-20"
                                      data-x-click="header, header-logo, header-mobile-icons, mobile-menu"
                                    />
                                  </div>
                                </div>
                              </>
                          }

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="d-none xl:d-flex x-gap-20 items-center pl-30 text-white"
                  data-x="header-mobile-icons"
                  data-x-toggle="text-white"
                >
                  <div>
                    <a
                      className="d-flex items-center icon-user text-inherit text-22"
                    />
                  </div>
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-x-click="header, header-logo, header-mobile-icons, mobile-menu"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="d-none xl:d-flex x-gap-20 items-center pl-30"
              data-x="header-mobile-icons"
              data-x-toggle="text-white"
            ></div>
          </div>
        </header>







      </div>
    </div>

  );

}
export default Header;