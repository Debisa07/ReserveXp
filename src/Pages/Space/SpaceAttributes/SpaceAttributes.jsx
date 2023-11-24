import React, { useState } from 'react';
import Nav from "../../../components/Admin/AdminNav";
import AllAttributes from "./AllAttributes/view/user-view"
export default function AdminDashbord() {

    return (

        <>
            <div id="app" >
                <Nav />

            </div>


            <div id="app" style={{ marginLeft: "-40px ", marginTop: "20px" }}>
                <div className="main-content">

                    <nav className="main-breadcrumb" aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><i className="fa fa-home" />
                                Dashboard</li>
                            <li className="breadcrumb-item ">
                                <a >spaces</a>
                            </li>
                            <li className="breadcrumb-item active">
                                Attributes
                            </li>
                        </ol>
                    </nav>
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between mb20">
                            <h1 className="title-bar">space Attributes</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb40">
                                <div className="panel">
                                    <div className="panel-title">Add Attributes</div>
                                    <div className="panel-body">
                                        <form
                                            method="post"
                                        >
                                            <input
                                                type="hidden"
                                                name="_token"
                                                defaultValue="ZBdXBlaKIJfxcb3WErh0ZHFY76f4Sr0fYOARd2JK"
                                            />
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input
                                                    type="text"
                                                    defaultValue=""
                                                    placeholder="Attribute name"
                                                    name="name"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Position Order</label>
                                                <input
                                                    type="number"
                                                    min={0}
                                                    defaultValue=""
                                                    placeholder="Ex: 1"
                                                    name="position"
                                                    className="form-control"
                                                />
                                                <small>
                                                    The position will be used to order in the Filter page
                                                    search. The greater number is priority
                                                </small>
                                            </div>
                                           
                                            <div className="">
                                                <button className="btn btn-primary" type="submit">
                                                    Add new
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8"> 
                                                                   <AllAttributes />

                                {/* <div className="filter-div d-flex justify-content-between ">
                                    <div className="col-left">
                                        <form
                                            method="post"
                                            className="filter-form filter-form-left d-flex justify-content-start"
                                        >
                                            <input
                                                type="hidden"
                                                name="_token"
                                                defaultValue="ZBdXBlaKIJfxcb3WErh0ZHFY76f4Sr0fYOARd2JK"
                                            />
                                            <select name="action" className="form-control">
                                                <option value="" selected="selected">
                                                    {" "}
                                                    Bulk Action{" "}
                                                </option>
                                                <option value="delete"> Delete </option>
                                            </select>
                                            <button
                                                data-confirm="Do you want to delete?"
                                                className="btn-info btn btn-icon dungdt-apply-form-btn"
                                                type="button"
                                            >
                                                Apply
                                            </button>
                                        </form>
                                    </div>
                                    <div className="col-left">
                                        <form
                                            method="get"
                                            className="filter-form filter-form-right d-flex justify-content-end"
                                            role="search"
                                        >
                                            <input
                                                type="text"
                                                name="s"
                                                defaultValue=""
                                                className="form-control"
                                                placeholder="Search by name"
                                            />
                                            <button
                                                className="btn-info btn btn-icon btn_search"
                                                id="search-submit"
                                                type="submit"
                                            >
                                                Search
                                            </button>
                                        </form>
                                    </div>
                                </div> */}
                                {/* <div className="panel">                                                                    

                                    <div className="panel-title">All Attributes</div>
                                    <div className="panel-body">
                                        <form className="bravo-form-item">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th width="60px">
                                                            <input type="checkbox" className="check-all" />
                                                        </th>
                                                        <th>Name</th>
                                                        <th>Position Order</th>
                                                        <th className="">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <input
                                                                type="checkbox"
                                                                className="check-item"
                                                                name="ids[]"
                                                                defaultValue={6}
                                                            />
                                                        </td>
                                                        <td className="title">
                                                                Facilities
                                                            </a>
                                                        </td>
                                                        <td>0</td>
                                                        <td>
                                                            <a
                                                                className="btn btn-primary btn-sm"
                                                            >
                                                                <i className="fa fa-edit" /> Edit
                                                            </a>
                                                            <a
                                                                className="btn btn-sm btn-success"
                                                            >
                                                                <i className="fa fa" /> Manage Terms
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input
                                                                type="checkbox"
                                                                className="check-item"
                                                                name="ids[]"
                                                                defaultValue={7}
                                                            />
                                                        </td>
                                                        <td className="title">
                                                            <a >
                                                                space Service
                                                            </a>
                                                        </td>
                                                        <td>0</td>
                                                        <td>
                                                            <a
                                                                className="btn btn-primary btn-sm"
                                                            >
                                                                <i className="fa fa-edit" /> Edit
                                                            </a>
                                                            <a
                                                                className="btn btn-sm btn-success"
                                                            >
                                                                <i className="fa fa" /> Manage Terms
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input
                                                                type="checkbox"
                                                                className="check-item"
                                                                name="ids[]"
                                                                defaultValue={5}
                                                            />
                                                        </td>
                                                        <td className="title">
                                                            <a >
                                                                Property type
                                                            </a>
                                                        </td>
                                                        <td>0</td>
                                                        <td>
                                                            <a
                                                                className="btn btn-primary btn-sm"
                                                            >
                                                                <i className="fa fa-edit" /> Edit
                                                            </a>
                                                            <a
                                                                className="btn btn-sm btn-success"
                                                            >
                                                                <i className="fa fa" /> Manage Terms
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </form>

                                    </div>
                                </div> */}
                            </div>


                        </div>
                    </div>
                </div>
                <div className="backdrop-sidebar-mobile" />
            </div>
          



        </>

    );
}
