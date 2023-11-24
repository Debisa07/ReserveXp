import React from "react";
import map from "../assets/image/icon-map.png"
import 'font-awesome/css/font-awesome.min.css';
import { Link,  } from 'react-router-dom';
import pic from "../assets/image/event.jpeg"

export default function EventServices() {
 
  return (
    <div style={{marginLeft:"-60px", marginTop:"78px"}}>
    <div>
  <div className="bravo_wrap overflow-hidden">
  <section className="pt-40 pb-40 bg-light-2  bg-blue-2 ">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-center">
                  <h1 className="text-30 fw-600">Search for Event</h1>
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
            <div className="gotrip-form-search-grid rounded-4 mb-20">
            </div>
            <form  className="bravo_form_filter bravo_filter lg:d-none" data-x="filterPopup" data-x-toggle="-is-active">
              <aside className="sidebar y-gap-40 p-4 p-md-4 p-lg-0">
                <div data-x-click="filterPopup" className="-icon-close is_mobile pb-0">
                  <i className="icon-close" />
                </div>
                <div className="sidebar__item pb-30 -no-border">
                  <h5 className="text-18 fw-500 mb-10">Price</h5>
                  <div className="row x-gap-10 y-gap-30">
                    <div className="col-12">
                      <div className="js-price-searchPage">
                        <div className="text-14 fw-500" />
                        <input type="hidden" className="filter-price irs-hidden-input" name="price_range" data-symbol=" $" data-min={236} data-max={2000} data-from={236} data-to={2000} readOnly defaultValue />
                        <div className="d-flex justify-between mb-20">
                          <div className="text-15 text-dark-1">
                            <span className="js-lower"> $236</span>
                            -
                            <span className="js-upper"> $2000</span>
                          </div>
                        </div>
                        <div className="px-5">
                          <div className="js-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
                            <div className="noUi-base">
                              <div className="noUi-connects">
                                <div className="noUi-connect" style={{"-webkit-transform":"translate(0%) scale(1)","-ms-transform":"translate(0%) scale(1)","transform":"translate(0%) scale(1)"}} />
                              </div>
                              <div className="noUi-origin" style={{"-webkit-transform":"translate(-100%)","-ms-transform":"translate(-100%)","transform":"translate(-100%)","z-index":"5"}}>
                                <div className="noUi-handle noUi-handle-lower" data-handle={0} tabIndex={0} role="slider" aria-orientation="horizontal" aria-valuemin={236.0} aria-valuemax={2000.0} aria-valuenow={236.0} aria-valuetext=" $236">
                                  <div className="noUi-touch-area" />
                                </div>
                              </div>
                              <div className="noUi-origin" style={{"-webkit-transform":"translate(0%)","-ms-transform":"translate(0%)","transform":"translate(0%)","z-index":"4"}}>
                                <div className="noUi-handle noUi-handle-upper" data-handle={1} tabIndex={0} role="slider" aria-orientation="horizontal" aria-valuemin={236.0} aria-valuemax={2000.0} aria-valuenow={2000.0} aria-valuetext=" $2000">
                                  <div className="noUi-touch-area" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button type="submit" className=" btn-apply-price-range flex-center bg-blue-1 rounded-4 px-3 py-1 mt-3 text-12 fw-600 text-white">APPLY</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar__item g-filter-item">
                  <h5 className="text-18 fw-500 mb-10">Event Type</h5>
                  <div className="sidebar-checkbox ">
                    <div className="row y-gap-10 items-center justify-between ">
                      <div className="col-auto">
                        <label className="cursor-pointer">
                          <div className="form-checkbox d-flex items-center">
                            <input type="checkbox" name="attrs[11][]" defaultValue={75} className="has-value" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check" />
                            </div>
                            <div className="text-15 ml-10">Field Day</div>
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
                            <input type="checkbox" name="attrs[11][]" defaultValue={76} className="has-value" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check" />
                            </div>
                            <div className="text-15 ml-10">Glastonbury</div>
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
                            <input type="checkbox" name="attrs[11][]" defaultValue={77} className="has-value" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check" />
                            </div>
                            <div className="text-15 ml-10">Green Man</div>
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
                            <input type="checkbox" name="attrs[11][]" defaultValue={78} className="has-value" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check" />
                            </div>
                            <div className="text-15 ml-10">Latitude</div>
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
                            <input type="checkbox" name="attrs[11][]" defaultValue={79} className="has-value" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check" />
                            </div>
                            <div className="text-15 ml-10">Boomtown</div>
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
                            <input type="checkbox" name="attrs[11][]" defaultValue={80} className="has-value" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check" />
                            </div>
                            <div className="text-15 ml-10">Wilderness</div>
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
                            <input type="checkbox" name="attrs[11][]" defaultValue={81} className="has-value" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check" />
                            </div>
                            <div className="text-15 ml-10">Exit Festival</div>
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
                            <input type="checkbox" name="attrs[11][]" defaultValue={82} className="has-value" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check" />
                            </div>
                            <div className="text-15 ml-10">Primavera Sound</div>
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
                  <h5 className="text-18 fw-500 mb-10">Event Feature</h5>
                  <div className="sidebar-checkbox ">
                    <div className="row y-gap-10 items-center justify-between ">
                      <div className="col-auto">
                        <label className="cursor-pointer">
                          <div className="form-checkbox d-flex items-center">
                            <input type="checkbox" name="attrs[12][]" defaultValue={83} className="has-value" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check" />
                            </div>
                            <div className="text-15 ml-10">Camping</div>
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
                            <input type="checkbox" name="attrs[12][]" defaultValue={84} className="has-value" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check" />
                            </div>
                            <div className="text-15 ml-10">Trekking</div>
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
                            <input type="checkbox" name="attrs[12][]" defaultValue={85} className="has-value" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check" />
                            </div>
                            <div className="text-15 ml-10">Camp Fire</div>
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
                            <input type="checkbox" name="attrs[12][]" defaultValue={86} className="has-value" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check" />
                            </div>
                            <div className="text-15 ml-10">Off Road</div>
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
                            <input type="checkbox" name="attrs[12][]" defaultValue={87} className="has-value" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check" />
                            </div>
                            <div className="text-15 ml-10">Exploring</div>
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
          <div className="col-xl-9 col-lg-8">
            {/* Results count and sort */}
            <div className="row y-gap-10 items-center justify-between">
              <div className="col-auto">
                <div className="text-18 fw-500 result-count">
                  12 events found
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
                <div className="col-lg-4 col-sm-6">
                  <div className="item-loop item-loop-wrap inner-loop-wrap">
                  <Link to="/EventDetail">

                    <div className="activityCard -type-1 ">
                      <div className="activityCard__image has-skeleton">
                        <div className="cardImage ratio ratio-1:1">
                          <a >
                            <div className="cardImage__content">
                              <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Event of Washington, D.C. Highlights" data-ll-status="loaded" src={pic} />
                            </div>
                          </a>
                          <div className="service-wishlist " data-id={12} data-type="event">
                            <div className="cardImage__wishlist">
                              <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                <i className="icon-heart text-12" />
                              </button>
                            </div>
                          </div>
                          <div className="cardImage__leftBadge">
                          </div>
                        </div>
                      </div>
                      <div className="activityCard__content mt-10">
                        <div className="d-flex items-center lh-14 mb-5 has-skeleton">
                          <div className="text-14 text-light-1">
                            Start Time: 17:00 -
                            6 Hours
                          </div>
                        </div>
                        <h4 className="activityCard__title text-dark-1 text-18 lh-16 fw-500 has-skeleton">
                          <a className="text-dark-1-i" >
                            <span>Event of Washington, D.C. Highlights</span></a>
                        </h4>
                        <p className="text-light-1 lh-14 text-14 mt-5 has-skeleton">London</p>
                        <div className="row justify-between items-center pt-15">
                          <div className="col-auto">
                            <div className="d-flex items-center has-skeleton">
                              <div className="list-star">
                                <div className="d-flex relative">
                                  <ul className="booking-item-rating-stars d-flex x-gap-5">
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                  </ul>
                                  <div className="booking-item-rating-stars-active" style={{"width":"90%"}}>
                                    <ul className="booking-item-rating-stars d-flex x-gap-5">
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="text-14 text-light-1 ml-5">
                                2 Reviews
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-14 text-light-1 has-skeleton">
                              from
                              <span className="text-14  text-red-1 line-through d-inline-flex">$2.100</span>
                              <span className="fw-500 text-dark-1 d-inline-flex">$676</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></Link>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="item-loop item-loop-wrap inner-loop-wrap">
                  <Link to="/EventDetail">

                    <div className="activityCard -type-1 ">
                      <div className="activityCard__image has-skeleton">
                        <div className="cardImage ratio ratio-1:1">
                          <a >
                            <div className="cardImage__content">
                              <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Event of Washington, D.C. Highlights" data-ll-status="loaded" src={pic} />
                            </div>
                          </a>
                          <div className="service-wishlist " data-id={12} data-type="event">
                            <div className="cardImage__wishlist">
                              <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                <i className="icon-heart text-12" />
                              </button>
                            </div>
                          </div>
                          <div className="cardImage__leftBadge">
                          </div>
                        </div>
                      </div>
                      <div className="activityCard__content mt-10">
                        <div className="d-flex items-center lh-14 mb-5 has-skeleton">
                          <div className="text-14 text-light-1">
                            Start Time: 17:00 -
                            6 Hours
                          </div>
                        </div>
                        <h4 className="activityCard__title text-dark-1 text-18 lh-16 fw-500 has-skeleton">
                          <a className="text-dark-1-i" >
                            <span>Event of Washington, D.C. Highlights</span></a>
                        </h4>
                        <p className="text-light-1 lh-14 text-14 mt-5 has-skeleton">London</p>
                        <div className="row justify-between items-center pt-15">
                          <div className="col-auto">
                            <div className="d-flex items-center has-skeleton">
                              <div className="list-star">
                                <div className="d-flex relative">
                                  <ul className="booking-item-rating-stars d-flex x-gap-5">
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                  </ul>
                                  <div className="booking-item-rating-stars-active" style={{"width":"90%"}}>
                                    <ul className="booking-item-rating-stars d-flex x-gap-5">
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="text-14 text-light-1 ml-5">
                                2 Reviews
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-14 text-light-1 has-skeleton">
                              from
                              <span className="text-14  text-red-1 line-through d-inline-flex">$2.100</span>
                              <span className="fw-500 text-dark-1 d-inline-flex">$676</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></Link>
                  </div>
                </div><div className="col-lg-4 col-sm-6">
                  <div className="item-loop item-loop-wrap inner-loop-wrap">
                  <Link to="/EventDetail">

                    <div className="activityCard -type-1 ">
                      <div className="activityCard__image has-skeleton">
                        <div className="cardImage ratio ratio-1:1">
                          <a >
                            <div className="cardImage__content">
                              <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Event of Washington, D.C. Highlights" data-ll-status="loaded" src={pic} />
                            </div>
                          </a>
                          <div className="service-wishlist " data-id={12} data-type="event">
                            <div className="cardImage__wishlist">
                              <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                <i className="icon-heart text-12" />
                              </button>
                            </div>
                          </div>
                          <div className="cardImage__leftBadge">
                          </div>
                        </div>
                      </div>
                      <div className="activityCard__content mt-10">
                        <div className="d-flex items-center lh-14 mb-5 has-skeleton">
                          <div className="text-14 text-light-1">
                            Start Time: 17:00 -
                            6 Hours
                          </div>
                        </div>
                        <h4 className="activityCard__title text-dark-1 text-18 lh-16 fw-500 has-skeleton">
                          <a className="text-dark-1-i" >
                            <span>Event of Washington, D.C. Highlights</span></a>
                        </h4>
                        <p className="text-light-1 lh-14 text-14 mt-5 has-skeleton">London</p>
                        <div className="row justify-between items-center pt-15">
                          <div className="col-auto">
                            <div className="d-flex items-center has-skeleton">
                              <div className="list-star">
                                <div className="d-flex relative">
                                  <ul className="booking-item-rating-stars d-flex x-gap-5">
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                  </ul>
                                  <div className="booking-item-rating-stars-active" style={{"width":"90%"}}>
                                    <ul className="booking-item-rating-stars d-flex x-gap-5">
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="text-14 text-light-1 ml-5">
                                2 Reviews
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-14 text-light-1 has-skeleton">
                              from
                              <span className="text-14  text-red-1 line-through d-inline-flex">$2.100</span>
                              <span className="fw-500 text-dark-1 d-inline-flex">$676</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></Link>
                  </div>
                </div><div className="col-lg-4 col-sm-6">
                  <div className="item-loop item-loop-wrap inner-loop-wrap">
                  <Link to="/EventDetail">

                    <div className="activityCard -type-1 ">
                      <div className="activityCard__image has-skeleton">
                        <div className="cardImage ratio ratio-1:1">
                          <a >
                            <div className="cardImage__content">
                              <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Event of Washington, D.C. Highlights" data-ll-status="loaded" src={pic} />
                            </div>
                          </a>
                          <div className="service-wishlist " data-id={12} data-type="event">
                            <div className="cardImage__wishlist">
                              <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                <i className="icon-heart text-12" />
                              </button>
                            </div>
                          </div>
                          <div className="cardImage__leftBadge">
                          </div>
                        </div>
                      </div>
                      <div className="activityCard__content mt-10">
                        <div className="d-flex items-center lh-14 mb-5 has-skeleton">
                          <div className="text-14 text-light-1">
                            Start Time: 17:00 -
                            6 Hours
                          </div>
                        </div>
                        <h4 className="activityCard__title text-dark-1 text-18 lh-16 fw-500 has-skeleton">
                          <a className="text-dark-1-i" >
                            <span>Event of Washington, D.C. Highlights</span></a>
                        </h4>
                        <p className="text-light-1 lh-14 text-14 mt-5 has-skeleton">London</p>
                        <div className="row justify-between items-center pt-15">
                          <div className="col-auto">
                            <div className="d-flex items-center has-skeleton">
                              <div className="list-star">
                                <div className="d-flex relative">
                                  <ul className="booking-item-rating-stars d-flex x-gap-5">
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                  </ul>
                                  <div className="booking-item-rating-stars-active" style={{"width":"90%"}}>
                                    <ul className="booking-item-rating-stars d-flex x-gap-5">
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="text-14 text-light-1 ml-5">
                                2 Reviews
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-14 text-light-1 has-skeleton">
                              from
                              <span className="text-14  text-red-1 line-through d-inline-flex">$2.100</span>
                              <span className="fw-500 text-dark-1 d-inline-flex">$676</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></Link>
                  </div>
                </div><div className="col-lg-4 col-sm-6">
                  <div className="item-loop item-loop-wrap inner-loop-wrap">
                  <Link to="/EventDetail">

                    <div className="activityCard -type-1 ">
                      <div className="activityCard__image has-skeleton">
                        <div className="cardImage ratio ratio-1:1">
                          <a >
                            <div className="cardImage__content">
                              <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Event of Washington, D.C. Highlights" data-ll-status="loaded" src={pic} />
                            </div>
                          </a>
                          <div className="service-wishlist " data-id={12} data-type="event">
                            <div className="cardImage__wishlist">
                              <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                <i className="icon-heart text-12" />
                              </button>
                            </div>
                          </div>
                          <div className="cardImage__leftBadge">
                          </div>
                        </div>
                      </div>
                      <div className="activityCard__content mt-10">
                        <div className="d-flex items-center lh-14 mb-5 has-skeleton">
                          <div className="text-14 text-light-1">
                            Start Time: 17:00 -
                            6 Hours
                          </div>
                        </div>
                        <h4 className="activityCard__title text-dark-1 text-18 lh-16 fw-500 has-skeleton">
                          <a className="text-dark-1-i" >
                            <span>Event of Washington, D.C. Highlights</span></a>
                        </h4>
                        <p className="text-light-1 lh-14 text-14 mt-5 has-skeleton">London</p>
                        <div className="row justify-between items-center pt-15">
                          <div className="col-auto">
                            <div className="d-flex items-center has-skeleton">
                              <div className="list-star">
                                <div className="d-flex relative">
                                  <ul className="booking-item-rating-stars d-flex x-gap-5">
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                  </ul>
                                  <div className="booking-item-rating-stars-active" style={{"width":"90%"}}>
                                    <ul className="booking-item-rating-stars d-flex x-gap-5">
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="text-14 text-light-1 ml-5">
                                2 Reviews
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-14 text-light-1 has-skeleton">
                              from
                              <span className="text-14  text-red-1 line-through d-inline-flex">$2.100</span>
                              <span className="fw-500 text-dark-1 d-inline-flex">$676</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></Link>
                  </div>
                </div><div className="col-lg-4 col-sm-6">
                  <div className="item-loop item-loop-wrap inner-loop-wrap">
                  <Link to="/EventDetail">

                    <div className="activityCard -type-1 ">
                      <div className="activityCard__image has-skeleton">
                        <div className="cardImage ratio ratio-1:1">
                          <a >
                            <div className="cardImage__content">
                              <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Event of Washington, D.C. Highlights" data-ll-status="loaded" src={pic} />
                            </div>
                          </a>
                          <div className="service-wishlist " data-id={12} data-type="event">
                            <div className="cardImage__wishlist">
                              <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                <i className="icon-heart text-12" />
                              </button>
                            </div>
                          </div>
                          <div className="cardImage__leftBadge">
                          </div>
                        </div>
                      </div>
                      <div className="activityCard__content mt-10">
                        <div className="d-flex items-center lh-14 mb-5 has-skeleton">
                          <div className="text-14 text-light-1">
                            Start Time: 17:00 -
                            6 Hours
                          </div>
                        </div>
                        <h4 className="activityCard__title text-dark-1 text-18 lh-16 fw-500 has-skeleton">
                          <a className="text-dark-1-i" >
                            <span>Event of Washington, D.C. Highlights</span></a>
                        </h4>
                        <p className="text-light-1 lh-14 text-14 mt-5 has-skeleton">London</p>
                        <div className="row justify-between items-center pt-15">
                          <div className="col-auto">
                            <div className="d-flex items-center has-skeleton">
                              <div className="list-star">
                                <div className="d-flex relative">
                                  <ul className="booking-item-rating-stars d-flex x-gap-5">
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                  </ul>
                                  <div className="booking-item-rating-stars-active" style={{"width":"90%"}}>
                                    <ul className="booking-item-rating-stars d-flex x-gap-5">
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="text-14 text-light-1 ml-5">
                                2 Reviews
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-14 text-light-1 has-skeleton">
                              from
                              <span className="text-14  text-red-1 line-through d-inline-flex">$2.100</span>
                              <span className="fw-500 text-dark-1 d-inline-flex">$676</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></Link>
                  </div>
                </div><div className="col-lg-4 col-sm-6">
                  <div className="item-loop item-loop-wrap inner-loop-wrap">
                  <Link to="/EventDetail">

                    <div className="activityCard -type-1 ">
                      <div className="activityCard__image has-skeleton">
                        <div className="cardImage ratio ratio-1:1">
                          <a >
                            <div className="cardImage__content">
                              <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Event of Washington, D.C. Highlights" data-ll-status="loaded" src={pic} />
                            </div>
                          </a>
                          <div className="service-wishlist " data-id={12} data-type="event">
                            <div className="cardImage__wishlist">
                              <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                <i className="icon-heart text-12" />
                              </button>
                            </div>
                          </div>
                          <div className="cardImage__leftBadge">
                          </div>
                        </div>
                      </div>
                      <div className="activityCard__content mt-10">
                        <div className="d-flex items-center lh-14 mb-5 has-skeleton">
                          <div className="text-14 text-light-1">
                            Start Time: 17:00 -
                            6 Hours
                          </div>
                        </div>
                        <h4 className="activityCard__title text-dark-1 text-18 lh-16 fw-500 has-skeleton">
                          <a className="text-dark-1-i" >
                            <span>Event of Washington, D.C. Highlights</span></a>
                        </h4>
                        <p className="text-light-1 lh-14 text-14 mt-5 has-skeleton">London</p>
                        <div className="row justify-between items-center pt-15">
                          <div className="col-auto">
                            <div className="d-flex items-center has-skeleton">
                              <div className="list-star">
                                <div className="d-flex relative">
                                  <ul className="booking-item-rating-stars d-flex x-gap-5">
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                  </ul>
                                  <div className="booking-item-rating-stars-active" style={{"width":"90%"}}>
                                    <ul className="booking-item-rating-stars d-flex x-gap-5">
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="text-14 text-light-1 ml-5">
                                2 Reviews
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-14 text-light-1 has-skeleton">
                              from
                              <span className="text-14  text-red-1 line-through d-inline-flex">$2.100</span>
                              <span className="fw-500 text-dark-1 d-inline-flex">$676</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></Link>
                  </div>
                </div><div className="col-lg-4 col-sm-6">
                  <div className="item-loop item-loop-wrap inner-loop-wrap">
                  <Link to="/EventDetail">

                    <div className="activityCard -type-1 ">
                      <div className="activityCard__image has-skeleton">
                        <div className="cardImage ratio ratio-1:1">
                          <a >
                            <div className="cardImage__content">
                              <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Event of Washington, D.C. Highlights" data-ll-status="loaded" src={pic} />
                            </div>
                          </a>
                          <div className="service-wishlist " data-id={12} data-type="event">
                            <div className="cardImage__wishlist">
                              <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                <i className="icon-heart text-12" />
                              </button>
                            </div>
                          </div>
                          <div className="cardImage__leftBadge">
                          </div>
                        </div>
                      </div>
                      <div className="activityCard__content mt-10">
                        <div className="d-flex items-center lh-14 mb-5 has-skeleton">
                          <div className="text-14 text-light-1">
                            Start Time: 17:00 -
                            6 Hours
                          </div>
                        </div>
                        <h4 className="activityCard__title text-dark-1 text-18 lh-16 fw-500 has-skeleton">
                          <a className="text-dark-1-i" >
                            <span>Event of Washington, D.C. Highlights</span></a>
                        </h4>
                        <p className="text-light-1 lh-14 text-14 mt-5 has-skeleton">London</p>
                        <div className="row justify-between items-center pt-15">
                          <div className="col-auto">
                            <div className="d-flex items-center has-skeleton">
                              <div className="list-star">
                                <div className="d-flex relative">
                                  <ul className="booking-item-rating-stars d-flex x-gap-5">
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                  </ul>
                                  <div className="booking-item-rating-stars-active" style={{"width":"90%"}}>
                                    <ul className="booking-item-rating-stars d-flex x-gap-5">
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="text-14 text-light-1 ml-5">
                                2 Reviews
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-14 text-light-1 has-skeleton">
                              from
                              <span className="text-14  text-red-1 line-through d-inline-flex">$2.100</span>
                              <span className="fw-500 text-dark-1 d-inline-flex">$676</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></Link>
                  </div>
                </div><div className="col-lg-4 col-sm-6">
                  <div className="item-loop item-loop-wrap inner-loop-wrap">
                  <Link to="/EventDetail">

                    <div className="activityCard -type-1 ">
                      <div className="activityCard__image has-skeleton">
                        <div className="cardImage ratio ratio-1:1">
                          <a >
                            <div className="cardImage__content">
                              <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Event of Washington, D.C. Highlights" data-ll-status="loaded" src={pic} />
                            </div>
                          </a>
                          <div className="service-wishlist " data-id={12} data-type="event">
                            <div className="cardImage__wishlist">
                              <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                <i className="icon-heart text-12" />
                              </button>
                            </div>
                          </div>
                          <div className="cardImage__leftBadge">
                          </div>
                        </div>
                      </div>
                      <div className="activityCard__content mt-10">
                        <div className="d-flex items-center lh-14 mb-5 has-skeleton">
                          <div className="text-14 text-light-1">
                            Start Time: 17:00 -
                            6 Hours
                          </div>
                        </div>
                        <h4 className="activityCard__title text-dark-1 text-18 lh-16 fw-500 has-skeleton">
                          <a className="text-dark-1-i" >
                            <span>Event of Washington, D.C. Highlights</span></a>
                        </h4>
                        <p className="text-light-1 lh-14 text-14 mt-5 has-skeleton">London</p>
                        <div className="row justify-between items-center pt-15">
                          <div className="col-auto">
                            <div className="d-flex items-center has-skeleton">
                              <div className="list-star">
                                <div className="d-flex relative">
                                  <ul className="booking-item-rating-stars d-flex x-gap-5">
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                    <li><i className="fa text-yellow-1 fa-star-o" />
                                    </li>
                                  </ul>
                                  <div className="booking-item-rating-stars-active" style={{"width":"90%"}}>
                                    <ul className="booking-item-rating-stars d-flex x-gap-5">
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                      <li><i className="fa text-yellow-1 fa-star" />
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="text-14 text-light-1 ml-5">
                                2 Reviews
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-14 text-light-1 has-skeleton">
                              from
                              <span className="text-14  text-red-1 line-through d-inline-flex">$2.100</span>
                              <span className="fw-500 text-dark-1 d-inline-flex">$676</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></Link>
                  </div>
                </div>
               
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="footer -type-1 normal">
      <div className="container">
      </div>
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
    <div className="drp-buttons"><span className="drp-selected">2023-11-09 - 2023-11-10</span><button className="cancelBtn btn btn-sm btn-default" type="button">Cancel</button><button className="applyBtn btn btn-sm btn-primary" disabled="disabled" type="button">Apply</button> </div>
  </div>
</div>

  </div>
  
  
  );
}
