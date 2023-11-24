import React from "react";
import map from "../assets/image/icon-map.png"
import 'font-awesome/css/font-awesome.min.css';
import { Link,  } from 'react-router-dom';
import pic from "../assets/image/40.png"
import pic1 from "../assets/image/5.png"
import pic2 from "../assets/image/8.png"
import pic3 from "../assets/image/9.png"
import axios from 'axios';
import { useEffect, useState } from 'react';


import TourCard from '../components/TourCard';

import { merge } from "lodash";

export default function TourServices() {

  const [tours, setTours] = useState([]);

  useEffect(() => {
    // Fetch hotels data from your API
    axios.get('http://localhost:4000/tour').then((response) => {
      setTours(response.data);
    });
  }, []);
 
  return (
    <>
    <div className="bravo_wrap overflow-hidden" style={{marginLeft:"-60px", marginTop:"50px"}}>
     
      <div className="bravo_search bravo_search_tour">
      <section className="pt-40 pb-40 bg-light-2  bg-blue-2 ">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-center">
                  <h1 className="text-30 fw-600">Search for Tour</h1>
                </div>
                <form  className="gotrip_form_search bravo_form_search bravo_form form  form-search-all-service mainSearch bg-white px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 mt-30" method="get">
                  <input type="hidden" name="_layout" defaultValue="grid" className="has-value" />
                  <div className="field-items">
                    <div className="row w-100 m-0">
                      <div className="col-lg-4 align-self-center px-30 lg:py-20 lg:px-0">
                        <div className="searchMenu-loc js-form-dd js-liverSearch item">
                          <span className="clear-loc absolute bottom-0 text-12"><i className="icon-close" /></span>
                          <div data-x-dd-click="searchMenu-loc">
                            <h4 className="text-15 fw-500 ls-2 lh-16">Location</h4>
                            <div className="text-15 text-light-1 ls-2 lh-16   ">
                              <input type="hidden" name="location_id" className="js-search-get-id"  />
                              <input type="text" autoComplete="off" readOnly className="smart-search-location parent_text js-search js-dd-focus" placeholder="Where are you going?"  data-onload="Loading..." data-default="[{&quot;id&quot;:1,&quot;title&quot;:&quot; Paris&quot;},{&quot;id&quot;:2,&quot;title&quot;:&quot; California&quot;},{&quot;id&quot;:3,&quot;title&quot;:&quot; United States&quot;},{&quot;id&quot;:4,&quot;title&quot;:&quot; Los Angeles&quot;},{&quot;id&quot;:5,&quot;title&quot;:&quot; New Jersey&quot;},{&quot;id&quot;:6,&quot;title&quot;:&quot; San Francisco&quot;},{&quot;id&quot;:7,&quot;title&quot;:&quot; Virginia&quot;},{&quot;id&quot;:8,&quot;title&quot;:&quot; Germany&quot;},{&quot;id&quot;:9,&quot;title&quot;:&quot; New York&quot;},{&quot;id&quot;:10,&quot;title&quot;:&quot; London&quot;},{&quot;id&quot;:11,&quot;title&quot;:&quot; Barcelona&quot;},{&quot;id&quot;:12,&quot;title&quot;:&quot; Sydney&quot;},{&quot;id&quot;:13,&quot;title&quot;:&quot; Rome&quot;},{&quot;id&quot;:14,&quot;title&quot;:&quot; Reykjavik&quot;}]" />
                            </div>
                          </div>
                          <div className="searchMenu-loc__field shadow-2 js-popup-window" data-x-dd="searchMenu-loc" data-x-dd-toggle="-is-active">
                            <div className="bg-white px-30 py-30 sm:px-0 sm:py-15 rounded-4">
                              <div className="y-gap-5 js-results">
                                <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={1}>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-location-2 text-light-1 text-20 pt-4">
                                    </div>
                                    <div className="ml-10">
                                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                                        Paris</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={2}>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-location-2 text-light-1 text-20 pt-4">
                                    </div>
                                    <div className="ml-10">
                                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                                        California</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={3}>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-location-2 text-light-1 text-20 pt-4">
                                    </div>
                                    <div className="ml-10">
                                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                                        United States</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={4}>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-location-2 text-light-1 text-20 pt-4">
                                    </div>
                                    <div className="ml-10">
                                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                                        Los Angeles</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={5}>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-location-2 text-light-1 text-20 pt-4">
                                    </div>
                                    <div className="ml-10">
                                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                                        New Jersey</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={6}>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-location-2 text-light-1 text-20 pt-4">
                                    </div>
                                    <div className="ml-10">
                                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                                        San Francisco</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={7}>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-location-2 text-light-1 text-20 pt-4">
                                    </div>
                                    <div className="ml-10">
                                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                                        Virginia</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={8}>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-location-2 text-light-1 text-20 pt-4">
                                    </div>
                                    <div className="ml-10">
                                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                                        Germany</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={9}>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-location-2 text-light-1 text-20 pt-4">
                                    </div>
                                    <div className="ml-10">
                                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                                        New York</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={10}>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-location-2 text-light-1 text-20 pt-4">
                                    </div>
                                    <div className="ml-10">
                                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                                        London</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={11}>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-location-2 text-light-1 text-20 pt-4">
                                    </div>
                                    <div className="ml-10">
                                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                                        Barcelona</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={12}>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-location-2 text-light-1 text-20 pt-4">
                                    </div>
                                    <div className="ml-10">
                                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                                        Sydney</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={13}>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-location-2 text-light-1 text-20 pt-4">
                                    </div>
                                    <div className="ml-10">
                                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                                        Rome</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={14}>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-location-2 text-light-1 text-20 pt-4">
                                    </div>
                                    <div className="ml-10">
                                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                                        Reykjavik</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 align-self-center px-30 lg:py-20 lg:px-0" >
                        <div className="searchMenu-date form-date-search-hotel position-relative item">
                          <div className="date-wrapper" data-x-dd-click="searchMenu-date">
                            <h4 className="text-15 fw-500 ls-2 lh-16">From - To</h4>
                            <div className="text-14 text-light-1 ls-2 lh-16 check-in-out-render">
                              <span className="js-first-date render check-in-render">11/07/2023</span>
                              -
                              <span className="js-last-date render check-out-render">11/08/2023</span>
                            </div>
                          </div>
                          <input type="hidden" className="check-in-input has-value" defaultValue="11/07/2023" name="start" />
                          <input type="hidden" className="check-out-input has-value" defaultValue="11/08/2023" name="end" />
                          <input type="text" className="check-in-out absolute invisible has-value" name="date" defaultValue="2023-11-08 - 2023-11-08" />
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="button-item">
                    <button className="mainSearch__submit button  -dark-1 py-15 col-12 bg-blue-1 text-white w-100 rounded-4" type="submit">
                      <i className="icon-search text-20 mr-10" />
                      <span className="text-search">Search</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="layout-pt-md layout-pb-lg">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4">
             
                <form
                  action="/tour"
                  method="get"
                  className="bravo_form_filter bravo_filter lg:d-none"
                  data-x="filterPopup"
                  data-x-toggle="-is-active"
                >
                  <aside className="sidebar y-gap-40 p-4 p-lg-0">
                    <div
                      data-x-click="filterPopup"
                      className="-icon-close is_mobile pb-0"
                    >
                      <i className="icon-close" />
                    </div>
                    <div className="sidebar__item -no-border">
                      <h5 className="text-18 fw-500 mb-10">Tour Type</h5>
                      <div className="sidebar-checkbox">
                        <div className="row y-gap-10 items-center justify-between">
                          <div className="col-auto">
                            <div className="d-flex items-center">
                              <div className="form-checkbox ">
                                <input
                                  name="cat_id[]"
                                  type="checkbox"
                                  defaultValue={1}
                                  className="has-value"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check" />
                                </div>
                              </div>
                              <div className="text-15 ml-10"> Wildlife Tour</div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-15 text-light-1" />
                          </div>
                        </div>
                        <div className="row y-gap-10 items-center justify-between">
                          <div className="col-auto">
                            <div className="d-flex items-center">
                              <div className="form-checkbox ">
                                <input
                                  name="cat_id[]"
                                  type="checkbox"
                                  defaultValue={2}
                                  className="has-value"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check" />
                                </div>
                              </div>
                              <div className="text-15 ml-10"> Adventure Tour</div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-15 text-light-1" />
                          </div>
                        </div>
                        <div className="row y-gap-10 items-center justify-between">
                          <div className="col-auto">
                            <div className="d-flex items-center">
                              <div className="form-checkbox ">
                                <input
                                  name="cat_id[]"
                                  type="checkbox"
                                  defaultValue={3}
                                  className="has-value"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check" />
                                </div>
                              </div>
                              <div className="text-15 ml-10"> City Tours</div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-15 text-light-1" />
                          </div>
                        </div>
                        <div className="row y-gap-10 items-center justify-between">
                          <div className="col-auto">
                            <div className="d-flex items-center">
                              <div className="form-checkbox ">
                                <input
                                  name="cat_id[]"
                                  type="checkbox"
                                  defaultValue={4}
                                  className="has-value"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check" />
                                </div>
                              </div>
                              <div className="text-15 ml-10"> Museum Tours</div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-15 text-light-1" />
                          </div>
                        </div>
                        <div className="row y-gap-10 items-center justify-between">
                          <div className="col-auto">
                            <div className="d-flex items-center">
                              <div className="form-checkbox ">
                                <input
                                  name="cat_id[]"
                                  type="checkbox"
                                  defaultValue={5}
                                  className="has-value"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check" />
                                </div>
                              </div>
                              <div className="text-15 ml-10"> Beaches Tour</div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-15 text-light-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar__item pb-30">
                      <h5 className="text-18 fw-500 mb-10">Price</h5>
                      <div className="row x-gap-10 y-gap-30">
                        <div className="col-12">
                          <div className="js-price-searchPage">
                            <div className="text-14 fw-500" />
                            <input
                              type="hidden"
                              className="filter-price irs-hidden-input"
                              name="price_range"
                              data-symbol=" $"
                              data-min={161}
                              data-max={1690}
                              data-from={161}
                              data-to={1690}
                              readOnly=""
                              defaultValue=""
                            />
                            <div className="d-flex justify-between mb-20">
                              <div className="text-15 text-dark-1">
                                <span className="js-lower"> $161</span>-
                                <span className="js-upper"> $1690</span>
                              </div>
                            </div>
                            <div className="px-5">
                              <div className="js-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
                                <div className="noUi-base">
                                  <div className="noUi-connects">
                                    <div
                                      className="noUi-connect"
                                      style={{
                                        transform: "translate(0%) scale(1)"
                                      }}
                                    ></div>
                                  </div>
                                  <div
                                    className="noUi-origin"
                                    style={{
                                      transform: "translate(-100%)",
                                      zIndex: 5
                                    }}
                                  >
                                    <div
                                      className="noUi-handle noUi-handle-lower"
                                      data-handle={0}
                                      tabIndex={0}
                                      role="slider"
                                      aria-orientation="horizontal"
                                      aria-valuemin={161.0}
                                      aria-valuemax={1690.0}
                                      aria-valuenow={161.0}
                                      aria-valuetext=" $161"
                                    >
                                      <div className="noUi-touch-area" />
                                    </div>
                                  </div>
                                  <div
                                    className="noUi-origin"
                                    style={{
                                      transform: "translate(0%)",
                                      zIndex: 4
                                    }}
                                  >
                                    <div
                                      className="noUi-handle noUi-handle-upper"
                                      data-handle={1}
                                      tabIndex={0}
                                      role="slider"
                                      aria-orientation="horizontal"
                                      aria-valuemin={161.0}
                                      aria-valuemax={1690.0}
                                      aria-valuenow={1690.0}
                                      aria-valuetext=" $1690"
                                    >
                                      <div className="noUi-touch-area" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              type="submit"
                              className="flex-center bg-blue-1 rounded-4 px-3 py-1 mt-3 text-12 fw-600 text-white btn-apply-price-range mt-20"
                            >
                              APPLY
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar__item g-filter-item">
                      <h5 className="text-18 fw-500 mb-10">Travel Styles</h5>
                      <div className="sidebar-checkbox ">
                        <div className="row y-gap-10 items-center justify-between ">
                          <div className="col-auto">
                            <label className="cursor-pointer">
                              <div className="form-checkbox d-flex items-center">
                                <input
                                  type="checkbox"
                                  name="attrs[1][]"
                                  defaultValue={1}
                                  className="has-value"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check" />
                                </div>
                                <div className="text-15 ml-10">Cultural</div>
                              </div>
                            </label>
                          </div>
                          <div className="col-auto">
                            <div className="text-15 text-light-1" />
                          </div>
                        </div>
                        <div className="row y-gap-10 items-center justify-between ">
                          <div className="col-auto">
                            <label className="cursor-pointer">
                              <div className="form-checkbox d-flex items-center">
                                <input
                                  type="checkbox"
                                  name="attrs[1][]"
                                  defaultValue={2}
                                  className="has-value"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check" />
                                </div>
                                <div className="text-15 ml-10">
                                  Nature &amp; Adventure
                                </div>
                              </div>
                            </label>
                          </div>
                          <div className="col-auto">
                            <div className="text-15 text-light-1" />
                          </div>
                        </div>
                        <div className="row y-gap-10 items-center justify-between ">
                          <div className="col-auto">
                            <label className="cursor-pointer">
                              <div className="form-checkbox d-flex items-center">
                                <input
                                  type="checkbox"
                                  name="attrs[1][]"
                                  defaultValue={3}
                                  className="has-value"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check" />
                                </div>
                                <div className="text-15 ml-10">Marine</div>
                              </div>
                            </label>
                          </div>
                          <div className="col-auto">
                            <div className="text-15 text-light-1" />
                          </div>
                        </div>
                        <div className="row y-gap-10 items-center justify-between  hide ">
                          <div className="col-auto">
                            <label className="cursor-pointer">
                              <div className="form-checkbox d-flex items-center">
                                <input
                                  type="checkbox"
                                  name="attrs[1][]"
                                  defaultValue={4}
                                  className="has-value"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check" />
                                </div>
                                <div className="text-15 ml-10">Independent</div>
                              </div>
                            </label>
                          </div>
                          <div className="col-auto">
                            <div className="text-15 text-light-1" />
                          </div>
                        </div>
                        <div className="row y-gap-10 items-center justify-between  hide ">
                          <div className="col-auto">
                            <label className="cursor-pointer">
                              <div className="form-checkbox d-flex items-center">
                                <input
                                  type="checkbox"
                                  name="attrs[1][]"
                                  defaultValue={5}
                                  className="has-value"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check" />
                                </div>
                                <div className="text-15 ml-10">Activities</div>
                              </div>
                            </label>
                          </div>
                          <div className="col-auto">
                            <div className="text-15 text-light-1" />
                          </div>
                        </div>
                        <div className="row y-gap-10 items-center justify-between  hide ">
                          <div className="col-auto">
                            <label className="cursor-pointer">
                              <div className="form-checkbox d-flex items-center">
                                <input
                                  type="checkbox"
                                  name="attrs[1][]"
                                  defaultValue={6}
                                  className="has-value"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check" />
                                </div>
                                <div className="text-15 ml-10">
                                  Festival &amp; Events
                                </div>
                              </div>
                            </label>
                          </div>
                          <div className="col-auto">
                            <div className="text-15 text-light-1" />
                          </div>
                        </div>
                        <div className="row y-gap-10 items-center justify-between  hide ">
                          <div className="col-auto">
                            <label className="cursor-pointer">
                              <div className="form-checkbox d-flex items-center">
                                <input
                                  type="checkbox"
                                  name="attrs[1][]"
                                  defaultValue={7}
                                  className="has-value"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check" />
                                </div>
                                <div className="text-15 ml-10">
                                  Special Interest
                                </div>
                              </div>
                            </label>
                          </div>
                          <div className="col-auto">
                            <div className="text-15 text-light-1" />
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-link btn-more-item"
                        >
                          More <i className="fa fa-caret-down" />
                        </button>
                      </div>
                    </div>
                    <div className="sidebar__item g-filter-item">
                      <h5 className="text-18 fw-500 mb-10">Facilities</h5>
                      <div className="sidebar-checkbox ">
                        <div className="row y-gap-10 items-center justify-between ">
                          <div className="col-auto">
                            <label className="cursor-pointer">
                              <div className="form-checkbox d-flex items-center">
                                <input
                                  type="checkbox"
                                  name="attrs[2][]"
                                  defaultValue={8}
                                  className="has-value"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check" />
                                </div>
                                <div className="text-15 ml-10">Wifi</div>
                              </div>
                            </label>
                          </div>
                          <div className="col-auto">
                            <div className="text-15 text-light-1" />
                          </div>
                        </div>
                        <div className="row y-gap-10 items-center justify-between ">
                          <div className="col-auto">
                            <label className="cursor-pointer">
                              <div className="form-checkbox d-flex items-center">
                                <input
                                  type="checkbox"
                                  name="attrs[2][]"
                                  defaultValue={9}
                                  className="has-value"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check" />
                                </div>
                                <div className="text-15 ml-10">Gymnasium</div>
                              </div>
                            </label>
                          </div>
                          <div className="col-auto">
                            <div className="text-15 text-light-1" />
                          </div>
                        </div>
                        <div className="row y-gap-10 items-center justify-between ">
                          <div className="col-auto">
                            <label className="cursor-pointer">
                              <div className="form-checkbox d-flex items-center">
                                <input
                                  type="checkbox"
                                  name="attrs[2][]"
                                  defaultValue={10}
                                  className="has-value"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check" />
                                </div>
                                <div className="text-15 ml-10">Mountain Bike</div>
                              </div>
                            </label>
                          </div>
                          <div className="col-auto">
                            <div className="text-15 text-light-1" />
                          </div>
                        </div>
                        <div className="row y-gap-10 items-center justify-between  hide ">
                          <div className="col-auto">
                            <label className="cursor-pointer">
                              <div className="form-checkbox d-flex items-center">
                                <input
                                  type="checkbox"
                                  name="attrs[2][]"
                                  defaultValue={11}
                                  className="has-value"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check" />
                                </div>
                                <div className="text-15 ml-10">
                                  Satellite Office
                                </div>
                              </div>
                            </label>
                          </div>
                          <div className="col-auto">
                            <div className="text-15 text-light-1" />
                          </div>
                        </div>
                        <div className="row y-gap-10 items-center justify-between  hide ">
                          <div className="col-auto">
                            <label className="cursor-pointer">
                              <div className="form-checkbox d-flex items-center">
                                <input
                                  type="checkbox"
                                  name="attrs[2][]"
                                  defaultValue={12}
                                  className="has-value"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check" />
                                </div>
                                <div className="text-15 ml-10">Staff Lounge</div>
                              </div>
                            </label>
                          </div>
                          <div className="col-auto">
                            <div className="text-15 text-light-1" />
                          </div>
                        </div>
                        <div className="row y-gap-10 items-center justify-between  hide ">
                          <div className="col-auto">
                            <label className="cursor-pointer">
                              <div className="form-checkbox d-flex items-center">
                                <input
                                  type="checkbox"
                                  name="attrs[2][]"
                                  defaultValue={13}
                                  className="has-value"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check" />
                                </div>
                                <div className="text-15 ml-10">Golf Cages</div>
                              </div>
                            </label>
                          </div>
                          <div className="col-auto">
                            <div className="text-15 text-light-1" />
                          </div>
                        </div>
                        <div className="row y-gap-10 items-center justify-between  hide ">
                          <div className="col-auto">
                            <label className="cursor-pointer">
                              <div className="form-checkbox d-flex items-center">
                                <input
                                  type="checkbox"
                                  name="attrs[2][]"
                                  defaultValue={14}
                                  className="has-value"
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check" />
                                </div>
                                <div className="text-15 ml-10">Aerobics Room</div>
                              </div>
                            </label>
                          </div>
                          <div className="col-auto">
                            <div className="text-15 text-light-1" />
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-link btn-more-item"
                        >
                          More <i className="fa fa-caret-down" />
                        </button>
                      </div>
                    </div>
                    <div
                      className="bravo-clear-filter hidden-lg-up"
                      style={{ display: "none" }}
                    >
                      <a
                        href="#"
                        className="button px-15 py-10 -dark-1 bg-blue-1 text-white"
                      >
                        <i className="icon-loop-2 mr-10 text-12" />
                        <span>Clear All</span>
                      </a>
                    </div>
                  </aside>
                </form>
              </div>
              <div className="col-xl-9 col-lg-8">
                {/* Results count and sort */}
                <div className="row y-gap-10 items-center justify-between">
                  <div className="col-auto">
                    <div className="text-18 fw-500 result-count">
                      16 tours found
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="row x-gap-20 y-gap-20">
                      <div className="col-auto bc-form-order">
                        <div className="row x-gap-20 y-gap-20">
                          <div className="col-auto">
                            <div className="item d-flex align-items-center">
                              <div className="mr-5">Sort by:</div>
                              <input
                                type="hidden"
                                name="orderby"
                                defaultValue=""
                              />
                              <div className="dropdown orderby">
                                <span
                                  className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="icon-up-down text-14 mr-10" />
                                  <span className="dropdown-toggle">
                                    Recommended
                                  </span>
                                </span>
                                <div
                                  className="dropdown-menu dropdown-menu-right"
                                  aria-labelledby="dropdownMenuButton"
                                >
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-value=""
                                  >
                                    Recommended
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-value="price_low_high"
                                  >
                                    Price (Low to high)
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-value="price_high_low"
                                  >
                                    Price (High to low)
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-value="rate_high_low"
                                  >
                                    Rating (High to low)
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <button className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
                              Show on the map
                            </button>
                          </div>
                          <div className="col-auto d-none lg:d-block">
                            <button
                              data-x-click="filterPopup"
                              className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1"
                            >
                              <i className="icon-up-down text-14 mr-10" />
                              Filter
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End Filter mobile*/}
                <div className="ajax-search-result">
                  <div className="row y-gap-30">


                  <div className="row">
      {tours.map((tour) => (
        <TourCard key={tour._id} tour={tour} />
      ))}
    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="tourCard -type-1 rounded-4  item-loop-wrap">
                      <Link to="/TourDetails">

                        <div className="tourCard__image">
                          <div className="cardImage ratio ratio-1:1">
                            
                            <a href="">
                              <div className="cardImage__content">
                                <img
                                  className="img-responsive rounded-4 col-12 js-lazy lazy loaded"
                                  alt="Eastern Discovery (Start New Orleans)"
                                  data-ll-status="loaded"
                                  src={pic3}
                                />
                              </div>
                            </a>
                            <div
                              className="service-wishlist "
                              data-id={6}
                              data-type="tour"
                            >
                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12" />
                                </button>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                        <div className="tourCard__content mt-10">
                          <div className="d-flex items-center lh-14 mb-5">
                            <div className="text-14 text-light-1">5 Hours</div>
                          </div>
                          <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                            <a
                              className="text-dark-1-i"
                              href=""
                            >
                              <span>Eastern Discovery (Start New Orleans)</span>
                            </a>
                          </h4>
                          <p className="text-light-1 lh-14 text-14 mt-5">
                            San Francisco
                          </p>
                          <div className="row justify-between items-center pt-15">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <div className="list-star">
                                  <div className="d-flex relative">
                                    <ul className="booking-item-rating-stars d-flex x-gap-5">
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                    </ul>
                                    <div
                                      className="booking-item-rating-stars-active"
                                      style={{ width: "88%" }}
                                    >
                                      <ul className="booking-item-rating-stars d-flex x-gap-5">
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-14 text-light-1 ml-10">
                                  5 Reviews
                                </div>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="text-14 text-light-1">
                                from
                                <span className="text-14 text-red-1 line-through d-inline-flex">
                                  $2.100
                                </span>
                                <span className="fw-500 text-dark-1 d-inline-flex">
                                  $1.489
                                </span>
                              </div>
                            </div>
                          </div>
                        </div></Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="tourCard -type-1 rounded-4  item-loop-wrap">
                      <Link to="/TourDetails">

                        <div className="tourCard__image">
                          <div className="cardImage ratio ratio-1:1">
                            <a >
                              <div className="cardImage__content">
                                <img
                                  className="img-responsive rounded-4 col-12 js-lazy lazy loaded"
                                  alt="Paris Vacation Travel "
                                  data-ll-status="loaded"
                                  src={pic3}
                                />
                              </div>
                            </a>
                            <div
                              className="service-wishlist "
                              data-id={4}
                              data-type="tour"
                            >
                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12" />
                                </button>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                        <div className="tourCard__content mt-10">
                          <div className="d-flex items-center lh-14 mb-5">
                            <div className="text-14 text-light-1">5 Hours</div>
                          </div>
                          <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                            <a
                              className="text-dark-1-i"
                              href="/tour/paris-vacation-travel"
                            >
                              <span>Paris Vacation Travel </span>
                            </a>
                          </h4>
                          <p className="text-light-1 lh-14 text-14 mt-5">
                            Ethiopia
                          </p>
                          <div className="row justify-between items-center pt-15">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <div className="list-star">
                                  <div className="d-flex relative">
                                    <ul className="booking-item-rating-stars d-flex x-gap-5">
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                    </ul>
                                    <div
                                      className="booking-item-rating-stars-active"
                                      style={{ width: "96%" }}
                                    >
                                      <ul className="booking-item-rating-stars d-flex x-gap-5">
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-14 text-light-1 ml-10">
                                  4 Reviews
                                </div>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="text-14 text-light-1">
                                from
                                <span className="text-14 text-red-1 line-through d-inline-flex">
                                  $850
                                </span>
                                <span className="fw-500 text-dark-1 d-inline-flex">
                                  $666
                                </span>
                              </div>
                            </div>
                          </div>
                        </div></Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="tourCard -type-1 rounded-4  item-loop-wrap">
                      <Link to="/TourDetails">

                        <div className="tourCard__image">
                          <div className="cardImage ratio ratio-1:1">
                            <a href="">
                              <div className="cardImage__content">
                                <img
                                  className="img-responsive rounded-4 col-12 js-lazy lazy loaded"
                                  alt="Los Angeles to San Francisco Express "
                                  data-ll-status="loaded"
                                  src={pic1}
                                />
                              </div>
                            </a>
                            <div
                              className="service-wishlist "
                              data-id={3}
                              data-type="tour"
                            >
                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12" />
                                </button>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                        <div className="tourCard__content mt-10">
                          <div className="d-flex items-center lh-14 mb-5">
                            <div className="text-14 text-light-1">9 Hours</div>
                          </div>
                          <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                            <a
                              className="text-dark-1-i"
                              href=""
                            >
                              <span>Los Angeles to San Francisco Express </span>
                            </a>
                          </h4>
                          <p className="text-light-1 lh-14 text-14 mt-5">
                            New Jersey
                          </p>
                          <div className="row justify-between items-center pt-15">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <div className="list-star">
                                  <div className="d-flex relative">
                                    <ul className="booking-item-rating-stars d-flex x-gap-5">
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                    </ul>
                                    <div
                                      className="booking-item-rating-stars-active"
                                      style={{ width: "86%" }}
                                    >
                                      <ul className="booking-item-rating-stars d-flex x-gap-5">
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-14 text-light-1 ml-10">
                                  3 Reviews
                                </div>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="text-14 text-light-1">
                                from
                                <span className="text-14 text-red-1 line-through d-inline-flex">
                                  $1.500
                                </span>
                                <span className="fw-500 text-dark-1 d-inline-flex">
                                  $375
                                </span>
                              </div>
                            </div>
                          </div>
                        </div></Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="tourCard -type-1 rounded-4  item-loop-wrap">
                      <Link to="/TourDetails">

                        <div className="tourCard__image">
                          <div className="cardImage ratio ratio-1:1">
                            <a href="">
                              <div className="cardImage__content">
                                <img
                                  className="img-responsive rounded-4 col-12 js-lazy lazy loaded"
                                  alt="New York: Museum of Modern Art"
                                  data-ll-status="loaded"
                                  src={pic3}
                                />
                              </div>
                            </a>
                            <div
                              className="service-wishlist "
                              data-id={2}
                              data-type="tour"
                            >
                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12" />
                                </button>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                        <div className="tourCard__content mt-10">
                          <div className="d-flex items-center lh-14 mb-5">
                            <div className="text-14 text-light-1">9 Hours</div>
                          </div>
                          <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                            <a
                              className="text-dark-1-i"
                              href=""
                            >
                              <span>New York: Museum of Modern Art</span>
                            </a>
                          </h4>
                          <p className="text-light-1 lh-14 text-14 mt-5">
                            United States
                          </p>
                          <div className="row justify-between items-center pt-15">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <div className="list-star">
                                  <div className="d-flex relative">
                                    <ul className="booking-item-rating-stars d-flex x-gap-5">
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                    </ul>
                                    <div
                                      className="booking-item-rating-stars-active"
                                      style={{ width: "100%" }}
                                    >
                                      <ul className="booking-item-rating-stars d-flex x-gap-5">
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-14 text-light-1 ml-10">
                                  3 Reviews
                                </div>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="text-14 text-light-1">
                                from
                                <span className="text-14 text-red-1 line-through d-inline-flex">
                                  $900
                                </span>
                                <span className="fw-500 text-dark-1 d-inline-flex">
                                  $253
                                </span>
                              </div>
                            </div>
                          </div>
                        </div></Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="tourCard -type-1 rounded-4  item-loop-wrap">
                      <Link to="/TourDetails">

                        <div className="tourCard__image">
                          <div className="cardImage ratio ratio-1:1">
                            <a href="">
                              <div className="cardImage__content">
                                <img
                                  className="img-responsive rounded-4 col-12 js-lazy lazy loaded"
                                  alt="River Cruise Tour on the Seine"
                                  data-ll-status="loaded"
                                  src={pic3}
                                />
                              </div>
                            </a>
                            <div
                              className="service-wishlist "
                              data-id={16}
                              data-type="tour"
                            >
                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12" />
                                </button>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                        <div className="tourCard__content mt-10">
                          <div className="d-flex items-center lh-14 mb-5">
                            <div className="text-14 text-light-1">6 Hours</div>
                          </div>
                          <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                            <a
                              className="text-dark-1-i"
                              href=""
                            >
                              <span>River Cruise Tour on the Seine</span>
                            </a>
                          </h4>
                          <p className="text-light-1 lh-14 text-14 mt-5">
                            Los Angeles
                          </p>
                          <div className="row justify-between items-center pt-15">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <div className="list-star">
                                  <div className="d-flex relative">
                                    <ul className="booking-item-rating-stars d-flex x-gap-5">
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                    </ul>
                                    <div
                                      className="booking-item-rating-stars-active"
                                      style={{ width: "94%" }}
                                    >
                                      <ul className="booking-item-rating-stars d-flex x-gap-5">
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-14 text-light-1 ml-10">
                                  3 Reviews
                                </div>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="text-14 text-light-1">
                                from
                                <span className="text-14 text-red-1 line-through d-inline-flex">
                                  $2.100
                                </span>
                                <span className="fw-500 text-dark-1 d-inline-flex">
                                  $1.690
                                </span>
                              </div>
                            </div>
                          </div>
                        </div></Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="tourCard -type-1 rounded-4  item-loop-wrap">
                      <Link to="/TourDetails">

                        <div className="tourCard__image">
                          <div className="cardImage ratio ratio-1:1">
                            <a href="">
                              <div className="cardImage__content">
                                <img
                                  className="img-responsive rounded-4 col-12 js-lazy lazy loaded"
                                  alt="Cannes and Antibes Night Tour"
                                  data-ll-status="loaded"
                                  src={pic}
                                />
                              </div>
                            </a>
                            <div
                              className="service-wishlist "
                              data-id={15}
                              data-type="tour"
                            >
                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12" />
                                </button>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                        <div className="tourCard__content mt-10">
                          <div className="d-flex items-center lh-14 mb-5">
                            <div className="text-14 text-light-1">2 Hours</div>
                          </div>
                          <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                            <a
                              className="text-dark-1-i"
                              href=""
                            >
                              <span>Cannes and Antibes Night Tour</span>
                            </a>
                          </h4>
                          <p className="text-light-1 lh-14 text-14 mt-5">
                            Los Angeles
                          </p>
                          <div className="row justify-between items-center pt-15">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <div className="list-star">
                                  <div className="d-flex relative">
                                    <ul className="booking-item-rating-stars d-flex x-gap-5">
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                    </ul>
                                    <div
                                      className="booking-item-rating-stars-active"
                                      style={{ width: "94%" }}
                                    >
                                      <ul className="booking-item-rating-stars d-flex x-gap-5">
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-14 text-light-1 ml-10">
                                  3 Reviews
                                </div>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="text-14 text-light-1">
                                from
                                <span className="text-14 text-red-1 line-through d-inline-flex">
                                  $2.100
                                </span>
                                <span className="fw-500 text-dark-1 d-inline-flex">
                                  $358
                                </span>
                              </div>
                            </div>
                          </div>
                        </div></Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="tourCard -type-1 rounded-4  item-loop-wrap">
                      <Link to="/TourDetails">

                        <div className="tourCard__image">
                          <div className="cardImage ratio ratio-1:1">
                            <a >
                              <div className="cardImage__content">
                                <img
                                  className="img-responsive rounded-4 col-12 js-lazy lazy loaded"
                                  alt="San Francisco Express Never Ceases"
                                  data-ll-status="loaded"
                                  src={pic2}
                                />
                              </div>
                            </a>
                            <div
                              className="service-wishlist "
                              data-id={14}
                              data-type="tour"
                            >
                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12" />
                                </button>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                        <div className="tourCard__content mt-10">
                          <div className="d-flex items-center lh-14 mb-5">
                            <div className="text-14 text-light-1">1 Hour</div>
                          </div>
                          <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                            <a
                              className="text-dark-1-i"
                              href=""
                            >
                              <span>San Francisco Express Never Ceases</span>
                            </a>
                          </h4>
                          <p className="text-light-1 lh-14 text-14 mt-5">
                            United States
                          </p>
                          <div className="row justify-between items-center pt-15">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <div className="list-star">
                                  <div className="d-flex relative">
                                    <ul className="booking-item-rating-stars d-flex x-gap-5">
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                    </ul>
                                    <div
                                      className="booking-item-rating-stars-active"
                                      style={{ width: "94%" }}
                                    >
                                      <ul className="booking-item-rating-stars d-flex x-gap-5">
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-14 text-light-1 ml-10">
                                  3 Reviews
                                </div>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="text-14 text-light-1">
                                from
                                <span className="text-14 text-red-1 line-through d-inline-flex">
                                  $2.100
                                </span>
                                <span className="fw-500 text-dark-1 d-inline-flex">
                                  $948
                                </span>
                              </div>
                            </div>
                          </div>
                        </div></Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="tourCard -type-1 rounded-4  item-loop-wrap">
                        <div className="tourCard__image">
                          <div className="cardImage ratio ratio-1:1">
                            <a href="/tour/hollywood-sign-small-group-tour-in-luxury-van">
                              <div className="cardImage__content">
                                <img
                                  className="img-responsive rounded-4 col-12 js-lazy lazy loaded"
                                  alt="Hollywood Sign Small Group Tour in Luxury Van"
                                  data-ll-status="loaded"
                                  src={pic2}
                                />
                              </div>
                            </a>
                            <div
                              className="service-wishlist "
                              data-id={13}
                              data-type="tour"
                            >
                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12" />
                                </button>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                        <div className="tourCard__content mt-10">
                          <div className="d-flex items-center lh-14 mb-5">
                            <div className="text-14 text-light-1">1 Hour</div>
                          </div>
                          <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                            <a
                              className="text-dark-1-i"
                              href="/tour/hollywood-sign-small-group-tour-in-luxury-van"
                            >
                              <span>
                                Hollywood Sign Small Group Tour in Luxury Van
                              </span>
                            </a>
                          </h4>
                          <p className="text-light-1 lh-14 text-14 mt-5">
                            New York
                          </p>
                          <div className="row justify-between items-center pt-15">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <div className="list-star">
                                  <div className="d-flex relative">
                                    <ul className="booking-item-rating-stars d-flex x-gap-5">
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                    </ul>
                                    <div
                                      className="booking-item-rating-stars-active"
                                      style={{ width: "100%" }}
                                    >
                                      <ul className="booking-item-rating-stars d-flex x-gap-5">
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-14 text-light-1 ml-10">
                                  3 Reviews
                                </div>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="text-14 text-light-1">
                                from
                                <span className="text-14 text-red-1 line-through d-inline-flex">
                                  $2.100
                                </span>
                                <span className="fw-500 text-dark-1 d-inline-flex">
                                  $1.349
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="tourCard -type-1 rounded-4  item-loop-wrap">
                        <div className="tourCard__image">
                          <div className="cardImage ratio ratio-1:1">
                            <a href="/tour/segway-tour-of-washington-dc-highlights">
                              <div className="cardImage__content">
                                <img
                                  className="img-responsive rounded-4 col-12 js-lazy lazy loaded"
                                  alt="Segway Tour of Washington, D.C. Highlights"
                                  data-ll-status="loaded"
                                  src={pic3}
                                />
                              </div>
                            </a>
                            <div
                              className="service-wishlist "
                              data-id={12}
                              data-type="tour"
                            >
                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12" />
                                </button>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                        <div className="tourCard__content mt-10">
                          <div className="d-flex items-center lh-14 mb-5">
                            <div className="text-14 text-light-1">1 Hour</div>
                          </div>
                          <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                            <a
                              className="text-dark-1-i"
                              href="/tour/segway-tour-of-washington-dc-highlights"
                            >
                              <span>
                                Segway Tour of Washington, D.C. Highlights
                              </span>
                            </a>
                          </h4>
                          <p className="text-light-1 lh-14 text-14 mt-5">
                            London
                          </p>
                          <div className="row justify-between items-center pt-15">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <div className="list-star">
                                  <div className="d-flex relative">
                                    <ul className="booking-item-rating-stars d-flex x-gap-5">
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                      <li>
                                        <i className="fa text-yellow-1 fa-star-o" />
                                      </li>
                                    </ul>
                                    <div
                                      className="booking-item-rating-stars-active"
                                      style={{ width: "100%" }}
                                    >
                                      <ul className="booking-item-rating-stars d-flex x-gap-5">
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa text-yellow-1 fa-star" />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-14 text-light-1 ml-10">
                                  4 Reviews
                                </div>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="text-14 text-light-1">
                                from
                                <span className="text-14 text-red-1 line-through d-inline-flex">
                                  $2.100
                                </span>
                                <span className="fw-500 text-dark-1 d-inline-flex">
                                  $1.537
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bravo-pagination">
                    <div className="border-top-light mt-30 pt-30 custom-pagination">
                      <div className="row x-gap-10 y-gap-20 justify-between md:justify-center">
                        <div className="col-auto md:order-1 disabled p-item">
                          <span className="button -blue-1 size-40 rounded-full border-light p-link">
                            <i className="icon-chevron-left text-12" />
                          </span>
                        </div>
                        <div className="col-md-auto md:order-3">
                          <div className="row x-gap-20 y-gap-20 items-center md:d-none">
                            <div className="col-auto active p-item">
                              <div className="size-40 flex-center rounded-full p-link">
                                1
                              </div>
                            </div>
                            <div className="col-auto p-item">
                              <a
                                href="/tour?_layout=grid&page=2"
                                className="size-40 flex-center rounded-full p-link"
                              >
                                2
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto md:order-2 p-item">
                          <a
                            href="/tour?_layout=grid&page=2"
                            className="button -blue-1 size-40 rounded-full border-light"
                          >
                            <i className="icon-chevron-right text-12" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-30 md:mt-10">
                      <div className="text-14 text-light-1">
                        Showing 1 - 9 of 16 tours
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="footer -type-1 normal">
        <div className="container"></div>
      </div>
      <div
        className="modal fade login gotrip-login-modal"
        id="login"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content relative">
            <div className="modal-header border-dashed">
              <h4 className="modal-title">Log In</h4>
              <span
                className="c-pointer"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="input-icon field-icon fa">
                  <img src="ico_close.svg" alt="close" />
                </i>
              </span>
            </div>
            <div className="modal-body relative">
              <form
                className="bravo-theme-gotrip-login-form y-gap-20"
                method="POST"
                action="/login"
              >
                <input type="hidden" name="redirect" defaultValue="" />
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="DcrRcgG6EOCmkDJePIWWgTUOGd7R2YjgeOG5NDSA"
                  className="has-value"
                />
                <div className="col-12">
                  <h4 className="form-title text-22 fw-500">Welcome back</h4>
                  <p className="mt-10">
                    Don't have an account yet?{" "}
                    <a
                      data-bs-toggle="modal"
                      href="#register"
                      className="text-blue-1"
                    >
                      Sign up for free
                    </a>
                  </p>
                </div>
                <div className="col-12">
                  <div className="form-input">
                    <input
                      type="text"
                      name="email"
                      autoComplete="off"
                      className="has-value"
                      defaultValue=""
                    />
                    <label className="lh-1 text-14 text-light-1">Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-input">
                    <input
                      type="password"
                      name="password"
                      autoComplete="off"
                      className="has-value"
                    />
                    <label className="lh-1 text-14 text-light-1">Password</label>
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-between">
                  <div className="d-flex ">
                    <div className="form-checkbox" style={{ marginTop: 3 }}>
                      <input
                        type="checkbox"
                        name="remember"
                        id="remember-me"
                        defaultValue={1}
                        className="has-value"
                      />
                      <div className="form-checkbox__mark">
                        <div className="form-checkbox__icon icon-check" />
                      </div>
                    </div>
                    <div className="text-15 lh-15 text-light-1 ml-10">
                      Remember me
                    </div>
                  </div>
                  <a href="/forgot-password">
                    Forgot Password?
                  </a>
                </div>
                <div className="error message-error invalid-feedback" />
                <div className="col-12">
                  <button
                    className="button py-20 -dark-1 bg-blue-1 text-white w-100 form-submit"
                    type="submit"
                  >
                    Sign In
                    <div className="icon-arrow-top-right ml-15" />
                    <span
                      className="spinner-grow spinner-grow-sm icon-loading ml-15 d-none"
                      role="status"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div className="col-12">
                  <div className="text-center px-30">
                    By creating an account, you agree to our Terms of Service and
                    Privacy Statement.
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade login gotrip-register-modal"
        id="register"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content relative">
            <div className="modal-header">
              <h4 className="modal-title">Sign Up</h4>
              <span
                className="c-pointer"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="input-icon field-icon fa">
                  <img src="ico_close.svg" alt="close" />
                </i>
              </span>
            </div>
            <div className="modal-body">
              <form action="#" className="form bravo-form-register" method="post">
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="DcrRcgG6EOCmkDJePIWWgTUOGd7R2YjgeOG5NDSA"
                  className="has-value"
                />
                <div className="row y-gap-20">
                  <div className="col-12">
                    <h1 className="text-22 fw-500">
                      Sign in or create an account
                    </h1>
                    <p className="mt-10">
                      Already have an account?{" "}
                      <a
                        data-bs-toggle="modal"
                        href="#login"
                        className="text-blue-1"
                      >
                        Log in
                      </a>
                    </p>
                  </div>
                  <div className="col-12">
                    <div className="form-input">
                      <input
                        type="text"
                        name="first_name"
                        autoComplete="off"
                        className="has-value"
                        defaultValue=""
                      />
                      <label className="lh-1 text-14 text-light-1">
                        First Name
                      </label>
                    </div>
                    <span className="invalid-feedback error error-first_name" />
                  </div>
                  <div className="col-12">
                    <div className="form-input">
                      <input
                        type="text"
                        name="last_name"
                        autoComplete="off"
                        className="has-value"
                        defaultValue=""
                      />
                      <label className="lh-1 text-14 text-light-1">
                        Last Name
                      </label>
                    </div>
                    <span className="invalid-feedback error error-last_name" />
                  </div>
                  <div className="col-12">
                    <div className="form-input">
                      <input
                        type="text"
                        name="phone"
                        autoComplete="off"
                        className="has-value"
                        defaultValue=""
                      />
                      <label className="lh-1 text-14 text-light-1">Phone</label>
                    </div>
                    <span className="invalid-feedback error error-phone" />
                  </div>
                  <div className="col-12">
                    <div className="form-input">
                      <input
                        type="email"
                        name="email"
                        autoComplete="off"
                        className="has-value"
                        defaultValue=""
                      />
                      <label className="lh-1 text-14 text-light-1">
                        Email address
                      </label>
                    </div>
                    <span className="invalid-feedback error error-email" />
                  </div>
                  <div className="col-12">
                    <div className="form-input">
                      <input
                        type="password"
                        name="password"
                        autoComplete="off"
                        className="has-value"
                      />
                      <label className="lh-1 text-14 text-light-1">
                        Password
                      </label>
                    </div>
                    <span className="invalid-feedback error error-password" />
                  </div>
                  <div className="col-12">
                    <div className="d-flex">
                      <div className="form-checkbox" style={{ marginTop: 3 }}>
                        <input
                          type="checkbox"
                          name="term"
                          id="register-term"
                          className="has-value"
                        />
                        <div className="form-checkbox__mark">
                          <div className="form-checkbox__icon icon-check" />
                        </div>
                      </div>
                      <label
                        className="text-15 lh-15 text-light-1 ml-10"
                        htmlFor="register-term"
                      >
                        I have read and accept the Terms and Privacy Policy?
                      </label>
                    </div>
                    <span className="invalid-feedback error error-term" />
                  </div>
                  <div className="error message-error invalid-feedback" />
                  <div className="col-12">
                    <button
                      type="submit"
                      className="button py-20 -dark-1 bg-blue-1 text-white w-100"
                    >
                      Sign Up <div className="icon-arrow-top-right ml-15" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Custom script for all pages */}
    </div>
    <div className="daterangepicker ltr auto-apply show-calendar openscenter">
      <div className="ranges" />
      <div className="drp-calendar left">
        <div className="calendar-table" />
        <div className="calendar-time" style={{ display: "none" }} />
      </div>
      <div className="drp-calendar right">
        <div className="calendar-table" />
        <div className="calendar-time" style={{ display: "none" }} />
      </div>
      <div className="drp-buttons">
        <span className="drp-selected">2023-11-08 - 2023-11-09</span>
        <button className="cancelBtn btn btn-sm btn-default" type="button">
          Cancel
        </button>
        <button
          className="applyBtn btn btn-sm btn-primary"
          disabled="disabled"
          type="button"
        >
          Apply
        </button>{" "}
      </div>
    </div>
  </>
  
  );
}
