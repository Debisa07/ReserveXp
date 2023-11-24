import React from "react";
import avatar from "../assets/image/avatar.png"
import 'font-awesome/css/font-awesome.min.css';
import { Link, } from 'react-router-dom';


export default function Dashboard() {

  return (
    <>
      <div className="bravo_wrap">
        <div className="header-margin" />
        <div
          className="dashboard bravo_user_profile p-0"
          data-x="dashboard"
          data-x-toggle="-is-sidebar-open"
        >
          <div className="dashboard__sidebar bg-white scroll-bar-1">
            <div className="sidebar__user text-center mb-20">
              <div className="logo">
                <div
                  className="avatar avatar-cover"
                  style={{ backgroundImage: `url(${avatar})` }}
                />
              </div>
              <div className="user-profile-info">
                <div className="info-new">
                  <span className="role-name badge badge-info">customer</span>
                  <h5 className="text-16">jon ex</h5>
                  <p className="text-10 mb-0">Member Since Oct 2023</p>
                </div>
              </div>
              <div className="user__profile-plan mt-10 text-center">
                <a
                  className="become-vendor button -sm -dark-1 bg-blue-1 text-white"
                >
                  Become a vendor
                </a>
              </div>
              <div className="user__profile-plan mt-10 text-center">
                <Link className="links" to="/companycreate">
                  <a
                    className="become-vendor button -sm -dark-1 bg-blue-1 text-white"
                  >
                    Register As a Company
                  </a>
                </Link >
              </div>
            </div>
            <div className="sidebar -dashboard">
              <div className="sidebar__item" data-position={20}>
                <div className="accordion -db-sidebar js-accordion">
                  <div className="accordion__item">
                    <div className="accordion__button">
                      <div className="sidebar__button active -is-active text-blue-1 col-12 d-flex items-center justify-between">
                        <div className="d-flex items-center text-15 lh-1 fw-500">
                          <Link className="links" to="/dashboard">
                            <a href="" className="icon text-center mr-15 text-24">
                              <i className="fa fa-clock-o" />
                            </a>
                            <a href="">Booking History</a>

                          </Link>                  </div>
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
                          <Link className="links" to="/wishlist">
                            <a
                              className="icon text-center mr-15 text-24"
                            >
                              <i className="fa fa-heart-o" />
                            </a>
                            <a>
                              Wishlist
                            </a>
                          </Link>
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
                          <Link className="links" to="/verification">

                            <a
                              href=""
                              className="icon text-center mr-15 text-24"
                            >
                              <i className="fa fa-handshake-o" />
                            </a>

                            <a href="">
                              Verifications
                            </a>
                          </Link>
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
                          <Link to="/profile">
                            <a
                              className="icon text-center mr-15 text-24"
                            >
                              <i className="fa fa-cogs" />
                            </a>
                            <a >
                              My Profile
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            
              <div className="sidebar__item ">
              <Link to="/">

                <a
                  className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
                >
                  <i className="fa fa-long-arrow-left icon text-center mr-15 text-24" />{" "}
                  Back to Homepage
                </a>
                </Link>
              </div>
            </div>

          </div>
          <div className="dashboard__main">
            <div className="dashboard__content bg-light-2">
              <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
                <div className="col-auto">
                  <h1 className="text-30 lh-14 fw-600">Booking History</h1>
                  <div className="text-15 text-light-1">
                    Lorem ipsum dolor sit amet, consectetur.
                  </div>
                </div>
                <div className="col-auto" />
              </div>
              No item
              {/* Custom script for all pages */}
            </div>
          </div>
          <div className="modal" tabIndex={-1} id="modal_booking_detail">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    Booking ID: # <span className="user_id" />
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="d-flex justify-content-center">Loading...</div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  );
}
