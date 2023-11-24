import React, { useState } from 'react';
import Nav from "../../components/Admin/AdminNav";


export default function AdminDashbord() {

  return (
    <>
      <div id="app" >
        <Nav/>
       
      </div>
     
      <div style={{marginLeft:"-60px ", marginTop:"20px"}}>
  <div id="app" >
    
    <div className="main-content">
      
      <div className="container-fluid">
        <div className="d-flex justify-content-between mb20">
          <h1 className="title-bar">Location</h1>
        </div>
        <div className="row">
          <div className="col-md-4 mb40">
            <div className="panel">
              <div className="panel-title">Add Location</div>
              <div className="panel-body panel-index">
                <form
                  action="/admin/module/location/store/-1"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="hOLD4SrgIkm4KRIC2GNeLXVgE1yILvrMAKmlEYkg"
                  />
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      defaultValue=""
                      placeholder="Location name"
                      name="name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Parent</label>
                    <select name="parent_id" className="form-control">
                      <option value="" selected="selected">
                        -- Please Select --
                      </option>
                      <option value={1}> Paris</option>
                      <option value={2}> California</option>
                      <option value={3}> United States</option>
                      <option value={4}> Los Angeles</option>
                      <option value={5}> New Jersey</option>
                      <option value={6}> San Francisco</option>
                      <option value={7}> Virginia</option>
                      <option value={8}> Germany</option>
                      <option value={9}> New York</option>
                      <option value={10}> London</option>
                      <option value={11}> Barcelona</option>
                      <option value={12}> Sydney</option>
                      <option value={13}> Rome</option>
                      <option value={14}> Reykjavik</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="control-label">Description</label>
                    <div className="">
                      <textarea
                        name="content"
                        className="d-none has-ckeditor"
                        cols={30}
                        rows={10}
                        id="LrJkuUXsXz"
                        style={{ display: "none" }}
                        aria-hidden="true"
                        defaultValue={""}
                      />
                      <div
                        role="application"
                        className="tox tox-tinymce"
                        style={{ visibility: "hidden", height: 300 }}
                      >
                        <div className="tox-editor-container">
                          <div
                            role="menubar"
                            data-alloy-tabstop="true"
                            className="tox-menubar"
                          >
                            <button
                              aria-haspopup="true"
                              role="menuitem"
                              type="button"
                              unselectable="on"
                              tabIndex={-1}
                              className="tox-mbtn tox-mbtn--select"
                              style={{ userSelect: "none" }}
                              aria-expanded="false"
                            >
                              <span className="tox-mbtn__select-label">
                                File
                              </span>
                              <div className="tox-mbtn__select-chevron">
                                <svg width={10} height={10}>
                                  <path
                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </div>
                            </button>
                            <button
                              aria-haspopup="true"
                              role="menuitem"
                              type="button"
                              unselectable="on"
                              tabIndex={-1}
                              className="tox-mbtn tox-mbtn--select"
                              style={{ userSelect: "none" }}
                              aria-expanded="false"
                            >
                              <span className="tox-mbtn__select-label">
                                Edit
                              </span>
                              <div className="tox-mbtn__select-chevron">
                                <svg width={10} height={10}>
                                  <path
                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </div>
                            </button>
                            <button
                              aria-haspopup="true"
                              role="menuitem"
                              type="button"
                              unselectable="on"
                              tabIndex={-1}
                              className="tox-mbtn tox-mbtn--select"
                              style={{ userSelect: "none" }}
                              aria-expanded="false"
                            >
                              <span className="tox-mbtn__select-label">
                                View
                              </span>
                              <div className="tox-mbtn__select-chevron">
                                <svg width={10} height={10}>
                                  <path
                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </div>
                            </button>
                            <button
                              aria-haspopup="true"
                              role="menuitem"
                              type="button"
                              unselectable="on"
                              tabIndex={-1}
                              className="tox-mbtn tox-mbtn--select"
                              style={{ userSelect: "none" }}
                              aria-expanded="false"
                            >
                              <span className="tox-mbtn__select-label">
                                Insert
                              </span>
                              <div className="tox-mbtn__select-chevron">
                                <svg width={10} height={10}>
                                  <path
                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </div>
                            </button>
                            <button
                              aria-haspopup="true"
                              role="menuitem"
                              type="button"
                              unselectable="on"
                              tabIndex={-1}
                              className="tox-mbtn tox-mbtn--select"
                              style={{ userSelect: "none" }}
                              aria-expanded="false"
                            >
                              <span className="tox-mbtn__select-label">
                                Format
                              </span>
                              <div className="tox-mbtn__select-chevron">
                                <svg width={10} height={10}>
                                  <path
                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </div>
                            </button>
                            <button
                              aria-haspopup="true"
                              role="menuitem"
                              type="button"
                              unselectable="on"
                              tabIndex={-1}
                              className="tox-mbtn tox-mbtn--select"
                              style={{ userSelect: "none" }}
                              aria-expanded="false"
                            >
                              <span className="tox-mbtn__select-label">
                                Tools
                              </span>
                              <div className="tox-mbtn__select-chevron">
                                <svg width={10} height={10}>
                                  <path
                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </div>
                            </button>
                            <button
                              aria-haspopup="true"
                              role="menuitem"
                              type="button"
                              unselectable="on"
                              tabIndex={-1}
                              className="tox-mbtn tox-mbtn--select"
                              style={{ userSelect: "none" }}
                              aria-expanded="false"
                            >
                              <span className="tox-mbtn__select-label">
                                Table
                              </span>
                              <div className="tox-mbtn__select-chevron">
                                <svg width={10} height={10}>
                                  <path
                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </div>
                            </button>
                            <button
                              aria-haspopup="true"
                              role="menuitem"
                              type="button"
                              unselectable="on"
                              tabIndex={-1}
                              className="tox-mbtn tox-mbtn--select"
                              style={{ userSelect: "none" }}
                              aria-expanded="false"
                            >
                              <span className="tox-mbtn__select-label">
                                Help
                              </span>
                              <div className="tox-mbtn__select-chevron">
                                <svg width={10} height={10}>
                                  <path
                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </div>
                            </button>
                          </div>
                          <div role="group" className="tox-toolbar-overlord">
                            <div role="group" className="tox-toolbar__primary">
                              <div
                                title=""
                                role="toolbar"
                                data-alloy-tabstop="true"
                                tabIndex={-1}
                                className="tox-toolbar__group"
                              >
                                <button
                                  title="Blocks"
                                  aria-label="Blocks"
                                  aria-haspopup="true"
                                  type="button"
                                  unselectable="on"
                                  tabIndex={-1}
                                  className="tox-tbtn tox-tbtn--select tox-tbtn--bespoke"
                                  style={{ userSelect: "none" }}
                                  aria-expanded="false"
                                >
                                  <span className="tox-tbtn__select-label">
                                    Paragraph
                                  </span>
                                  <div className="tox-tbtn__select-chevron">
                                    <svg width={10} height={10}>
                                      <path
                                        d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                        fillRule="nonzero"
                                      />
                                    </svg>
                                  </div>
                                </button>
                              </div>
                              <div
                                role="toolbar"
                                data-alloy-tabstop="true"
                                tabIndex={-1}
                                className="tox-toolbar__group"
                              >
                                <button
                                  aria-label="More..."
                                  title="More..."
                                  type="button"
                                  data-alloy-tabstop="true"
                                  tabIndex={-1}
                                  className="tox-tbtn"
                                  aria-pressed="false"
                                >
                                  <span className="tox-icon tox-tbtn__icon-wrap">
                                    <svg width={24} height={24}>
                                      <path
                                        d="M6 10a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2zm12 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2zm-6 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2z"
                                        fillRule="nonzero"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </div>
                            </div>
                            <div
                              role="group"
                              className="tox-toolbar__overflow tox-toolbar__overflow--closed"
                              style={{ height: 0 }}
                            >
                              <div
                                title=""
                                role="toolbar"
                                data-alloy-tabstop="true"
                                tabIndex={-1}
                                className="tox-toolbar__group"
                              >
                                <button
                                  aria-label="Bold"
                                  title="Bold"
                                  type="button"
                                  tabIndex={-1}
                                  className="tox-tbtn"
                                  aria-pressed="false"
                                >
                                  <span className="tox-icon tox-tbtn__icon-wrap">
                                    <svg width={24} height={24}>
                                      <path
                                        d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 0 1-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4z"
                                        fillRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </button>
                                <button
                                  aria-label="Italic"
                                  title="Italic"
                                  type="button"
                                  tabIndex={-1}
                                  className="tox-tbtn"
                                  aria-pressed="false"
                                >
                                  <span className="tox-icon tox-tbtn__icon-wrap">
                                    <svg width={24} height={24}>
                                      <path
                                        d="M16.7 4.7l-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8z"
                                        fillRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </button>
                                <button
                                  aria-label="Strikethrough"
                                  title="Strikethrough"
                                  type="button"
                                  tabIndex={-1}
                                  className="tox-tbtn"
                                  aria-pressed="false"
                                >
                                  <span className="tox-icon tox-tbtn__icon-wrap">
                                    <svg width={24} height={24}>
                                      <g fillRule="evenodd">
                                        <path d="M15.6 8.5c-.5-.7-1-1.1-1.3-1.3-.6-.4-1.3-.6-2-.6-2.7 0-2.8 1.7-2.8 2.1 0 1.6 1.8 2 3.2 2.3 4.4.9 4.6 2.8 4.6 3.9 0 1.4-.7 4.1-5 4.1A6.2 6.2 0 0 1 7 16.4l1.5-1.1c.4.6 1.6 2 3.7 2 1.6 0 2.5-.4 3-1.2.4-.8.3-2-.8-2.6-.7-.4-1.6-.7-2.9-1-1-.2-3.9-.8-3.9-3.6C7.6 6 10.3 5 12.4 5c2.9 0 4.2 1.6 4.7 2.4l-1.5 1.1z"></path>
                                        <path
                                          d="M5 11h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z"
                                          fillRule="nonzero"
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </button>
                                <div
                                  aria-pressed="false"
                                  aria-label="Text color"
                                  title="Text color"
                                  role="button"
                                  aria-haspopup="true"
                                  tabIndex={-1}
                                  className="tox-split-button"
                                  aria-expanded="false"
                                  aria-describedby="aria_3966230681751698771625333"
                                >
                                  <span
                                    role="presentation"
                                    tabIndex={-1}
                                    className="tox-tbtn"
                                  >
                                    <span className="tox-icon tox-tbtn__icon-wrap">
                                      <svg width={24} height={24}>
                                        <g fillRule="evenodd">
                                          <path
                                            id="tox-icon-text-color__color"
                                            d="M3 18h18v3H3z"
                                          />
                                          <path d="M8.7 16h-.8a.5.5 0 0 1-.5-.6l2.7-9c.1-.3.3-.4.5-.4h2.8c.2 0 .4.1.5.4l2.7 9a.5.5 0 0 1-.5.6h-.8a.5.5 0 0 1-.4-.4l-.7-2.2c0-.3-.3-.4-.5-.4h-3.4c-.2 0-.4.1-.5.4l-.7 2.2c0 .3-.2.4-.4.4zm2.6-7.6l-.6 2a.5.5 0 0 0 .5.6h1.6a.5.5 0 0 0 .5-.6l-.6-2c0-.3-.3-.4-.5-.4h-.4c-.2 0-.4.1-.5.4z"></path>
                                        </g>
                                      </svg>
                                    </span>
                                  </span>
                                  <span
                                    role="presentation"
                                    tabIndex={-1}
                                    className="tox-tbtn tox-split-button__chevron"
                                  >
                                    <svg width={10} height={10}>
                                      <path
                                        d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                        fillRule="nonzero"
                                      />
                                    </svg>
                                  </span>
                                  <span
                                    aria-hidden="true"
                                    style={{ display: "none" }}
                                    id="aria_3966230681751698771625333"
                                  >
                                    To open the popup, press Shift+Enter
                                  </span>
                                </div>
                                <div
                                  aria-pressed="false"
                                  aria-label="Background color"
                                  title="Background color"
                                  role="button"
                                  aria-haspopup="true"
                                  tabIndex={-1}
                                  className="tox-split-button"
                                  aria-expanded="false"
                                  aria-describedby="aria_5631118311771698771625333"
                                >
                                  <span
                                    role="presentation"
                                    tabIndex={-1}
                                    className="tox-tbtn"
                                  >
                                    <span className="tox-icon tox-tbtn__icon-wrap">
                                      <svg width={24} height={24}>
                                        <g fillRule="evenodd">
                                          <path
                                            id="tox-icon-highlight-bg-color__color"
                                            d="M3 18h18v3H3z"
                                          />
                                          <path
                                            fillRule="nonzero"
                                            d="M7.7 16.7H3l3.3-3.3-.7-.8L10.2 8l4 4.1-4 4.2c-.2.2-.6.2-.8 0l-.6-.7-1.1 1.1zm5-7.5L11 7.4l3-2.9a2 2 0 0 1 2.6 0L18 6c.7.7.7 2 0 2.7l-2.9 2.9-1.8-1.8-.5-.6"
                                          ></path>
                                        </g>
                                      </svg>
                                    </span>
                                  </span>
                                  <span
                                    role="presentation"
                                    tabIndex={-1}
                                    className="tox-tbtn tox-split-button__chevron"
                                  >
                                    <svg width={10} height={10}>
                                      <path
                                        d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                        fillRule="nonzero"
                                      />
                                    </svg>
                                  </span>
                                  <span
                                    aria-hidden="true"
                                    style={{ display: "none" }}
                                    id="aria_5631118311771698771625333"
                                  >
                                    To open the popup, press Shift+Enter
                                  </span>
                                </div>
                              </div>
                              <div
                                title=""
                                role="toolbar"
                                data-alloy-tabstop="true"
                                tabIndex={-1}
                                className="tox-toolbar__group"
                              >
                                <button
                                  aria-label="Insert/edit link"
                                  title="Insert/edit link"
                                  type="button"
                                  tabIndex={-1}
                                  className="tox-tbtn"
                                  aria-pressed="false"
                                >
                                  <span className="tox-icon tox-tbtn__icon-wrap">
                                    <svg width={24} height={24}>
                                      <path
                                        d="M6.2 12.3a1 1 0 0 1 1.4 1.4l-2.1 2a2 2 0 1 0 2.7 2.8l4.8-4.8a1 1 0 0 0 0-1.4 1 1 0 1 1 1.4-1.3 2.9 2.9 0 0 1 0 4L9.6 20a3.9 3.9 0 0 1-5.5-5.5l2-2zm11.6-.6a1 1 0 0 1-1.4-1.4l2-2a2 2 0 1 0-2.6-2.8L11 10.3a1 1 0 0 0 0 1.4A1 1 0 1 1 9.6 13a2.9 2.9 0 0 1 0-4L14.4 4a3.9 3.9 0 0 1 5.5 5.5l-2 2z"
                                        fillRule="nonzero"
                                      />
                                    </svg>
                                  </span>
                                </button>
                                <button
                                  aria-label="Insert/edit image"
                                  title="Insert/edit image"
                                  type="button"
                                  tabIndex={-1}
                                  className="tox-tbtn"
                                  aria-pressed="false"
                                >
                                  <span className="tox-icon tox-tbtn__icon-wrap">
                                    <svg width={24} height={24}>
                                      <path
                                        d="M5 15.7l3.3-3.2c.3-.3.7-.3 1 0L12 15l4.1-4c.3-.4.8-.4 1 0l2 1.9V5H5v10.7zM5 18V19h3l2.8-2.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1zm6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                        fillRule="nonzero"
                                      />
                                    </svg>
                                  </span>
                                </button>
                                <button
                                  aria-label="Insert/edit media"
                                  title="Insert/edit media"
                                  type="button"
                                  tabIndex={-1}
                                  className="tox-tbtn"
                                  aria-pressed="false"
                                >
                                  <span className="tox-icon tox-tbtn__icon-wrap">
                                    <svg width={24} height={24}>
                                      <path
                                        d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1zm1 2v14h14V5H5zm4.8 2.6l5.6 4a.5.5 0 0 1 0 .8l-5.6 4A.5.5 0 0 1 9 16V8a.5.5 0 0 1 .8-.4z"
                                        fillRule="nonzero"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </div>
                              <div
                                title=""
                                role="toolbar"
                                data-alloy-tabstop="true"
                                tabIndex={-1}
                                className="tox-toolbar__group"
                              >
                                <button
                                  aria-label="Align left"
                                  title="Align left"
                                  type="button"
                                  tabIndex={-1}
                                  className="tox-tbtn"
                                  aria-pressed="false"
                                >
                                  <span className="tox-icon tox-tbtn__icon-wrap">
                                    <svg width={24} height={24}>
                                      <path
                                        d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z"
                                        fillRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </button>
                                <button
                                  aria-label="Align center"
                                  title="Align center"
                                  type="button"
                                  tabIndex={-1}
                                  className="tox-tbtn"
                                  aria-pressed="false"
                                >
                                  <span className="tox-icon tox-tbtn__icon-wrap">
                                    <svg width={24} height={24}>
                                      <path
                                        d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 1 1 0-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z"
                                        fillRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </button>
                                <button
                                  aria-label="Align right"
                                  title="Align right"
                                  type="button"
                                  tabIndex={-1}
                                  className="tox-tbtn"
                                  aria-pressed="false"
                                >
                                  <span className="tox-icon tox-tbtn__icon-wrap">
                                    <svg width={24} height={24}>
                                      <path
                                        d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm6 4h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm-6-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z"
                                        fillRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </button>
                                <button
                                  aria-label="Justify"
                                  title="Justify"
                                  type="button"
                                  tabIndex={-1}
                                  className="tox-tbtn"
                                  aria-pressed="false"
                                >
                                  <span className="tox-icon tox-tbtn__icon-wrap">
                                    <svg width={24} height={24}>
                                      <path
                                        d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z"
                                        fillRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </div>
                              <div
                                title=""
                                role="toolbar"
                                data-alloy-tabstop="true"
                                tabIndex={-1}
                                className="tox-toolbar__group"
                              >
                                <div
                                  aria-pressed="false"
                                  aria-label="Numbered list"
                                  title="Numbered list"
                                  role="button"
                                  aria-haspopup="true"
                                  tabIndex={-1}
                                  className="tox-split-button"
                                  aria-expanded="false"
                                  aria-describedby="aria_7742709991791698771625338"
                                >
                                  <span
                                    role="presentation"
                                    tabIndex={-1}
                                    className="tox-tbtn"
                                  >
                                    <span className="tox-icon tox-tbtn__icon-wrap">
                                      <svg width={24} height={24}>
                                        <path
                                          d="M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 1 1 0-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 0 1-.5-.5V5h-.5a.5.5 0 0 1 0-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 0 1-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 0 0-.2-.2H4.5a.5.5 0 0 1-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 0 1 0-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 1 1 0-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 1 1 0-1H6c.6 0 1 .4 1 1z"
                                          fillRule="evenodd"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                  <span
                                    role="presentation"
                                    tabIndex={-1}
                                    className="tox-tbtn tox-split-button__chevron"
                                  >
                                    <svg width={10} height={10}>
                                      <path
                                        d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                        fillRule="nonzero"
                                      />
                                    </svg>
                                  </span>
                                  <span
                                    aria-hidden="true"
                                    style={{ display: "none" }}
                                    id="aria_7742709991791698771625338"
                                  >
                                    To open the popup, press Shift+Enter
                                  </span>
                                </div>
                                <div
                                  aria-pressed="false"
                                  aria-label="Bullet list"
                                  title="Bullet list"
                                  role="button"
                                  aria-haspopup="true"
                                  tabIndex={-1}
                                  className="tox-split-button"
                                  aria-expanded="false"
                                  aria-describedby="aria_9304205481811698771625340"
                                >
                                  <span
                                    role="presentation"
                                    tabIndex={-1}
                                    className="tox-tbtn"
                                  >
                                    <span className="tox-icon tox-tbtn__icon-wrap">
                                      <svg width={24} height={24}>
                                        <path
                                          d="M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z"
                                          fillRule="evenodd"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                  <span
                                    role="presentation"
                                    tabIndex={-1}
                                    className="tox-tbtn tox-split-button__chevron"
                                  >
                                    <svg width={10} height={10}>
                                      <path
                                        d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                                        fillRule="nonzero"
                                      />
                                    </svg>
                                  </span>
                                  <span
                                    aria-hidden="true"
                                    style={{ display: "none" }}
                                    id="aria_9304205481811698771625340"
                                  >
                                    To open the popup, press Shift+Enter
                                  </span>
                                </div>
                                <button
                                  aria-label="Decrease indent"
                                  title="Decrease indent"
                                  type="button"
                                  tabIndex={-1}
                                  className="tox-tbtn"
                                >
                                  <span className="tox-icon tox-tbtn__icon-wrap">
                                    <svg width={24} height={24}>
                                      <path
                                        d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 1 1 0-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2zm-5 4h12a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zm1.6-3.8a1 1 0 0 1-1.2 1.6l-3-2a1 1 0 0 1 0-1.6l3-2a1 1 0 0 1 1.2 1.6L6.8 12l1.8 1.2z"
                                        fillRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </button>
                                <button
                                  aria-label="Increase indent"
                                  title="Increase indent"
                                  type="button"
                                  tabIndex={-1}
                                  className="tox-tbtn"
                                >
                                  <span className="tox-icon tox-tbtn__icon-wrap">
                                    <svg width={24} height={24}>
                                      <path
                                        d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 1 1 0-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2zm-5 4h12a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zm-2.6-3.8L6.2 12l-1.8-1.2a1 1 0 0 1 1.2-1.6l3 2a1 1 0 0 1 0 1.6l-3 2a1 1 0 1 1-1.2-1.6z"
                                        fillRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </div>
                              <div
                                title=""
                                role="toolbar"
                                data-alloy-tabstop="true"
                                tabIndex={-1}
                                className="tox-toolbar__group"
                              >
                                <button
                                  aria-label="Page break"
                                  title="Page break"
                                  type="button"
                                  tabIndex={-1}
                                  className="tox-tbtn"
                                >
                                  <span className="tox-icon tox-tbtn__icon-wrap">
                                    <svg width={24} height={24}>
                                      <g fillRule="evenodd">
                                        <path d="M5 11c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zm3 0h1c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2zm4 0c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zm3 0h1c.6 0 1 .4 1 1s-.4 1-1 1h-1a1 1 0 0 1 0-2zm4 0c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zM7 3v5h10V3c0-.6.4-1 1-1s1 .4 1 1v7H5V3c0-.6.4-1 1-1s1 .4 1 1zM6 22a1 1 0 0 1-1-1v-7h14v7c0 .6-.4 1-1 1a1 1 0 0 1-1-1v-5H7v5c0 .6-.4 1-1 1z"></path>
                                      </g>
                                    </svg>
                                  </span>
                                </button>
                                <button
                                  aria-label="Insert/edit code sample"
                                  title="Insert/edit code sample"
                                  type="button"
                                  tabIndex={-1}
                                  className="tox-tbtn"
                                  aria-pressed="false"
                                >
                                  <span className="tox-icon tox-tbtn__icon-wrap">
                                    <svg width={24} height={26}>
                                      <path
                                        d="M7.1 11a2.8 2.8 0 0 1-.8 2 2.8 2.8 0 0 1 .8 2v1.7c0 .3.1.6.4.8.2.3.5.4.8.4.3 0 .4.2.4.4v.8c0 .2-.1.4-.4.4-.7 0-1.4-.3-2-.8-.5-.6-.8-1.3-.8-2V15c0-.3-.1-.6-.4-.8-.2-.3-.5-.4-.8-.4a.4.4 0 0 1-.4-.4v-.8c0-.2.2-.4.4-.4.3 0 .6-.1.8-.4.3-.2.4-.5.4-.8V9.3c0-.7.3-1.4.8-2 .6-.5 1.3-.8 2-.8.3 0 .4.2.4.4v.8c0 .2-.1.4-.4.4-.3 0-.6.1-.8.4-.3.2-.4.5-.4.8V11zm9.8 0V9.3c0-.3-.1-.6-.4-.8-.2-.3-.5-.4-.8-.4a.4.4 0 0 1-.4-.4V7c0-.2.1-.4.4-.4.7 0 1.4.3 2 .8.5.6.8 1.3.8 2V11c0 .3.1.6.4.8.2.3.5.4.8.4.2 0 .4.2.4.4v.8c0 .2-.2.4-.4.4-.3 0-.6.1-.8.4-.3.2-.4.5-.4.8v1.7c0 .7-.3 1.4-.8 2-.6.5-1.3.8-2 .8a.4.4 0 0 1-.4-.4v-.8c0-.2.1-.4.4-.4.3 0 .6-.1.8-.4.3-.2.4-.5.4-.8V15a2.8 2.8 0 0 1 .8-2 2.8 2.8 0 0 1-.8-2zm-3.3-.4c0 .4-.1.8-.5 1.1-.3.3-.7.5-1.1.5-.4 0-.8-.2-1.1-.5-.4-.3-.5-.7-.5-1.1 0-.5.1-.9.5-1.2.3-.3.7-.4 1.1-.4.4 0 .8.1 1.1.4.4.3.5.7.5 1.2zM12 13c.4 0 .8.1 1.1.5.4.3.5.7.5 1.1 0 1-.1 1.6-.5 2a3 3 0 0 1-1.1 1c-.4.3-.8.4-1.1.4a.5.5 0 0 1-.5-.5V17a3 3 0 0 0 1-.2l.6-.6c-.6 0-1-.2-1.3-.5-.2-.3-.3-.7-.3-1 0-.5.1-1 .5-1.2.3-.4.7-.5 1.1-.5z"
                                        fillRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </button>
                                <button
                                  aria-label="Source code"
                                  title="Source code"
                                  type="button"
                                  tabIndex={-1}
                                  className="tox-tbtn"
                                >
                                  <span className="tox-icon tox-tbtn__icon-wrap">
                                    <svg width={24} height={24}>
                                      <g fillRule="nonzero">
                                        <path d="M9.8 15.7c.3.3.3.8 0 1-.3.4-.9.4-1.2 0l-4.4-4.1a.8.8 0 0 1 0-1.2l4.4-4.2c.3-.3.9-.3 1.2 0 .3.3.3.8 0 1.1L6 12l3.8 3.7zM14.2 15.7c-.3.3-.3.8 0 1 .4.4.9.4 1.2 0l4.4-4.1c.3-.3.3-.9 0-1.2l-4.4-4.2a.8.8 0 0 0-1.2 0c-.3.3-.3.8 0 1.1L18 12l-3.8 3.7z"></path>
                                      </g>
                                    </svg>
                                  </span>
                                </button>
                              </div>
                              <div
                                title=""
                                role="toolbar"
                                data-alloy-tabstop="true"
                                tabIndex={-1}
                                className="tox-toolbar__group"
                              >
                                <button
                                  aria-label="Clear formatting"
                                  title="Clear formatting"
                                  type="button"
                                  tabIndex={-1}
                                  className="tox-tbtn"
                                >
                                  <span className="tox-icon tox-tbtn__icon-wrap">
                                    <svg width={24} height={24}>
                                      <path
                                        d="M13.2 6a1 1 0 0 1 0 .2l-2.6 10a1 1 0 0 1-1 .8h-.2a.8.8 0 0 1-.8-1l2.6-10H8a1 1 0 1 1 0-2h9a1 1 0 0 1 0 2h-3.8zM5 18h7a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm13 1.5L16.5 18 15 19.5a.7.7 0 0 1-1-1l1.5-1.5-1.5-1.5a.7.7 0 0 1 1-1l1.5 1.5 1.5-1.5a.7.7 0 0 1 1 1L17.5 17l1.5 1.5a.7.7 0 0 1-1 1z"
                                        fillRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="tox-anchorbar" />
                          <div className="tox-sidebar-wrap">
                            <div className="tox-edit-area">
                              <iframe
                                id="LrJkuUXsXz_ifr"
                                frameBorder={0}
                                allowTransparency="true"
                                title="Rich Text Area. Press ALT-0 for help."
                                className="tox-edit-area__iframe"
                                src="index_1.html"
                              />
                            </div>
                            <div role="complementary" className="tox-sidebar">
                              <div
                                data-alloy-tabstop="true"
                                tabIndex={-1}
                                className="tox-sidebar__slider tox-sidebar--sliding-closed"
                                style={{ width: 0 }}
                              >
                                <div className="tox-sidebar__pane-container" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tox-statusbar">
                          <div className="tox-statusbar__text-container">
                            <div
                              role="navigation"
                              data-alloy-tabstop="true"
                              className="tox-statusbar__path"
                            />
                            <button
                              type="button"
                              data-alloy-tabstop="true"
                              tabIndex={-1}
                              className="tox-statusbar__wordcount"
                            >
                              0 words
                            </button>
                            <span className="tox-statusbar__branding">
                              <a
                                href="https://www.tiny.cloud/?utm_campaign=editor_referral&utm_medium=poweredby&utm_source=tinymce&utm_content=v5"
                                rel="noopener"
                                target="_blank"
                                tabIndex={-1}
                                aria-label="Powered by Tiny"
                              >
                                Powered by Tiny
                              </a>
                            </span>
                          </div>
                          <div
                            title="Resize"
                            className="tox-statusbar__resize-handle"
                          >
                            <svg width={10} height={10}>
                              <g fillRule="nonzero">
                                <path d="M8.1 1.1A.5.5 0 1 1 9 2l-7 7A.5.5 0 1 1 1 8l7-7zM8.1 5.1A.5.5 0 1 1 9 6l-3 3A.5.5 0 1 1 5 8l3-3z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="tox-throbber"
                          style={{ display: "none" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group form-index-hide">
                    <label className="control-label">Location Map</label>
                    <div className="control-map-group">
                      <div
                        id="map_content"
                        style={{ position: "relative", overflow: "hidden" }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            backgroundColor: "rgb(229, 227, 223)"
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              zIndex: 0,
                              left: 0,
                              top: 0,
                              height: "100%",
                              width: "100%",
                              padding: 0,
                              borderWidth: 0,
                              margin: 0
                            }}
                            className="gm-style"
                          >
                            <div>
                              <button
                                style={{
                                  background: "transparent",
                                  display: "block",
                                  border: "medium",
                                  margin: 0,
                                  padding: 0,
                                  textTransform: "none",
                                  appearance: "none",
                                  position: "absolute",
                                  cursor: "pointer",
                                  userSelect: "none",
                                  zIndex: 1000002,
                                  outlineOffset: 3,
                                  right: 0,
                                  bottom: 0,
                                  transform: "translateX(100%)"
                                }}
                                draggable="false"
                                aria-label="Keyboard shortcuts"
                                title="Keyboard shortcuts"
                                type="button"
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                zIndex: 0,
                                left: 0,
                                top: 0,
                                height: "100%",
                                width: "100%",
                                padding: 0,
                                borderWidth: 0,
                                margin: 0,
                                cursor: 'url("openhand_8_8.cur.bmp"), default',
                                touchAction: "pan-x pan-y"
                              }}
                              tabIndex={0}
                              aria-label="Map"
                              aria-roledescription="map"
                              role="region"
                              aria-describedby="95714DED-FDA6-49BF-BEF2-94CA37A20FBE"
                            >
                              <div
                                style={{
                                  zIndex: 1,
                                  position: "absolute",
                                  left: "50%",
                                  top: "50%",
                                  width: "100%",
                                  willChange: "transform",
                                  transform: "translate(0px)"
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    zIndex: 100,
                                    width: "100%"
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      left: 0,
                                      top: 0,
                                      zIndex: 0
                                    }}
                                  >
                                    <div
                                      style={{
                                        position: "absolute",
                                        zIndex: 992,
                                        transform:
                                          "matrix(1, 0, 0, 1, -240, -33)"
                                      }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          left: 256,
                                          top: 0,
                                          width: 256,
                                          height: 256
                                        }}
                                      >
                                        <div
                                          style={{ width: 256, height: 256 }}
                                        ></div>
                                      </div>
                                      <div
                                        style={{
                                          position: "absolute",
                                          left: 0,
                                          top: 0,
                                          width: 256,
                                          height: 256
                                        }}
                                      >
                                        <div
                                          style={{ width: 256, height: 256 }}
                                        ></div>
                                      </div>
                                      <div
                                        style={{
                                          position: "absolute",
                                          left: 0,
                                          top: "-256px",
                                          width: 256,
                                          height: 256
                                        }}
                                      >
                                        <div
                                          style={{ width: 256, height: 256 }}
                                        ></div>
                                      </div>
                                      <div
                                        style={{
                                          position: "absolute",
                                          left: 256,
                                          top: "-256px",
                                          width: 256,
                                          height: 256
                                        }}
                                      >
                                        <div
                                          style={{ width: 256, height: 256 }}
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    zIndex: 101,
                                    width: "100%"
                                  }}
                                ></div>
                                <div
                                  style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    zIndex: 102,
                                    width: "100%"
                                  }}
                                ></div>
                                <div
                                  style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    zIndex: 103,
                                    width: "100%"
                                  }}
                                ></div>
                                <div
                                  style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    zIndex: 0
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      zIndex: 992,
                                      transform: "matrix(1, 0, 0, 1, -240, -33)"
                                    }}
                                  >
                                    <div
                                      style={{
                                        position: "absolute",
                                        left: 256,
                                        top: 0,
                                        width: 256,
                                        height: 256,
                                        transition: "opacity 200ms linear 0s"
                                      }}
                                    >
                                      <img
                                        style={{
                                          width: 256,
                                          height: 256,
                                          userSelect: "none",
                                          border: 0,
                                          padding: 0,
                                          margin: 0,
                                          maxWidth: "none"
                                        }}
                                        draggable="false"
                                        alt=""
                                        role="presentation"
                                        src="vt-2.png"
                                      />
                                    </div>
                                    <div
                                      style={{
                                        position: "absolute",
                                        left: 0,
                                        top: "-256px",
                                        width: 256,
                                        height: 256,
                                        transition: "opacity 200ms linear 0s"
                                      }}
                                    >
                                      <img
                                        style={{
                                          width: 256,
                                          height: 256,
                                          userSelect: "none",
                                          border: 0,
                                          padding: 0,
                                          margin: 0,
                                          maxWidth: "none"
                                        }}
                                        draggable="false"
                                        alt=""
                                        role="presentation"
                                        src="vt-3.png"
                                      />
                                    </div>
                                    <div
                                      style={{
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        width: 256,
                                        height: 256,
                                        transition: "opacity 200ms linear 0s"
                                      }}
                                    >
                                      <img
                                        style={{
                                          width: 256,
                                          height: 256,
                                          userSelect: "none",
                                          border: 0,
                                          padding: 0,
                                          margin: 0,
                                          maxWidth: "none"
                                        }}
                                        draggable="false"
                                        alt=""
                                        role="presentation"
                                        src="vt-1.png"
                                      />
                                    </div>
                                    <div
                                      style={{
                                        position: "absolute",
                                        left: 256,
                                        top: "-256px",
                                        width: 256,
                                        height: 256,
                                        transition: "opacity 200ms linear 0s"
                                      }}
                                    >
                                      <img
                                        style={{
                                          width: 256,
                                          height: 256,
                                          userSelect: "none",
                                          border: 0,
                                          padding: 0,
                                          margin: 0,
                                          maxWidth: "none"
                                        }}
                                        draggable="false"
                                        alt=""
                                        role="presentation"
                                        src="vt.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  zIndex: 3,
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  padding: 0,
                                  borderWidth: 0,
                                  margin: 0,
                                  left: 0,
                                  top: 0,
                                  touchAction: "pan-x pan-y"
                                }}
                              >
                                <div
                                  style={{
                                    zIndex: 4,
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    width: "100%",
                                    willChange: "transform",
                                    transform: "translate(0px)"
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      left: 0,
                                      top: 0,
                                      zIndex: 104,
                                      width: "100%"
                                    }}
                                  ></div>
                                  <div
                                    style={{
                                      position: "absolute",
                                      left: 0,
                                      top: 0,
                                      zIndex: 105,
                                      width: "100%"
                                    }}
                                  ></div>
                                  <div
                                    style={{
                                      position: "absolute",
                                      left: 0,
                                      top: 0,
                                      zIndex: 106,
                                      width: "100%"
                                    }}
                                  >
                                    <span
                                      id="FD981976-71F1-445C-944C-2F0DDAA491CF"
                                      style={{ display: "none" }}
                                    >
                                      To navigate, press the arrow keys.
                                    </span>
                                  </div>
                                  <div
                                    style={{
                                      position: "absolute",
                                      left: 0,
                                      top: 0,
                                      zIndex: 107,
                                      width: "100%"
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div
                                style={{
                                  zIndex: 4,
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  padding: 0,
                                  borderWidth: 0,
                                  margin: 0,
                                  left: 0,
                                  top: 0,
                                  opacity: 0
                                }}
                                className="gm-style-moc"
                              >
                                <p className="gm-style-mot" />
                              </div>
                              <div
                                className="LGLeeN-keyboard-shortcuts-view"
                                id="95714DED-FDA6-49BF-BEF2-94CA37A20FBE"
                                style={{ display: "none" }}
                              >
                                <table>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <kbd aria-label="Left arrow">←</kbd>
                                      </td>
                                      <td aria-label="Move left.">Move left</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <kbd aria-label="Right arrow">→</kbd>
                                      </td>
                                      <td aria-label="Move right.">
                                        Move right
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <kbd aria-label="Up arrow">↑</kbd>
                                      </td>
                                      <td aria-label="Move up.">Move up</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <kbd aria-label="Down arrow">↓</kbd>
                                      </td>
                                      <td aria-label="Move down.">Move down</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <kbd>+</kbd>
                                      </td>
                                      <td aria-label="Zoom in.">Zoom in</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <kbd>-</kbd>
                                      </td>
                                      <td aria-label="Zoom out.">Zoom out</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <kbd>Home</kbd>
                                      </td>
                                      <td aria-label="Jump left by 75%.">
                                        Jump left by 75%
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <kbd>End</kbd>
                                      </td>
                                      <td aria-label="Jump right by 75%.">
                                        Jump right by 75%
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <kbd>Page Up</kbd>
                                      </td>
                                      <td aria-label="Jump up by 75%.">
                                        Jump up by 75%
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <kbd>Page Down</kbd>
                                      </td>
                                      <td aria-label="Jump down by 75%.">
                                        Jump down by 75%
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <iframe
                              aria-hidden="true"
                              frameBorder={0}
                              tabIndex={-1}
                              style={{
                                zIndex: -1,
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                border: "medium"
                              }}
                              src="index_2.html"
                            />
                            <div
                              style={{
                                pointerEvents: "none",
                                width: "100%",
                                height: "100%",
                                boxSizing: "border-box",
                                position: "absolute",
                                zIndex: 1000002,
                                opacity: 0,
                                border: "2px solid rgb(26, 115, 232)"
                              }}
                            ></div>
                            <div />
                            <div />
                            <div />
                            <div />
                            <div>
                              <button
                                style={{
                                  background: "rgb(255, 255, 255)",
                                  border: 0,
                                  margin: 10,
                                  padding: 0,
                                  textTransform: "none",
                                  appearance: "none",
                                  position: "absolute",
                                  cursor: "pointer",
                                  userSelect: "none",
                                  borderRadius: 2,
                                  height: 40,
                                  width: 40,
                                  boxShadow:
                                    "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                                  overflow: "hidden",
                                  top: 0,
                                  right: 0
                                }}
                                draggable="false"
                                aria-label="Toggle fullscreen view"
                                title="Toggle fullscreen view"
                                type="button"
                                aria-pressed="false"
                                className="gm-control-active gm-fullscreen-control"
                              >
                                <img
                                  style={{ height: 18, width: 18 }}
                                  src="9a91c387b5af040ea1593997527c91f31258aa77.svg"
                                  alt=""
                                />
                                <img
                                  style={{ height: 18, width: 18 }}
                                  src="b53688f60120f534170affcfbc23e428486f4ea8.svg"
                                  alt=""
                                />
                                <img
                                  style={{ height: 18, width: 18 }}
                                  src="189c8a97bb5c749b49fa5d7993f04882e023fafd.svg"
                                  alt=""
                                />
                              </button>
                            </div>
                            <div />
                            <div />
                            <div />
                            <div />
                            <div>
                              <div
                                className="gmnoprint gm-bundled-control gm-bundled-control-on-bottom"
                                style={{
                                  margin: 10,
                                  userSelect: "none",
                                  position: "absolute",
                                  bottom: 127,
                                  right: 40
                                }}
                                draggable="false"
                                data-control-width={40}
                                data-control-height={113}
                              >
                                <div
                                  className="gmnoprint"
                                  data-control-width={40}
                                  data-control-height={40}
                                  style={{
                                    display: "none",
                                    position: "absolute"
                                  }}
                                >
                                  <div
                                    style={{
                                      backgroundColor: "rgb(255, 255, 255)",
                                      boxShadow:
                                        "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                                      borderRadius: 2,
                                      width: 40,
                                      height: 40
                                    }}
                                  >
                                    <button
                                      style={{
                                        background: "none",
                                        display: "none",
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                        textTransform: "none",
                                        appearance: "none",
                                        position: "relative",
                                        cursor: "pointer",
                                        userSelect: "none",
                                        left: 0,
                                        top: 0,
                                        overflow: "hidden",
                                        width: 40,
                                        height: 40
                                      }}
                                      draggable="false"
                                      aria-label="Rotate map clockwise"
                                      title="Rotate map clockwise"
                                      type="button"
                                      className="gm-control-active"
                                    >
                                      <img
                                        alt=""
                                        style={{ width: 20, height: 20 }}
                                        src="307727718a094e1c7b841513e78f7308f7fb0ca9.svg"
                                      />
                                      <img
                                        alt=""
                                        style={{ width: 20, height: 20 }}
                                        src="093a96f5d960fb8f6f8a2d37b327b23e054e76c1.svg"
                                      />
                                      <img
                                        alt=""
                                        style={{ width: 20, height: 20 }}
                                        src="33ea66baf74e8030f166bf2e9ff6168b77793d53.svg"
                                      />
                                    </button>
                                    <div
                                      style={{
                                        position: "relative",
                                        overflow: "hidden",
                                        width: 30,
                                        height: 1,
                                        margin: "0px 5px",
                                        backgroundColor: "rgb(230, 230, 230)",
                                        display: "none"
                                      }}
                                    ></div>
                                    <button
                                      style={{
                                        background: "none",
                                        display: "none",
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                        textTransform: "none",
                                        appearance: "none",
                                        position: "relative",
                                        cursor: "pointer",
                                        userSelect: "none",
                                        left: 0,
                                        top: 0,
                                        overflow: "hidden",
                                        width: 40,
                                        height: 40,
                                        transform: "scaleX(-1)"
                                      }}
                                      draggable="false"
                                      aria-label="Rotate map counterclockwise"
                                      title="Rotate map counterclockwise"
                                      type="button"
                                      className="gm-control-active"
                                    >
                                      <img
                                        alt=""
                                        style={{ width: 20, height: 20 }}
                                        src="307727718a094e1c7b841513e78f7308f7fb0ca9.svg"
                                      />
                                      <img
                                        alt=""
                                        style={{ width: 20, height: 20 }}
                                        src="093a96f5d960fb8f6f8a2d37b327b23e054e76c1.svg"
                                      />
                                      <img
                                        alt=""
                                        style={{ width: 20, height: 20 }}
                                        src="33ea66baf74e8030f166bf2e9ff6168b77793d53.svg"
                                      />
                                    </button>
                                    <div
                                      style={{
                                        position: "relative",
                                        overflow: "hidden",
                                        width: 30,
                                        height: 1,
                                        margin: "0px 5px",
                                        backgroundColor: "rgb(230, 230, 230)",
                                        display: "none"
                                      }}
                                    ></div>
                                    <button
                                      style={{
                                        background: "none",
                                        display: "block",
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                        textTransform: "none",
                                        appearance: "none",
                                        position: "relative",
                                        cursor: "pointer",
                                        userSelect: "none",
                                        top: 0,
                                        left: 0,
                                        overflow: "hidden",
                                        width: 40,
                                        height: 40
                                      }}
                                      draggable="false"
                                      aria-label="Tilt map"
                                      title="Tilt map"
                                      type="button"
                                      className="gm-tilt gm-control-active"
                                    >
                                      <img
                                        alt=""
                                        style={{ width: 18 }}
                                        src="6068af43d777128e4a09c89910a6c773d522fdfa.svg"
                                      />
                                      <img
                                        alt=""
                                        style={{ width: 18 }}
                                        src="de762194f94b36483b12502229e82c357334e5e6.svg"
                                      />
                                      <img
                                        alt=""
                                        style={{ width: 18 }}
                                        src="347115e75c29fea098318edbd38c12d15c367df7.svg"
                                      />
                                    </button>
                                  </div>
                                </div>
                                <button
                                  style={{
                                    background: "none",
                                    display: "block",
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    textTransform: "none",
                                    appearance: "none",
                                    position: "absolute",
                                    cursor: "pointer",
                                    userSelect: "none",
                                    left: 20,
                                    top: 0
                                  }}
                                  draggable="false"
                                  aria-label="Drag Pegman onto the map to open Street View"
                                  title="Drag Pegman onto the map to open Street View"
                                  type="button"
                                />
                                <div
                                  className="gmnoprint"
                                  style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 32
                                  }}
                                  data-control-width={40}
                                  data-control-height={81}
                                >
                                  <div
                                    draggable="false"
                                    style={{
                                      userSelect: "none",
                                      boxShadow:
                                        "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                                      borderRadius: 2,
                                      cursor: "pointer",
                                      backgroundColor: "rgb(255, 255, 255)",
                                      width: 40,
                                      height: 81
                                    }}
                                  >
                                    <button
                                      style={{
                                        background: "none",
                                        display: "block",
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                        textTransform: "none",
                                        appearance: "none",
                                        position: "relative",
                                        cursor: "pointer",
                                        userSelect: "none",
                                        overflow: "hidden",
                                        width: 40,
                                        height: 40,
                                        top: 0,
                                        left: 0
                                      }}
                                      draggable="false"
                                      aria-label="Zoom in"
                                      title="Zoom in"
                                      type="button"
                                      className="gm-control-active"
                                    >
                                      <img
                                        style={{ height: 18, width: 18 }}
                                        src="0c03e2f68c34048f1ae9e34df0da26fe66076841.svg"
                                        alt=""
                                      />
                                      <img
                                        style={{ height: 18, width: 18 }}
                                        src="8c6ff9258dfdb8cea73e1e43ea7178f044b763b9.svg"
                                        alt=""
                                      />
                                      <img
                                        style={{ height: 18, width: 18 }}
                                        src="c561bd899f92d8ae1bb1f17039e9eb8ab93a70cb.svg"
                                        alt=""
                                      />
                                      <img
                                        style={{ height: 18, width: 18 }}
                                        src="1fc739251896417ba70206cace6922a9db2ee417.svg"
                                        alt=""
                                      />
                                    </button>
                                    <div
                                      style={{
                                        position: "relative",
                                        overflow: "hidden",
                                        width: 30,
                                        height: 1,
                                        margin: "0px 5px",
                                        backgroundColor: "rgb(230, 230, 230)",
                                        top: 0
                                      }}
                                    ></div>
                                    <button
                                      style={{
                                        background: "none",
                                        display: "block",
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                        textTransform: "none",
                                        appearance: "none",
                                        position: "relative",
                                        cursor: "pointer",
                                        userSelect: "none",
                                        overflow: "hidden",
                                        width: 40,
                                        height: 40,
                                        top: 0,
                                        left: 0
                                      }}
                                      draggable="false"
                                      aria-label="Zoom out"
                                      title="Zoom out"
                                      type="button"
                                      className="gm-control-active"
                                    >
                                      <img
                                        style={{ height: 18, width: 18 }}
                                        src="4a3b3ec33fa669d3194f454c76a772358f51e965.svg"
                                        alt=""
                                      />
                                      <img
                                        style={{ height: 18, width: 18 }}
                                        src="5008a61f6521a94969b2fc1272e595e327c3ec6d.svg"
                                        alt=""
                                      />
                                      <img
                                        style={{ height: 18, width: 18 }}
                                        src="9f9f19af37b524a87f8925b2fb9a64947306a634.svg"
                                        alt=""
                                      />
                                      <img
                                        style={{ height: 18, width: 18 }}
                                        src="a347b6be6959d719b3239e466b3e2bb38eb0115b.svg"
                                        alt=""
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div
                                style={{
                                  margin: "0px 5px",
                                  zIndex: 1000000,
                                  position: "absolute",
                                  left: 0,
                                  bottom: 0
                                }}
                              >
                                <a
                                  style={{ display: "inline" }}
                                  target="_blank"
                                  rel="noopener"
                                  title="Open this area in Google Maps (opens a new window)"
                                  aria-label="Open this area in Google Maps (opens a new window)"
                                  href="https://maps.google.com/maps?ll=51.505,-0.09&z=8&t=m&hl=en-US&gl=US&mapclient=apiv3"
                                >
                                  <div style={{ width: 66, height: 26 }}>
                                    <img
                                      style={{
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        width: 66,
                                        height: 26,
                                        userSelect: "none",
                                        border: 0,
                                        padding: 0,
                                        margin: 0
                                      }}
                                      alt="Google"
                                      src="ed2f71db67f42135bbdc7d461f84802741d6e6cf.svg"
                                      draggable="false"
                                    />
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div />
                            <div>
                              <div
                                style={{
                                  display: "inline-flex",
                                  position: "absolute",
                                  right: 0,
                                  bottom: 0
                                }}
                              >
                                <div
                                  className="gmnoprint"
                                  style={{ zIndex: 1000001 }}
                                >
                                  <div
                                    draggable="false"
                                    style={{
                                      userSelect: "none",
                                      position: "relative",
                                      height: 14,
                                      lineHeight: 14
                                    }}
                                    className="gm-style-cc"
                                  >
                                    <div
                                      style={{
                                        opacity: "0.7",
                                        width: "100%",
                                        height: "100%",
                                        position: "absolute"
                                      }}
                                    >
                                      <div style={{ width: 1 }} />
                                      <div
                                        style={{
                                          backgroundColor: "rgb(245, 245, 245)",
                                          width: "auto",
                                          height: "100%",
                                          marginLeft: 1
                                        }}
                                      ></div>
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        paddingRight: 6,
                                        paddingLeft: 6,
                                        boxSizing: "border-box",
                                        fontFamily: "Roboto, Arial, sans-serif",
                                        fontSize: 10,
                                        color: "rgb(0, 0, 0)",
                                        whiteSpace: "nowrap",
                                        direction: "ltr",
                                        textAlign: "right",
                                        verticalAlign: "middle",
                                        display: "inline-block"
                                      }}
                                    >
                                      <button
                                        style={{
                                          background: "none",
                                          display: "inline-block",
                                          border: 0,
                                          margin: 0,
                                          padding: 0,
                                          textTransform: "none",
                                          appearance: "none",
                                          position: "relative",
                                          cursor: "pointer",
                                          userSelect: "none",
                                          color: "rgb(0, 0, 0)",
                                          fontFamily: "inherit",
                                          lineHeight: "inherit"
                                        }}
                                        draggable="false"
                                        aria-label="Keyboard shortcuts"
                                        title="Keyboard shortcuts"
                                        type="button"
                                      >
                                        <img
                                          src="d1ac454413c9c8c558eccb3fbf3a33580ffae852.svg"
                                          alt=""
                                          style={{
                                            height: 9,
                                            verticalAlign: "-1px"
                                          }}
                                        />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="gmnoprint"
                                  style={{ zIndex: 1000001 }}
                                >
                                  <div
                                    draggable="false"
                                    style={{
                                      userSelect: "none",
                                      position: "relative",
                                      height: 14,
                                      lineHeight: 14
                                    }}
                                    className="gm-style-cc"
                                  >
                                    <div
                                      style={{
                                        opacity: "0.7",
                                        width: "100%",
                                        height: "100%",
                                        position: "absolute"
                                      }}
                                    >
                                      <div style={{ width: 1 }} />
                                      <div
                                        style={{
                                          backgroundColor: "rgb(245, 245, 245)",
                                          width: "auto",
                                          height: "100%",
                                          marginLeft: 1
                                        }}
                                      ></div>
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        paddingRight: 6,
                                        paddingLeft: 6,
                                        boxSizing: "border-box",
                                        fontFamily: "Roboto, Arial, sans-serif",
                                        fontSize: 10,
                                        color: "rgb(0, 0, 0)",
                                        whiteSpace: "nowrap",
                                        direction: "ltr",
                                        textAlign: "right",
                                        verticalAlign: "middle",
                                        display: "inline-block"
                                      }}
                                    >
                                      <button
                                        style={{
                                          background: "none",
                                          border: 0,
                                          margin: 0,
                                          padding: 0,
                                          textTransform: "none",
                                          appearance: "none",
                                          position: "relative",
                                          cursor: "pointer",
                                          userSelect: "none",
                                          color: "rgb(0, 0, 0)",
                                          fontFamily: "inherit",
                                          lineHeight: "inherit",
                                          display: "none"
                                        }}
                                        draggable="false"
                                        aria-label="Map Data"
                                        title="Map Data"
                                        type="button"
                                      >
                                        Map Data
                                      </button>
                                      <span style={{}}>
                                        Map data ©2023 Google
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gmnoscreen">
                                  <div
                                    style={{
                                      fontFamily: "Roboto, Arial, sans-serif",
                                      fontSize: 11,
                                      color: "rgb(0, 0, 0)",
                                      direction: "ltr",
                                      textAlign: "right",
                                      backgroundColor: "rgb(245, 245, 245)"
                                    }}
                                  >
                                    Map data ©2023 Google
                                  </div>
                                </div>
                                <button
                                  style={{
                                    background: "none",
                                    display: "none",
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    textTransform: "none",
                                    appearance: "none",
                                    position: "relative",
                                    cursor: "pointer",
                                    userSelect: "none",
                                    height: 14,
                                    lineHeight: 14
                                  }}
                                  draggable="false"
                                  aria-label="Map Scale: 20 km per 52 pixels"
                                  title="Map Scale: 20 km per 52 pixels"
                                  type="button"
                                  className="gm-style-cc"
                                  aria-describedby="C98883D6-E3E3-420C-8524-4534037B56B1"
                                >
                                  <div
                                    style={{
                                      opacity: "0.7",
                                      width: "100%",
                                      height: "100%",
                                      position: "absolute"
                                    }}
                                  >
                                    <div style={{ width: 1 }} />
                                    <div
                                      style={{
                                        backgroundColor: "rgb(245, 245, 245)",
                                        width: "auto",
                                        height: "100%",
                                        marginLeft: 1
                                      }}
                                    ></div>
                                  </div>
                                  <div
                                    style={{
                                      position: "relative",
                                      paddingRight: 6,
                                      paddingLeft: 6,
                                      boxSizing: "border-box",
                                      fontFamily: "Roboto, Arial, sans-serif",
                                      fontSize: 10,
                                      color: "rgb(0, 0, 0)",
                                      whiteSpace: "nowrap",
                                      direction: "ltr",
                                      textAlign: "right",
                                      verticalAlign: "middle",
                                      display: "inline-block"
                                    }}
                                  >
                                    <span>20 km&nbsp;</span>
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        height: 8,
                                        bottom: "-1px",
                                        width: 56
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: "100%",
                                          height: 4,
                                          position: "absolute",
                                          left: 0,
                                          top: 0
                                        }}
                                      ></div>
                                      <div
                                        style={{
                                          width: 4,
                                          height: 8,
                                          left: 0,
                                          top: 0,
                                          backgroundColor: "rgb(255, 255, 255)"
                                        }}
                                      ></div>
                                      <div
                                        style={{
                                          width: 4,
                                          height: 8,
                                          position: "absolute",
                                          backgroundColor: "rgb(255, 255, 255)",
                                          right: 0,
                                          bottom: 0
                                        }}
                                      ></div>
                                      <div
                                        style={{
                                          position: "absolute",
                                          backgroundColor: "rgb(102, 102, 102)",
                                          height: 2,
                                          left: 1,
                                          bottom: 1,
                                          right: 1
                                        }}
                                      ></div>
                                      <div
                                        style={{
                                          position: "absolute",
                                          width: 2,
                                          height: 6,
                                          left: 1,
                                          top: 1,
                                          backgroundColor: "rgb(102, 102, 102)"
                                        }}
                                      ></div>
                                      <div
                                        style={{
                                          width: 2,
                                          height: 6,
                                          position: "absolute",
                                          backgroundColor: "rgb(102, 102, 102)",
                                          bottom: 1,
                                          right: 1
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                  <span
                                    id="C98883D6-E3E3-420C-8524-4534037B56B1"
                                    style={{ display: "none" }}
                                  >
                                    Click to toggle between metric and imperial
                                    units
                                  </span>
                                </button>
                                <div
                                  className="gmnoprint gm-style-cc"
                                  style={{
                                    zIndex: 1000001,
                                    userSelect: "none",
                                    position: "relative",
                                    height: 14,
                                    lineHeight: 14
                                  }}
                                  draggable="false"
                                >
                                  <div
                                    style={{
                                      opacity: "0.7",
                                      width: "100%",
                                      height: "100%",
                                      position: "absolute"
                                    }}
                                  >
                                    <div style={{ width: 1 }} />
                                    <div
                                      style={{
                                        backgroundColor: "rgb(245, 245, 245)",
                                        width: "auto",
                                        height: "100%",
                                        marginLeft: 1
                                      }}
                                    ></div>
                                  </div>
                                  <div
                                    style={{
                                      position: "relative",
                                      paddingRight: 6,
                                      paddingLeft: 6,
                                      boxSizing: "border-box",
                                      fontFamily: "Roboto, Arial, sans-serif",
                                      fontSize: 10,
                                      color: "rgb(0, 0, 0)",
                                      whiteSpace: "nowrap",
                                      direction: "ltr",
                                      textAlign: "right",
                                      verticalAlign: "middle",
                                      display: "inline-block"
                                    }}
                                  >
                                    <a
                                      style={{
                                        textDecoration: "none",
                                        cursor: "pointer",
                                        color: "rgb(0, 0, 0)"
                                      }}
                                      href="https://www.google.com/intl/en-US_US/help/terms_maps.html"
                                      target="_blank"
                                      rel="noopener"
                                    >
                                      Terms
                                    </a>
                                  </div>
                                </div>
                                <div
                                  draggable="false"
                                  style={{
                                    userSelect: "none",
                                    position: "relative",
                                    height: 14,
                                    lineHeight: 14
                                  }}
                                  className="gm-style-cc"
                                >
                                  <div
                                    style={{
                                      opacity: "0.7",
                                      width: "100%",
                                      height: "100%",
                                      position: "absolute"
                                    }}
                                  >
                                    <div style={{ width: 1 }} />
                                    <div
                                      style={{
                                        backgroundColor: "rgb(245, 245, 245)",
                                        width: "auto",
                                        height: "100%",
                                        marginLeft: 1
                                      }}
                                    ></div>
                                  </div>
                                  <div
                                    style={{
                                      position: "relative",
                                      paddingRight: 6,
                                      paddingLeft: 6,
                                      boxSizing: "border-box",
                                      fontFamily: "Roboto, Arial, sans-serif",
                                      fontSize: 10,
                                      color: "rgb(0, 0, 0)",
                                      whiteSpace: "nowrap",
                                      direction: "ltr",
                                      textAlign: "right",
                                      verticalAlign: "middle",
                                      display: "inline-block"
                                    }}
                                  >
                                    <a
                                      target="_blank"
                                      rel="noopener"
                                      title="Report errors in the road map or imagery to Google"
                                      dir="ltr"
                                      style={{
                                        fontFamily: "Roboto, Arial, sans-serif",
                                        fontSize: 10,
                                        color: "rgb(0, 0, 0)",
                                        textDecoration: "none",
                                        position: "relative"
                                      }}
                                      href="https://www.google.com/maps/@51.505,-0.09,8z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3"
                                    >
                                      <img
                                        src="2a41077f78ab8adc7d2173bf105fdf4d2f46afa2.svg"
                                        alt=""
                                        style={{
                                          height: 12,
                                          verticalAlign: "-2px"
                                        }}
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            backgroundColor: "white",
                            fontWeight: 500,
                            fontFamily: "Roboto, sans-serif",
                            padding: "15px 25px",
                            boxSizing: "border-box",
                            top: 5,
                            border: "1px solid rgba(0, 0, 0, 0.12)",
                            borderRadius: 5,
                            left: "50%",
                            maxWidth: 375,
                            position: "absolute",
                            transform: "translateX(-50%)",
                            width: "calc(100% - 10px)",
                            zIndex: 1
                          }}
                        >
                          <div>
                            <img
                              alt=""
                              src="google_gray.svg"
                              style={{
                                padding: 0,
                                margin: 0,
                                border: 0,
                                height: 17,
                                verticalAlign: "middle",
                                width: 52,
                                userSelect: "none"
                              }}
                              draggable="false"
                            />
                          </div>
                          <div style={{ lineHeight: 20, margin: "15px 0px" }}>
                            <span
                              style={{
                                color: "rgba(0, 0, 0, 0.87)",
                                fontSize: 14
                              }}
                            >
                              This page can't load Google Maps correctly.
                            </span>
                          </div>
                          <table style={{ width: "100%" }}>
                            <tbody>
                              <tr>
                                <td
                                  style={{
                                    lineHeight: 16,
                                    verticalAlign: "middle"
                                  }}
                                >
                                  <a
                                    href="https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js&utm_medium=degraded&utm_campaign=billing#api-key-and-billing-errors"
                                    target="_blank"
                                    rel="noopener"
                                    style={{
                                      color: "rgba(0, 0, 0, 0.54)",
                                      fontSize: 12
                                    }}
                                  >
                                    Do you own this website?
                                  </a>
                                </td>
                                <td style={{ textAlign: "right" }}>
                                  <button className="dismissButton">OK</button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="g-control d-none">
                        <div className="form-group">
                          <label>Map Lat:</label>
                          <input
                            type="text"
                            name="map_lat"
                            className="form-control"
                            defaultValue=""
                          />
                        </div>
                        <div className="form-group">
                          <label>Map Lng:</label>
                          <input
                            type="text"
                            name="map_lng"
                            className="form-control"
                            defaultValue=""
                          />
                        </div>
                        <div className="form-group">
                          <label>Map Zoom:</label>
                          <input
                            type="text"
                            name="map_zoom"
                            className="form-control"
                            defaultValue={8}
                          />
                        </div>
                      </div>
                    </div>
                    <p>
                      <i>Click onto map to place Location address</i>
                    </p>
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
            <div className="filter-div d-flex justify-content-between ">
              <div className="col-left">
                <form
                  method="post"
                  action="/admin/module/location/bulkEdit"
                  className="filter-form filter-form-left d-flex justify-content-start"
                >
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="hOLD4SrgIkm4KRIC2GNeLXVgE1yILvrMAKmlEYkg"
                  />
                  <select name="action" className="form-control">
                    <option value="" selected="selected">
                      {" "}
                      Bulk Action{" "}
                    </option>
                    <option value="publish"> Publish </option>
                    <option value="draft"> Move to Draft </option>
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
                  action="/admin/module/location"
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
            </div>
            <div className="panel">
              <div className="panel-body">
                <form action="" className="bravo-form-item">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th width="60px">
                          <input type="checkbox" className="check-all" />
                        </th>
                        <th>Name</th>
                        <th className="slug">Slug</th>
                        <th className="status">Status</th>
                        <th className="date">Date</th>
                        <th width="100px" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            name="ids[]"
                            defaultValue={1}
                            className="check-item"
                          />
                        </td>
                        <td className="title">
                          <a href="/admin/module/location/edit/1">
                            Paris
                          </a>
                        </td>
                        <td>paris</td>
                        <td>
                          <span className="badge badge-publish">publish</span>
                        </td>
                        <td>10/19/2023</td>
                        <td>
                          <a
                            href="/admin/module/location/edit/1"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-edit" /> Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            name="ids[]"
                            defaultValue={2}
                            className="check-item"
                          />
                        </td>
                        <td className="title">
                          <a href="/admin/module/location/edit/2">
                            California
                          </a>
                        </td>
                        <td>california</td>
                        <td>
                          <span className="badge badge-publish">publish</span>
                        </td>
                        <td>10/19/2023</td>
                        <td>
                          <a
                            href="/admin/module/location/edit/2"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-edit" /> Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            name="ids[]"
                            defaultValue={3}
                            className="check-item"
                          />
                        </td>
                        <td className="title">
                          <a href="/admin/module/location/edit/3">
                            United States
                          </a>
                        </td>
                        <td>united-states</td>
                        <td>
                          <span className="badge badge-publish">publish</span>
                        </td>
                        <td>10/19/2023</td>
                        <td>
                          <a
                            href="/admin/module/location/edit/3"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-edit" /> Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            name="ids[]"
                            defaultValue={4}
                            className="check-item"
                          />
                        </td>
                        <td className="title">
                          <a href="/admin/module/location/edit/4">
                            Los Angeles
                          </a>
                        </td>
                        <td>los-angeles</td>
                        <td>
                          <span className="badge badge-publish">publish</span>
                        </td>
                        <td>10/19/2023</td>
                        <td>
                          <a
                            href="/admin/module/location/edit/4"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-edit" /> Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            name="ids[]"
                            defaultValue={5}
                            className="check-item"
                          />
                        </td>
                        <td className="title">
                          <a href="/admin/module/location/edit/5">
                            New Jersey
                          </a>
                        </td>
                        <td>new-jersey</td>
                        <td>
                          <span className="badge badge-publish">publish</span>
                        </td>
                        <td>10/19/2023</td>
                        <td>
                          <a
                            href="/admin/module/location/edit/5"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-edit" /> Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            name="ids[]"
                            defaultValue={6}
                            className="check-item"
                          />
                        </td>
                        <td className="title">
                          <a href="/admin/module/location/edit/6">
                            San Francisco
                          </a>
                        </td>
                        <td>san-francisco</td>
                        <td>
                          <span className="badge badge-publish">publish</span>
                        </td>
                        <td>10/19/2023</td>
                        <td>
                          <a
                            href="/admin/module/location/edit/6"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-edit" /> Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            name="ids[]"
                            defaultValue={7}
                            className="check-item"
                          />
                        </td>
                        <td className="title">
                          <a href="/admin/module/location/edit/7">
                            Virginia
                          </a>
                        </td>
                        <td>virginia</td>
                        <td>
                          <span className="badge badge-publish">publish</span>
                        </td>
                        <td>10/19/2023</td>
                        <td>
                          <a
                            href="/admin/module/location/edit/7"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-edit" /> Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            name="ids[]"
                            defaultValue={8}
                            className="check-item"
                          />
                        </td>
                        <td className="title">
                          <a href="/admin/module/location/edit/8">
                            Germany
                          </a>
                        </td>
                        <td>germany</td>
                        <td>
                          <span className="badge badge-publish">publish</span>
                        </td>
                        <td>10/19/2023</td>
                        <td>
                          <a
                            href="/admin/module/location/edit/8"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-edit" /> Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            name="ids[]"
                            defaultValue={9}
                            className="check-item"
                          />
                        </td>
                        <td className="title">
                          <a href="/admin/module/location/edit/9">
                            New York
                          </a>
                        </td>
                        <td>new-york</td>
                        <td>
                          <span className="badge badge-publish">publish</span>
                        </td>
                        <td>10/19/2023</td>
                        <td>
                          <a
                            href="/admin/module/location/edit/9"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-edit" /> Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            name="ids[]"
                            defaultValue={10}
                            className="check-item"
                          />
                        </td>
                        <td className="title">
                          <a href="/admin/module/location/edit/10">
                            London
                          </a>
                        </td>
                        <td>london</td>
                        <td>
                          <span className="badge badge-publish">publish</span>
                        </td>
                        <td>10/19/2023</td>
                        <td>
                          <a
                            href="/admin/module/location/edit/10"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-edit" /> Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            name="ids[]"
                            defaultValue={11}
                            className="check-item"
                          />
                        </td>
                        <td className="title">
                          <a href="/admin/module/location/edit/11">
                            Barcelona
                          </a>
                        </td>
                        <td>barcelona</td>
                        <td>
                          <span className="badge badge-publish">publish</span>
                        </td>
                        <td>10/19/2023</td>
                        <td>
                          <a
                            href="/admin/module/location/edit/11"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-edit" /> Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            name="ids[]"
                            defaultValue={12}
                            className="check-item"
                          />
                        </td>
                        <td className="title">
                          <a href="/admin/module/location/edit/12">
                            Sydney
                          </a>
                        </td>
                        <td>sydney</td>
                        <td>
                          <span className="badge badge-publish">publish</span>
                        </td>
                        <td>10/19/2023</td>
                        <td>
                          <a
                            href="/admin/module/location/edit/12"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-edit" /> Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            name="ids[]"
                            defaultValue={13}
                            className="check-item"
                          />
                        </td>
                        <td className="title">
                          <a href="/admin/module/location/edit/13">
                            Rome
                          </a>
                        </td>
                        <td>rome</td>
                        <td>
                          <span className="badge badge-publish">publish</span>
                        </td>
                        <td>10/19/2023</td>
                        <td>
                          <a
                            href="/admin/module/location/edit/13"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-edit" /> Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            name="ids[]"
                            defaultValue={14}
                            className="check-item"
                          />
                        </td>
                        <td className="title">
                          <a href="/admin/module/location/edit/14">
                            Reykjavik
                          </a>
                        </td>
                        <td>reykjavik</td>
                        <td>
                          <span className="badge badge-publish">publish</span>
                        </td>
                        <td>10/19/2023</td>
                        <td>
                          <a
                            href="/admin/module/location/edit/14"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-edit" /> Edit
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
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
    className="tox tox-silver-sink tox-tinymce-aux"
    style={{ position: "relative" }}
  />
  
  </div>
    </>

  );
}
