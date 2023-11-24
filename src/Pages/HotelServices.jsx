import React from "react";
import map from "../assets/image/icon-map.png"
import 'font-awesome/css/font-awesome.min.css';
import { Link,  } from 'react-router-dom';
import pic from "../assets/image/4.png"
import { useEffect, useState } from 'react';
import axios from 'axios';

import HotelCard from '../components/HotelCard';
export default function HotelServices() {

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Fetch hotels data from your API
    axios.get('http://localhost:4000/hotel').then((response) => {
      setHotels(response.data);
    });
  }, []);
  return (
    <div style={{marginLeft:"-60px", marginTop:"75px"}}>
    <div className="bravo_wrap overflow-hidden">
      
      <div className="bravo_search bravo_search_hotel">
        <section className="pt-40 pb-40 bg-light-2  bg-blue-2 ">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-center">
                  <h1 className="text-30 fw-600">Search for hotel</h1>
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
                              <input type="hidden" name="location_id" className="js-search-get-id" defaultValue />
                              <input type="text" autoComplete="off" readOnly className="smart-search-location parent_text js-search js-dd-focus" placeholder="Where are you going?" defaultValue data-onload="Loading..." data-default="[{&quot;id&quot;:1,&quot;title&quot;:&quot; Paris&quot;},{&quot;id&quot;:2,&quot;title&quot;:&quot; California&quot;},{&quot;id&quot;:3,&quot;title&quot;:&quot; United States&quot;},{&quot;id&quot;:4,&quot;title&quot;:&quot; Los Angeles&quot;},{&quot;id&quot;:5,&quot;title&quot;:&quot; New Jersey&quot;},{&quot;id&quot;:6,&quot;title&quot;:&quot; San Francisco&quot;},{&quot;id&quot;:7,&quot;title&quot;:&quot; Virginia&quot;},{&quot;id&quot;:8,&quot;title&quot;:&quot; Germany&quot;},{&quot;id&quot;:9,&quot;title&quot;:&quot; New York&quot;},{&quot;id&quot;:10,&quot;title&quot;:&quot; London&quot;},{&quot;id&quot;:11,&quot;title&quot;:&quot; Barcelona&quot;},{&quot;id&quot;:12,&quot;title&quot;:&quot; Sydney&quot;},{&quot;id&quot;:13,&quot;title&quot;:&quot; Rome&quot;},{&quot;id&quot;:14,&quot;title&quot;:&quot; Reykjavik&quot;}]" />
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
                      <div className="col-lg-4 align-self-center px-30 lg:py-20 lg:px-0">
                        <div className="searchMenu-date form-date-search-hotel position-relative item">
                          <div className="date-wrapper" data-x-dd-click="searchMenu-date">
                            <h4 className="text-15 fw-500 ls-2 lh-16">Check In - Out</h4>
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
                      <div className="col-lg-4 align-self-center px-30 lg:py-20 lg:px-0">
                        <div className="searchMenu-guests form-select-guests js-form-dd item">
                          <div data-x-dd-click="searchMenu-guests">
                            <h4 className="text-15 fw-500 ls-2 lh-16">Guests</h4>
                            <div className="text-15 text-light-1 ls-2 lh-16">
                              <div className="render">
                                <span className="adults">
                                  <span className="one ">1 Adult</span>
                                  <span className=" d-none  multi" data-html=":count Adults">1
                                    Adults</span>
                                </span>
                                -
                                <span className="children">
                                  <span className="one " data-html=":count Child">0
                                    Child</span>
                                  <span className="multi  d-none " data-html=":count Children">0 Children</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="searchMenu-guests__field select-guests-dropdown shadow-2" data-x-dd="searchMenu-guests" data-x-dd-toggle="-is-active">
                            <div className="bg-white px-30 py-30 rounded-4">
                              <div className="row y-gap-10 justify-between items-center">
                                <div className="col-auto">
                                  <div className="text-15 fw-500">Rooms</div>
                                </div>
                                <div className="col-auto">
                                  <div className="d-flex items-center">
                                    <span className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-minus" data-input="room"><i className="icon-minus text-12" /></span>
                                    <span className="flex-center size-20 ml-15 mr-15 count-display">
                                      <input type="number" name="room" defaultValue={1} min={1} className="has-value" />
                                    </span>
                                    <span className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-add" data-input="room"><i className="icon-plus text-12" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="border-top-light mt-24 mb-24" />
                              <div className="row y-gap-10 justify-between items-center">
                                <div className="col-auto">
                                  <div className="text-15 fw-500">Adults</div>
                                </div>
                                <div className="col-auto">
                                  <div className="d-flex items-center">
                                    <span className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-minus" data-input="adults"><i className="icon-minus text-12" /></span>
                                    <span className="flex-center size-20 ml-15 mr-15 count-display">
                                      <input type="number" name="adults" defaultValue={1} min={1} className="has-value" />
                                    </span>
                                    <span className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-add" data-input="adults"><i className="icon-plus text-12" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="border-top-light mt-24 mb-24" />
                              <div className="row y-gap-10 justify-between items-center">
                                <div className="col-auto">
                                  <div className="text-15 fw-500">Children</div>
                                </div>
                                <div className="col-auto">
                                  <div className="d-flex items-center">
                                    <span className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-minus" data-input="children"><i className="icon-minus text-12" /></span>
                                    <span className="flex-center size-20 ml-15 mr-15 count-display">
                                      <input type="number" name="children" defaultValue={0} min={0} className="has-value" />
                                    </span>
                                    <span className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-add" data-input="children"><i className="icon-plus text-12" /></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
                <div className="bravo_filter sidebar">
                  <form  className="bravo_form_filter lg:d-none" data-x="filterPopup" data-x-toggle="-is-active">
                    <aside className="sidebar y-gap-40 p-4 p-lg-0">
                      <div data-x-click="filterPopup" className="-icon-close is_mobile pb-0">
                        <i className="icon-close" />
                      </div>
                      <div className="g-filter-item sidebar__item -no-border">
                        <div className="flex-center ratio ratio-15:9 js-lazy loaded" data-ll-status="loaded" style={{"background-image":`url(${map})`}}>
                          <a  className="button py-15 px-24 -blue-1 bg-white text-dark-1 absolute w-auto h-auto" style={{"left":"initial","top":"initial"}}>
                            <i className="icon-destination text-22 mr-10" />
                            Show on map
                          </a>
                        </div>
                      </div>
                      <div className="sidebar__item pb-30">
                        <h5 className="text-18 fw-500 mb-10">Price</h5>
                        <div className="row x-gap-10 y-gap-30">
                          <div className="col-12">
                            <div className="js-price-searchPage">
                              <div className="text-14 fw-500" />
                              <input type="hidden" className="filter-price irs-hidden-input" name="price_range" data-symbol=" $" data-min={300} data-max={952} data-from={300} data-to={952} readOnly defaultValue />
                              <div className="d-flex justify-between mb-20">
                                <div className="text-15 text-dark-1">
                                  <span className="js-lower"> $300</span>
                                  -
                                  <span className="js-upper"> $952</span>
                                </div>
                              </div>
                              <div className="px-5">
                                <div className="js-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
                                  <div className="noUi-base">
                                    <div className="noUi-connects">
                                      <div className="noUi-connect" style={{"-webkit-transform":"translate(0%) scale(1)","-ms-transform":"translate(0%) scale(1)","transform":"translate(0%) scale(1)"}}>
                                      </div>
                                    </div>
                                    <div className="noUi-origin" style={{"-webkit-transform":"translate(-100%)","-ms-transform":"translate(-100%)","transform":"translate(-100%)","z-index":"5"}}>
                                      <div className="noUi-handle noUi-handle-lower" data-handle={0} tabIndex={0} role="slider" aria-orientation="horizontal" aria-valuemin={300.0} aria-valuemax={952.0} aria-valuenow={300.0} aria-valuetext=" $300">
                                        <div className="noUi-touch-area" />
                                      </div>
                                    </div>
                                    <div className="noUi-origin" style={{"-webkit-transform":"translate(0%)","-ms-transform":"translate(0%)","transform":"translate(0%)","z-index":"4"}}>
                                      <div className="noUi-handle noUi-handle-upper" data-handle={1} tabIndex={0} role="slider" aria-orientation="horizontal" aria-valuemin={300.0} aria-valuemax={952.0} aria-valuenow={952.0} aria-valuetext=" $952">
                                        <div className="noUi-touch-area" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <button type="submit" className="flex-center bg-blue-1 rounded-4 px-3 py-1 mt-3 text-12 fw-600 text-white btn-apply-price-range mt-20">APPLY</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="g-filter-item sidebar__item">
                        <div className="item-title">
                          <h5 className="text-18 fw-500 mb-10">Hotel Star</h5>
                        </div>
                        <div className="item-content sidebar-checkbox">
                          <div className="row y-gap-10 items-center justify-between">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <div className="form-checkbox ">
                                  <input type="checkbox" name="star_rate[]" defaultValue={5} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                </div>
                                <div className="text-15 ml-10">
                                  <i className="fa fa-star" style={{"color":"#fa5636"}} />
                                  <i className="fa fa-star" style={{"color":"#fa5636"}} />
                                  <i className="fa fa-star" style={{"color":"#fa5636"}} />
                                  <i className="fa fa-star" style={{"color":"#fa5636"}} />
                                  <i className="fa fa-star" style={{"color":"#fa5636"}} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row y-gap-10 items-center justify-between">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <div className="form-checkbox ">
                                  <input type="checkbox" name="star_rate[]" defaultValue={4} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                </div>
                                <div className="text-15 ml-10">
                                  <i className="fa fa-star" style={{"color":"#fa5636"}} />
                                  <i className="fa fa-star" style={{"color":"#fa5636"}} />
                                  <i className="fa fa-star" style={{"color":"#fa5636"}} />
                                  <i className="fa fa-star" style={{"color":"#fa5636"}} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row y-gap-10 items-center justify-between">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <div className="form-checkbox ">
                                  <input type="checkbox" name="star_rate[]" defaultValue={3} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                </div>
                                <div className="text-15 ml-10">
                                  <i className="fa fa-star" style={{"color":"#fa5636"}} />
                                  <i className="fa fa-star" style={{"color":"#fa5636"}} />
                                  <i className="fa fa-star" style={{"color":"#fa5636"}} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row y-gap-10 items-center justify-between">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <div className="form-checkbox ">
                                  <input type="checkbox" name="star_rate[]" defaultValue={2} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                </div>
                                <div className="text-15 ml-10">
                                  <i className="fa fa-star" style={{"color":"#fa5636"}} />
                                  <i className="fa fa-star" style={{"color":"#fa5636"}} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row y-gap-10 items-center justify-between">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <div className="form-checkbox ">
                                  <input type="checkbox" name="star_rate[]" defaultValue={1} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                </div>
                                <div className="text-15 ml-10">
                                  <i className="fa fa-star" style={{"color":"#fa5636"}} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="g-filter-item sidebar__item">
                        <div className="item-title">
                          <h5 className="text-18 fw-500 mb-10">Review Score</h5>
                        </div>
                        <div className="item-content sidebar-checkbox">
                          <div className="row y-gap-10 items-center justify-between">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <div className="form-checkbox ">
                                  <input type="checkbox" name="review_score[]" defaultValue={5} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                </div>
                                <div className="text-15 ml-10">
                                  <i className="fa fa-star text-yellow-1" />
                                  <i className="fa fa-star text-yellow-1" />
                                  <i className="fa fa-star text-yellow-1" />
                                  <i className="fa fa-star text-yellow-1" />
                                  <i className="fa fa-star text-yellow-1" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row y-gap-10 items-center justify-between">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <div className="form-checkbox ">
                                  <input type="checkbox" name="review_score[]" defaultValue={4} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                </div>
                                <div className="text-15 ml-10">
                                  <i className="fa fa-star text-yellow-1" />
                                  <i className="fa fa-star text-yellow-1" />
                                  <i className="fa fa-star text-yellow-1" />
                                  <i className="fa fa-star text-yellow-1" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row y-gap-10 items-center justify-between">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <div className="form-checkbox ">
                                  <input type="checkbox" name="review_score[]" defaultValue={3} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                </div>
                                <div className="text-15 ml-10">
                                  <i className="fa fa-star text-yellow-1" />
                                  <i className="fa fa-star text-yellow-1" />
                                  <i className="fa fa-star text-yellow-1" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row y-gap-10 items-center justify-between">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <div className="form-checkbox ">
                                  <input type="checkbox" name="review_score[]" defaultValue={2} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                </div>
                                <div className="text-15 ml-10">
                                  <i className="fa fa-star text-yellow-1" />
                                  <i className="fa fa-star text-yellow-1" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row y-gap-10 items-center justify-between">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <div className="form-checkbox ">
                                  <input type="checkbox" name="review_score[]" defaultValue={1} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                </div>
                                <div className="text-15 ml-10">
                                  <i className="fa fa-star text-yellow-1" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sidebar__item g-filter-item">
                        <h5 className="text-18 fw-500 mb-10">Property type</h5>
                        <div className="sidebar-checkbox ">
                          <div className="row y-gap-10 items-center justify-between ">
                            <div className="col-auto">
                              <label className="cursor-pointer">
                                <div className="form-checkbox d-flex items-center">
                                  <input type="checkbox" name="attrs[5][]" defaultValue={32} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Apartments</div>
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
                                  <input type="checkbox" name="attrs[5][]" defaultValue={33} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Hotels</div>
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
                                  <input type="checkbox" name="attrs[5][]" defaultValue={34} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Homestays</div>
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
                                  <input type="checkbox" name="attrs[5][]" defaultValue={35} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Villas</div>
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
                                  <input type="checkbox" name="attrs[5][]" defaultValue={36} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Boats</div>
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
                                  <input type="checkbox" name="attrs[5][]" defaultValue={37} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Motels</div>
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
                                  <input type="checkbox" name="attrs[5][]" defaultValue={38} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Resorts</div>
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
                                  <input type="checkbox" name="attrs[5][]" defaultValue={39} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Lodges</div>
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
                                  <input type="checkbox" name="attrs[5][]" defaultValue={40} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Holiday homes</div>
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
                                  <input type="checkbox" name="attrs[5][]" defaultValue={41} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Cruises</div>
                                </div>
                              </label>
                            </div>
                            <div className="col-auto">
                              <div className="text-15 text-light-1" />
                            </div>
                          </div>
                          <button type="button" className="btn btn-link btn-more-item">More <i className="fa fa-caret-down" /></button>
                        </div>
                      </div>
                      <div className="sidebar__item g-filter-item">
                        <h5 className="text-18 fw-500 mb-10">Facilities</h5>
                        <div className="sidebar-checkbox ">
                          <div className="row y-gap-10 items-center justify-between ">
                            <div className="col-auto">
                              <label className="cursor-pointer">
                                <div className="form-checkbox d-flex items-center">
                                  <input type="checkbox" name="attrs[6][]" defaultValue={42} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Wake-up call</div>
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
                                  <input type="checkbox" name="attrs[6][]" defaultValue={43} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Car hire</div>
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
                                  <input type="checkbox" name="attrs[6][]" defaultValue={44} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Bicycle hire</div>
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
                                  <input type="checkbox" name="attrs[6][]" defaultValue={45} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Flat Tv</div>
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
                                  <input type="checkbox" name="attrs[6][]" defaultValue={46} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Laundry and dry cleaning
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
                                  <input type="checkbox" name="attrs[6][]" defaultValue={47} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Internet – Wifi</div>
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
                                  <input type="checkbox" name="attrs[6][]" defaultValue={48} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Coffee and tea</div>
                                </div>
                              </label>
                            </div>
                            <div className="col-auto">
                              <div className="text-15 text-light-1" />
                            </div>
                          </div>
                          <button type="button" className="btn btn-link btn-more-item">More <i className="fa fa-caret-down" /></button>
                        </div>
                      </div>
                      <div className="sidebar__item g-filter-item">
                        <h5 className="text-18 fw-500 mb-10">Hotel Service</h5>
                        <div className="sidebar-checkbox ">
                          <div className="row y-gap-10 items-center justify-between ">
                            <div className="col-auto">
                              <label className="cursor-pointer">
                                <div className="form-checkbox d-flex items-center">
                                  <input type="checkbox" name="attrs[7][]" defaultValue={49} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Havana Lobby bar</div>
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
                                  <input type="checkbox" name="attrs[7][]" defaultValue={50} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Fiesta Restaurant</div>
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
                                  <input type="checkbox" name="attrs[7][]" defaultValue={51} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Hotel transport services
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
                                  <input type="checkbox" name="attrs[7][]" defaultValue={52} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Free luggage deposit</div>
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
                                  <input type="checkbox" name="attrs[7][]" defaultValue={53} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Laundry Services</div>
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
                                  <input type="checkbox" name="attrs[7][]" defaultValue={54} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Pets welcome</div>
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
                                  <input type="checkbox" name="attrs[7][]" defaultValue={55} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Tickets</div>
                                </div>
                              </label>
                            </div>
                            <div className="col-auto">
                              <div className="text-15 text-light-1" />
                            </div>
                          </div>
                          <button type="button" className="btn btn-link btn-more-item">More <i className="fa fa-caret-down" /></button>
                        </div>
                      </div>
                      <div className="bravo-clear-filter hidden-lg-up" style={{"display":"none"}}>
                        <a href="#" className="button px-15 py-10 -dark-1 bg-blue-1 text-white">
                          <i className="icon-loop-2 mr-10 text-12" />
                          <span>Clear All</span>
                        </a>
                      </div>
                    </aside>
                  </form>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                {/* Results count and sort */}
                <div className="row y-gap-10 items-center justify-between">
                  <div className="col-auto">
                    <div className="text-18 fw-500 result-count">
                      41 hotels found
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="row x-gap-20 y-gap-20">
                      <div className="col-auto bc-form-order">
                        <div className="row x-gap-20 y-gap-20">
                          <div className="col-auto">
                            <div className="item d-flex align-items-center">
                              <div className="mr-5">
                                Sort by:
                              </div>
                              <input type="hidden" name="orderby" defaultValue />
                              <div className="dropdown orderby">
                                <span className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i className="icon-up-down text-14 mr-10" />
                                  <span className="dropdown-toggle">
                                    Recommended
                                  </span>
                                </span>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                  <a className="dropdown-item" href="#" data-value>Recommended</a>
                                  <a className="dropdown-item" href="#" data-value="price_low_high">Price (Low to high)</a>
                                  <a className="dropdown-item" href="#" data-value="price_high_low">Price (High to low)</a>
                                  <a className="dropdown-item" href="#" data-value="rate_high_low">Rating (High to low)</a>
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
                            <button data-x-click="filterPopup" className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
                              <i className="icon-up-down text-14 mr-10" />
                              Filter
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Results count and sort */}
                <div className="ajax-search-result">
                  <div className="pt-30 mt-30 border-top-light" />
                  <div className="row y-gap-30">
                   

                    <div className="row">
      {hotels.map((hotel) => (
        <HotelCard key={hotel._id} hotel={hotel} />
      ))}
    </div>


                    
                    <div className="col-lg-4 col-sm-6">
                      <div className="hotelsCard -type-1 item-loop item-loop-wrap">
                      <Link to="/HomeDetail">
                        <div className="hotelsCard__image">
                          <div className="cardImage ratio ratio-1:1">
                            <a >
                              <div className="cardImage__content">
                                <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Hotel WBF Hommachi" data-ll-status="loaded" src={pic} />
                              </div>
                            </a>
                            <div className="service-wishlist " data-id={42} data-type="hotel">
                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12" />
                                </button>
                              </div>
                            </div>
                            <div className="cardImage__leftBadge">
                            </div>
                          </div>
                        </div></Link>  <Link to="/HomeDetail">
                        <div className="hotelsCard__content mt-10">
                          <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                            <a className="text-dark-1-i" >
                              <span>Hotel WBF Hommachi</span></a>
                          </h4>
                          <p className="text-light-1 lh-14 text-14 mt-5">New York</p>
                          <div className="d-flex items-center mt-20">
                            <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
                              5.0</div>
                            <div className="text-14 text-dark-1 fw-500 ml-10">Excellent</div>
                            <div className="text-14 text-light-1 ml-10">
                              4 Reviews
                            </div>
                          </div>
                          <div className="mt-5">
                            <div className="fw-500">
                              Starting from
                              <div className="d-inline-flex justify-content-md-end align-baseline">
                                <div className="text-16 text-red-1 line-through mr-5" />
                                <div className="text-22 lh-12 fw-600 text-blue-1">$704</div>
                              </div>
                            </div>
                          </div>
                        </div></Link>
                      </div>
                    </div>
                     <div className="col-lg-4 col-sm-6">
                      <div className="hotelsCard -type-1 item-loop item-loop-wrap">
                      <Link to="/HomeDetail">
                        <div className="hotelsCard__image">
                          <div className="cardImage ratio ratio-1:1">
                            <a >
                              <div className="cardImage__content">
                                <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Hotel WBF Hommachi" data-ll-status="loaded" src={pic} />
                              </div>
                            </a>
                            <div className="service-wishlist " data-id={42} data-type="hotel">
                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12" />
                                </button>
                              </div>
                            </div>
                            <div className="cardImage__leftBadge">
                            </div>
                          </div>
                        </div></Link>  <Link to="/HomeDetail">
                        <div className="hotelsCard__content mt-10">
                          <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                            <a className="text-dark-1-i" >
                              <span>Hotel WBF Hommachi</span></a>
                          </h4>
                          <p className="text-light-1 lh-14 text-14 mt-5">New York</p>
                          <div className="d-flex items-center mt-20">
                            <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
                              5.0</div>
                            <div className="text-14 text-dark-1 fw-500 ml-10">Excellent</div>
                            <div className="text-14 text-light-1 ml-10">
                              4 Reviews
                            </div>
                          </div>
                          <div className="mt-5">
                            <div className="fw-500">
                              Starting from
                              <div className="d-inline-flex justify-content-md-end align-baseline">
                                <div className="text-16 text-red-1 line-through mr-5" />
                                <div className="text-22 lh-12 fw-600 text-blue-1">$704</div>
                              </div>
                            </div>
                          </div>
                        </div></Link>
                      </div>
                    </div>
                     <div className="col-lg-4 col-sm-6">
                      <div className="hotelsCard -type-1 item-loop item-loop-wrap">
                      <Link to="/HomeDetail">
                        <div className="hotelsCard__image">
                          <div className="cardImage ratio ratio-1:1">
                            <a >
                              <div className="cardImage__content">
                                <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Hotel WBF Hommachi" data-ll-status="loaded" src={pic} />
                              </div>
                            </a>
                            <div className="service-wishlist " data-id={42} data-type="hotel">
                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12" />
                                </button>
                              </div>
                            </div>
                            <div className="cardImage__leftBadge">
                            </div>
                          </div>
                        </div></Link>  <Link to="/HomeDetail">
                        <div className="hotelsCard__content mt-10">
                          <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                            <a className="text-dark-1-i" >
                              <span>Hotel WBF Hommachi</span></a>
                          </h4>
                          <p className="text-light-1 lh-14 text-14 mt-5">New York</p>
                          <div className="d-flex items-center mt-20">
                            <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
                              5.0</div>
                            <div className="text-14 text-dark-1 fw-500 ml-10">Excellent</div>
                            <div className="text-14 text-light-1 ml-10">
                              4 Reviews
                            </div>
                          </div>
                          <div className="mt-5">
                            <div className="fw-500">
                              Starting from
                              <div className="d-inline-flex justify-content-md-end align-baseline">
                                <div className="text-16 text-red-1 line-through mr-5" />
                                <div className="text-22 lh-12 fw-600 text-blue-1">$704</div>
                              </div>
                            </div>
                          </div>
                        </div></Link>
                      </div>
                    </div>
                     <div className="col-lg-4 col-sm-6">
                      <div className="hotelsCard -type-1 item-loop item-loop-wrap">
                      <Link to="/HomeDetail">
                        <div className="hotelsCard__image">
                          <div className="cardImage ratio ratio-1:1">
                            <a >
                              <div className="cardImage__content">
                                <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Hotel WBF Hommachi" data-ll-status="loaded" src={pic} />
                              </div>
                            </a>
                            <div className="service-wishlist " data-id={42} data-type="hotel">
                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12" />
                                </button>
                              </div>
                            </div>
                            <div className="cardImage__leftBadge">
                            </div>
                          </div>
                        </div></Link>  <Link to="/HomeDetail">
                        <div className="hotelsCard__content mt-10">
                          <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                            <a className="text-dark-1-i" >
                              <span>Hotel WBF Hommachi</span></a>
                          </h4>
                          <p className="text-light-1 lh-14 text-14 mt-5">New York</p>
                          <div className="d-flex items-center mt-20">
                            <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
                              5.0</div>
                            <div className="text-14 text-dark-1 fw-500 ml-10">Excellent</div>
                            <div className="text-14 text-light-1 ml-10">
                              4 Reviews
                            </div>
                          </div>
                          <div className="mt-5">
                            <div className="fw-500">
                              Starting from
                              <div className="d-inline-flex justify-content-md-end align-baseline">
                                <div className="text-16 text-red-1 line-through mr-5" />
                                <div className="text-22 lh-12 fw-600 text-blue-1">$704</div>
                              </div>
                            </div>
                          </div>
                        </div></Link>
                      </div>
                    </div> 
                    <div className="col-lg-4 col-sm-6">
                      <div className="hotelsCard -type-1 item-loop item-loop-wrap">
                      <Link to="/HomeDetail">
                        <div className="hotelsCard__image">
                          <div className="cardImage ratio ratio-1:1">
                            <a >
                              <div className="cardImage__content">
                                <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Hotel WBF Hommachi" data-ll-status="loaded" src={pic} />
                              </div>
                            </a>
                            <div className="service-wishlist " data-id={42} data-type="hotel">
                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12" />
                                </button>
                              </div>
                            </div>
                            <div className="cardImage__leftBadge">
                            </div>
                          </div>
                        </div></Link>  <Link to="/HomeDetail">
                        <div className="hotelsCard__content mt-10">
                          <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                            <a className="text-dark-1-i" >
                              <span>Hotel WBF Hommachi</span></a>
                          </h4>
                          <p className="text-light-1 lh-14 text-14 mt-5">New York</p>
                          <div className="d-flex items-center mt-20">
                            <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
                              5.0</div>
                            <div className="text-14 text-dark-1 fw-500 ml-10">Excellent</div>
                            <div className="text-14 text-light-1 ml-10">
                              4 Reviews
                            </div>
                          </div>
                          <div className="mt-5">
                            <div className="fw-500">
                              Starting from
                              <div className="d-inline-flex justify-content-md-end align-baseline">
                                <div className="text-16 text-red-1 line-through mr-5" />
                                <div className="text-22 lh-12 fw-600 text-blue-1">$704</div>
                              </div>
                            </div>
                          </div>
                        </div></Link>
                      </div>
                    </div> 
                    <div className="col-lg-4 col-sm-6">
                      <div className="hotelsCard -type-1 item-loop item-loop-wrap">
                      <Link to="/HomeDetail">
                        <div className="hotelsCard__image">
                          <div className="cardImage ratio ratio-1:1">
                            <a >
                              <div className="cardImage__content">
                                <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Hotel WBF Hommachi" data-ll-status="loaded" src={pic} />
                              </div>
                            </a>
                            <div className="service-wishlist " data-id={42} data-type="hotel">
                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12" />
                                </button>
                              </div>
                            </div>
                            <div className="cardImage__leftBadge">
                            </div>
                          </div>
                        </div></Link>  <Link to="/HomeDetail">
                        <div className="hotelsCard__content mt-10">
                          <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                            <a className="text-dark-1-i" >
                              <span>Hotel WBF Hommachi</span></a>
                          </h4>
                          <p className="text-light-1 lh-14 text-14 mt-5">New York</p>
                          <div className="d-flex items-center mt-20">
                            <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
                              5.0</div>
                            <div className="text-14 text-dark-1 fw-500 ml-10">Excellent</div>
                            <div className="text-14 text-light-1 ml-10">
                              4 Reviews
                            </div>
                          </div>
                          <div className="mt-5">
                            <div className="fw-500">
                              Starting from
                              <div className="d-inline-flex justify-content-md-end align-baseline">
                                <div className="text-16 text-red-1 line-through mr-5" />
                                <div className="text-22 lh-12 fw-600 text-blue-1">$704</div>
                              </div>
                            </div>
                          </div>
                        </div></Link>
                      </div>
                    </div> 
                    <div className="col-lg-4 col-sm-6">
                      <div className="hotelsCard -type-1 item-loop item-loop-wrap">
                      <Link to="/HomeDetail">
                        <div className="hotelsCard__image">
                          <div className="cardImage ratio ratio-1:1">
                            <a >
                              <div className="cardImage__content">
                                <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Hotel WBF Hommachi" data-ll-status="loaded" src={pic} />
                              </div>
                            </a>
                            <div className="service-wishlist " data-id={42} data-type="hotel">
                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12" />
                                </button>
                              </div>
                            </div>
                            <div className="cardImage__leftBadge">
                            </div>
                          </div>
                        </div></Link>  <Link to="/HomeDetail">
                        <div className="hotelsCard__content mt-10">
                          <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                            <a className="text-dark-1-i" >
                              <span>Hotel WBF Hommachi</span></a>
                          </h4>
                          <p className="text-light-1 lh-14 text-14 mt-5">New York</p>
                          <div className="d-flex items-center mt-20">
                            <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
                              5.0</div>
                            <div className="text-14 text-dark-1 fw-500 ml-10">Excellent</div>
                            <div className="text-14 text-light-1 ml-10">
                              4 Reviews
                            </div>
                          </div>
                          <div className="mt-5">
                            <div className="fw-500">
                              Starting from
                              <div className="d-inline-flex justify-content-md-end align-baseline">
                                <div className="text-16 text-red-1 line-through mr-5" />
                                <div className="text-22 lh-12 fw-600 text-blue-1">$704</div>
                              </div>
                            </div>
                          </div>
                        </div></Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="hotelsCard -type-1 item-loop item-loop-wrap">
                      <Link to="/HomeDetail">
                        <div className="hotelsCard__image">
                          <div className="cardImage ratio ratio-1:1">
                            <a >
                              <div className="cardImage__content">
                                <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Hotel WBF Hommachi" data-ll-status="loaded" src={pic} />
                              </div>
                            </a>
                            <div className="service-wishlist " data-id={42} data-type="hotel">
                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12" />
                                </button>
                              </div>
                            </div>
                            <div className="cardImage__leftBadge">
                            </div>
                          </div>
                        </div></Link>  <Link to="/HomeDetail">
                        <div className="hotelsCard__content mt-10">
                          <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                            <a className="text-dark-1-i" >
                              <span>Hotel WBF Hommachi</span></a>
                          </h4>
                          <p className="text-light-1 lh-14 text-14 mt-5">New York</p>
                          <div className="d-flex items-center mt-20">
                            <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
                              5.0</div>
                            <div className="text-14 text-dark-1 fw-500 ml-10">Excellent</div>
                            <div className="text-14 text-light-1 ml-10">
                              4 Reviews
                            </div>
                          </div>
                          <div className="mt-5">
                            <div className="fw-500">
                              Starting from
                              <div className="d-inline-flex justify-content-md-end align-baseline">
                                <div className="text-16 text-red-1 line-through mr-5" />
                                <div className="text-22 lh-12 fw-600 text-blue-1">$704</div>
                              </div>
                            </div>
                          </div>
                        </div></Link>
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
                              <div className="size-40 flex-center rounded-full p-link">1</div>
                            </div>
                            <div className="col-auto p-item">
                              <a  className="size-40 flex-center rounded-full p-link">2</a>
                            </div>
                            <div className="col-auto p-item">
                              <a  className="size-40 flex-center rounded-full p-link">3</a>
                            </div>
                            <div className="col-auto p-item">
                              <a  className="size-40 flex-center rounded-full p-link">4</a>
                            </div>
                            <div className="col-auto p-item">
                              <a  className="size-40 flex-center rounded-full p-link">5</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto md:order-2 p-item">
                          <a  className="button -blue-1 size-40 rounded-full border-light">
                            <i className="icon-chevron-right text-12" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-30 md:mt-10">
                      <div className="text-14 text-light-1">Showing 1 - 9 of 41 hotels</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    
      
      {/* Custom script for all pages */}
    </div>
    <div className="daterangepicker ltr auto-apply show-calendar openscenter">
      <div className="ranges" />
      <div className="drp-calendar left">
        <div className="calendar-table" />
        <div className="calendar-time" style={{"display":"none"}} />
      </div>
      <div className="drp-calendar right">
        <div className="calendar-table" />
        <div className="calendar-time" style={{"display":"none"}} />
      </div>
      <div className="drp-buttons"><span className="drp-selected">2023-11-08 - 2023-11-08</span><button className="cancelBtn btn btn-sm btn-default" type="button">Cancel</button><button className="applyBtn btn btn-sm btn-primary" disabled="disabled" type="button">Apply</button> </div>
    </div>
  </div>
  
  
  );
}
