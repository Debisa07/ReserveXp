import React from "react";
import map from "../assets/image/icon-map.png"
import 'font-awesome/css/font-awesome.min.css';
import { Link,  } from 'react-router-dom';
import pic from "../assets/image/boat-11.jpg"

export default function HotelServices() {
 
  return (
    <div style={{marginLeft:"-60px", marginTop:"-15px"}}>
    <div>
    <div className="bravo_wrap overflow-hidden">
     
      <div className="header-margin" />
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="gotrip-form-search-grid rounded-4 mb-20 lg:d-none">
              </div>
              <form  className="bravo_form_filter bravo_filter lg:d-none" data-x="filterPopup" data-x-toggle="-is-active" method="get">
                <aside className="sidebar y-gap-40 p-4 p-lg-0">
                  <div data-x-click="filterPopup" className="-icon-close is_mobile pb-0">
                    <i className="icon-close" />
                  </div>
                  <div className="sidebar__item pb-30 -no-border">
                    <h5 className="text-18 fw-500 mb-10">Price</h5>
                    <div className="row x-gap-10 y-gap-30">
                      <div className="col-12">
                        <div className="js-price-searchPage">
                          <div className="text-14 fw-500" />
                          <input type="hidden" className="filter-price irs-hidden-input" name="price_range" data-symbol=" $" data-min={50} data-max={250} data-from={50} data-to={250} readOnly defaultValue />
                          <div className="d-flex justify-between mb-20">
                            <div className="text-15 text-dark-1">
                              <span className="js-lower"> $50</span>
                              -
                              <span className="js-upper"> $250</span>
                            </div>
                          </div>
                          <div className="px-5">
                            <div className="js-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
                              <div className="noUi-base">
                                <div className="noUi-connects">
                                  <div className="noUi-connect" style={{"-webkit-transform":"translate(0%) scale(1)","-ms-transform":"translate(0%) scale(1)","transform":"translate(0%) scale(1)"}} />
                                </div>
                                <div className="noUi-origin" style={{"-webkit-transform":"translate(-100%)","-ms-transform":"translate(-100%)","transform":"translate(-100%)","z-index":"5"}}>
                                  <div className="noUi-handle noUi-handle-lower" data-handle={0} tabIndex={0} role="slider" aria-orientation="horizontal" aria-valuemin={50.0} aria-valuemax={250.0} aria-valuenow={50.0} aria-valuetext=" $50">
                                    <div className="noUi-touch-area" />
                                  </div>
                                </div>
                                <div className="noUi-origin" style={{"-webkit-transform":"translate(0%)","-ms-transform":"translate(0%)","transform":"translate(0%)","z-index":"4"}}>
                                  <div className="noUi-handle noUi-handle-upper" data-handle={1} tabIndex={0} role="slider" aria-orientation="horizontal" aria-valuemin={50.0} aria-valuemax={250.0} aria-valuenow={250.0} aria-valuetext=" $250">
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
                  <div className="sidebar__item">
                    <h5 className="text-18 fw-500 mb-10">Review Score</h5>
                    <div className="sidebar-checkbox">
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
                        <div className="col-auto">
                          <div className="text-15 text-light-1" />
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
                        <div className="col-auto">
                          <div className="text-15 text-light-1" />
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
                        <div className="col-auto">
                          <div className="text-15 text-light-1" />
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
                        <div className="col-auto">
                          <div className="text-15 text-light-1" />
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
                        <div className="col-auto">
                          <div className="text-15 text-light-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar__item g-filter-item">
                    <h5 className="text-18 fw-500 mb-10">Boat Type</h5>
                    <div className="sidebar-checkbox ">
                      <div className="row y-gap-10 items-center justify-between ">
                        <div className="col-auto">
                          <label className="cursor-pointer">
                            <div className="form-checkbox d-flex items-center">
                              <input type="checkbox" name="attrs[15][]" defaultValue={96} className="has-value" />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check" />
                              </div>
                              <div className="text-15 ml-10">Airboat</div>
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
                              <input type="checkbox" name="attrs[15][]" defaultValue={97} className="has-value" />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check" />
                              </div>
                              <div className="text-15 ml-10">Cabin cruiser</div>
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
                              <input type="checkbox" name="attrs[15][]" defaultValue={98} className="has-value" />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check" />
                              </div>
                              <div className="text-15 ml-10">Cruise ship</div>
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
                              <input type="checkbox" name="attrs[15][]" defaultValue={99} className="has-value" />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check" />
                              </div>
                              <div className="text-15 ml-10">Express cruiser</div>
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
                              <input type="checkbox" name="attrs[15][]" defaultValue={100} className="has-value" />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check" />
                              </div>
                              <div className="text-15 ml-10">Electric boat</div>
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
                              <input type="checkbox" name="attrs[15][]" defaultValue={101} className="has-value" />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check" />
                              </div>
                              <div className="text-15 ml-10">Ferry</div>
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
                              <input type="checkbox" name="attrs[15][]" defaultValue={102} className="has-value" />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check" />
                              </div>
                              <div className="text-15 ml-10">Inflatable boat</div>
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
                              <input type="checkbox" name="attrs[15][]" defaultValue={103} className="has-value" />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check" />
                              </div>
                              <div className="text-15 ml-10">Jetboat</div>
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
                    <h5 className="text-18 fw-500 mb-10">Amenities</h5>
                    <div className="sidebar-checkbox ">
                      <div className="row y-gap-10 items-center justify-between ">
                        <div className="col-auto">
                          <label className="cursor-pointer">
                            <div className="form-checkbox d-flex items-center">
                              <input type="checkbox" name="attrs[16][]" defaultValue={104} className="has-value" />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check" />
                              </div>
                              <div className="text-15 ml-10">Events and Meetings</div>
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
                              <input type="checkbox" name="attrs[16][]" defaultValue={105} className="has-value" />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check" />
                              </div>
                              <div className="text-15 ml-10">Scuba Gear</div>
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
                              <input type="checkbox" name="attrs[16][]" defaultValue={106} className="has-value" />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check" />
                              </div>
                              <div className="text-15 ml-10">Hot Tub/Jacuzzi on Deck</div>
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
                              <input type="checkbox" name="attrs[16][]" defaultValue={107} className="has-value" />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check" />
                              </div>
                              <div className="text-15 ml-10">Sport Fishing</div>
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
                              <input type="checkbox" name="attrs[16][]" defaultValue={108} className="has-value" />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check" />
                              </div>
                              <div className="text-15 ml-10">Speciality Classic Yacht</div>
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
                              <input type="checkbox" name="attrs[16][]" defaultValue={109} className="has-value" />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check" />
                              </div>
                              <div className="text-15 ml-10">Gulet</div>
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
                    13 boats found
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
              {/*End Filter mobile*/}
              <div className="ajax-search-result">
                <div className="pt-30 mt-30 border-top-light" />
                <div className="row y-gap-30">
                  <div className="col-lg-4 col-sm-6">
                    <a  className="cruiseCard -type-1 rounded-4 item-loop-wrap">
                      <div className="cruiseCard__image">
                        <div className="cardImage ratio ratio-6:5">
                          <div className="cardImage__content">
                            <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="My Way 100" data-ll-status="loaded" src={pic}/>
                          </div>
                          <div className="service-wishlist " data-id={13} data-type="boat">
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
                      <div className="cruiseCard__content mt-10">
                        <div className="text-14 lh-14 text-light-1 mb-5">Paris</div>
                        <h4 className="cruiseCard__title text-dark-1 text-18 lh-16 fw-500">
                          <span>My Way 100</span>
                        </h4>
                        <p className="text-light-1 lh-14 text-14 mt-5" />
                        <div className="row y-gap-10 justify-between items-center mt-2">
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Max Guests"><i className="icofont-ui-user-group input-icon field-icon" />
                            </div>
                            <div className="text-14 text-light-1">14</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Cabin"><i className="input-icon field-icon icofont-sail-boat-alt-2" />
                            </div>
                            <div className="text-14 text-light-1">1</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Length Boat"><i className="input-icon field-icon icofont-yacht" /></div>
                            <div className="text-14 text-light-1">19m</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Speed"><i className="input-icon field-icon icofont-speed-meter" /></div>
                            <div className="text-14 text-light-1">32km/h</div>
                          </div>
                        </div>
                        <div className="row y-gap-20 justify-between items-center pt-5">
                          <div className="col-auto">
                            <div className="d-flex items-center">
                              <div className="icon-star text-yellow-1 text-10 mr-5" />
                              <div className="text-14 text-light-1">
                                <span className="text-15 text-dark-1 fw-500">5.0</span>
                                3 reviews
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-14 text-light-1">
                              From
                              <span className="text-16 fw-500 text-dark-1 d-inline-flex">$150</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <a  className="cruiseCard -type-1 rounded-4 item-loop-wrap">
                      <div className="cruiseCard__image">
                        <div className="cardImage ratio ratio-6:5">
                          <div className="cardImage__content">
                            <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Ohana 3X" data-ll-status="loaded" src={pic} />
                          </div>
                          <div className="service-wishlist " data-id={12} data-type="boat">
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
                      <div className="cruiseCard__content mt-10">
                        <div className="text-14 lh-14 text-light-1 mb-5">United States</div>
                        <h4 className="cruiseCard__title text-dark-1 text-18 lh-16 fw-500">
                          <span>Ohana 3X</span>
                        </h4>
                        <p className="text-light-1 lh-14 text-14 mt-5" />
                        <div className="row y-gap-10 justify-between items-center mt-2">
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Max Guests"><i className="icofont-ui-user-group input-icon field-icon" />
                            </div>
                            <div className="text-14 text-light-1">5</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Cabin"><i className="input-icon field-icon icofont-sail-boat-alt-2" />
                            </div>
                            <div className="text-14 text-light-1">1</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Length Boat"><i className="input-icon field-icon icofont-yacht" /></div>
                            <div className="text-14 text-light-1">16m</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Speed"><i className="input-icon field-icon icofont-speed-meter" /></div>
                            <div className="text-14 text-light-1">32km/h</div>
                          </div>
                        </div>
                        <div className="row y-gap-20 justify-between items-center pt-5">
                          <div className="col-auto">
                            <div className="d-flex items-center">
                              <div className="icon-star text-yellow-1 text-10 mr-5" />
                              <div className="text-14 text-light-1">
                                <span className="text-15 text-dark-1 fw-500">4.5</span>
                                4 reviews
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-14 text-light-1">
                              From
                              <span className="text-16 fw-500 text-dark-1 d-inline-flex">$80</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <a  className="cruiseCard -type-1 rounded-4 item-loop-wrap">
                      <div className="cruiseCard__image">
                        <div className="cardImage ratio ratio-6:5">
                          <div className="cardImage__content">
                            <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Freedom M2" data-ll-status="loaded" src={pic}/>
                          </div>
                          <div className="service-wishlist " data-id={11} data-type="boat">
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
                      <div className="cruiseCard__content mt-10">
                        <div className="text-14 lh-14 text-light-1 mb-5">Germany</div>
                        <h4 className="cruiseCard__title text-dark-1 text-18 lh-16 fw-500">
                          <span>Freedom M2</span>
                        </h4>
                        <p className="text-light-1 lh-14 text-14 mt-5" />
                        <div className="row y-gap-10 justify-between items-center mt-2">
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Max Guests"><i className="icofont-ui-user-group input-icon field-icon" />
                            </div>
                            <div className="text-14 text-light-1">12</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Cabin"><i className="input-icon field-icon icofont-sail-boat-alt-2" />
                            </div>
                            <div className="text-14 text-light-1">2</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Length Boat"><i className="input-icon field-icon icofont-yacht" /></div>
                            <div className="text-14 text-light-1">16m</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Speed"><i className="input-icon field-icon icofont-speed-meter" /></div>
                            <div className="text-14 text-light-1">30km/h</div>
                          </div>
                        </div>
                        <div className="row y-gap-20 justify-between items-center pt-5">
                          <div className="col-auto">
                            <div className="d-flex items-center">
                              <div className="icon-star text-yellow-1 text-10 mr-5" />
                              <div className="text-14 text-light-1">
                                <span className="text-15 text-dark-1 fw-500">4.8</span>
                                4 reviews
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-14 text-light-1">
                              From
                              <span className="text-16 fw-500 text-dark-1 d-inline-flex">$50</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <a  className="cruiseCard -type-1 rounded-4 item-loop-wrap">
                      <div className="cruiseCard__image">
                        <div className="cardImage ratio ratio-6:5">
                          <div className="cardImage__content">
                            <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Blue Dream TC-20" data-ll-status="loaded" src={pic} />
                          </div>
                          <div className="service-wishlist " data-id={6} data-type="boat">
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
                      <div className="cruiseCard__content mt-10">
                        <div className="text-14 lh-14 text-light-1 mb-5">Paris</div>
                        <h4 className="cruiseCard__title text-dark-1 text-18 lh-16 fw-500">
                          <span>Blue Dream TC-20</span>
                        </h4>
                        <p className="text-light-1 lh-14 text-14 mt-5" />
                        <div className="row y-gap-10 justify-between items-center mt-2">
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Max Guests"><i className="icofont-ui-user-group input-icon field-icon" />
                            </div>
                            <div className="text-14 text-light-1">15</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Cabin"><i className="input-icon field-icon icofont-sail-boat-alt-2" />
                            </div>
                            <div className="text-14 text-light-1">1</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Length Boat"><i className="input-icon field-icon icofont-yacht" /></div>
                            <div className="text-14 text-light-1">18m</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Speed"><i className="input-icon field-icon icofont-speed-meter" /></div>
                            <div className="text-14 text-light-1">27km/h</div>
                          </div>
                        </div>
                        <div className="row y-gap-20 justify-between items-center pt-5">
                          <div className="col-auto">
                            <div className="d-flex items-center">
                              <div className="icon-star text-yellow-1 text-10 mr-5" />
                              <div className="text-14 text-light-1">
                                <span className="text-15 text-dark-1 fw-500">4.5</span>
                                2 reviews
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-14 text-light-1">
                              From
                              <span className="text-16 fw-500 text-dark-1 d-inline-flex">$130</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <a  className="cruiseCard -type-1 rounded-4 item-loop-wrap">
                      <div className="cruiseCard__image">
                        <div className="cardImage ratio ratio-6:5">
                          <div className="cardImage__content">
                            <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Blue Moon Cruising" data-ll-status="loaded" src={pic} />
                          </div>
                          <div className="service-wishlist " data-id={3} data-type="boat">
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
                      <div className="cruiseCard__content mt-10">
                        <div className="text-14 lh-14 text-light-1 mb-5">United States</div>
                        <h4 className="cruiseCard__title text-dark-1 text-18 lh-16 fw-500">
                          <span>Blue Moon Cruising</span>
                        </h4>
                        <p className="text-light-1 lh-14 text-14 mt-5" />
                        <div className="row y-gap-10 justify-between items-center mt-2">
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Max Guests"><i className="icofont-ui-user-group input-icon field-icon" />
                            </div>
                            <div className="text-14 text-light-1">8</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Cabin"><i className="input-icon field-icon icofont-sail-boat-alt-2" />
                            </div>
                            <div className="text-14 text-light-1">1</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Length Boat"><i className="input-icon field-icon icofont-yacht" /></div>
                            <div className="text-14 text-light-1">14m</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Speed"><i className="input-icon field-icon icofont-speed-meter" /></div>
                            <div className="text-14 text-light-1">29km/h</div>
                          </div>
                        </div>
                        <div className="row y-gap-20 justify-between items-center pt-5">
                          <div className="col-auto">
                            <div className="d-flex items-center">
                              <div className="icon-star text-yellow-1 text-10 mr-5" />
                              <div className="text-14 text-light-1">
                                <span className="text-15 text-dark-1 fw-500">4.7</span>
                                3 reviews
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-14 text-light-1">
                              From
                              <span className="text-16 fw-500 text-dark-1 d-inline-flex">$200</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <a className="cruiseCard -type-1 rounded-4 item-loop-wrap">
                      <div className="cruiseCard__image">
                        <div className="cardImage ratio ratio-6:5">
                          <div className="cardImage__content">
                            <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Summer Breeze" data-ll-status="loaded" src={pic} />
                          </div>
                          <div className="service-wishlist " data-id={2} data-type="boat">
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
                      <div className="cruiseCard__content mt-10">
                        <div className="text-14 lh-14 text-light-1 mb-5">Paris</div>
                        <h4 className="cruiseCard__title text-dark-1 text-18 lh-16 fw-500">
                          <span>Summer Breeze</span>
                        </h4>
                        <p className="text-light-1 lh-14 text-14 mt-5" />
                        <div className="row y-gap-10 justify-between items-center mt-2">
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Max Guests"><i className="icofont-ui-user-group input-icon field-icon" />
                            </div>
                            <div className="text-14 text-light-1">5</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Cabin"><i className="input-icon field-icon icofont-sail-boat-alt-2" />
                            </div>
                            <div className="text-14 text-light-1">2</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Length Boat"><i className="input-icon field-icon icofont-yacht" /></div>
                            <div className="text-14 text-light-1">18m</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Speed"><i className="input-icon field-icon icofont-speed-meter" /></div>
                            <div className="text-14 text-light-1">34km/h</div>
                          </div>
                        </div>
                        <div className="row y-gap-20 justify-between items-center pt-5">
                          <div className="col-auto">
                            <div className="d-flex items-center">
                              <div className="icon-star text-yellow-1 text-10 mr-5" />
                              <div className="text-14 text-light-1">
                                <span className="text-15 text-dark-1 fw-500">4.3</span>
                                4 reviews
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-14 text-light-1">
                              From
                              <span className="text-16 fw-500 text-dark-1 d-inline-flex">$150</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <a  className="cruiseCard -type-1 rounded-4 item-loop-wrap">
                      <div className="cruiseCard__image">
                        <div className="cardImage ratio ratio-6:5">
                          <div className="cardImage__content">
                            <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Cruising Yacht" data-ll-status="loaded" src={pic} />
                          </div>
                          <div className="service-wishlist " data-id={1} data-type="boat">
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
                      <div className="cruiseCard__content mt-10">
                        <div className="text-14 lh-14 text-light-1 mb-5">Paris</div>
                        <h4 className="cruiseCard__title text-dark-1 text-18 lh-16 fw-500">
                          <span>Cruising Yacht</span>
                        </h4>
                        <p className="text-light-1 lh-14 text-14 mt-5" />
                        <div className="row y-gap-10 justify-between items-center mt-2">
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Max Guests"><i className="icofont-ui-user-group input-icon field-icon" />
                            </div>
                            <div className="text-14 text-light-1">14</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Cabin"><i className="input-icon field-icon icofont-sail-boat-alt-2" />
                            </div>
                            <div className="text-14 text-light-1">5</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Length Boat"><i className="input-icon field-icon icofont-yacht" /></div>
                            <div className="text-14 text-light-1">14m</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Speed"><i className="input-icon field-icon icofont-speed-meter" /></div>
                            <div className="text-14 text-light-1">35km/h</div>
                          </div>
                        </div>
                        <div className="row y-gap-20 justify-between items-center pt-5">
                          <div className="col-auto">
                            <div className="d-flex items-center">
                              <div className="icon-star text-yellow-1 text-10 mr-5" />
                              <div className="text-14 text-light-1">
                                <span className="text-15 text-dark-1 fw-500">4.5</span>
                                4 reviews
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-14 text-light-1">
                              From
                              <span className="text-16 fw-500 text-dark-1 d-inline-flex">$100</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <a  className="cruiseCard -type-1 rounded-4 item-loop-wrap">
                      <div className="cruiseCard__image">
                        <div className="cardImage ratio ratio-6:5">
                          <div className="cardImage__content">
                            <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Endless Summer W-10" data-ll-status="loaded" src={pic} />
                          </div>
                          <div className="service-wishlist " data-id={10} data-type="boat">
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
                      <div className="cruiseCard__content mt-10">
                        <div className="text-14 lh-14 text-light-1 mb-5">Virginia</div>
                        <h4 className="cruiseCard__title text-dark-1 text-18 lh-16 fw-500">
                          <span>Endless Summer W-10</span>
                        </h4>
                        <p className="text-light-1 lh-14 text-14 mt-5" />
                        <div className="row y-gap-10 justify-between items-center mt-2">
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Max Guests"><i className="icofont-ui-user-group input-icon field-icon" />
                            </div>
                            <div className="text-14 text-light-1">13</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Cabin"><i className="input-icon field-icon icofont-sail-boat-alt-2" />
                            </div>
                            <div className="text-14 text-light-1">3</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Length Boat"><i className="input-icon field-icon icofont-yacht" /></div>
                            <div className="text-14 text-light-1">15m</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Speed"><i className="input-icon field-icon icofont-speed-meter" /></div>
                            <div className="text-14 text-light-1">33km/h</div>
                          </div>
                        </div>
                        <div className="row y-gap-20 justify-between items-center pt-5">
                          <div className="col-auto">
                            <div className="d-flex items-center">
                              <div className="icon-star text-yellow-1 text-10 mr-5" />
                              <div className="text-14 text-light-1">
                                <span className="text-15 text-dark-1 fw-500">4.0</span>
                                3 reviews
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-14 text-light-1">
                              From
                              <span className="text-16 fw-500 text-dark-1 d-inline-flex">$230</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <a className="cruiseCard -type-1 rounded-4 item-loop-wrap">
                      <div className="cruiseCard__image">
                        <div className="cardImage ratio ratio-6:5">
                          <div className="cardImage__content">
                            <img className="img-responsive rounded-4 col-12 js-lazy lazy loaded" alt="Destiny 6" data-ll-status="loaded" src={pic} />
                          </div>
                          <div className="service-wishlist " data-id={9} data-type="boat">
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
                      <div className="cruiseCard__content mt-10">
                        <div className="text-14 lh-14 text-light-1 mb-5">San Francisco</div>
                        <h4 className="cruiseCard__title text-dark-1 text-18 lh-16 fw-500">
                          <span>Destiny 6</span>
                        </h4>
                        <p className="text-light-1 lh-14 text-14 mt-5" />
                        <div className="row y-gap-10 justify-between items-center mt-2">
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Max Guests"><i className="icofont-ui-user-group input-icon field-icon" />
                            </div>
                            <div className="text-14 text-light-1">13</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Cabin"><i className="input-icon field-icon icofont-sail-boat-alt-2" />
                            </div>
                            <div className="text-14 text-light-1">4</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Length Boat"><i className="input-icon field-icon icofont-yacht" /></div>
                            <div className="text-14 text-light-1">10m</div>
                          </div>
                          <div className="col-auto">
                            <div className="text-25 text-dark-1 fw-500 lh-1" title="Speed"><i className="input-icon field-icon icofont-speed-meter" /></div>
                            <div className="text-14 text-light-1">27km/h</div>
                          </div>
                        </div>
                        <div className="row y-gap-20 justify-between items-center pt-5">
                          <div className="col-auto">
                            <div className="d-flex items-center">
                              <div className="icon-star text-yellow-1 text-10 mr-5" />
                              <div className="text-14 text-light-1">
                                <span className="text-15 text-dark-1 fw-500">4.3</span>
                                4 reviews
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-14 text-light-1">
                              From
                              <span className="text-16 fw-500 text-dark-1 d-inline-flex">$180</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
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
                            <a className="size-40 flex-center rounded-full p-link">2</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto md:order-2 p-item">
                        <a className="button -blue-1 size-40 rounded-full border-light">
                          <i className="icon-chevron-right text-12" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-30 md:mt-10">
                    <div className="text-14 text-light-1">Showing 1 - 9 of 13 boats</div>
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
              <form className="bravo-theme-gotrip-login-form y-gap-20" method="POST" >
                <input type="hidden" name="redirect" defaultValue />
                <input type="hidden" name="_token" defaultValue="cOyEbwgCXlhsxzARhlr9mg034NuR4AXiRadYOw93" className="has-value" />
                <div className="col-12">
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
                    <div className="form-checkbox" style={{"margin-top":"3px"}}>
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
                  <div className="text-center px-30">By creating an account, you agree to our Terms of Service
                    and Privacy Statement.</div>
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
                <input type="hidden" name="_token" defaultValue="cOyEbwgCXlhsxzARhlr9mg034NuR4AXiRadYOw93" className="has-value" />
                <div className="row y-gap-20">
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
                      <div className="form-checkbox" style={{"margin-top":"3px"}}>
                        <input type="checkbox" name="term" id="register-term" className="has-value" />
                        <div className="form-checkbox__mark">
                          <div className="form-checkbox__icon icon-check" />
                        </div>
                      </div>
                      <label className="text-15 lh-15 text-light-1 ml-10" htmlFor="register-term">I have read
                        and accept the Terms and Privacy Policy?</label>
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
