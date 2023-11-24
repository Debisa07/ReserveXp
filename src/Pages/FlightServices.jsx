import React from "react";
import map from "../assets/image/icon-map.png"
import 'font-awesome/css/font-awesome.min.css';
import { Link, } from 'react-router-dom';
import im1 from "../assets/image/img1.jpg"
import im2 from "../assets/image/img2.jpg"
import im3 from "../assets/image/img3.jpg"


export default function FlightServices() {

  return (
    <div style={{ marginLeft: "-60px", marginTop: "-15px" }}>
      <div className="bravo_wrap overflow-hidden">
       
        <div className="bravo_search_flight">
          <div className="container">
            <div className=" pt-40 pb-40">
              <div className="text-center">
                <h1 className="text-30 fw-600">
                  Search for flight
                </h1>
              </div>
              <form className="gotrip_form_search bravo_form_search bravo_form form  form-search-all-service mainSearch -col-5 border-light rounded-4 pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 mt-15" method="get">
                <div className="field-items">
                  <div className="row w-100 m-0">
                    <div className="col-lg-3 align-self-center px-30 lg:py-20 lg:px-0">
                      <div className="searchMenu-loc js-form-dd js-liverSearch item">
                        <span className="clear-loc absolute bottom-0 text-12"><i className="icon-close" /></span>
                        <div data-x-dd-click="searchMenu-loc">
                          <h4 className="text-15 fw-500 ls-2 lh-16">From where</h4>
                          <div className="text-15 text-light-1 ls-2 lh-16   ">
                            <input type="hidden" name="from_where" className="js-search-get-id" defaultValue />
                            <input type="text" autoComplete="off" readOnly className="smart-search-location parent_text js-search js-dd-focus" placeholder="Where are you going?" defaultValue data-onload="Loading..." data-default="[{&quot;id&quot;:1,&quot;title&quot;:&quot; Paris&quot;},{&quot;id&quot;:2,&quot;title&quot;:&quot; California&quot;},{&quot;id&quot;:3,&quot;title&quot;:&quot; United States&quot;},{&quot;id&quot;:4,&quot;title&quot;:&quot; Los Angeles&quot;},{&quot;id&quot;:5,&quot;title&quot;:&quot; New Jersey&quot;},{&quot;id&quot;:6,&quot;title&quot;:&quot; San Francisco&quot;},{&quot;id&quot;:7,&quot;title&quot;:&quot; Virginia&quot;},{&quot;id&quot;:8,&quot;title&quot;:&quot; Germany&quot;},{&quot;id&quot;:9,&quot;title&quot;:&quot; New York&quot;},{&quot;id&quot;:10,&quot;title&quot;:&quot; London&quot;},{&quot;id&quot;:11,&quot;title&quot;:&quot; Barcelona&quot;},{&quot;id&quot;:12,&quot;title&quot;:&quot; Sydney&quot;},{&quot;id&quot;:13,&quot;title&quot;:&quot; Rome&quot;},{&quot;id&quot;:14,&quot;title&quot;:&quot; Reykjavik&quot;}]" />
                          </div>
                        </div>
                        <div className="searchMenu-loc__field shadow-2 js-popup-window" data-x-dd="searchMenu-loc" data-x-dd-toggle="-is-active">
                          <div className="bg-white px-30 py-30 sm:px-0 sm:py-15 rounded-4">
                            <div className="y-gap-5 js-results">
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={1}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> Paris</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={2}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> California</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={3}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> United States</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={4}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> Los Angeles</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={5}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> New Jersey</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={6}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> San Francisco</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={7}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> Virginia</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={8}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> Germany</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={9}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> New York</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={10}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> London</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={11}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> Barcelona</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={12}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> Sydney</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={13}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> Rome</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={14}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> Reykjavik</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 align-self-center px-30 lg:py-20 lg:px-0">
                      <div className="searchMenu-loc js-form-dd js-liverSearch item">
                        <span className="clear-loc absolute bottom-0 text-12"><i className="icon-close" /></span>
                        <div data-x-dd-click="searchMenu-loc">
                          <h4 className="text-15 fw-500 ls-2 lh-16">To where</h4>
                          <div className="text-15 text-light-1 ls-2 lh-16   ">
                            <input type="hidden" name="to_where" className="js-search-get-id" defaultValue />
                            <input type="text" autoComplete="off" readOnly className="smart-search-location parent_text js-search js-dd-focus" placeholder="Where are you going?" defaultValue data-onload="Loading..." data-default="[{&quot;id&quot;:1,&quot;title&quot;:&quot; Paris&quot;},{&quot;id&quot;:2,&quot;title&quot;:&quot; California&quot;},{&quot;id&quot;:3,&quot;title&quot;:&quot; United States&quot;},{&quot;id&quot;:4,&quot;title&quot;:&quot; Los Angeles&quot;},{&quot;id&quot;:5,&quot;title&quot;:&quot; New Jersey&quot;},{&quot;id&quot;:6,&quot;title&quot;:&quot; San Francisco&quot;},{&quot;id&quot;:7,&quot;title&quot;:&quot; Virginia&quot;},{&quot;id&quot;:8,&quot;title&quot;:&quot; Germany&quot;},{&quot;id&quot;:9,&quot;title&quot;:&quot; New York&quot;},{&quot;id&quot;:10,&quot;title&quot;:&quot; London&quot;},{&quot;id&quot;:11,&quot;title&quot;:&quot; Barcelona&quot;},{&quot;id&quot;:12,&quot;title&quot;:&quot; Sydney&quot;},{&quot;id&quot;:13,&quot;title&quot;:&quot; Rome&quot;},{&quot;id&quot;:14,&quot;title&quot;:&quot; Reykjavik&quot;}]" />
                          </div>
                        </div>
                        <div className="searchMenu-loc__field shadow-2 js-popup-window" data-x-dd="searchMenu-loc" data-x-dd-toggle="-is-active">
                          <div className="bg-white px-30 py-30 sm:px-0 sm:py-15 rounded-4">
                            <div className="y-gap-5 js-results">
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={1}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> Paris</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={2}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> California</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={3}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> United States</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={4}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> Los Angeles</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={5}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> New Jersey</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={6}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> San Francisco</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={7}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> Virginia</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={8}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> Germany</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={9}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> New York</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={10}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> London</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={11}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> Barcelona</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={12}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> Sydney</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={13}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> Rome</div>
                                  </div>
                                </div>
                              </div>
                              <div className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option" data-id={14}>
                                <div className="d-flex align-items-center">
                                  <div className="icon-location-2 text-light-1 text-20 pt-4" />
                                  <div className="ml-10">
                                    <div className="text-15 lh-12 fw-500 js-search-option-target"> Reykjavik</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 align-self-center px-30 lg:py-20 lg:px-0">
                      <div className="searchMenu-date form-date-search-hotel position-relative item">
                        <div className="date-wrapper" data-x-dd-click="searchMenu-date">
                          <h4 className="text-15 fw-500 ls-2 lh-16">Depart</h4>
                          <div className="text-14 text-light-1 ls-2 lh-16 check-in-out-render">
                            <span className="js-first-date render check-in-render">11/09/2023</span>
                            -
                            <span className="js-last-date render check-out-render">11/10/2023</span>
                          </div>
                        </div>
                        <input type="hidden" className="check-in-input has-value" defaultValue="11/09/2023" name="start" />
                        <input type="hidden" className="check-out-input has-value" defaultValue="11/10/2023" name="end" />
                        <input type="text" className="check-in-out absolute invisible has-value" name="date" defaultValue="2023-11-09 - 2023-11-10" />
                      </div>
                    </div>
                    <div className="col-lg-3 align-self-center px-30 lg:py-20 lg:px-0">
                      <div className="searchMenu-guests js-form-dd form-select-seat-type item">
                        <div data-x-dd-click="searchMenu-guests" className="overflow-hidden seat-input">
                          <h4 className="text-15 fw-500 ls-2 lh-16">Travelers</h4>
                          <div className="text-15 text-light-1 ls-2 lh-16">
                            <div className="render text-13">
                              <span className id="seat_type_vip_render">
                                <span className="one ">0 Vip</span>
                                <span className=" d-none  multi" data-html=":count Vip">0Vip</span>
                              </span>
                              <span className id="seat_type_eco_render">
                                <span className="one ">0 Economy</span>
                                <span className=" d-none  multi" data-html=":count Economy">0Economy</span>
                              </span>
                              <span className id="seat_type_premium_render">
                                <span className="one ">0 Premium</span>
                                <span className=" d-none  multi" data-html=":count Premium">0Premium</span>
                              </span>
                              <span className id="seat_type_business_render">
                                <span className="one ">0 Business</span>
                                <span className=" d-none  multi" data-html=":count Business">0Business</span>
                              </span>
                              <span className id="seat_type_fist_class_render">
                                <span className="one ">0 First Class</span>
                                <span className=" d-none  multi" data-html=":count First Class">0First Class</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="searchMenu-guests__field select-seat-type-dropdown shadow-2" data-x-dd="searchMenu-guests" data-x-dd-toggle="-is-active">
                          <div className="bg-white px-30 py-30 rounded-4">
                            <div className="row y-gap-10 justify-between items-center">
                              <div className="col-auto">
                                <div className="text-15 fw-500">Adults Vip</div>
                              </div>
                              <div className="col-auto">
                                <div className="d-flex items-center">
                                  <span className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-minus" data-input="seat_type_vip" data-input-attr="id"><i className="icon-minus text-12" /></span>
                                  <span className="flex-center size-20 ml-15 mr-15 count-display">
                                    <input id="seat_type_vip" type="number" name="seat_type[vip]" defaultValue={0} min={0} className="has-value" />
                                  </span>
                                  <span className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-add" data-input="seat_type_vip" data-input-attr="id"><i className="icon-plus text-12" /></span>
                                </div>
                              </div>
                            </div>
                            <div className="row y-gap-10 justify-between items-center">
                              <div className="col-auto">
                                <div className="text-15 fw-500">Adults Economy</div>
                              </div>
                              <div className="col-auto">
                                <div className="d-flex items-center">
                                  <span className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-minus" data-input="seat_type_eco" data-input-attr="id"><i className="icon-minus text-12" /></span>
                                  <span className="flex-center size-20 ml-15 mr-15 count-display">
                                    <input id="seat_type_eco" type="number" name="seat_type[eco]" defaultValue={0} min={0} className="has-value" />
                                  </span>
                                  <span className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-add" data-input="seat_type_eco" data-input-attr="id"><i className="icon-plus text-12" /></span>
                                </div>
                              </div>
                            </div>
                            <div className="row y-gap-10 justify-between items-center">
                              <div className="col-auto">
                                <div className="text-15 fw-500">Adults Premium</div>
                              </div>
                              <div className="col-auto">
                                <div className="d-flex items-center">
                                  <span className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-minus" data-input="seat_type_premium" data-input-attr="id"><i className="icon-minus text-12" /></span>
                                  <span className="flex-center size-20 ml-15 mr-15 count-display">
                                    <input id="seat_type_premium" type="number" name="seat_type[premium]" defaultValue={0} min={0} className="has-value" />
                                  </span>
                                  <span className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-add" data-input="seat_type_premium" data-input-attr="id"><i className="icon-plus text-12" /></span>
                                </div>
                              </div>
                            </div>
                            <div className="row y-gap-10 justify-between items-center">
                              <div className="col-auto">
                                <div className="text-15 fw-500">Adults Business</div>
                              </div>
                              <div className="col-auto">
                                <div className="d-flex items-center">
                                  <span className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-minus" data-input="seat_type_business" data-input-attr="id"><i className="icon-minus text-12" /></span>
                                  <span className="flex-center size-20 ml-15 mr-15 count-display">
                                    <input id="seat_type_business" type="number" name="seat_type[business]" defaultValue={0} min={0} className="has-value" />
                                  </span>
                                  <span className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-add" data-input="seat_type_business" data-input-attr="id"><i className="icon-plus text-12" /></span>
                                </div>
                              </div>
                            </div>
                            <div className="row y-gap-10 justify-between items-center">
                              <div className="col-auto">
                                <div className="text-15 fw-500">Adults First Class</div>
                              </div>
                              <div className="col-auto">
                                <div className="d-flex items-center">
                                  <span className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-minus" data-input="seat_type_fist_class" data-input-attr="id"><i className="icon-minus text-12" /></span>
                                  <span className="flex-center size-20 ml-15 mr-15 count-display">
                                    <input id="seat_type_fist_class" type="number" name="seat_type[fist_class]" defaultValue={0} min={0} className="has-value" />
                                  </span>
                                  <span className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-add" data-input="seat_type_fist_class" data-input-attr="id"><i className="icon-plus text-12" /></span>
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
          <div className="layout-pt-md layout-pb-md bg-light-2">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4">
                  <div className="sidebar py-20 px-20 rounded-4 bg-white bravo_filter">
                    <form className="bravo_form_filter row y-gap-40">
                      <div className="sidebar__item pb-30 -no-border">
                        <h5 className="text-18 fw-500 mb-10">Price</h5>
                        <div className="row x-gap-10 y-gap-30">
                          <div className="col-12">
                            <div className="js-price-searchPage">
                              <div className="text-14 fw-500" />
                              <input type="hidden" className="filter-price irs-hidden-input" name="price_range" data-symbol=" $" data-min={10} data-max={20000} data-from={10} data-to={20000} readOnly defaultValue />
                              <div className="d-flex justify-between mb-20">
                                <div className="text-15 text-dark-1">
                                  <span className="js-lower"> $10</span>
                                  -
                                  <span className="js-upper"> $20000</span>
                                </div>
                              </div>
                              <div className="px-5">
                                <div className="js-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"><div className="noUi-base"><div className="noUi-connects"><div className="noUi-connect" style={{ "-webkit-transform": "translate(0%) scale(1)", "-ms-transform": "translate(0%) scale(1)", "transform": "translate(0%) scale(1)" }} /></div><div className="noUi-origin" style={{ "-webkit-transform": "translate(-100%)", "-ms-transform": "translate(-100%)", "transform": "translate(-100%)", "z-index": "5" }}><div className="noUi-handle noUi-handle-lower" data-handle={0} tabIndex={0} role="slider" aria-orientation="horizontal" aria-valuemin={10.0} aria-valuemax={20000.0} aria-valuenow={10.0} aria-valuetext=" $10"><div className="noUi-touch-area" /></div></div><div className="noUi-origin" style={{ "-webkit-transform": "translate(0%)", "-ms-transform": "translate(0%)", "transform": "translate(0%)", "z-index": "4" }}><div className="noUi-handle noUi-handle-upper" data-handle={1} tabIndex={0} role="slider" aria-orientation="horizontal" aria-valuemin={10.0} aria-valuemax={20000.0} aria-valuenow={20000.0} aria-valuetext=" $20000"><div className="noUi-touch-area" /></div></div></div></div>
                                <button type="submit" className="flex-center bg-blue-1 rounded-4 px-3 py-1 mt-3 text-12 fw-600 text-white btn-apply-price-range mt-20">APPLY</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sidebar__item g-filter-item">
                        <h5 className="text-18 fw-500 mb-10">Flight Type</h5>
                        <div className="sidebar-checkbox ">
                          <div className="row y-gap-10 items-center justify-between ">
                            <div className="col-auto">
                              <label className="cursor-pointer">
                                <div className="form-checkbox d-flex items-center">
                                  <input type="checkbox" name="attrs[13][]" defaultValue={88} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Business</div>
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
                                  <input type="checkbox" name="attrs[13][]" defaultValue={89} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">First Class</div>
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
                                  <input type="checkbox" name="attrs[13][]" defaultValue={90} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Economy</div>
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
                                  <input type="checkbox" name="attrs[13][]" defaultValue={91} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Premium Economy</div>
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
                        <h5 className="text-18 fw-500 mb-10">Inflight Experience</h5>
                        <div className="sidebar-checkbox ">
                          <div className="row y-gap-10 items-center justify-between ">
                            <div className="col-auto">
                              <label className="cursor-pointer">
                                <div className="form-checkbox d-flex items-center">
                                  <input type="checkbox" name="attrs[14][]" defaultValue={92} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Inflight Dining</div>
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
                                  <input type="checkbox" name="attrs[14][]" defaultValue={93} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Music</div>
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
                                  <input type="checkbox" name="attrs[14][]" defaultValue={94} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Sky Shopping</div>
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
                                  <input type="checkbox" name="attrs[14][]" defaultValue={95} className="has-value" />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                  </div>
                                  <div className="text-15 ml-10">Seats &amp; Cabin</div>
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
                      <div className="bravo-clear-filter hidden-lg-up" style={{ "display": "none" }}>
                        <a href="#" className="button px-15 py-10 -dark-1 bg-blue-1 text-white">
                          <i className="icon-loop-2 mr-10 text-12" />
                          <span>Clear All</span>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-8">
                  <div className="bravo-list-item">
                    <div className="row y-gap-10 justify-between items-center">
                      <div className="col-auto">
                        <div className="text-18">
                          <span className="fw-500 result-count">
                            61 flights found
                          </span>
                        </div>
                      </div>
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
                        </div>
                      </div>
                    </div>
                    <div id="flightFormBook" className="ajax-search-result"><div className="row"><div className="col-lg-12"><div data-x="flight-item-62" data-x-toggle="shadow-62" className="py-30 px-30 bg-white rounded-4 base-tr mt-30 item-loop-wrap inner-loop-wrap"><div className="row y-gap-30 justify-between"><div className="col"><div className="row y-gap-10 items-center"><div className="col-sm-auto"><div className="has-skeleton"><img src={im3} alt="Priceville" className="size-40" /></div></div> <div className="col"><div className="row x-gap-20 items-end"><div className="col-auto"><div className="has-skeleton"><div className="lh-15 fw-500">Tue Nov 07 01:00 AM</div> <div className="text-15 lh-15 text-light-1">West Stephon</div></div></div> <div className="col text-center"><div className="flightLine"><div /> <div /></div></div> <div className="col-auto"><div className="has-skeleton"><div className="lh-15 fw-500">Sun Nov 05 02:00 AM</div> <div className="text-15 lh-15 text-light-1">Faustinostad</div></div></div></div></div> <div className="col-md-auto"><div className="text-15 text-light-1 px-20 md:px-0 has-skeleton">23h</div></div></div></div> <div className="col-md-auto"><div className="has-skeleton"><div className="d-flex items-center h-full"><div className="pl-30 border-left-light h-full md:d-none" /> <div><div className="text-right md:text-left mb-10"><div className="text-18 lh-16 fw-500">$10.000</div> <div className="text-15 lh-16 text-light-1">avg/person</div></div> <div className="accordion__button"><a data-id={62} href className="button -dark-1 px-30 h-50 bg-blue-1 text-white btn-choose-flight">  <div className="button-item">
                      <button className="mainSearch__submit button  -dark-1 py-15 col-12 bg-blue-1 text-white w-100 rounded-4" type="submit">
                        <span className="text-search">Choose</span>
                      </button>
                    </div> <div className="icon-arrow-top-right ml-15" /></a></div></div></div></div></div></div></div> <div className="card w-100 shadow-hover-3 mb-4 d-none"><a href="#" tabIndex={0} className="d-block mb-0 mx-1 mt-1 p-3"><img src={im3} alt="Priceville" className="card-img-top" /></a> <div className="card-body px-3 pt-0 pb-3 my-0 mx-1"><div className="row"><div className="col-7"><a href="#" tabIndex={0} className="card-title text-dark font-size-17 font-weight-bold">West Stephon</a></div> <div className="col-5"><div className="text-right"><h6 className="font-weight-bold font-size-17 text-gray-3 mb-0">$10.000</h6> <span className="font-weight-normal font-size-12 d-block text-color-1">avg/person</span></div></div></div></div> <div className="mb-3"><div className="border-bottom pb-3 mb-3"><div className="px-3"><div className="d-flex mx-1"><i className="icofont-airplane font-size-30 text-primary mr-3" /> <div className="d-flex flex-column"><span className="font-weight-normal text-gray-5">Take off</span> <span className="font-size-14 text-gray-1">Tue Nov 07 01:00 AM</span></div></div></div></div> <div className="border-bottom pb-3 mb-3"><div className="px-3"><div className="d-flex mx-1"><i className="d-block rotate-90 icofont-airplane-alt font-size-30 text-primary mr-3" /> <div className="d-flex flex-column"><span className="font-weight-normal text-gray-5">Landing</span> <span className="font-size-14 text-gray-1">Sun Nov 05 02:00 AM</span></div></div></div></div> <div className="d-flex justify-content-center pl-3 pr-3"><a href className="btn btn-primary text-white btn-choose w-100"> <button className="mainSearch__submit button  -dark-1 py-15 col-12 bg-blue-1 text-white w-100 rounded-4" type="submit">
                      <span className="text-search">Choose</span>
                    </button></a></div></div></div></div> <div className="col-lg-12"><div data-x="flight-item-60" data-x-toggle="shadow-60" className="py-30 px-30 bg-white rounded-4 base-tr mt-30 item-loop-wrap inner-loop-wrap"><div className="row y-gap-30 justify-between"><div className="col"><div className="row y-gap-10 items-center"><div className="col-sm-auto"><div className="has-skeleton"><img src={im2} alt="North Sabrina" className="size-40" /></div></div> <div className="col"><div className="row x-gap-20 items-end"><div className="col-auto"><div className="has-skeleton"><div className="lh-15 fw-500">Sat Oct 28 08:02 AM</div> <div className="text-15 lh-15 text-light-1">Samantaview</div></div></div> <div className="col text-center"><div className="flightLine"><div /> <div /></div></div> <div className="col-auto"><div className="has-skeleton"><div className="lh-15 fw-500">Sat Oct 28 15:02 PM</div> <div className="text-15 lh-15 text-light-1">South Amara</div></div></div></div></div> <div className="col-md-auto"><div className="text-15 text-light-1 px-20 md:px-0 has-skeleton">7h</div></div></div></div> <div className="col-md-auto"><div className="has-skeleton"><div className="d-flex items-center h-full"><div className="pl-30 border-left-light h-full md:d-none" /> <div><div className="text-right md:text-left mb-10"><div className="text-18 lh-16 fw-500">$61</div> <div className="text-15 lh-16 text-light-1">avg/person</div></div> <div className="accordion__button"><a data-id={60} href className="button -dark-1 px-30 h-50 bg-blue-1 text-white btn-choose-flight"> <button className="mainSearch__submit button  -dark-1 py-15 col-12 bg-blue-1 text-white w-100 rounded-4" type="submit">
                      <span className="text-search">Choose</span>
                    </button> <div className="icon-arrow-top-right ml-15" /></a></div></div></div></div></div></div></div> <div className="card w-100 shadow-hover-3 mb-4 d-none"><a href="#" tabIndex={0} className="d-block mb-0 mx-1 mt-1 p-3"><img src={im2} alt="North Sabrina" className="card-img-top" /></a> <div className="card-body px-3 pt-0 pb-3 my-0 mx-1"><div className="row"><div className="col-7"><a href="#" tabIndex={0} className="card-title text-dark font-size-17 font-weight-bold">Samantaview</a></div> <div className="col-5"><div className="text-right"><h6 className="font-weight-bold font-size-17 text-gray-3 mb-0">$61</h6> <span className="font-weight-normal font-size-12 d-block text-color-1">avg/person</span></div></div></div></div> <div className="mb-3"><div className="border-bottom pb-3 mb-3"><div className="px-3"><div className="d-flex mx-1"><i className="icofont-airplane font-size-30 text-primary mr-3" /> <div className="d-flex flex-column"><span className="font-weight-normal text-gray-5">Take off</span> <span className="font-size-14 text-gray-1">Sat Oct 28 08:02 AM</span></div></div></div></div> <div className="border-bottom pb-3 mb-3"><div className="px-3"><div className="d-flex mx-1"><i className="d-block rotate-90 icofont-airplane-alt font-size-30 text-primary mr-3" /> <div className="d-flex flex-column"><span className="font-weight-normal text-gray-5">Landing</span> <span className="font-size-14 text-gray-1">Sat Oct 28 15:02 PM</span></div></div></div></div> <div className="d-flex justify-content-center pl-3 pr-3"><a href className="btn btn-primary text-white btn-choose w-100"> <button className="mainSearch__submit button  -dark-1 py-15 col-12 bg-blue-1 text-white w-100 rounded-4" type="submit">
                      <span className="text-search">Choose</span>
                    </button></a></div></div></div></div> <div className="col-lg-12"><div data-x="flight-item-59" data-x-toggle="shadow-59" className="py-30 px-30 bg-white rounded-4 base-tr mt-30 item-loop-wrap inner-loop-wrap"><div className="row y-gap-30 justify-between"><div className="col"><div className="row y-gap-10 items-center"><div className="col-sm-auto"><div className="has-skeleton"><img src={im1} alt="Reynaburgh" className="size-40" /></div></div> <div className="col"><div className="row x-gap-20 items-end"><div className="col-auto"><div className="has-skeleton"><div className="lh-15 fw-500">Fri Nov 03 10:56 AM</div> <div className="text-15 lh-15 text-light-1">New Freddyberg</div></div></div> <div className="col text-center"><div className="flightLine"><div /> <div /></div></div> <div className="col-auto"><div className="has-skeleton"><div className="lh-15 fw-500">Fri Nov 03 15:56 PM</div> <div className="text-15 lh-15 text-light-1">South Jaren</div></div></div></div></div> <div className="col-md-auto"><div className="text-15 text-light-1 px-20 md:px-0 has-skeleton">5h</div></div></div></div> <div className="col-md-auto"><div className="has-skeleton"><div className="d-flex items-center h-full"><div className="pl-30 border-left-light h-full md:d-none" /> <div><div className="text-right md:text-left mb-10"><div className="text-18 lh-16 fw-500">$45</div> <div className="text-15 lh-16 text-light-1">avg/person</div></div> <div className="accordion__button"><a data-id={59} href className="button -dark-1 px-30 h-50 bg-blue-1 text-white btn-choose-flight"> <button className="mainSearch__submit button  -dark-1 py-15 col-12 bg-blue-1 text-white w-100 rounded-4" type="submit">
                      <span className="text-search">Choose</span>
                    </button> <div className="icon-arrow-top-right ml-15" /></a></div></div></div></div></div></div></div> <div className="card w-100 shadow-hover-3 mb-4 d-none"><a href="#" tabIndex={0} className="d-block mb-0 mx-1 mt-1 p-3"><img src={im1} alt="Reynaburgh" className="card-img-top" /></a> <div className="card-body px-3 pt-0 pb-3 my-0 mx-1"><div className="row"><div className="col-7"><a href="#" tabIndex={0} className="card-title text-dark font-size-17 font-weight-bold">New Freddyberg</a></div> <div className="col-5"><div className="text-right"><h6 className="font-weight-bold font-size-17 text-gray-3 mb-0">$45</h6> <span className="font-weight-normal font-size-12 d-block text-color-1">avg/person</span></div></div></div></div> <div className="mb-3"><div className="border-bottom pb-3 mb-3"><div className="px-3"><div className="d-flex mx-1"><i className="icofont-airplane font-size-30 text-primary mr-3" /> <div className="d-flex flex-column"><span className="font-weight-normal text-gray-5">Take off</span> <span className="font-size-14 text-gray-1">Fri Nov 03 10:56 AM</span></div></div></div></div> <div className="border-bottom pb-3 mb-3"><div className="px-3"><div className="d-flex mx-1"><i className="d-block rotate-90 icofont-airplane-alt font-size-30 text-primary mr-3" /> <div className="d-flex flex-column"><span className="font-weight-normal text-gray-5">Landing</span> <span className="font-size-14 text-gray-1">Fri Nov 03 15:56 PM</span></div></div></div></div> <div className="d-flex justify-content-center pl-3 pr-3"><a href className="btn btn-primary text-white btn-choose w-100"> <button className="mainSearch__submit button  -dark-1 py-15 col-12 bg-blue-1 text-white w-100 rounded-4" type="submit">
                      <span className="text-search">Choose</span>
                    </button></a></div></div></div></div> <div className="col-lg-12"><div data-x="flight-item-58" data-x-toggle="shadow-58" className="py-30 px-30 bg-white rounded-4 base-tr mt-30 item-loop-wrap inner-loop-wrap"><div className="row y-gap-30 justify-between"><div className="col"><div className="row y-gap-10 items-center"><div className="col-sm-auto"><div className="has-skeleton"><img src={im3} alt="Bernadinechester" className="size-40" /></div></div> <div className="col"><div className="row x-gap-20 items-end"><div className="col-auto"><div className="has-skeleton"><div className="lh-15 fw-500">Tue Nov 14 22:04 PM</div> <div className="text-15 lh-15 text-light-1">West Frankfort</div></div></div> <div className="col text-center"><div className="flightLine"><div /> <div /></div></div> <div className="col-auto"><div className="has-skeleton"><div className="lh-15 fw-500">Tue Nov 14 23:04 PM</div> <div className="text-15 lh-15 text-light-1">North Kiannaberg</div></div></div></div></div> <div className="col-md-auto"><div className="text-15 text-light-1 px-20 md:px-0 has-skeleton">1h</div></div></div></div> <div className="col-md-auto"><div className="has-skeleton"><div className="d-flex items-center h-full"><div className="pl-30 border-left-light h-full md:d-none" /> <div><div className="text-right md:text-left mb-10"><div className="text-18 lh-16 fw-500">$35</div> <div className="text-15 lh-16 text-light-1">avg/person</div></div> <div className="accordion__button"><a data-id={58} href className="button -dark-1 px-30 h-50 bg-blue-1 text-white btn-choose-flight"> <button className="mainSearch__submit button  -dark-1 py-15 col-12 bg-blue-1 text-white w-100 rounded-4" type="submit">
                      <span className="text-search">Choose</span>
                    </button> <div className="icon-arrow-top-right ml-15" /></a></div></div></div></div></div></div></div> <div className="card w-100 shadow-hover-3 mb-4 d-none"><a href="#" tabIndex={0} className="d-block mb-0 mx-1 mt-1 p-3"><img src={im3} alt="Bernadinechester" className="card-img-top" /></a> <div className="card-body px-3 pt-0 pb-3 my-0 mx-1"><div className="row"><div className="col-7"><a href="#" tabIndex={0} className="card-title text-dark font-size-17 font-weight-bold">West Frankfort</a></div> <div className="col-5"><div className="text-right"><h6 className="font-weight-bold font-size-17 text-gray-3 mb-0">$35</h6> <span className="font-weight-normal font-size-12 d-block text-color-1">avg/person</span></div></div></div></div> <div className="mb-3"><div className="border-bottom pb-3 mb-3"><div className="px-3"><div className="d-flex mx-1"><i className="icofont-airplane font-size-30 text-primary mr-3" /> <div className="d-flex flex-column"><span className="font-weight-normal text-gray-5">Take off</span> <span className="font-size-14 text-gray-1">Tue Nov 14 22:04 PM</span></div></div></div></div> <div className="border-bottom pb-3 mb-3"><div className="px-3"><div className="d-flex mx-1"><i className="d-block rotate-90 icofont-airplane-alt font-size-30 text-primary mr-3" /> <div className="d-flex flex-column"><span className="font-weight-normal text-gray-5">Landing</span> <span className="font-size-14 text-gray-1">Tue Nov 14 23:04 PM</span></div></div></div></div> <div className="d-flex justify-content-center pl-3 pr-3"><a href className="btn btn-primary text-white btn-choose w-100"> <button className="mainSearch__submit button  -dark-1 py-15 col-12 bg-blue-1 text-white w-100 rounded-4" type="submit">
                      <span className="text-search">Choose</span>
                    </button></a></div></div></div></div> <div className="col-lg-12"><div data-x="flight-item-57" data-x-toggle="shadow-57" className="py-30 px-30 bg-white rounded-4 base-tr mt-30 item-loop-wrap inner-loop-wrap"><div className="row y-gap-30 justify-between"><div className="col"><div className="row y-gap-10 items-center"><div className="col-sm-auto"><div className="has-skeleton"><img src={im1} alt="Monserrateville" className="size-40" /></div></div> <div className="col"><div className="row x-gap-20 items-end"><div className="col-auto"><div className="has-skeleton"><div className="lh-15 fw-500">Sat Oct 21 23:53 PM</div> <div className="text-15 lh-15 text-light-1">Port Fernview</div></div></div> <div className="col text-center"><div className="flightLine"><div /> <div /></div></div> <div className="col-auto"><div className="has-skeleton"><div className="lh-15 fw-500">Sun Oct 22 08:53 AM</div> <div className="text-15 lh-15 text-light-1">Port Kirsten</div></div></div></div></div> <div className="col-md-auto"><div className="text-15 text-light-1 px-20 md:px-0 has-skeleton">9h</div></div></div></div> <div className="col-md-auto"><div className="has-skeleton"><div className="d-flex items-center h-full"><div className="pl-30 border-left-light h-full md:d-none" /> <div><div className="text-right md:text-left mb-10"><div className="text-18 lh-16 fw-500">$31</div> <div className="text-15 lh-16 text-light-1">avg/person</div></div> <div className="accordion__button"><a data-id={57} href className="button -dark-1 px-30 h-50 bg-blue-1 text-white btn-choose-flight"> <button className="mainSearch__submit button  -dark-1 py-15 col-12 bg-blue-1 text-white w-100 rounded-4" type="submit">
                      <span className="text-search">Choose</span>
                    </button> <div className="icon-arrow-top-right ml-15" /></a></div></div></div></div></div></div></div> <div className="card w-100 shadow-hover-3 mb-4 d-none"><a href="#" tabIndex={0} className="d-block mb-0 mx-1 mt-1 p-3"><img src={im1} alt="Monserrateville" className="card-img-top" /></a> <div className="card-body px-3 pt-0 pb-3 my-0 mx-1"><div className="row"><div className="col-7"><a href="#" tabIndex={0} className="card-title text-dark font-size-17 font-weight-bold">Port Fernview</a></div> <div className="col-5"><div className="text-right"><h6 className="font-weight-bold font-size-17 text-gray-3 mb-0">$31</h6> <span className="font-weight-normal font-size-12 d-block text-color-1">avg/person</span></div></div></div></div> <div className="mb-3"><div className="border-bottom pb-3 mb-3"><div className="px-3"><div className="d-flex mx-1"><i className="icofont-airplane font-size-30 text-primary mr-3" /> <div className="d-flex flex-column"><span className="font-weight-normal text-gray-5">Take off</span> <span className="font-size-14 text-gray-1">Sat Oct 21 23:53 PM</span></div></div></div></div> <div className="border-bottom pb-3 mb-3"><div className="px-3"><div className="d-flex mx-1"><i className="d-block rotate-90 icofont-airplane-alt font-size-30 text-primary mr-3" /> <div className="d-flex flex-column"><span className="font-weight-normal text-gray-5">Landing</span> <span className="font-size-14 text-gray-1">Sun Oct 22 08:53 AM</span></div></div></div></div> <div className="d-flex justify-content-center pl-3 pr-3"><a href className="btn btn-primary text-white btn-choose w-100"> <button className="mainSearch__submit button  -dark-1 py-15 col-12 bg-blue-1 text-white w-100 rounded-4" type="submit">
                      <span className="text-search">Choose</span>
                    </button></a></div></div></div></div> <div className="col-lg-12"><div data-x="flight-item-56" data-x-toggle="shadow-56" className="py-30 px-30 bg-white rounded-4 base-tr mt-30 item-loop-wrap inner-loop-wrap"><div className="row y-gap-30 justify-between"><div className="col"><div className="row y-gap-10 items-center"><div className="col-sm-auto"><div className="has-skeleton"><img src={im2} alt="Waelchimouth" className="size-40" /></div></div> <div className="col"><div className="row x-gap-20 items-end"><div className="col-auto"><div className="has-skeleton"><div className="lh-15 fw-500">Sun Nov 05 11:03 AM</div> <div className="text-15 lh-15 text-light-1">West Jaedenhaven</div></div></div> <div className="col text-center"><div className="flightLine"><div /> <div /></div></div> <div className="col-auto"><div className="has-skeleton"><div className="lh-15 fw-500">Sun Nov 05 19:03 PM</div> <div className="text-15 lh-15 text-light-1">Port Mavis</div></div></div></div></div> <div className="col-md-auto"><div className="text-15 text-light-1 px-20 md:px-0 has-skeleton">8h</div></div></div></div> <div className="col-md-auto"><div className="has-skeleton"><div className="d-flex items-center h-full"><div className="pl-30 border-left-light h-full md:d-none" /> <div><div className="text-right md:text-left mb-10"><div className="text-18 lh-16 fw-500">$25</div> <div className="text-15 lh-16 text-light-1">avg/person</div></div> <div className="accordion__button"><a data-id={56} href className="button -dark-1 px-30 h-50 bg-blue-1 text-white btn-choose-flight"> <button className="mainSearch__submit button  -dark-1 py-15 col-12 bg-blue-1 text-white w-100 rounded-4" type="submit">
                      <span className="text-search">Choose</span>
                    </button> <div className="icon-arrow-top-right ml-15" /></a></div></div></div></div></div></div></div> <div className="card w-100 shadow-hover-3 mb-4 d-none"><a href="#" tabIndex={0} className="d-block mb-0 mx-1 mt-1 p-3"><img src={im2} alt="Waelchimouth" className="card-img-top" /></a> <div className="card-body px-3 pt-0 pb-3 my-0 mx-1"><div className="row"><div className="col-7"><a href="#" tabIndex={0} className="card-title text-dark font-size-17 font-weight-bold">West Jaedenhaven</a></div> <div className="col-5"><div className="text-right"><h6 className="font-weight-bold font-size-17 text-gray-3 mb-0">$25</h6> <span className="font-weight-normal font-size-12 d-block text-color-1">avg/person</span></div></div></div></div> <div className="mb-3"><div className="border-bottom pb-3 mb-3"><div className="px-3"><div className="d-flex mx-1"><i className="icofont-airplane font-size-30 text-primary mr-3" /> <div className="d-flex flex-column"><span className="font-weight-normal text-gray-5">Take off</span> <span className="font-size-14 text-gray-1">Sun Nov 05 11:03 AM</span></div></div></div></div> <div className="border-bottom pb-3 mb-3"><div className="px-3"><div className="d-flex mx-1"><i className="d-block rotate-90 icofont-airplane-alt font-size-30 text-primary mr-3" /> <div className="d-flex flex-column"><span className="font-weight-normal text-gray-5">Landing</span> <span className="font-size-14 text-gray-1">Sun Nov 05 19:03 PM</span></div></div></div></div> <div className="d-flex justify-content-center pl-3 pr-3"><a href className="btn btn-primary text-white btn-choose w-100"> <button className="mainSearch__submit button  -dark-1 py-15 col-12 bg-blue-1 text-white w-100 rounded-4" type="submit">
                      <span className="text-search">Choose</span>
                    </button></a></div></div></div></div> <div className="col-lg-12"><div data-x="flight-item-55" data-x-toggle="shadow-55" className="py-30 px-30 bg-white rounded-4 base-tr mt-30 item-loop-wrap inner-loop-wrap"><div className="row y-gap-30 justify-between"><div className="col"><div className="row y-gap-10 items-center"><div className="col-sm-auto"><div className="has-skeleton"><img src={im3} alt="Port Isomtown" className="size-40" /></div></div> <div className="col"><div className="row x-gap-20 items-end"><div className="col-auto"><div className="has-skeleton"><div className="lh-15 fw-500">Tue Nov 07 09:52 AM</div> <div className="text-15 lh-15 text-light-1">Samantaview</div></div></div> <div className="col text-center"><div className="flightLine"><div /> <div /></div></div> <div className="col-auto"><div className="has-skeleton"><div className="lh-15 fw-500">Tue Nov 07 19:52 PM</div> <div className="text-15 lh-15 text-light-1">Faustinostad</div></div></div></div></div> <div className="col-md-auto"><div className="text-15 text-light-1 px-20 md:px-0 has-skeleton">10h</div></div></div></div> <div className="col-md-auto"><div className="has-skeleton"><div className="d-flex items-center h-full"><div className="pl-30 border-left-light h-full md:d-none" /> <div><div className="text-right md:text-left mb-10"><div className="text-18 lh-16 fw-500">$19</div> <div className="text-15 lh-16 text-light-1">avg/person</div></div> <div className="accordion__button"><a data-id={55} href className="button -dark-1 px-30 h-50 bg-blue-1 text-white btn-choose-flight"> <button className="mainSearch__submit button  -dark-1 py-15 col-12 bg-blue-1 text-white w-100 rounded-4" type="submit">
                      <span className="text-search">Choose</span>
                    </button> <div className="icon-arrow-top-right ml-15" /></a></div></div></div></div></div></div></div> <div className="card w-100 shadow-hover-3 mb-4 d-none"><a href="#" tabIndex={0} className="d-block mb-0 mx-1 mt-1 p-3"><img src={im3} alt="Port Isomtown" className="card-img-top" /></a> <div className="card-body px-3 pt-0 pb-3 my-0 mx-1"><div className="row"><div className="col-7"><a href="#" tabIndex={0} className="card-title text-dark font-size-17 font-weight-bold">Samantaview</a></div> <div className="col-5"><div className="text-right"><h6 className="font-weight-bold font-size-17 text-gray-3 mb-0">$19</h6> <span className="font-weight-normal font-size-12 d-block text-color-1">avg/person</span></div></div></div></div> <div className="mb-3"><div className="border-bottom pb-3 mb-3"><div className="px-3"><div className="d-flex mx-1"><i className="icofont-airplane font-size-30 text-primary mr-3" /> <div className="d-flex flex-column"><span className="font-weight-normal text-gray-5">Take off</span> <span className="font-size-14 text-gray-1">Tue Nov 07 09:52 AM</span></div></div></div></div> <div className="border-bottom pb-3 mb-3"><div className="px-3"><div className="d-flex mx-1"><i className="d-block rotate-90 icofont-airplane-alt font-size-30 text-primary mr-3" /> <div className="d-flex flex-column"><span className="font-weight-normal text-gray-5">Landing</span> <span className="font-size-14 text-gray-1">Tue Nov 07 19:52 PM</span></div></div></div></div> <div className="d-flex justify-content-center pl-3 pr-3"><a href className="btn btn-primary text-white btn-choose w-100"> <button className="mainSearch__submit button  -dark-1 py-15 col-12 bg-blue-1 text-white w-100 rounded-4" type="submit">
                      <span className="text-search">Choose</span>
                    </button></a></div></div></div></div> <div className="col-lg-12"><div data-x="flight-item-54" data-x-toggle="shadow-54" className="py-30 px-30 bg-white rounded-4 base-tr mt-30 item-loop-wrap inner-loop-wrap"><div className="row y-gap-30 justify-between"><div className="col"><div className="row y-gap-10 items-center"><div className="col-sm-auto"><div className="has-skeleton"><img src={im2} alt="West Keshawn" className="size-40" /></div></div> <div className="col"><div className="row x-gap-20 items-end"><div className="col-auto"><div className="has-skeleton"><div className="lh-15 fw-500">Sun Oct 29 01:32 AM</div> <div className="text-15 lh-15 text-light-1">New Fermin</div></div></div> <div className="col text-center"><div className="flightLine"><div /> <div /></div></div> <div className="col-auto"><div className="has-skeleton"><div className="lh-15 fw-500">Sun Oct 29 08:32 AM</div> <div className="text-15 lh-15 text-light-1">Rempelhaven</div></div></div></div></div> <div className="col-md-auto"><div className="text-15 text-light-1 px-20 md:px-0 has-skeleton">7h</div></div></div></div> <div className="col-md-auto"><div className="has-skeleton"><div className="d-flex items-center h-full"><div className="pl-30 border-left-light h-full md:d-none" /> <div><div className="text-right md:text-left mb-10"><div className="text-18 lh-16 fw-500">$23</div> <div className="text-15 lh-16 text-light-1">avg/person</div></div> <div className="accordion__button"><a data-id={54} href className="button -dark-1 px-30 h-50 bg-blue-1 text-white btn-choose-flight"> <button className="mainSearch__submit button  -dark-1 py-15 col-12 bg-blue-1 text-white w-100 rounded-4" type="submit">
                      <span className="text-search">Choose</span>
                    </button> <div className="icon-arrow-top-right ml-15" /></a></div></div></div></div></div></div></div> <div className="card w-100 shadow-hover-3 mb-4 d-none"><a href="#" tabIndex={0} className="d-block mb-0 mx-1 mt-1 p-3"><img src={im2} alt="West Keshawn" className="card-img-top" /></a> <div className="card-body px-3 pt-0 pb-3 my-0 mx-1"><div className="row"><div className="col-7"><a href="#" tabIndex={0} className="card-title text-dark font-size-17 font-weight-bold">New Fermin</a></div> <div className="col-5"><div className="text-right"><h6 className="font-weight-bold font-size-17 text-gray-3 mb-0">$23</h6> <span className="font-weight-normal font-size-12 d-block text-color-1">avg/person</span></div></div></div></div> <div className="mb-3"><div className="border-bottom pb-3 mb-3"><div className="px-3"><div className="d-flex mx-1"><i className="icofont-airplane font-size-30 text-primary mr-3" /> <div className="d-flex flex-column"><span className="font-weight-normal text-gray-5">Take off</span> <span className="font-size-14 text-gray-1">Sun Oct 29 01:32 AM</span></div></div></div></div> <div className="border-bottom pb-3 mb-3"><div className="px-3"><div className="d-flex mx-1"><i className="d-block rotate-90 icofont-airplane-alt font-size-30 text-primary mr-3" /> <div className="d-flex flex-column"><span className="font-weight-normal text-gray-5">Landing</span> <span className="font-size-14 text-gray-1">Sun Oct 29 08:32 AM</span></div></div></div></div> <div className="d-flex justify-content-center pl-3 pr-3"><a href className="btn btn-primary text-white btn-choose w-100"> <button className="mainSearch__submit button  -dark-1 py-15 col-12 bg-blue-1 text-white w-100 rounded-4" type="submit">
                      <span className="text-search">Choose</span>
                    </button></a></div></div></div></div> <div className="col-lg-12"><div data-x="flight-item-53" data-x-toggle="shadow-53" className="py-30 px-30 bg-white rounded-4 base-tr mt-30 item-loop-wrap inner-loop-wrap"><div className="row y-gap-30 justify-between"><div className="col"><div className="row y-gap-10 items-center"><div className="col-sm-auto"><div className="has-skeleton"><img src={im3} alt="New Elfriedamouth" className="size-40" /></div></div> <div className="col"><div className="row x-gap-20 items-end"><div className="col-auto"><div className="has-skeleton"><div className="lh-15 fw-500">Mon Oct 23 17:50 PM</div> <div className="text-15 lh-15 text-light-1">North Damianfort</div></div></div> <div className="col text-center"><div className="flightLine"><div /> <div /></div></div> <div className="col-auto"><div className="has-skeleton"><div className="lh-15 fw-500">Tue Oct 24 01:50 AM</div> <div className="text-15 lh-15 text-light-1">South Kennith</div></div></div></div></div> <div className="col-md-auto"><div className="text-15 text-light-1 px-20 md:px-0 has-skeleton">8h</div></div></div></div> <div className="col-md-auto"><div className="has-skeleton"><div className="d-flex items-center h-full"><div className="pl-30 border-left-light h-full md:d-none" /> <div><div className="text-right md:text-left mb-10"><div className="text-18 lh-16 fw-500">$52</div> <div className="text-15 lh-16 text-light-1">avg/person</div></div> <div className="accordion__button"><a data-id={53} href className="button -dark-1 px-30 h-50 bg-blue-1 text-white btn-choose-flight"> <button className="mainSearch__submit button  -dark-1 py-15 col-12 bg-blue-1 text-white w-100 rounded-4" type="submit">
                      <span className="text-search">Choose</span>
                    </button> <div className="icon-arrow-top-right ml-15" /></a></div></div></div></div></div></div></div> <div className="card w-100 shadow-hover-3 mb-4 d-none"><a href="#" tabIndex={0} className="d-block mb-0 mx-1 mt-1 p-3"><img src={im3} alt="New Elfriedamouth" className="card-img-top" /></a> <div className="card-body px-3 pt-0 pb-3 my-0 mx-1"><div className="row"><div className="col-7"><a href="#" tabIndex={0} className="card-title text-dark font-size-17 font-weight-bold">North Damianfort</a></div> <div className="col-5"><div className="text-right"><h6 className="font-weight-bold font-size-17 text-gray-3 mb-0">$52</h6> <span className="font-weight-normal font-size-12 d-block text-color-1">avg/person</span></div></div></div></div> <div className="mb-3"><div className="border-bottom pb-3 mb-3"><div className="px-3"><div className="d-flex mx-1"><i className="icofont-airplane font-size-30 text-primary mr-3" /> <div className="d-flex flex-column"><span className="font-weight-normal text-gray-5">Take off</span> <span className="font-size-14 text-gray-1">Mon Oct 23 17:50 PM</span></div></div></div></div> <div className="border-bottom pb-3 mb-3"><div className="px-3"><div className="d-flex mx-1"><i className="d-block rotate-90 icofont-airplane-alt font-size-30 text-primary mr-3" /> <div className="d-flex flex-column"><span className="font-weight-normal text-gray-5">Landing</span> <span className="font-size-14 text-gray-1">Tue Oct 24 01:50 AM</span></div></div></div></div> <div className="d-flex justify-content-center pl-3 pr-3"><a href className="btn btn-primary text-white btn-choose w-100"> <button className="mainSearch__submit button  -dark-1 py-15 col-12 bg-blue-1 text-white w-100 rounded-4" type="submit">
                      <span className="text-search">Choose</span>
                    </button></a></div></div></div></div></div> <div className="bravo-pagination"><div className="border-top-light mt-30 pt-30 custom-pagination"><div className="row x-gap-10 y-gap-20 justify-between md:justify-center"><div className="col-auto md:order-1 disabled p-item"><span className="button -blue-1 size-40 rounded-full border-light p-link"><i className="icon-chevron-left text-12" /></span></div> <div className="col-md-auto md:order-3"><div className="row x-gap-20 y-gap-20 items-center md:d-none"><div className="col-auto active p-item"><div className="size-40 flex-center rounded-full p-link">1</div></div> <div className="col-auto p-item"><a className="size-40 flex-center rounded-full p-link">2</a></div> <div className="col-auto p-item"><a className="size-40 flex-center rounded-full p-link">3</a></div> <div className="col-auto p-item"><a className="size-40 flex-center rounded-full p-link">4</a></div> <div className="col-auto p-item">
                      <a className="size-40 flex-center rounded-full p-link">5</a></div> <div className="col-auto p-item">
                        <a className="size-40 flex-center rounded-full p-link">6</a></div> <div className="col-auto p-item"><a className="size-40 flex-center rounded-full p-link">7</a></div></div></div> <div className="col-auto md:order-2 p-item">
                        <a className="button -blue-1 size-40 rounded-full border-light"><i className="icon-chevron-right text-12" /></a></div></div></div> <div className="text-center mt-30 md:mt-10"><div className="text-14 text-light-1">Showing 1 - 9 of 61 flights</div></div></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="flightFormBookModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" className="modal fade"><div role="document" className="modal-dialog modal-dialog-centered"><div className="modal-content"><div className="modal-body"><button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" className="close"><span aria-hidden="true">×</span></button> <div style={{ "display": "none" }}><div className="icon-loading d-flex flex-horizontal-center flex-content-center"><i className="fa fa-spin icofont-spinner-alt-6" /></div></div> <div className="card"><header className="card-header border-bottom-light"><div className="row text-center"><div className="col-md-4"><div className="d-flex align-items-center"><img src alt="Image-Description" className="img-fluid mr-10" /> <div className="text-14"> | </div></div></div> <div className="col-md-3"><div className="d-flex align-items-start"><div className="mr-15"><i className="icofont-airplane text-22 text-dark-4" /></div> <div className="text-left"><h6 className="fw-500 text-22 text-gray-5 mb-0" /> <div className="text-14 text-gray-5" /> <span className="text-14 text-gray-1" /></div></div></div> <div className="col-md-2 d-flex"><div className="d-flex align-items-center"><h6 className="text-14 fw-500 text-gray-5 mb-0">undefined hrs</h6> <div className="width-60 border-top border-primary border-width-2 my-1" /></div></div> <div className="col-md-3"><div className="mx-2 d-flex"><div className="mr-15"><i className="d-block rotate-90 icofont-airplane-alt text-22 text-dark-4" /></div> <div className="text-left"><h6 className="fw-500 text-22 text-gray-5 mb-0" /> <div className="text-14 text-gray-5" /> <span className="text-14 text-gray-1" /></div></div></div></div></header> <div className="card-body p-4"><div className="row"><div className="col-12 mb-3" /> <div className="col-12  col-lg-6 offset-lg-3"><div className="alert-text mt-3 text-left danger" style={{ "display": "none" }} /> <div className="min-width-250" style={{ "display": "none" }}><ul className="list-unstyled font-size-1 mb-0 font-size-16"><li className="d-flex justify-content-between py-2"><span className="fw-500">Pay Amount</span> <span className="fw-500" /></li> <li className="d-flex justify-content-center py-2 font-size-17 font-weight-bold"><a className="button h-60 px-24 -dark-1 bg-blue-1 text-white">
          Book Now
          <div className="icon-arrow-top-right ml-15" /> <i className="fa fa-spinner fa-spin" style={{ "display": "none" }} /></a></li></ul></div></div></div></div></div></div></div></div></div>
        <div className="footer -type-1 normal">
          <div className="container">
          </div>
        </div>
        <div className="modal fade login gotrip-login-modal" id="login" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content relative">
              <div className="modal-header border-dashed">
                <h4 className="modal-title">Log In</h4>
                <span className="c-pointer" data-bs-dismiss="modal" aria-label="Close">
                  <i className="input-icon field-icon fa">
                    <img src="ico_close.svg" alt="close" />
                  </i>
                </span>
              </div>
              <div className="modal-body relative">
                <form className="bravo-theme-gotrip-login-form y-gap-20" method="POST"
                >
                  <input type="hidden" name="redirect" defaultValue />
                  <input type="hidden" name="_token" defaultValue="cOyEbwgCXlhsxzARhlr9mg034NuR4AXiRadYOw93" className="has-value" />    <div className="col-12">
                    <h4 className="form-title text-22 fw-500">Welcome back</h4>
                    <p className="mt-10">Don't have an account yet? <a data-bs-toggle="modal" href="#register" className="text-blue-1">Sign up for free</a></p>
                  </div>
                  <div className="col-12">
                    <div className="form-input">
                      <input type="text" name="email" autoComplete="off" className="has-value" defaultValue />
                      <label className="lh-1 text-14 text-light-1">Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-input">
                      <input type="password" name="password" autoComplete="off" className="has-value" />
                      <label className="lh-1 text-14 text-light-1">Password</label>
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-between">
                    <div className="d-flex ">
                      <div className="form-checkbox" style={{ "margin-top": "3px" }}>
                        <input type="checkbox" name="remember" id="remember-me" defaultValue={1} className="has-value" />
                        <div className="form-checkbox__mark">
                          <div className="form-checkbox__icon icon-check" />
                        </div>
                      </div>
                      <div className="text-15 lh-15 text-light-1 ml-10">Remember me</div>
                    </div>
                    <a >Forgot Password?</a>
                  </div>
                  <div className="error message-error invalid-feedback" />
                  <div className="col-12">
                    <button className="button py-20 -dark-1 bg-blue-1 text-white w-100 form-submit" type="submit">
                      Sign In
                      <div className="icon-arrow-top-right ml-15" />
                      <span className="spinner-grow spinner-grow-sm icon-loading ml-15 d-none" role="status" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="col-12">
                    <div className="text-center px-30">By creating an account, you agree to our Terms of Service and Privacy Statement.</div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade login gotrip-register-modal" id="register" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content relative">
              <div className="modal-header">
                <h4 className="modal-title">Sign Up</h4>
                <span className="c-pointer" data-bs-dismiss="modal" aria-label="Close">
                  <i className="input-icon field-icon fa">
                    <img src="ico_close.svg" alt="close" />
                  </i>
                </span>
              </div>
              <div className="modal-body">
                <form action="#" className="form bravo-form-register" method="post">
                  <input type="hidden" name="_token" defaultValue="cOyEbwgCXlhsxzARhlr9mg034NuR4AXiRadYOw93" className="has-value" />    <div className="row y-gap-20">
                    <div className="col-12">
                      <h1 className="text-22 fw-500">Sign in or create an account</h1>
                      <p className="mt-10">Already have an account? <a data-bs-toggle="modal" href="#login" className="text-blue-1">Log in</a></p>
                    </div>
                    <div className="col-12">
                      <div className="form-input">
                        <input type="text" name="first_name" autoComplete="off" className="has-value" defaultValue />
                        <label className="lh-1 text-14 text-light-1">First Name</label>
                      </div>
                      <span className="invalid-feedback error error-first_name" />
                    </div>
                    <div className="col-12">
                      <div className="form-input">
                        <input type="text" name="last_name" autoComplete="off" className="has-value" defaultValue />
                        <label className="lh-1 text-14 text-light-1">Last Name</label>
                      </div>
                      <span className="invalid-feedback error error-last_name" />
                    </div>
                    <div className="col-12">
                      <div className="form-input">
                        <input type="text" name="phone" autoComplete="off" className="has-value" defaultValue />
                        <label className="lh-1 text-14 text-light-1">Phone</label>
                      </div>
                      <span className="invalid-feedback error error-phone" />
                    </div>
                    <div className="col-12">
                      <div className="form-input">
                        <input type="email" name="email" autoComplete="off" className="has-value" defaultValue />
                        <label className="lh-1 text-14 text-light-1">Email address</label>
                      </div>
                      <span className="invalid-feedback error error-email" />
                    </div>
                    <div className="col-12">
                      <div className="form-input">
                        <input type="password" name="password" autoComplete="off" className="has-value" />
                        <label className="lh-1 text-14 text-light-1">Password</label>
                      </div>
                      <span className="invalid-feedback error error-password" />
                    </div>
                    <div className="col-12">
                      <div className="d-flex">
                        <div className="form-checkbox" style={{ "margin-top": "3px" }}>
                          <input type="checkbox" name="term" id="register-term" className="has-value" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check" />
                          </div>
                        </div>
                        <label className="text-15 lh-15 text-light-1 ml-10" htmlFor="register-term">I have read and accept the Terms and Privacy Policy?</label>
                      </div>
                      <span className="invalid-feedback error error-term" />
                    </div>
                    <div className="error message-error invalid-feedback" />
                    <div className="col-12">
                      <button type="submit" className="button py-20 -dark-1 bg-blue-1 text-white w-100">
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

    </div>


  );
}
