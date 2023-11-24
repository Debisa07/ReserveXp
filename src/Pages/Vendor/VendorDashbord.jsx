import React, { useState } from 'react';
import Header from '../../components/Header';
import avator from "../../assets/image/avatar.png"
export default function AdminDashbord() {
 
  return (
    <>
    <Header/>
      <div>
  <div className="bravo_wrap" style={{marginTop:"30px"}}>

    <div className="dashboard bravo_user_profile p-0" data-x="dashboard" data-x-toggle="-is-sidebar-open">
      <div className="dashboard__sidebar bg-white scroll-bar-1">
        <div className="sidebar__user text-center mb-20">
          <div className="logo">
          <div className="avatar avatar-cover" style={{ backgroundImage: `url(${avator})` }}></div>          </div>
          <div className="user-profile-info">
            <div className="info-new">
              <span className="role-name badge badge-info">Vendor</span>
              <h5 className="text-16">vendor</h5>
              <p className="text-10 mb-0">Member Since Nov 2023</p>
            </div>
          </div>
        </div>
        <div className="sidebar -dashboard">
          <div className="sidebar__item" data-position={10}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="sidebar__button active -is-active text-blue-1 col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <a href className="icon text-center mr-15 text-24"><i className="fa fa-home" /></a>
                      <a href>
                        Dashboard
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__item" data-position={20}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="sidebar__button  col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <a href="https://gotrip.bookingcore.co/user/booking-history" className="icon text-center mr-15 text-24"><i className="fa fa-clock-o" /></a>
                      <a href="https://gotrip.bookingcore.co/user/booking-history">
                        Booking History
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__item" data-position={21}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="sidebar__button  col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <a href="https://gotrip.bookingcore.co/user/wishlist" className="icon text-center mr-15 text-24"><i className="fa fa-heart-o" /></a>
                      <a href="https://gotrip.bookingcore.co/user/wishlist">
                        Wishlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__item" data-position={30}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="sidebar__button  has-children col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <a href="https://gotrip.bookingcore.co/user/hotel" ></a>
                      <a href="https://gotrip.bookingcore.co/user/hotel">
                        Manage Hotel
                      </a>
                    </div>
                  </div>
                </div>
                <div className="accordion__content">
                  <ul className="list-disc pt-15 pb-5 pl-40">
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/hotel">
                        All Hotels
                      </a>
                    </li>
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/hotel/create">
                        Add Hotel
                      </a>
                    </li>
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/hotel/recovery">
                        Recovery
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__item" data-position={40}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="sidebar__button  has-children col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <a href="https://gotrip.bookingcore.co/user/tour" ></a>
                      <a href="https://gotrip.bookingcore.co/user/tour">
                        Manage Tour
                      </a>
                    </div>
                  </div>
                </div>
                <div className="accordion__content">
                  <ul className="list-disc pt-15 pb-5 pl-40">
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/tour">
                        All Tours
                      </a>
                    </li>
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/tour/create">
                        Add Tour
                      </a>
                    </li>
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/tour/availability">
                        Availability
                      </a>
                    </li>
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/tour/recovery">
                        Recovery
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__item" data-position={50}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="sidebar__button  has-children col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <a href="https://gotrip.bookingcore.co/user/space" ></a>
                      <a href="https://gotrip.bookingcore.co/user/space">
                        Manage Space
                      </a>
                    </div>
                  </div>
                </div>
                <div className="accordion__content">
                  <ul className="list-disc pt-15 pb-5 pl-40">
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/space">
                        All Spaces
                      </a>
                    </li>
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/space/create">
                        Add Space
                      </a>
                    </li>
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/space/availability">
                        Availability
                      </a>
                    </li>
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/space/recovery">
                        Recovery
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__item" data-position={60}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="sidebar__button  has-children col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <a href="https://gotrip.bookingcore.co/user/flight" ></a>
                      <a href="https://gotrip.bookingcore.co/user/flight">
                        Manage Flight
                      </a>
                    </div>
                  </div>
                </div>
                <div className="accordion__content">
                  <ul className="list-disc pt-15 pb-5 pl-40">
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/flight">
                        All Flights
                      </a>
                    </li>
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/flight/create">
                        Add Flights
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__item" data-position={70}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="sidebar__button  has-children col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <a href="https://gotrip.bookingcore.co/user/car" className="icon text-center mr-15 text-24"><i className="icofont-car" /></a>
                      <a href="https://gotrip.bookingcore.co/user/car">
                        Manage Car
                      </a>
                    </div>
                  </div>
                </div>
                <div className="accordion__content">
                  <ul className="list-disc pt-15 pb-5 pl-40">
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/car">
                        All Cars
                      </a>
                    </li>
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/car/create">
                        Add Car
                      </a>
                    </li>
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/car/availability">
                        Availability
                      </a>
                    </li>
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/car/recovery">
                        Recovery
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__item" data-position={70}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="sidebar__button  has-children col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <a href="https://gotrip.bookingcore.co/user/boat" className="icon text-center mr-15 text-24"><i className="icofont-ship" /></a>
                      <a href="https://gotrip.bookingcore.co/user/boat">
                        Manage Boat
                      </a>
                    </div>
                  </div>
                </div>
                <div className="accordion__content">
                  <ul className="list-disc pt-15 pb-5 pl-40">
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/boat">
                        All Boats
                      </a>
                    </li>
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/boat/create">
                        Add Boat
                      </a>
                    </li>
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/boat/availability">
                        Availability
                      </a>
                    </li>
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/boat/recovery">
                        Recovery
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__item" data-position={80}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="sidebar__button  has-children col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <a href="https://gotrip.bookingcore.co/user/event" className="icon text-center mr-15 text-24"><i className="icofont-ticket" /></a>
                      <a href="https://gotrip.bookingcore.co/user/event">
                        Manage Event
                      </a>
                    </div>
                  </div>
                </div>
                <div className="accordion__content">
                  <ul className="list-disc pt-15 pb-5 pl-40">
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/event">
                        All Events
                      </a>
                    </li>
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/event/create">
                        Add Event
                      </a>
                    </li>
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/event/availability">
                        Availability
                      </a>
                    </li>
                    <li className>
                      <a href="https://gotrip.bookingcore.co/user/event/recovery">
                        Recovery
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__item" data-position="80.1">
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="sidebar__button  col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <a href="https://gotrip.bookingcore.co/vendor/news" className="icon text-center mr-15 text-24"><i className="ion-md-bookmarks" /></a>
                      <a href="https://gotrip.bookingcore.co/vendor/news">
                        Manage News
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__item" data-position={81}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="sidebar__button  col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <a href="https://gotrip.bookingcore.co/vendor/booking-report" className="icon text-center mr-15 text-24"><i className="icon ion-ios-pie" /></a>
                      <a href="https://gotrip.bookingcore.co/vendor/booking-report">
                        Booking Report
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__item" data-position={82}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="sidebar__button  col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <a href="https://gotrip.bookingcore.co/vendor/enquiry-report" className="icon text-center mr-15 text-24"><i className="icofont-ebook" /></a>
                      <a href="https://gotrip.bookingcore.co/vendor/enquiry-report">
                        Enquiry Report
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__item" data-position={85}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="sidebar__button  col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <a href="https://gotrip.bookingcore.co/user/verification" className="icon text-center mr-15 text-24"><i className="fa fa-handshake-o" /></a>
                      <a href="https://gotrip.bookingcore.co/user/verification">
                        Verifications
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__item" data-position={90}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="sidebar__button  col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <a href="https://gotrip.bookingcore.co/vendor/payouts" className="icon text-center mr-15 text-24"><i className="icon ion-md-card" /></a>
                      <a href="https://gotrip.bookingcore.co/vendor/payouts">
                        Payouts
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__item" data-position={95}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="sidebar__button  col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <a href="https://gotrip.bookingcore.co/user/profile" className="icon text-center mr-15 text-24"><i className="fa fa-cogs" /></a>
                      <a href="https://gotrip.bookingcore.co/user/profile">
                        My Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__item" data-position={95}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="sidebar__button  col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <a href="https://gotrip.bookingcore.co/user/profile/change-password" className="icon text-center mr-15 text-24"><i className="fa fa-lock" /></a>
                      <a href="https://gotrip.bookingcore.co/user/profile/change-password">
                        Change password
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__item" data-position={95}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="sidebar__button  col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <a href="https://gotrip.bookingcore.co/user/my-plan" className="icon text-center mr-15 text-24"><i className="fa fa-list-alt" /></a>
                      <a href="https://gotrip.bookingcore.co/user/my-plan">
                        My Plans
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__item" data-position={100}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="sidebar__button  col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <a href="https://gotrip.bookingcore.co/admin" className="icon text-center mr-15 text-24"><i className="icon ion-ios-ribbon" /></a>
                      <a href="https://gotrip.bookingcore.co/admin">
                        Admin Dashboard
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__item ">
            <form id="logout-form-vendor" action="https://gotrip.bookingcore.co/logout" method="POST" style={{"display":"none"}}>
              <input type="hidden" name="_token" defaultValue="P8R6HAMjM9SzgZSldbdSdoJ5b34WhdnEgt8cMx9H" className="has-value" />
            </form>
            <a href="#" className="sidebar__button d-flex items-center text-15 lh-1 fw-500">
              <i className="fa fa-sign-out icon text-center mr-15 text-24" /> Log Out
            </a>
          </div>
          <div className="sidebar__item ">
            <a href="https://gotrip.bookingcore.co/" className="sidebar__button d-flex items-center text-15 lh-1 fw-500">
              <i className="fa fa-long-arrow-left icon text-center mr-15 text-24" /> Back to Homepage
            </a>
          </div>
        </div>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__content bg-light-2">
          <div className="bravo-user-dashboard">
            <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-auto">
                <h1 className="text-30 lh-14 fw-600">Dashboard</h1>
                <div className="text-15 text-light-1">Ready to jump back in?</div>
              </div>
              <div className="col-auto">
              </div>
            </div>
            <div className="row y-gap-30">
              <div className="col-xl-3 col-md-6">
                <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                  <div className="row y-gap-20 justify-between items-center">
                    <div className="col-auto">
                      <div className="fw-500 lh-14">Pending</div>
                      <div className="text-26 lh-16 fw-600 mt-5">$6.255</div>
                      <div className="text-15 lh-14 text-light-1 mt-5">Total pending</div>
                    </div>
                    <div className="col-auto">
                      <img src="1.svg" alt="icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                  <div className="row y-gap-20 justify-between items-center">
                    <div className="col-auto">
                      <div className="fw-500 lh-14">Earnings</div>
                      <div className="text-26 lh-16 fw-600 mt-5">$0</div>
                      <div className="text-15 lh-14 text-light-1 mt-5">Total earnings</div>
                    </div>
                    <div className="col-auto">
                      <img src="2.svg" alt="icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                  <div className="row y-gap-20 justify-between items-center">
                    <div className="col-auto">
                      <div className="fw-500 lh-14">Bookings</div>
                      <div className="text-26 lh-16 fw-600 mt-5">7</div>
                      <div className="text-15 lh-14 text-light-1 mt-5">Total bookings</div>
                    </div>
                    <div className="col-auto">
                      <img src="3.svg" alt="icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                  <div className="row y-gap-20 justify-between items-center">
                    <div className="col-auto">
                      <div className="fw-500 lh-14">Services</div>
                      <div className="text-26 lh-16 fw-600 mt-5">23</div>
                      <div className="text-15 lh-14 text-light-1 mt-5">Total bookable services</div>
                    </div>
                    <div className="col-auto">
                      <img src="4.svg" alt="icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row y-gap-30 pt-20">
              <div className="col-xl-7 col-md-6">
                <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                  <div className="d-flex justify-between items-center">
                    <h2 className="text-18 lh-1 fw-500">
                      Earning Statistics
                    </h2>
                    <div className="action-control d-flex items-center bg-white border-light rounded-100 px-15 py-10 text-14 lh-12">
                      <div id="reportrange">
                        <i className="fa fa-calendar" />&nbsp;
                        <span>October 29, 2023 - November 4, 2023</span> <i className="fa fa-caret-down" />
                      </div>
                    </div>
                  </div>
                  <div className="pt-30">
                    <div className="chartjs-size-monitor">
                      <div className="chartjs-size-monitor-expand">
                        <div className />
                      </div>
                      <div className="chartjs-size-monitor-shrink">
                        <div className />
                      </div>
                    </div>
                    <canvas className="bravo-user-render-chart chartjs-render-monitor" style={{"display":"block","width":"452px","height":"226px"}} width={452} height={226} data-scrapbook-canvas="data:image/png;base64,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" />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                  <div className="d-flex justify-between items-center">
                    <h2 className="text-18 lh-1 fw-500">
                      Recent Bookings
                    </h2>
                    <div className>
                      <a href="https://gotrip.bookingcore.co/vendor/booking-report" className="text-14 text-blue-1 fw-500 underline">View All</a>
                    </div>
                  </div>
                  <div className="overflow-scroll scroll-bar-1 pt-30">
                    <table className="table-2 col-12">
                      <thead className>
                        <tr>
                          <th>#</th>
                          <th>Item</th>
                          <th>Total</th>
                          <th>Paid</th>
                          <th>Status</th>
                          <th>Created At</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#24</td>
                          <td>Eastern Discovery (Start New Orleans)</td>
                          <td className="fw-500">$1.100</td>
                          <td>$0</td>
                          <td>
                            <div className="rounded-100 py-4 text-center col-12 text-14 fw-500 bg-yellow-4 text-yellow-3">
                              Processing</div>
                          </td>
                          <td>11/03/2023<br />07:01</td>
                        </tr>
                        <tr>
                          <td>#18</td>
                          <td>Vinfast Lux V8 (SUV)</td>
                          <td className="fw-500">$1.400</td>
                          <td>$0</td>
                          <td>
                            <div className="rounded-100 py-4 text-center col-12 text-14 fw-500 bg-yellow-4 text-yellow-3">
                              Processing</div>
                          </td>
                          <td>10/29/2023<br />18:45</td>
                        </tr>
                        <tr>
                          <td>#15</td>
                          <td>Eastern Discovery (Start New Orleans)</td>
                          <td className="fw-500">$1.200</td>
                          <td>$0</td>
                          <td>
                            <div className="rounded-100 py-4 text-center col-12 text-14 fw-500 bg-yellow-4 text-yellow-3">
                              Processing</div>
                          </td>
                          <td>10/28/2023<br />21:27</td>
                        </tr>
                        <tr>
                          <td>#13</td>
                          <td>Dylan Hotel</td>
                          <td className="fw-500">$450</td>
                          <td>$0</td>
                          <td>
                            <div className="rounded-100 py-4 text-center col-12 text-14 fw-500 bg-yellow-4 text-yellow-3">
                              Processing</div>
                          </td>
                          <td>10/25/2023<br />10:17</td>
                        </tr>
                        <tr>
                          <td>#5</td>
                          <td>Dylan Hotel</td>
                          <td className="fw-500">$1.150</td>
                          <td>$0</td>
                          <td>
                            <div className="rounded-100 py-4 text-center col-12 text-14 fw-500 bg-yellow-4 text-yellow-3">
                              Processing</div>
                          </td>
                          <td>10/23/2023<br />07:31</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer -dashboard mt-60">
          </footer>
          <div id="cdn-browser-modal" className="modal fade">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div id="cdn-browser" className="cdn-browser d-flex flex-column">
                  <div className="files-nav flex-shrink-0">
                    <div className="d-flex justify-content-between">
                      <div className="col-left d-flex align-items-center">
                        <div className="filter-item"><input type="text" placeholder="Search file name...." className="form-control has-value" defaultValue /></div>
                        <div className="filter-item"><button className="btn btn-default"><i className="fa fa-search" /> Search</button></div>
                        <div className="filter-item"><small><i>Total: 0 files</i></small></div>
                      </div>
                      <div className="div">
                        <div role="group" aria-label="Basic example" className="btn-group"><button type="button" className="btn btn-secondary"><i className="fa fa-th" /></button> <button type="button" className="btn btn-outline-secondary"><i className="fa fa-bars" /></button></div>
                      </div>
                      <div className="col-right"><i className="fa-spin fa fa-spinner icon-loading active" style={{"display":"none"}} /> <button className="btn btn-primary mr-2"><span><i className="fa fa-folder" /> Add
                            Folder</span></button> <button className="btn btn-success btn-pick-files"><span><i className="fa fa-upload" /> Upload</span> <input multiple="multiple" accept="image/png,image/jpeg,image/gif,image/bmp,application/vnd.openxmlformats-officedocument.wordprocessingml.document" type="file" name="files[]" className="has-value" /></button></div>
                    </div>
                  </div>
                  <div display="none" className="upload-new" style={{"display":"none"}}><input type="file" name="filepond[]" className="my-pond has-value" /></div>
                  <div className="files-list">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                      </ol>
                    </nav> {/**/}
                    <div className="files-wraps  view-grid"> </div>
                    <p className="no-files-text text-center" style={{"display":"none"}}>No file found</p>
                    {/**/}
                  </div> {/**/}
                </div>
              </div>
            </div>
          </div>
          {/* Custom script for all pages */}
        </div>
      </div>
      <div className="modal" tabIndex={-1} id="modal_booking_detail">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Booking ID: # <span className="user_id" /></h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center">Loading...</div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="daterangepicker ltr show-ranges show-calendar opensleft">
    <div className="ranges">
      <ul>
        <li data-range-key="Today">Today</li>
        <li data-range-key="Yesterday">Yesterday</li>
        <li data-range-key="Last 7 Days">Last 7 Days</li>
        <li data-range-key="Last 30 Days">Last 30 Days</li>
        <li data-range-key="This Month">This Month</li>
        <li data-range-key="Last Month">Last Month</li>
        <li data-range-key="This Year">This Year</li>
        <li data-range-key="This Week">This Week</li>
        <li data-range-key="Custom">Custom</li>
      </ul>
    </div>
    <div className="drp-calendar left">
      <div className="calendar-table" />
      <div className="calendar-time" style={{"display":"none"}} />
    </div>
    <div className="drp-calendar right">
      <div className="calendar-table" />
      <div className="calendar-time" style={{"display":"none"}} />
    </div>
    <div className="drp-buttons"><span className="drp-selected" /><button className="cancelBtn btn btn-sm btn-default" type="button">Cancel</button><button className="applyBtn btn btn-sm btn-primary" disabled="disabled" type="button">Apply</button> </div>
  </div>
</div>

    </>

  );
}
