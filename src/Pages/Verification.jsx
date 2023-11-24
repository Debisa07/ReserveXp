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
                                            <div className="sidebar__button  col-12 d-flex items-center justify-between">
                                                <div className="d-flex items-center text-15 lh-1 fw-500">
                                                    <Link className="links" to="/dashboard">
                                                        <a
                                                            
                                                            className="icon text-center mr-15 text-24"
                                                        >
                                                            <i className="fa fa-clock-o" />
                                                        </a>
                                                        <a >
                                                            Booking History
                                                        </a>
                                                    </Link>
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
                                                    <Link className="links" to="/wishlist">

                                                        <a

                                                            className="icon text-center mr-15 text-24"
                                                        >
                                                            <i className="fa fa-heart-o" />
                                                        </a>
                                                        <a >Wishlist</a>
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
                                            <div className="sidebar__button active -is-active text-blue-1 col-12 d-flex items-center justify-between">
                                                <div className="d-flex items-center text-15 lh-1 fw-500">
                                                    <a href="" className="icon text-center mr-15 text-24">
                                                        <i className="fa fa-handshake-o" />
                                                    </a>
                                                    <a href="">Verifications</a>
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
                                <form
                                    id="logout-form-vendor"
                                    method="POST"
                                    style={{ display: "none" }}
                                >
                                    <input
                                        type="hidden"
                                        name="_token"
                                        defaultValue="5PypkM2AbtnxveKADc2FgEvBUrzB82YsQ8UOxohK"
                                        className="has-value"
                                    />
                                </form>
                                <a
                                    href="#"
                                    className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
                                >
                                    <i className="fa fa-sign-out icon text-center mr-15 text-24" /> Log Out
                                </a>
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
                            <h2 className="title-bar" style={{ fontSize: "32px" }}><b>Verification data</b></h2>
                            <div className="booking-history-manager">
                                <div className="form-group">
                                    <div className="row align-items-center">
                                        <label className="col-md-3 text-right col-form-label">Phone :</label>
                                        <div className="col-md-4">
                                            <div className="">
                                                <strong>N/A</strong>
                                            </div>
                                            <span className="badge badge-secondary">
                                                <i>Not Verified</i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row align-items-center">
                                        <label className="col-md-3 text-right col-form-label">
                                            ID Card
                                            <span className="text-danger">*</span>:
                                        </label>
                                        <div className="col-md-4 btn-upload-private-wrap">
                                            <div className="private-file-lists mb-2"></div>
                                            <div>
                                                <strong>N/A</strong>
                                            </div>
                                            <span className="badge badge-secondary">
                                                <i>Not Verified</i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <label className="col-md-3 text-right col-form-label">
                                            Trade License
                                            <span className="text-danger">*</span>:
                                        </label>
                                        <div className="col-md-4 btn-upload-private-wrap">
                                            <div className="private-file-lists mb-2"></div>
                                            <div>
                                                <strong>N/A</strong>
                                            </div>
                                            <span className="badge badge-secondary">
                                                <i>Not Verified</i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-3" />
                                    <div className="col-md-4">
                                        <Link to="/updateverification">

                                            <a
                                                className="btn btn-warning"
                                            >
                                                {" "}
                                                <i className="fa fa-edit" /> Update verification data{" "}
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <footer className="footer -dashboard mt-60">
                                <div className="footer__row row y-gap-10 items-center justify-between">
                                    <div className="col-auto">
                                        <div className="row y-gap-20 items-center">
                                            <div className="col-auto"></div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="d-flex x-gap-5 y-gap-5 items-center"></div>
                                    </div>
                                </div>
                            </footer>
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
                                                                className="form-control has-value"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                        <div className="filter-item">
                                                            <button className="btn btn-default">
                                                                <i className="fa fa-search" /> Search
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
                                                                <i className="fa fa-upload" /> Upload
                                                            </span>{" "}
                                                            <input
                                                                multiple="multiple"
                                                                accept="image/png,image/jpeg,image/gif,image/bmp,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                                                type="file"
                                                                name="files[]"
                                                                className="has-value"
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
                                                <input
                                                    type="file"
                                                    name="filepond[]"
                                                    className="my-pond has-value"
                                                />
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
                                                <div className="files-wraps  view-grid"> </div>
                                                <p
                                                    className="no-files-text text-center"
                                                    style={{ display: "none" }}
                                                >
                                                    No file found
                                                </p>
                                                {/**/}
                                            </div>{" "}
                                            {/**/}
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
