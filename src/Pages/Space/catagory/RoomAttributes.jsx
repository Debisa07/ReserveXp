import React, { useState } from 'react';
import Nav from "../../../components/Admin/AdminNav";
import AllAttributes from "./RoomAttributes/view/user-view"
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
      <li className="breadcrumb-item"><a href="/admin"><i className="fa fa-home" />
          Dashboard</a></li>
      <li className="breadcrumb-item ">
        <a href="/admin/module/tour">Tour</a>
      </li>
      <li className="breadcrumb-item active">
        Category
      </li>
    </ol>
  </nav>
  <div className="container-fluid">
    <div className="d-flex justify-content-between mb20">
      <h1 className="title-bar">Tour Categories</h1>
    </div>
    <div className="row">
      <div className="col-md-4 mb40">
        <div className="panel">
          <div className="panel-title">Add Category</div>
          <div className="panel-body">
            <form action="/admin/module/tour/category/store/-1" method="post">
              <input type="hidden" name="_token" defaultValue="bVBrG5LJQBKXX82bOvQiNtUjPk8vx07CbBNnFFeR" />
              <div className="form-group">
                <label>Name</label>
                <input type="text" defaultValue placeholder="Category name" name="name" className="form-control" />
              </div>
              <div className="form-group">
                <label>Parent</label>
                <select name="parent_id" className="form-control">
                  <option value selected="selected">-- Please Select --</option>
                  <option value={1}> Wildlife Tour</option>
                  <option value={2}> Adventure Tour</option>
                  <option value={3}> City Tours</option>
                  <option value={4}> Museum Tours</option>
                  <option value={5}> Beaches Tour</option>
                </select>
              </div>
              <div className="form-group">
                <label>Category Icon Class</label>
                <input type="text" defaultValue placeholder="Category icon" name="cat_icon" className="form-control" />
              </div>
              <div className>
                <button className="btn btn-primary" type="submit">Add new</button>
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
                                            action="/admin/module/hotel/attribute/editAttrBulk"
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
                                            action="/admin/module/hotel/attribute"
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
                                                            <a href="/admin/module/hotel/attribute/edit/6">
                                                                Facilities
                                                            </a>
                                                        </td>
                                                        <td>0</td>
                                                        <td>
                                                            <a
                                                                href="/admin/module/hotel/attribute/edit/6"
                                                                className="btn btn-primary btn-sm"
                                                            >
                                                                <i className="fa fa-edit" /> Edit
                                                            </a>
                                                            <a
                                                                href="/admin/module/hotel/attribute/terms/6"
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
                                                            <a href="/admin/module/hotel/attribute/edit/7">
                                                                Hotel Service
                                                            </a>
                                                        </td>
                                                        <td>0</td>
                                                        <td>
                                                            <a
                                                                href="/admin/module/hotel/attribute/edit/7"
                                                                className="btn btn-primary btn-sm"
                                                            >
                                                                <i className="fa fa-edit" /> Edit
                                                            </a>
                                                            <a
                                                                href="/admin/module/hotel/attribute/terms/7"
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
                                                            <a href="/admin/module/hotel/attribute/edit/5">
                                                                Property type
                                                            </a>
                                                        </td>
                                                        <td>0</td>
                                                        <td>
                                                            <a
                                                                href="/admin/module/hotel/attribute/edit/5"
                                                                className="btn btn-primary btn-sm"
                                                            >
                                                                <i className="fa fa-edit" /> Edit
                                                            </a>
                                                            <a
                                                                href="/admin/module/hotel/attribute/terms/5"
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
