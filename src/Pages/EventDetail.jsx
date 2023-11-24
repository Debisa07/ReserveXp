import React from "react";
import vt from "../assets/image/vt.png"
import vt1 from "../assets/image/gallery-1.jpg"
import vt2 from "../assets/image/gallery-2.jpg"
import vt3 from "../assets/image/gallery-30.jpg"
import vt4 from "../assets/image/gallery-40.jpg"
import vt5 from "../assets/image/gallery-50.jpg"
import vt6 from "../assets/image/gallery-60.jpg"
import vt7 from "../assets/image/vt-7.png"
import vt8 from "../assets/image/vt-8.png"
import vt9 from "../assets/image/vt-9.png"
import vt10 from "../assets/image/vt-10.png"
import vt11 from "../assets/image/vt-11.png"
import vt12 from "../assets/image/vt-12.png"
import vt13 from "../assets/image/vt-13.png"
import vt14 from "../assets/image/vt-14.png"
import avatar from "../assets/image/avatar.png"


import 'font-awesome/css/font-awesome.min.css';
import { Link, } from 'react-router-dom';

export default function HotelServices() {

  return (
    <div style={{ marginLeft: "-60px", marginTop: "80px" }}>
      <div>
        <div>
          <div className="bravo_wrap overflow-hidden">
            
            <div className="bravo_detail bravo_detail_event">
              <div className="blog-breadcrumb py-10 bg-light-2">
                <div className="container">
                  <div className="row y-gap-10 items-center justify-between">
                    <div className="col-auto">
                      <ol className="pl-0 ul row x-gap-10 y-gap-5 items-center text-14 text-light-1 list-unstyled" itemScope itemType="https://schema.org/BreadcrumbList">
                        <li className="col-auto" itemProp="itemListElement" itemScope >
                          <a itemProp="item"><span itemProp="name">Home</span></a>
                          <meta itemProp="position" content={1} />
                        </li>
                        <li className="col-auto">
                          <div className>&gt;</div>
                        </li>
                        <li className="col-auto " itemProp="itemListElement" itemScope>
                          <a itemScope  itemProp="item" ><span itemProp="name">Event</span></a>
                          <meta itemProp="position" content={2} />
                        </li>
                        <li className="col-auto">
                          <div className>&gt;</div>
                        </li>
                        <li className="col-auto " itemProp="itemListElement" itemScope >
                          <a  itemScope itemType="https://schema.org/WebPage" itemProp="item" ><span itemProp="name">Reykjavik</span></a>
                          <meta itemProp="position" content={3} />
                        </li>
                        <li className="col-auto">
                          <div className>&gt;</div>
                        </li>
                        <li className="col-auto active" itemProp="itemListElement" itemScope >
                          <span itemProp="name" className="text-dark-1">Aspen Glade Weddings &amp; Events</span>
                          <meta itemProp="position" content={4} />
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="relative d-flex justify-center js-section-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-autoheight swiper-watch-progress" data-gap={10} data-slider-cols="xl-2 lg-2 base-1" data-nav-prev="js-img-prev" data-nav-next="js-img-next" data-loop>
                  <div className="swiper-wrapper" style={{ "-webkit-transition-duration": "0ms", "transition-duration": "0ms", "-webkit-transform": "translate3d(-1680px, 0px, 0px)", "-ms-transform": "translate3d(-1680px, 0px, 0px)", "transform": "translate3d(-1680px, 0px, 0px)", "height": "387px" }} id="swiper-wrapper-64c87dc8ac54b921" aria-live="polite"><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={3} style={{ "width": "550px", "margin-right": "10px" }} role="group" aria-label="4 / 6">
                    <div className="ratio ratio-64:45">
                      <img src={vt4} alt="Gallery" className="rounded-4 img-ratio" />
                    </div>
                  </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={4} style={{ "width": "550px", "margin-right": "10px" }} role="group" aria-label="5 / 6">
                      <div className="ratio ratio-64:45">
                        <img src={vt5} alt="Gallery" className="rounded-4 img-ratio" />
                      </div>
                    </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index={5} style={{ "width": "550px", "margin-right": "10px" }} role="group" aria-label="6 / 6">
                      <div className="ratio ratio-64:45">
                        <img src={vt6} alt="Gallery" className="rounded-4 img-ratio" />
                      </div>
                    </div>
                    <div className="swiper-slide swiper-slide-visible swiper-slide-active" data-swiper-slide-index={0} style={{ "width": "550px", "margin-right": "10px" }} role="group" aria-label="1 / 6">
                      <div className="ratio ratio-64:45">
                        <img src={vt1} alt="Gallery" className="rounded-4 img-ratio" />
                      </div>
                    </div>
                    <div className="swiper-slide swiper-slide-visible swiper-slide-next" data-swiper-slide-index={1} style={{ "width": "550px", "margin-right": "10px" }} role="group" aria-label="2 / 6">
                      <div className="ratio ratio-64:45">
                        <img src={vt2} alt="Gallery" className="rounded-4 img-ratio" />
                      </div>
                    </div>
                    <div className="swiper-slide" data-swiper-slide-index={2} style={{ "width": "550px", "margin-right": "10px" }} role="group" aria-label="3 / 6">
                      <div className="ratio ratio-64:45">
                        <img src={vt3} alt="Gallery" className="rounded-4 img-ratio" />
                      </div>
                    </div>
                    <div className="swiper-slide" data-swiper-slide-index={3} style={{ "width": "550px", "margin-right": "10px" }} role="group" aria-label="4 / 6">
                      <div className="ratio ratio-64:45">
                        <img src={vt4} alt="Gallery" className="rounded-4 img-ratio" />
                      </div>
                    </div>
                    <div className="swiper-slide" data-swiper-slide-index={4} style={{ "width": "550px", "margin-right": "10px" }} role="group" aria-label="5 / 6">
                      <div className="ratio ratio-64:45">
                        <img src={vt5} alt="Gallery" className="rounded-4 img-ratio" />
                      </div>
                    </div>
                    <div className="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index={5} style={{ "width": "550px", "margin-right": "10px" }} role="group" aria-label="6 / 6">
                      <div className="ratio ratio-64:45">
                        <img src={vt6} alt="Gallery" className="rounded-4 img-ratio" />
                      </div>
                    </div>
                    <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index={0} style={{ "width": "550px", "margin-right": "10px" }} role="group" aria-label="1 / 6">
                      <div className="ratio ratio-64:45">
                        <img src={vt1} alt="Gallery" className="rounded-4 img-ratio" />
                      </div>
                    </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index={1} style={{ "width": "550px", "margin-right": "10px" }} role="group" aria-label="2 / 6">
                      <div className="ratio ratio-64:45">
                        <img src={vt2} alt="Gallery" className="rounded-4 img-ratio" />
                      </div>
                    </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={2} style={{ "width": "550px", "margin-right": "10px" }} role="group" aria-label="3 / 6">
                      <div className="ratio ratio-64:45">
                        <img src={vt3} alt="Gallery" className="rounded-4 img-ratio" />
                      </div>
                    </div></div>
                  <div className="absolute h-full col-11">
                    <button className="section-slider-nav -prev flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-img-prev" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-64c87dc8ac54b921">
                      <i className="icon icon-chevron-left text-12" />
                    </button>
                    <button className="section-slider-nav -next flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-img-next" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-64c87dc8ac54b921">
                      <i className="icon icon-chevron-right text-12" />
                    </button>
                  </div>
                  <div className="absolute h-full col-12 px-20 py-20 d-flex justify-end items-end gotrip-banner">
                    <div className="btn-group">
                      <a href="#" className="btn btn-transparent has-icon bravo-video-popup" data-toggle="modal" data-src="https://www.youtube.com/embed/UfEiKK-iX70" data-target="#myModal">
                        <i className="input-icon field-icon fa">
                          <svg height="18px" width="18px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style={{ "enable-background": "new 0 0 24 24" }} xmlSpace="preserve">
                            <g fill="#FFFFFF">
                              <path d="M2.25,24C1.009,24,0,22.991,0,21.75V2.25C0,1.009,1.009,0,2.25,0h19.5C22.991,0,24,1.009,24,2.25v19.5
                                              c0,1.241-1.009,2.25-2.25,2.25H2.25z M2.25,1.5C1.836,1.5,1.5,1.836,1.5,2.25v19.5c0,0.414,0.336,0.75,0.75,0.75h19.5
                                              c0.414,0,0.75-0.336,0.75-0.75V2.25c0-0.414-0.336-0.75-0.75-0.75H2.25z">
                              </path>
                              <path d="M9.857,16.5c-0.173,0-0.345-0.028-0.511-0.084C8.94,16.281,8.61,15.994,8.419,15.61c-0.11-0.221-0.169-0.469-0.169-0.716
                                              V9.106C8.25,8.22,8.97,7.5,9.856,7.5c0.247,0,0.495,0.058,0.716,0.169l5.79,2.896c0.792,0.395,1.114,1.361,0.719,2.153
                                              c-0.154,0.309-0.41,0.565-0.719,0.719l-5.788,2.895C10.348,16.443,10.107,16.5,9.857,16.5z M9.856,9C9.798,9,9.75,9.047,9.75,9.106
                                              v5.788c0,0.016,0.004,0.033,0.011,0.047c0.013,0.027,0.034,0.044,0.061,0.054C9.834,14.998,9.845,15,9.856,15
                                              c0.016,0,0.032-0.004,0.047-0.011l5.788-2.895c0.02-0.01,0.038-0.027,0.047-0.047c0.026-0.052,0.005-0.115-0.047-0.141l-5.79-2.895
                                              C9.889,9.004,9.872,9,9.856,9z">
                              </path>
                            </g>
                          </svg>
                        </i>Tour Video
                      </a>
                    </div>
                    <a  className="button -blue-1 px-24 py-15 bg-white text-dark-1 z-2 js-gallery" data-gallery="gallery2">
                      See All 6 Photos
                    </a>
                    <a  className="js-gallery" data-gallery="gallery2" />
                    <a  className="js-gallery" data-gallery="gallery2" />
                    <a  className="js-gallery" data-gallery="gallery2" />
                    <a  className="js-gallery" data-gallery="gallery2" />
                    <a  className="js-gallery" data-gallery="gallery2" />
                  </div>
                  <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                <div className="container">
                  <div className="video_popup_modal">
                    <div className="modal fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">×</span>
                            </button>
                            <div className="embed-responsive embed-responsive-16by9">
                              <iframe className="embed-responsive-item bravo_embed_video" src="index_1.html" allowscriptaccess="always" allow="autoplay" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bravo_content pt-40">
                <div className="container">
                  <div className="row y-gap-30">
                    <div className="col-md-12 col-lg-8">
                      <div className="row justify-between items-end">
                        <div className="col-auto">
                          <h1 className="text-26 fw-600">Aspen Glade Weddings &amp; Events</h1>
                          <div className="row x-gap-10 y-gap-20 items-center pt-10">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <i className="icon-star text-10 text-yellow-1" />
                                <div className="text-14 text-light-1 ml-10">
                                  <span className="text-15 fw-500 text-dark-1">4.3</span>
                                  3 reviews
                                </div>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="row x-gap-10 items-center">
                                <div className="col-auto">
                                  <div className="d-flex x-gap-5 items-center">
                                    <i className="icon-location-2 text-16 text-light-1" />
                                    <div className="text-15 text-light-1">New York</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="row x-gap-10 y-gap-10">
                            <div className="col-auto">
                              <div className="dropdown">
                                <button className="button px-15 py-10 -blue-1 dropdown-toggle" type="button" id="dropdownMenuShare" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i className="icon-share mr-10" />
                                  Share
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuShare">
                                  <a className="dropdown-item facebook" target="_blank" rel="noopener" original-title="Facebook">
                                    <i className="fa fa-facebook" /> Facebook
                                  </a>
                                  <a className="dropdown-item twitter"  target="_blank" rel="noopener" original-title="Twitter">
                                    <i className="fa fa-twitter" /> Twitter
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="service-wishlist " data-id={4} data-type="event">
                                <button className="button px-15 py-10 -blue-1 bg-light-2">
                                  <i className="icon-heart mr-10" />
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-top-light mt-40 mb-40" />
                      <h3 className="text-22 fw-500 mt-30">
                        Event snapshot
                      </h3>
                      <div className="row y-gap-30 justify-between pt-20">
                        <div className="col-md-auto col-6">
                          <div className="d-flex">
                            <i className="icofont-wall-clock text-24 text-blue-1 mr-10" />
                            <div className="text-15 lh-15">
                              Start Time:<br /> 17:00
                            </div>
                          </div>
                        </div>
                        <div className="col-md-auto col-6">
                          <div className="d-flex">
                            <i className="icofont-infinite text-24 text-blue-1 mr-10" />
                            <div className="text-15 lh-15">
                              Duration <br /> 5H
                            </div>
                          </div>
                        </div>
                        <div className="col-md-auto col-6">
                          <div className="d-flex">
                            <i className="icofont-heart-beat text-24 text-blue-1 mr-10" />
                            <div className="text-15 lh-15">
                              Wishlist <br /> People interest: 0
                            </div>
                          </div>
                        </div>
                        <div className="col-md-auto col-6">
                          <div className="d-flex">
                            <i className="icon-route text-24 text-blue-1 mr-10" />
                            <div className="text-15 lh-15">
                              Location <br /> Reykjavik
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-top-light mt-40 mb-40" />
                      <div className="row x-gap-40 y-gap-40 gotrip-overview">
                        <div className="col-12">
                          <h3 className="text-22 fw-500">Overview</h3>
                          <div className="description text-dark-1 text-15 mt-20">
                            <p>Start and end in San Francisco! With the in-depth cultural event Northern California Summer 2019, you have a 8 day event package taking you through San Francisco, USA and 9 other destinations in USA. Northern California Summer 2019 includes accommodation as well as an expert guide, meals, transport and more.</p><h4>HIGHLIGHTS</h4><ul><li>Visit the Museum of Modern Art in Manhattan</li><li>See amazing works of contemporary art, including Vincent van Gogh's The Starry Night</li><li>Check out Campbell's Soup Cans by Warhol and The Dance (I) by Matisse</li><li>Behold masterpieces by Gauguin, Dali, Picasso, and Pollock</li><li>Enjoy free audio guides available in English, French, German, Italian, Spanish, Portuguese</li></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                      <div className="bravo_single_book_wrap d-flex justify-end js-pin-content " data-offset={120}>
                        <div className="w-360 lg:w-full d-flex flex-column items-center">
                          <div className="bravo_single_book px-30 py-30 rounded-4 border-light bg-white shadow-4">
                            <div className="owner-info widget-boxrounded-4 border-light shadow-4 bg-white w-100 mb-20 rounded-1">
                              <div className="media d-flex">
                                <div className="media-left mr-5 pt-1">
                                  <a className="avatar-cover" style={{ "background-image": "url(\"avatar.png\")", "background-size": "cover" }}>
                                  </a>
                                </div>
                                <div className="media-body">
                                  <h4 className="media-heading"><a className="author-link" >Vendor 01</a>
                                    <img data-toggle="tooltip" data-placement="top" src="ico-not-vefified-1.svg" alt="Verified" aria-label="Not verified" data-bs-original-title="Not verified" />
                                  </h4>
                                  <p>Member Since Oct 2023</p>
                                </div>
                              </div>
                            </div>
                            <div id="bravo_event_book_app"><div className="row y-gap-15 items-center justify-between"><div className="col-auto"><div className="text-14 text-light-1">
                              From
                              <span className="text-14 text-red-1 line-through" /> <span className="text-20 fw-500 text-dark-1">$850</span></div></div> <div className="col-auto"><div className="d-flex items-center"><div className="text-14 text-right mr-10"><div className="lh-15 fw-500">Very Good</div> <div className="lh-15 text-light-1">
                                3 reviews
                              </div></div> <div className="size-40 flex-center bg-blue-1 rounded-4"><div className="text-14 fw-600 text-white">4.3</div></div></div></div></div> <div className="nav-enquiry"><div className="enquiry-item active"><span>Book</span></div> <div data-toggle="modal" data-target="#enquiry_form_modal" className="enquiry-item"><span>Enquiry</span></div></div> <div className="form-book"><div className="form-content"><div className="row y-gap-20 pt-20"><div className="col-12"><div data-format="MM/DD/YYYY" className="form-group form-date-field form-date-search clearfix px-20 py-10 border-light rounded-4 -right position-relative"><div className="date-wrapper clearfix"><div className="check-in-wrapper"><h4 className="text-15 fw-500 ls-2 lh-16">Select Dates</h4> <div className="render check-in-render">Please select date!</div></div></div> <input type="text" className="start_date has-value" style={{ "height": "1px", "visibility": "hidden", "position": "absolute", "left": "0px" }} defaultValue="11/10/2023" /></div></div> <div className="col-12"><div className="searchMenu-guests px-20 py-10 border-light rounded-4 js-form-dd"><div data-x-dd-click="searchMenu-guests"><h4 className="text-15 fw-500 ls-2 lh-16">Ticket Vip</h4> <h4 className="text-12 fw-400 ls-2 text-light-1">$1.000 per ticket</h4> <div className="text-15 text-light-1 ls-2 lh-16"><span className="js-count-adult">0</span></div></div> <div data-x-dd="searchMenu-guests" data-x-dd-toggle="-is-active" className="searchMenu-guests__field shadow-2 mt-10"><div className="bg-white px-30 py-30 rounded-4"><div className="row y-gap-10 justify-between items-center form-guest-search"><div className="col-auto"><div className="text-15 fw-500">Number</div></div> <div className="col-auto"><div data-value-change=".js-count-adult" className="d-flex items-center js-counter"><button className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down"><i className="icon-minus text-12" /></button> <span className="input"><input type="number" min={1} className="has-value" defaultValue={0} /></span> <button className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up"><i className="icon-plus text-12" /></button></div></div></div></div></div></div></div><div className="col-12"><div className="searchMenu-guests px-20 py-10 border-light rounded-4 js-form-dd"><div data-x-dd-click="searchMenu-guests"><h4 className="text-15 fw-500 ls-2 lh-16">Group Tickets</h4> <h4 className="text-12 fw-400 ls-2 text-light-1">$500 per ticket</h4> <div className="text-15 text-light-1 ls-2 lh-16"><span className="js-count-adult">0</span></div></div> <div data-x-dd="searchMenu-guests" data-x-dd-toggle="-is-active" className="searchMenu-guests__field shadow-2 mt-10"><div className="bg-white px-30 py-30 rounded-4"><div className="row y-gap-10 justify-between items-center form-guest-search"><div className="col-auto"><div className="text-15 fw-500">Number</div></div> <div className="col-auto"><div data-value-change=".js-count-adult" className="d-flex items-center js-counter"><button className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down"><i className="icon-minus text-12" /></button> <span className="input"><input type="number" min={1} className="has-value" defaultValue={0} /></span> <button className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up"><i className="icon-plus text-12" /></button></div></div></div></div></div></div></div> {/**/} <div className="col-12"><div className="form-section-group px-20 py-10 border-light rounded-4"><h4 className="form-section-title text-15 fw-500 ls-2 lh-16">Extra prices:</h4> <div className="form-group "><div className="extra-price-wrap d-flex justify-content-between"><div className="flex-grow-1"><label className="d-flex items-center"><span className="form-checkbox "><input type="checkbox" true-value={1} false-value={0} className="has-value" style={{ "display": "none" }} /> <span className="form-checkbox__mark"><span className="form-checkbox__icon icon-check" /></span></span> <span className="text-15 ml-10">Event service</span></label></div> <div className="flex-shrink-0">$100
                              </div></div></div></div></div> <div className="col-12"><div className="form-section-group form-group-padding px-20 py-10 border-light rounded-4"><div className="extra-price-wrap d-flex justify-content-between"><div className="flex-grow-1"><label className="text-15">Service fee
                                <i data-bs-toggle="tooltip" data-placement="top" title="This helps us run our platform and offer services like 24/7 support on your trip." className="fa fa-info-circle" /></label> {/**/}</div> <div className="flex-shrink-0"><div className="unit">
                                  $100
                                </div></div></div></div></div> {/**/} {/**/} <div className="col-12"><div className="submit-group"><a name="submit" className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white cursor-pointer btn-primary"><span>BOOK NOW</span> {/**/} <i className="fa fa-spinner fa-spin" style={{ "display": "none" }} /></a> <div className="alert-text text-danger mt-10 danger" style={{ "display": "none" }} /></div></div></div></div></div> <div className="d-flex items-center pt-20"><div className="size-40 flex-center bg-light-2 rounded-full"><i className="icon-heart text-16 text-green-2" /></div> <div className="text-14 lh-16 ml-10">100% of travelers recommend this experience</div></div></div>
                          </div>
                        </div>
                      </div>
                      <div className="modal fade" tabIndex={-1} role="dialog" id="enquiry_form_modal">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content enquiry_form_modal_form">
                            <div className="modal-header">
                              <h5 className="modal-title">Enquiry</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                            <div className="modal-body pt-0 pb-0">
                              <input type="hidden" name="service_id" defaultValue={4} className="has-value" />
                              <input type="hidden" name="service_type" defaultValue="event" className="has-value" />
                              <div className="form-input mb-3">
                                <input type="text" defaultValue name="enquiry_name" />
                                <label className="lh-1 text-16 text-light-1">Name *</label>
                              </div>
                              <div className="form-input mb-3">
                                <input type="text" defaultValue name="enquiry_email" />
                                <label className="lh-1 text-16 text-light-1">Email *</label>
                              </div>
                              <div className="form-input mb-3">
                                <input type="text" defaultValue name="enquiry_phone" />
                                <label className="lh-1 text-16 text-light-1">Phone</label>
                              </div>
                              <div className="form-input mb-3" v-if="!enquiry_is_submit">
                                <textarea name="enquiry_note" rows={4} defaultValue={""} />
                                <label className="lh-1 text-16 text-light-1">Note</label>
                              </div>
                              <div className="message_box" />
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="button -md -blue-1 bg-blue-1-05 text-blue-1" data-dismiss="modal">Close</button>
                              <button type="button" className="button -md -blue-1 bg-dark-3 text-white btn-submit-enquiry">
                                Send now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-40">
                        <div className="border-top-light mt-40 mb-40" />
                        <div className="g-attributes event-type attr-11">
                          <h3 className="text-22 fw-500">Event Type</h3>
                          <div className="list-attributes d-flex flex-wrap">
                            <div className="item field-day term-75">
                              <i className="icon-check text-blue-1 text-14 me-1" />
                              Field Day</div>
                            <div className="item glastonbury term-76">
                              <i className="icon-check text-blue-1 text-14 me-1" />
                              Glastonbury</div>
                            <div className="item green-man term-77">
                              <i className="icon-check text-blue-1 text-14 me-1" />
                              Green Man</div>
                            <div className="item wilderness term-80">
                              <i className="icon-check text-blue-1 text-14 me-1" />
                              Wilderness</div>
                            <div className="item primavera-sound term-82">
                              <i className="icon-check text-blue-1 text-14 me-1" />
                              Primavera Sound</div>
                          </div>
                        </div>
                        <div className="border-top-light mt-40 mb-40" />
                        <div className="g-attributes event-feature attr-12">
                          <h3 className="text-22 fw-500">Event Feature</h3>
                          <div className="list-attributes d-flex flex-wrap">
                            <div className="item camp-fire term-85">
                              <i className="icon-fire" />
                              Camp Fire</div>
                          </div>
                        </div>
                      </div>
                      <div className="border-top-light mt-40 mb-40" />
                      <section className="pb-40">
                        <div className="container-full">
                          <h3 className="text-22 fw-500 mb-10">Where you’ll be</h3>
                          <div className="mb-20">Reykjavik</div>
                          <div className="g-location">
                            <div className="location-map">
                              <div id="map_content" className="map rounded-4 map-500" style={{ "position": "relative", "overflow": "hidden" }}><div style={{ "height": "100%", "width": "100%", "position": "absolute", "top": "0px", "left": "0px", "background-color": "rgb(229, 227, 223)" }}><div style={{ "position": "absolute", "z-index": "0", "left": "0px", "top": "0px", "height": "100%", "width": "100%", "padding": "0px", "border-width": "0px", "margin": "0px" }} className="gm-style"><div><button style={{ "background": "transparent", "display": "block", "border": "medium", "margin": "0px", "padding": "0px", "-webkit-text-transform": "none", "text-transform": "none", "-webkit-appearance": "none", "-moz-appearance": "none", "appearance": "none", "position": "absolute", "cursor": "pointer", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "z-index": "1000002", "outline-offset": "3px", "right": "0px", "bottom": "0px", "-webkit-transform": "translateX(100%)", "-ms-transform": "translateX(100%)", "transform": "translateX(100%)" }} draggable="false" aria-label="Keyboard shortcuts" title="Keyboard shortcuts" type="button" /></div><div style={{ "position": "absolute", "z-index": "0", "left": "0px", "top": "0px", "height": "100%", "width": "100%", "padding": "0px", "border-width": "0px", "margin": "0px", "cursor": "url(\"openhand_8_8.cur.bmp\"), default", "touch-action": "pan-x pan-y" }} tabIndex={0} aria-label="Map" aria-roledescription="map" role="region" aria-describedby="F17B5EEE-AFBC-40DE-ADDD-44A3515C2EFA"><div style={{ "z-index": "1", "position": "absolute", "left": "50%", "top": "50%", "width": "100%", "will-change": "transform", "-webkit-transform": "translate(0px)", "-ms-transform": "translate(0px)", "transform": "translate(0px)" }}><div style={{ "position": "absolute", "left": "0px", "top": "0px", "z-index": "100", "width": "100%" }}><div style={{ "position": "absolute", "left": "0px", "top": "0px", "z-index": "0" }}><div style={{ "position": "absolute", "z-index": "988", "-webkit-transform": "matrix(1, 0, 0, 1, -242, -23)", "-ms-transform": "matrix(1, 0, 0, 1, -242, -23)", "transform": "matrix(1, 0, 0, 1, -242, -23)" }}><div style={{ "position": "absolute", "left": "256px", "top": "0px", "width": "256px", "height": "256px" }}><div style={{ "width": "256px", "height": "256px" }} /></div><div style={{ "position": "absolute", "left": "0px", "top": "0px", "width": "256px", "height": "256px" }}><div style={{ "width": "256px", "height": "256px" }} /></div><div style={{ "position": "absolute", "left": "0px", "top": "-256px", "width": "256px", "height": "256px" }}><div style={{ "width": "256px", "height": "256px" }} /></div><div style={{ "position": "absolute", "left": "256px", "top": "-256px", "width": "256px", "height": "256px" }}><div style={{ "width": "256px", "height": "256px" }} /></div><div style={{ "position": "absolute", "left": "512px", "top": "-256px", "width": "256px", "height": "256px" }}><div style={{ "width": "256px", "height": "256px" }} /></div><div style={{ "position": "absolute", "left": "512px", "top": "0px", "width": "256px", "height": "256px" }}><div style={{ "width": "256px", "height": "256px" }} /></div><div style={{ "position": "absolute", "left": "512px", "top": "256px", "width": "256px", "height": "256px" }}><div style={{ "width": "256px", "height": "256px" }} /></div><div style={{ "position": "absolute", "left": "256px", "top": "256px", "width": "256px", "height": "256px" }}><div style={{ "width": "256px", "height": "256px" }} /></div><div style={{ "position": "absolute", "left": "0px", "top": "256px", "width": "256px", "height": "256px" }}><div style={{ "width": "256px", "height": "256px" }} /></div><div style={{ "position": "absolute", "left": "-256px", "top": "256px", "width": "256px", "height": "256px" }}><div style={{ "width": "256px", "height": "256px" }} /></div><div style={{ "position": "absolute", "left": "-256px", "top": "0px", "width": "256px", "height": "256px" }}><div style={{ "width": "256px", "height": "256px" }} /></div><div style={{ "position": "absolute", "left": "-256px", "top": "-256px", "width": "256px", "height": "256px" }}><div style={{ "width": "256px", "height": "256px" }} /></div><div style={{ "position": "absolute", "left": "768px", "top": "-256px", "width": "256px", "height": "256px" }}><div style={{ "width": "256px", "height": "256px" }} /></div><div style={{ "position": "absolute", "left": "768px", "top": "0px", "width": "256px", "height": "256px" }}><div style={{ "width": "256px", "height": "256px" }} /></div><div style={{ "position": "absolute", "left": "768px", "top": "256px", "width": "256px", "height": "256px" }}><div style={{ "width": "256px", "height": "256px" }} /></div><div style={{ "position": "absolute", "left": "-512px", "top": "256px", "width": "256px", "height": "256px" }}><div style={{ "width": "256px", "height": "256px" }} /></div><div style={{ "position": "absolute", "left": "-512px", "top": "0px", "width": "256px", "height": "256px" }}><div style={{ "width": "256px", "height": "256px" }} /></div><div style={{ "position": "absolute", "left": "-512px", "top": "-256px", "width": "256px", "height": "256px" }}><div style={{ "width": "256px", "height": "256px" }} /></div></div></div></div><div style={{ "position": "absolute", "left": "0px", "top": "0px", "z-index": "101", "width": "100%" }} /><div style={{ "position": "absolute", "left": "0px", "top": "0px", "z-index": "102", "width": "100%" }} /><div style={{ "position": "absolute", "left": "0px", "top": "0px", "z-index": "103", "width": "100%" }}><div style={{ "width": "36px", "height": "58px", "overflow": "hidden", "position": "absolute", "left": "-18px", "top": "-58px", "z-index": "0" }}><img style={{ "position": "absolute", "left": "0px", "top": "0px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "width": "36px", "height": "58px", "border": "0px", "padding": "0px", "margin": "0px", "max-width": "none" }} alt src="pin.png" draggable="false" /></div><div style={{ "position": "absolute", "left": "0px", "top": "0px", "z-index": "-1" }}><div style={{ "position": "absolute", "z-index": "988", "-webkit-transform": "matrix(1, 0, 0, 1, -242, -23)", "-ms-transform": "matrix(1, 0, 0, 1, -242, -23)", "transform": "matrix(1, 0, 0, 1, -242, -23)" }}><div style={{ "width": "256px", "height": "256px", "overflow": "hidden", "position": "absolute", "left": "256px", "top": "0px" }} /><div style={{ "width": "256px", "height": "256px", "overflow": "hidden", "position": "absolute", "left": "0px", "top": "0px" }} /><div style={{ "width": "256px", "height": "256px", "overflow": "hidden", "position": "absolute", "left": "0px", "top": "-256px" }} /><div style={{ "width": "256px", "height": "256px", "overflow": "hidden", "position": "absolute", "left": "256px", "top": "-256px" }} /><div style={{ "width": "256px", "height": "256px", "overflow": "hidden", "position": "absolute", "left": "512px", "top": "-256px" }} /><div style={{ "width": "256px", "height": "256px", "overflow": "hidden", "position": "absolute", "left": "512px", "top": "0px" }} /><div style={{ "width": "256px", "height": "256px", "overflow": "hidden", "position": "absolute", "left": "512px", "top": "256px" }} /><div style={{ "width": "256px", "height": "256px", "overflow": "hidden", "position": "absolute", "left": "256px", "top": "256px" }} /><div style={{ "width": "256px", "height": "256px", "overflow": "hidden", "position": "absolute", "left": "0px", "top": "256px" }} /><div style={{ "width": "256px", "height": "256px", "overflow": "hidden", "position": "absolute", "left": "-256px", "top": "256px" }} /><div style={{ "width": "256px", "height": "256px", "overflow": "hidden", "position": "absolute", "left": "-256px", "top": "0px" }} /><div style={{ "width": "256px", "height": "256px", "overflow": "hidden", "position": "absolute", "left": "-256px", "top": "-256px" }} /><div style={{ "width": "256px", "height": "256px", "overflow": "hidden", "position": "absolute", "left": "768px", "top": "-256px" }} /><div style={{ "width": "256px", "height": "256px", "overflow": "hidden", "position": "absolute", "left": "768px", "top": "0px" }} /><div style={{ "width": "256px", "height": "256px", "overflow": "hidden", "position": "absolute", "left": "768px", "top": "256px" }} /><div style={{ "width": "256px", "height": "256px", "overflow": "hidden", "position": "absolute", "left": "-512px", "top": "256px" }} /><div style={{ "width": "256px", "height": "256px", "overflow": "hidden", "position": "absolute", "left": "-512px", "top": "0px" }} /><div style={{ "width": "256px", "height": "256px", "overflow": "hidden", "position": "absolute", "left": "-512px", "top": "-256px" }} /></div></div></div><div style={{ "position": "absolute", "left": "0px", "top": "0px", "z-index": "0" }}><div style={{ "position": "absolute", "z-index": "988", "-webkit-transform": "matrix(1, 0, 0, 1, -242, -23)", "-ms-transform": "matrix(1, 0, 0, 1, -242, -23)", "transform": "matrix(1, 0, 0, 1, -242, -23)" }}><div style={{ "position": "absolute", "left": "256px", "top": "0px", "width": "256px", "height": "256px", "-webkit-transition": "opacity 200ms linear 0s", "transition": "opacity 200ms linear 0s" }}><img style={{ "width": "256px", "height": "256px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border": "0px", "padding": "0px", "margin": "0px", "max-width": "none" }} draggable="false" alt role="presentation" src={vt} /></div><div style={{ "position": "absolute", "left": "0px", "top": "0px", "width": "256px", "height": "256px", "-webkit-transition": "opacity 200ms linear 0s", "transition": "opacity 200ms linear 0s" }}><img style={{ "width": "256px", "height": "256px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border": "0px", "padding": "0px", "margin": "0px", "max-width": "none" }} draggable="false" alt role="presentation" src={vt} /></div><div style={{ "position": "absolute", "left": "0px", "top": "-256px", "width": "256px", "height": "256px", "-webkit-transition": "opacity 200ms linear 0s", "transition": "opacity 200ms linear 0s" }}><img style={{ "width": "256px", "height": "256px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border": "0px", "padding": "0px", "margin": "0px", "max-width": "none" }} draggable="false" alt role="presentation" src={vt} /></div><div style={{ "position": "absolute", "left": "-256px", "top": "-256px", "width": "256px", "height": "256px", "-webkit-transition": "opacity 200ms linear 0s", "transition": "opacity 200ms linear 0s" }}><img style={{ "width": "256px", "height": "256px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border": "0px", "padding": "0px", "margin": "0px", "max-width": "none" }} draggable="false" alt role="presentation" src={vt} /></div><div style={{ "position": "absolute", "left": "768px", "top": "-256px", "width": "256px", "height": "256px", "-webkit-transition": "opacity 200ms linear 0s", "transition": "opacity 200ms linear 0s" }}><img style={{ "width": "256px", "height": "256px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border": "0px", "padding": "0px", "margin": "0px", "max-width": "none" }} draggable="false" alt role="presentation" src="vt-17.png" /></div><div style={{ "position": "absolute", "left": "512px", "top": "256px", "width": "256px", "height": "256px", "-webkit-transition": "opacity 200ms linear 0s", "transition": "opacity 200ms linear 0s" }}><img style={{ "width": "256px", "height": "256px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border": "0px", "padding": "0px", "margin": "0px", "max-width": "none" }} draggable="false" alt role="presentation" src={vt} /></div><div style={{ "position": "absolute", "left": "0px", "top": "256px", "width": "256px", "height": "256px", "-webkit-transition": "opacity 200ms linear 0s", "transition": "opacity 200ms linear 0s" }}><img style={{ "width": "256px", "height": "256px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border": "0px", "padding": "0px", "margin": "0px", "max-width": "none" }} draggable="false" alt role="presentation" src={vt} /></div><div style={{ "position": "absolute", "left": "512px", "top": "-256px", "width": "256px", "height": "256px", "-webkit-transition": "opacity 200ms linear 0s", "transition": "opacity 200ms linear 0s" }}><img style={{ "width": "256px", "height": "256px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border": "0px", "padding": "0px", "margin": "0px", "max-width": "none" }} draggable="false" alt role="presentation" src={vt} /></div><div style={{ "position": "absolute", "left": "512px", "top": "0px", "width": "256px", "height": "256px", "-webkit-transition": "opacity 200ms linear 0s", "transition": "opacity 200ms linear 0s" }}><img style={{ "width": "256px", "height": "256px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border": "0px", "padding": "0px", "margin": "0px", "max-width": "none" }} draggable="false" alt role="presentation" src={vt} /></div><div style={{ "position": "absolute", "left": "-256px", "top": "0px", "width": "256px", "height": "256px", "-webkit-transition": "opacity 200ms linear 0s", "transition": "opacity 200ms linear 0s" }}><img style={{ "width": "256px", "height": "256px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border": "0px", "padding": "0px", "margin": "0px", "max-width": "none" }} draggable="false" alt role="presentation" src={vt} /></div><div style={{ "position": "absolute", "left": "768px", "top": "0px", "width": "256px", "height": "256px", "-webkit-transition": "opacity 200ms linear 0s", "transition": "opacity 200ms linear 0s" }}><img style={{ "width": "256px", "height": "256px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border": "0px", "padding": "0px", "margin": "0px", "max-width": "none" }} draggable="false" alt role="presentation" src={vt} /></div><div style={{ "position": "absolute", "left": "-512px", "top": "256px", "width": "256px", "height": "256px", "-webkit-transition": "opacity 200ms linear 0s", "transition": "opacity 200ms linear 0s" }}><img style={{ "width": "256px", "height": "256px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border": "0px", "padding": "0px", "margin": "0px", "max-width": "none" }} draggable="false" alt role="presentation" src="vt-16.png" /></div><div style={{ "position": "absolute", "left": "256px", "top": "-256px", "width": "256px", "height": "256px", "-webkit-transition": "opacity 200ms linear 0s", "transition": "opacity 200ms linear 0s" }}><img style={{ "width": "256px", "height": "256px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border": "0px", "padding": "0px", "margin": "0px", "max-width": "none" }} draggable="false" alt role="presentation" src={vt} /></div><div style={{ "position": "absolute", "left": "-512px", "top": "-256px", "width": "256px", "height": "256px", "-webkit-transition": "opacity 200ms linear 0s", "transition": "opacity 200ms linear 0s" }}><img style={{ "width": "256px", "height": "256px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border": "0px", "padding": "0px", "margin": "0px", "max-width": "none" }} draggable="false" alt role="presentation" src={vt} /></div><div style={{ "position": "absolute", "left": "-256px", "top": "256px", "width": "256px", "height": "256px", "-webkit-transition": "opacity 200ms linear 0s", "transition": "opacity 200ms linear 0s" }}><img style={{ "width": "256px", "height": "256px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border": "0px", "padding": "0px", "margin": "0px", "max-width": "none" }} draggable="false" alt role="presentation" src={vt} /></div><div style={{ "position": "absolute", "left": "-512px", "top": "0px", "width": "256px", "height": "256px", "-webkit-transition": "opacity 200ms linear 0s", "transition": "opacity 200ms linear 0s" }}><img style={{ "width": "256px", "height": "256px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border": "0px", "padding": "0px", "margin": "0px", "max-width": "none" }} draggable="false" alt role="presentation" src={vt} /></div><div style={{ "position": "absolute", "left": "256px", "top": "256px", "width": "256px", "height": "256px", "-webkit-transition": "opacity 200ms linear 0s", "transition": "opacity 200ms linear 0s" }}><img style={{ "width": "256px", "height": "256px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border": "0px", "padding": "0px", "margin": "0px", "max-width": "none" }} draggable="false" alt role="presentation" src={vt} /></div><div style={{ "position": "absolute", "left": "768px", "top": "256px", "width": "256px", "height": "256px", "-webkit-transition": "opacity 200ms linear 0s", "transition": "opacity 200ms linear 0s" }}><img style={{ "width": "256px", "height": "256px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border": "0px", "padding": "0px", "margin": "0px", "max-width": "none" }} draggable="false" alt role="presentation" src={vt} /></div></div></div></div><div style={{ "z-index": "3", "position": "absolute", "height": "100%", "width": "100%", "padding": "0px", "border-width": "0px", "margin": "0px", "left": "0px", "top": "0px", "touch-action": "pan-x pan-y" }}><div style={{ "z-index": "4", "position": "absolute", "left": "50%", "top": "50%", "width": "100%", "will-change": "transform", "-webkit-transform": "translate(0px)", "-ms-transform": "translate(0px)", "transform": "translate(0px)" }}><div style={{ "position": "absolute", "left": "0px", "top": "0px", "z-index": "104", "width": "100%" }} /><div style={{ "position": "absolute", "left": "0px", "top": "0px", "z-index": "105", "width": "100%" }} /><div style={{ "position": "absolute", "left": "0px", "top": "0px", "z-index": "106", "width": "100%" }}><span id="C54EFD8C-0794-4E3F-B6C7-B7C2CE2CEBE5" style={{ "display": "none" }}>To navigate, press the arrow keys.</span><div style={{ "width": "36px", "height": "58px", "overflow": "hidden", "position": "absolute", "cursor": "pointer", "touch-action": "none", "left": "-18px", "top": "-58px", "z-index": "0" }} title tabIndex={-1}><img style={{ "width": "36px", "height": "58px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border": "0px", "padding": "0px", "margin": "0px", "max-width": "none" }} alt src="transparent.png" draggable="false" /></div></div><div style={{ "position": "absolute", "left": "0px", "top": "0px", "z-index": "107", "width": "100%" }} /></div></div><div style={{ "z-index": "4", "position": "absolute", "height": "100%", "width": "100%", "padding": "0px", "border-width": "0px", "margin": "0px", "left": "0px", "top": "0px", "opacity": "0", "-webkit-transition-duration": "0.8s", "transition-duration": "0.8s" }} className="gm-style-moc"><p className="gm-style-mot">Use ctrl + scroll to zoom the map</p></div><div className="LGLeeN-keyboard-shortcuts-view" id="F17B5EEE-AFBC-40DE-ADDD-44A3515C2EFA" style={{ "display": "none" }}><table><tbody><tr><td><kbd aria-label="Left arrow">←</kbd></td><td aria-label="Move left.">Move left</td></tr><tr><td><kbd aria-label="Right arrow">→</kbd></td><td aria-label="Move right.">Move right</td></tr><tr><td><kbd aria-label="Up arrow">↑</kbd></td><td aria-label="Move up.">Move up</td></tr><tr><td><kbd aria-label="Down arrow">↓</kbd></td><td aria-label="Move down.">Move down</td></tr><tr><td><kbd>+</kbd></td><td aria-label="Zoom in.">Zoom in</td></tr><tr><td><kbd>-</kbd></td><td aria-label="Zoom out.">Zoom out</td></tr><tr><td><kbd>Home</kbd></td><td aria-label="Jump left by 75%.">Jump left by 75%</td></tr><tr><td><kbd>End</kbd></td><td aria-label="Jump right by 75%.">Jump right by 75%</td></tr><tr><td><kbd>Page Up</kbd></td><td aria-label="Jump up by 75%.">Jump up by 75%</td></tr><tr><td><kbd>Page Down</kbd></td><td aria-label="Jump down by 75%.">Jump down by 75%</td></tr></tbody></table></div></div><iframe aria-hidden="true" frameBorder={0} tabIndex={-1} style={{ "z-index": "-1", "position": "absolute", "width": "100%", "height": "100%", "top": "0px", "left": "0px", "border": "medium" }} src="index_2.html" /><div style={{ "pointer-events": "none", "width": "100%", "height": "100%", "box-sizing": "border-box", "position": "absolute", "z-index": "1000002", "opacity": "0", "border": "2px solid rgb(26, 115, 232)" }} /><div /><div /><div /><div /><div><button style={{ "background": "rgb(255, 255, 255)", "border": "0px", "margin": "10px", "padding": "0px", "-webkit-text-transform": "none", "text-transform": "none", "-webkit-appearance": "none", "-moz-appearance": "none", "appearance": "none", "position": "absolute", "cursor": "pointer", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border-radius": "2px", "height": "40px", "width": "40px", "box-shadow": "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px", "overflow": "hidden", "top": "0px", "right": "0px" }} draggable="false" aria-label="Toggle fullscreen view" title="Toggle fullscreen view" type="button" aria-pressed="false" className="gm-control-active gm-fullscreen-control"><img style={{ "height": "18px", "width": "18px" }} src="9a91c387b5af040ea1593997527c91f31258aa77.svg" alt /><img style={{ "height": "18px", "width": "18px" }} src="b53688f60120f534170affcfbc23e428486f4ea8.svg" alt /><img style={{ "height": "18px", "width": "18px" }} src="189c8a97bb5c749b49fa5d7993f04882e023fafd.svg" alt /></button></div><div /><div /><div /><div /><div><div className="gmnoprint gm-bundled-control gm-bundled-control-on-bottom" style={{ "margin": "10px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "bottom": "127px", "right": "40px" }} draggable="false" data-control-width={40} data-control-height={113}><div className="gmnoprint" data-control-width={40} data-control-height={40} style={{ "display": "none", "position": "absolute" }}><div style={{ "background-color": "rgb(255, 255, 255)", "box-shadow": "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px", "border-radius": "2px", "width": "40px", "height": "40px" }}><button style={{ "background": "none", "display": "none", "border": "0px", "margin": "0px", "padding": "0px", "-webkit-text-transform": "none", "text-transform": "none", "-webkit-appearance": "none", "-moz-appearance": "none", "appearance": "none", "position": "relative", "cursor": "pointer", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "left": "0px", "top": "0px", "overflow": "hidden", "width": "40px", "height": "40px" }} draggable="false" aria-label="Rotate map clockwise" title="Rotate map clockwise" type="button" className="gm-control-active"><img alt style={{ "width": "20px", "height": "20px" }} src="307727718a094e1c7b841513e78f7308f7fb0ca9.svg" /><img alt style={{ "width": "20px", "height": "20px" }} src="093a96f5d960fb8f6f8a2d37b327b23e054e76c1.svg" /><img alt style={{ "width": "20px", "height": "20px" }} src="33ea66baf74e8030f166bf2e9ff6168b77793d53.svg" /></button><div style={{ "position": "relative", "overflow": "hidden", "width": "30px", "height": "1px", "margin": "0px 5px", "background-color": "rgb(230, 230, 230)", "display": "none" }} /><button style={{ "background": "none", "display": "none", "border": "0px", "margin": "0px", "padding": "0px", "-webkit-text-transform": "none", "text-transform": "none", "-webkit-appearance": "none", "-moz-appearance": "none", "appearance": "none", "position": "relative", "cursor": "pointer", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "left": "0px", "top": "0px", "overflow": "hidden", "width": "40px", "height": "40px", "-webkit-transform": "scaleX(-1)", "-ms-transform": "scaleX(-1)", "transform": "scaleX(-1)" }} draggable="false" aria-label="Rotate map counterclockwise" title="Rotate map counterclockwise" type="button" className="gm-control-active"><img alt style={{ "width": "20px", "height": "20px" }} src="307727718a094e1c7b841513e78f7308f7fb0ca9.svg" /><img alt style={{ "width": "20px", "height": "20px" }} src="093a96f5d960fb8f6f8a2d37b327b23e054e76c1.svg" /><img alt style={{ "width": "20px", "height": "20px" }} src="33ea66baf74e8030f166bf2e9ff6168b77793d53.svg" /></button><div style={{ "position": "relative", "overflow": "hidden", "width": "30px", "height": "1px", "margin": "0px 5px", "background-color": "rgb(230, 230, 230)", "display": "none" }} /><button style={{ "background": "none", "display": "block", "border": "0px", "margin": "0px", "padding": "0px", "-webkit-text-transform": "none", "text-transform": "none", "-webkit-appearance": "none", "-moz-appearance": "none", "appearance": "none", "position": "relative", "cursor": "pointer", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "top": "0px", "left": "0px", "overflow": "hidden", "width": "40px", "height": "40px" }} draggable="false" aria-label="Tilt map" title="Tilt map" type="button" className="gm-tilt gm-control-active"><img alt style={{ "width": "18px" }} src="6068af43d777128e4a09c89910a6c773d522fdfa.svg" /><img alt style={{ "width": "18px" }} src="de762194f94b36483b12502229e82c357334e5e6.svg" /><img alt style={{ "width": "18px" }} src="347115e75c29fea098318edbd38c12d15c367df7.svg" /></button></div></div><button style={{ "background": "none", "display": "block", "border": "0px", "margin": "0px", "padding": "0px", "-webkit-text-transform": "none", "text-transform": "none", "-webkit-appearance": "none", "-moz-appearance": "none", "appearance": "none", "position": "absolute", "cursor": "pointer", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "left": "20px", "top": "0px" }} draggable="false" aria-label="Drag Pegman onto the map to open Street View" title="Drag Pegman onto the map to open Street View" type="button" /><div className="gmnoprint" style={{ "position": "absolute", "left": "0px", "top": "32px" }} data-control-width={40} data-control-height={81}><div draggable="false" style={{ "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "box-shadow": "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px", "border-radius": "2px", "cursor": "pointer", "background-color": "rgb(255, 255, 255)", "width": "40px", "height": "81px" }}><button style={{ "background": "none", "display": "block", "border": "0px", "margin": "0px", "padding": "0px", "-webkit-text-transform": "none", "text-transform": "none", "-webkit-appearance": "none", "-moz-appearance": "none", "appearance": "none", "position": "relative", "cursor": "pointer", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "overflow": "hidden", "width": "40px", "height": "40px", "top": "0px", "left": "0px" }} draggable="false" aria-label="Zoom in" title="Zoom in" type="button" className="gm-control-active"><img style={{ "height": "18px", "width": "18px" }} src="0c03e2f68c34048f1ae9e34df0da26fe66076841.svg" alt /><img style={{ "height": "18px", "width": "18px" }} src="8c6ff9258dfdb8cea73e1e43ea7178f044b763b9.svg" alt /><img style={{ "height": "18px", "width": "18px" }} src="c561bd899f92d8ae1bb1f17039e9eb8ab93a70cb.svg" alt /><img style={{ "height": "18px", "width": "18px" }} src="1fc739251896417ba70206cace6922a9db2ee417.svg" alt /></button><div style={{ "position": "relative", "overflow": "hidden", "width": "30px", "height": "1px", "margin": "0px 5px", "background-color": "rgb(230, 230, 230)", "top": "0px" }} /><button style={{ "background": "none", "display": "block", "border": "0px", "margin": "0px", "padding": "0px", "-webkit-text-transform": "none", "text-transform": "none", "-webkit-appearance": "none", "-moz-appearance": "none", "appearance": "none", "position": "relative", "cursor": "pointer", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "overflow": "hidden", "width": "40px", "height": "40px", "top": "0px", "left": "0px" }} draggable="false" aria-label="Zoom out" title="Zoom out" type="button" className="gm-control-active"><img style={{ "height": "18px", "width": "18px" }} src="4a3b3ec33fa669d3194f454c76a772358f51e965.svg" alt /><img style={{ "height": "18px", "width": "18px" }} src="5008a61f6521a94969b2fc1272e595e327c3ec6d.svg" alt /><img style={{ "height": "18px", "width": "18px" }} src="9f9f19af37b524a87f8925b2fb9a64947306a634.svg" alt /><img style={{ "height": "18px", "width": "18px" }} src="a347b6be6959d719b3239e466b3e2bb38eb0115b.svg" alt /></button></div></div></div></div><div><div style={{ "margin": "0px 5px", "z-index": "1000000", "position": "absolute", "left": "0px", "bottom": "0px" }}><a style={{ "display": "inline" }} target="_blank" rel="noopener" title="Open this area in Google Maps (opens a new window)" aria-label="Open this area in Google Maps (opens a new window)" href="https://maps.google.com/maps?ll=40.707891,-74.008825&z=12&t=m&hl=en-US&gl=US&mapclient=apiv3"><div style={{ "width": "66px", "height": "26px" }}><img style={{ "position": "absolute", "left": "0px", "top": "0px", "width": "66px", "height": "26px", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "border": "0px", "padding": "0px", "margin": "0px" }} alt="Google" src="ed2f71db67f42135bbdc7d461f84802741d6e6cf.svg" draggable="false" /></div></a></div></div><div /><div><div style={{ "display": "inline-flex", "position": "absolute", "right": "0px", "bottom": "0px" }}><div className="gmnoprint" style={{ "z-index": "1000001" }}><div draggable="false" style={{ "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "relative", "height": "14px", "line-height": "14px" }} className="gm-style-cc"><div style={{ "opacity": "0.7", "width": "100%", "height": "100%", "position": "absolute" }}><div style={{ "width": "1px" }} /><div style={{ "background-color": "rgb(245, 245, 245)", "width": "auto", "height": "100%", "margin-left": "1px" }} /></div><div style={{ "position": "relative", "padding-right": "6px", "padding-left": "6px", "box-sizing": "border-box", "font-family": "Roboto, Arial, sans-serif", "font-size": "10px", "color": "rgb(0, 0, 0)", "white-space": "nowrap", "direction": "ltr", "-webkit-text-align": "right", "text-align": "right", "vertical-align": "middle", "display": "inline-block" }}><button style={{ "background": "none", "display": "inline-block", "border": "0px", "margin": "0px", "padding": "0px", "-webkit-text-transform": "none", "text-transform": "none", "-webkit-appearance": "none", "-moz-appearance": "none", "appearance": "none", "position": "relative", "cursor": "pointer", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "color": "rgb(0, 0, 0)", "font-family": "inherit", "line-height": "inherit" }} draggable="false" aria-label="Keyboard shortcuts" title="Keyboard shortcuts" type="button">Keyboard shortcuts</button></div></div></div><div className="gmnoprint" style={{ "z-index": "1000001" }}><div draggable="false" style={{ "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "relative", "height": "14px", "line-height": "14px" }} className="gm-style-cc"><div style={{ "opacity": "0.7", "width": "100%", "height": "100%", "position": "absolute" }}><div style={{ "width": "1px" }} /><div style={{ "background-color": "rgb(245, 245, 245)", "width": "auto", "height": "100%", "margin-left": "1px" }} /></div><div style={{ "position": "relative", "padding-right": "6px", "padding-left": "6px", "box-sizing": "border-box", "font-family": "Roboto, Arial, sans-serif", "font-size": "10px", "color": "rgb(0, 0, 0)", "white-space": "nowrap", "direction": "ltr", "-webkit-text-align": "right", "text-align": "right", "vertical-align": "middle", "display": "inline-block" }}><button style={{ "background": "none", "border": "0px", "margin": "0px", "padding": "0px", "-webkit-text-transform": "none", "text-transform": "none", "-webkit-appearance": "none", "-moz-appearance": "none", "appearance": "none", "position": "relative", "cursor": "pointer", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "color": "rgb(0, 0, 0)", "font-family": "inherit", "line-height": "inherit", "display": "none" }} draggable="false" aria-label="Map Data" title="Map Data" type="button">Map Data</button><span style={{}}>Map data ©2023 Google</span></div></div></div><div className="gmnoscreen"><div style={{ "font-family": "Roboto, Arial, sans-serif", "font-size": "11px", "color": "rgb(0, 0, 0)", "direction": "ltr", "-webkit-text-align": "right", "text-align": "right", "background-color": "rgb(245, 245, 245)" }}>Map data ©2023 Google</div></div><button style={{ "background": "none", "display": "none", "border": "0px", "margin": "0px", "padding": "0px", "-webkit-text-transform": "none", "text-transform": "none", "-webkit-appearance": "none", "-moz-appearance": "none", "appearance": "none", "position": "relative", "cursor": "pointer", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "height": "14px", "line-height": "14px" }} draggable="false" aria-label="Map Scale: 2 km per 69 pixels" title="Map Scale: 2 km per 69 pixels" type="button" className="gm-style-cc" aria-describedby="EFB82471-6007-4A0E-A2B2-F75342B874CA"><div style={{ "opacity": "0.7", "width": "100%", "height": "100%", "position": "absolute" }}><div style={{ "width": "1px" }} /><div style={{ "background-color": "rgb(245, 245, 245)", "width": "auto", "height": "100%", "margin-left": "1px" }} /></div><div style={{ "position": "relative", "padding-right": "6px", "padding-left": "6px", "box-sizing": "border-box", "font-family": "Roboto, Arial, sans-serif", "font-size": "10px", "color": "rgb(0, 0, 0)", "white-space": "nowrap", "direction": "ltr", "-webkit-text-align": "right", "text-align": "right", "vertical-align": "middle", "display": "inline-block" }}><span>2 km&nbsp;</span><div style={{ "position": "relative", "display": "inline-block", "height": "8px", "bottom": "-1px", "width": "73px" }}><div style={{ "width": "100%", "height": "4px", "position": "absolute", "left": "0px", "top": "0px" }} /><div style={{ "width": "4px", "height": "8px", "left": "0px", "top": "0px", "background-color": "rgb(255, 255, 255)" }} /><div style={{ "width": "4px", "height": "8px", "position": "absolute", "background-color": "rgb(255, 255, 255)", "right": "0px", "bottom": "0px" }} /><div style={{ "position": "absolute", "background-color": "rgb(102, 102, 102)", "height": "2px", "left": "1px", "bottom": "1px", "right": "1px" }} /><div style={{ "position": "absolute", "width": "2px", "height": "6px", "left": "1px", "top": "1px", "background-color": "rgb(102, 102, 102)" }} /><div style={{ "width": "2px", "height": "6px", "position": "absolute", "background-color": "rgb(102, 102, 102)", "bottom": "1px", "right": "1px" }} /></div></div><span id="EFB82471-6007-4A0E-A2B2-F75342B874CA" style={{ "display": "none" }}>Click to toggle between metric and imperial units</span></button><div className="gmnoprint gm-style-cc" style={{ "z-index": "1000001", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "relative", "height": "14px", "line-height": "14px" }} draggable="false"><div style={{ "opacity": "0.7", "width": "100%", "height": "100%", "position": "absolute" }}><div style={{ "width": "1px" }} /><div style={{ "background-color": "rgb(245, 245, 245)", "width": "auto", "height": "100%", "margin-left": "1px" }} /></div><div style={{ "position": "relative", "padding-right": "6px", "padding-left": "6px", "box-sizing": "border-box", "font-family": "Roboto, Arial, sans-serif", "font-size": "10px", "color": "rgb(0, 0, 0)", "white-space": "nowrap", "direction": "ltr", "-webkit-text-align": "right", "text-align": "right", "vertical-align": "middle", "display": "inline-block" }}><a style={{ "-webkit-text-decoration": "none", "text-decoration": "none", "cursor": "pointer", "color": "rgb(0, 0, 0)" }} href="https://www.google.com/intl/en-US_US/help/terms_maps.html" target="_blank" rel="noopener">Terms</a></div></div><div draggable="false" style={{ "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "relative", "height": "14px", "line-height": "14px" }} className="gm-style-cc"><div style={{ "opacity": "0.7", "width": "100%", "height": "100%", "position": "absolute" }}><div style={{ "width": "1px" }} /><div style={{ "background-color": "rgb(245, 245, 245)", "width": "auto", "height": "100%", "margin-left": "1px" }} /></div><div style={{ "position": "relative", "padding-right": "6px", "padding-left": "6px", "box-sizing": "border-box", "font-family": "Roboto, Arial, sans-serif", "font-size": "10px", "color": "rgb(0, 0, 0)", "white-space": "nowrap", "direction": "ltr", "-webkit-text-align": "right", "text-align": "right", "vertical-align": "middle", "display": "inline-block" }}><a target="_blank" rel="noopener" title="Report errors in the road map or imagery to Google" dir="ltr" style={{ "font-family": "Roboto, Arial, sans-serif", "font-size": "10px", "color": "rgb(0, 0, 0)", "-webkit-text-decoration": "none", "text-decoration": "none", "position": "relative" }} href="https://www.google.com/maps/@40.707891,-74.008825,12z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3">Report a map error</a></div></div></div></div></div></div></div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <div className="py-40">
                        <div className="row y-gap-20 bravo-faq-lists" style={{ "border": "none" }}>
                          <div className="col-lg-4">
                            <h2 className="text-22 fw-500">FAQs about<br /> Aspen Glade Weddings &amp; Events</h2>
                          </div>
                          <div className="col-lg-8">
                            <div className="accordion -simple row y-gap-20 js-accordion faqs-item">
                              <div className="col-12">
                                <div className="accordion__item px-20 py-20 border-light rounded-4 item">
                                  <div className="accordion__button d-flex items-center">
                                    <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                                      <i className="icon-plus" />
                                      <i className="icon-minus" />
                                    </div>
                                    <div className="button text-dark-1">Can children come to events?</div>
                                  </div>
                                  <div className="accordion__content" style={{}}>
                                    <div className="pt-20 pl-60">
                                      <p className="text-15">Unless otherwise stated, children are always welcome, but please be aware that most of our events are aimed at an adult audience.  Children must be supervised at all times.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="accordion__item px-20 py-20 border-light rounded-4 item">
                                  <div className="accordion__button d-flex items-center">
                                    <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                                      <i className="icon-plus" />
                                      <i className="icon-minus" />
                                    </div>
                                    <div className="button text-dark-1">Is there seating at events?</div>
                                  </div>
                                  <div className="accordion__content" style={{}}>
                                    <div className="pt-20 pl-60">
                                      <p className="text-15">Yes, we always provide a variety of seating for all ticketholders unless it’s a dance event or art show opening.  One of our crew will always be on hand to assist you in finding a seat if you need one.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="accordion__item px-20 py-20 border-light rounded-4 item">
                                  <div className="accordion__button d-flex items-center">
                                    <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                                      <i className="icon-plus" />
                                      <i className="icon-minus" />
                                    </div>
                                    <div className="button text-dark-1">Where can I park?</div>
                                  </div>
                                  <div className="accordion__content" style={{}}>
                                    <div className="pt-20 pl-60">
                                      <p className="text-15">There is a wide choice of places to park, however most are not free so please do check before you come on the Southampton City Council website.  We have no onsite parking.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="accordion__item px-20 py-20 border-light rounded-4 item">
                                  <div className="accordion__button d-flex items-center">
                                    <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                                      <i className="icon-plus" />
                                      <i className="icon-minus" />
                                    </div>
                                    <div className="button text-dark-1">Are you near public transport?</div>
                                  </div>
                                  <div className="accordion__content" style={{}}>
                                    <div className="pt-20 pl-60">
                                      <p className="text-15">Very.  There is a bus stop a few doors up and the train station is about 7 minutes gentle walk away.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="accordion__item px-20 py-20 border-light rounded-4 item">
                                  <div className="accordion__button d-flex items-center">
                                    <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                                      <i className="icon-plus" />
                                      <i className="icon-minus" />
                                    </div>
                                    <div className="button text-dark-1">Is it safe to come at night?</div>
                                  </div>
                                  <div className="accordion__content" style={{}}>
                                    <div className="pt-20 pl-60">
                                      <p className="text-15">To our knowledge, none of our customers has had any bad experience, however we do recommend that if you are worried you stick to the roads rather than walk through the parks.  The roads are well-lit and generally there are a lot of people about at night.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="accordion__item px-20 py-20 border-light rounded-4 item">
                                  <div className="accordion__button d-flex items-center">
                                    <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                                      <i className="icon-plus" />
                                      <i className="icon-minus" />
                                    </div>
                                    <div className="button text-dark-1">Can I come on my own?</div>
                                  </div>
                                  <div className="accordion__content" style={{}}>
                                    <div className="pt-20 pl-60">
                                      <p className="text-15">YES!  Many of our customers come alone to events, it’s never a problem and you will be welcomed warmly.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-top-light py-40">
                  <div className="container">
                    <section className="bravo-reviews" id="bravo-reviews">
                      <div className="row y-gap-40 justify-between">
                        <div className="col-xl-3">
                          <h3 className="text-22 fw-500">Guest reviews</h3>
                          <div className="d-flex items-center mt-20">
                            <div className="flex-center bg-blue-1 rounded-4 size-70 text-22 fw-600 text-white">4.3</div>
                            <div className="ml-20">
                              <div className="text-16 text-dark-1 fw-500 lh-14">Very Good</div>
                              <div className="text-15 text-light-1 lh-14 mt-4">
                                3 reviews
                              </div>
                            </div>
                          </div>
                          <div className="review-sumary">
                            <div className="row y-gap-20 pt-20">
                              <div className="item col-12">
                                <div className>
                                  <div className="d-flex items-center justify-between">
                                    <div className="text-15 fw-500">Excellent</div>
                                    <div className="text-15 text-light-1">1</div>
                                  </div>
                                  <div className="progressBar mt-10">
                                    <div className="progressBar__bg bg-blue-2" />
                                    <div className="progressBar__bar bg-blue-1" style={{ "width": "33%" }} />
                                  </div>
                                </div>
                              </div>
                              <div className="item col-12">
                                <div className>
                                  <div className="d-flex items-center justify-between">
                                    <div className="text-15 fw-500">Very Good</div>
                                    <div className="text-15 text-light-1">2</div>
                                  </div>
                                  <div className="progressBar mt-10">
                                    <div className="progressBar__bg bg-blue-2" />
                                    <div className="progressBar__bar bg-blue-1" style={{ "width": "67%" }} />
                                  </div>
                                </div>
                              </div>
                              <div className="item col-12">
                                <div className>
                                  <div className="d-flex items-center justify-between">
                                    <div className="text-15 fw-500">Average</div>
                                    <div className="text-15 text-light-1">0</div>
                                  </div>
                                  <div className="progressBar mt-10">
                                    <div className="progressBar__bg bg-blue-2" />
                                    <div className="progressBar__bar bg-blue-1" style={{ "width": "0%" }} />
                                  </div>
                                </div>
                              </div>
                              <div className="item col-12">
                                <div className>
                                  <div className="d-flex items-center justify-between">
                                    <div className="text-15 fw-500">Poor</div>
                                    <div className="text-15 text-light-1">0</div>
                                  </div>
                                  <div className="progressBar mt-10">
                                    <div className="progressBar__bg bg-blue-2" />
                                    <div className="progressBar__bar bg-blue-1" style={{ "width": "0%" }} />
                                  </div>
                                </div>
                              </div>
                              <div className="item col-12">
                                <div className>
                                  <div className="d-flex items-center justify-between">
                                    <div className="text-15 fw-500">Terrible</div>
                                    <div className="text-15 text-light-1">0</div>
                                  </div>
                                  <div className="progressBar mt-10">
                                    <div className="progressBar__bg bg-blue-2" />
                                    <div className="progressBar__bar bg-blue-1" style={{ "width": "0%" }} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8">
                          <div className="review-list">
                            <div className="row y-gap-40">
                              <div className="col-12 review-item">
                                <div className="row x-gap-20 y-gap-20 items-center">
                                  <div className="col-auto">
                                    <img className="avatar w-60 h-60 rounded-full" src="avatar.png" alt="Emiliano Kllomollari" />
                                  </div>
                                  <div className="col-auto">
                                    <div className="fw-500 lh-15">Emiliano Kllomollari</div>
                                    <div className="text-14 text-light-1 lh-15">10/19/2023 02:00</div>
                                  </div>
                                </div>
                                <h5 className="fw-500 text-blue-1 mt-20">Great Trip</h5>
                                <p className="text-15 text-dark-1 mt-10">Eum eu sumo albucius perfecto, commodo torquatos consequuntur pro ut, id posse splendide ius. Cu nisl putent omittantur usu, mutat atomorum ex pro, ius nibh nonumy id. Nam at eius dissentias disputando, molestie mnesarchum complectitur per te</p>
                                <ul className="review-star d-flex text-blue-1">
                                  <li className="me-1"><i className="fa fa-star" /></li>
                                  <li className="me-1"><i className="fa fa-star" /></li>
                                  <li className="me-1"><i className="fa fa-star" /></li>
                                  <li className="me-1"><i className="fa fa-star" /></li>
                                  <li className="me-1"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                              <div className="col-12 review-item">
                                <div className="row x-gap-20 y-gap-20 items-center">
                                  <div className="col-auto">
                                    <img className="avatar w-60 h-60 rounded-full" src="avatar.png" alt="Emiliano Kllomollari" />
                                  </div>
                                  <div className="col-auto">
                                    <div className="fw-500 lh-15">Emiliano Kllomollari</div>
                                    <div className="text-14 text-light-1 lh-15">10/19/2023 02:00</div>
                                  </div>
                                </div>
                                <h5 className="fw-500 text-blue-1 mt-20">Easy way to discover the city</h5>
                                <p className="text-15 text-dark-1 mt-10">Eum eu sumo albucius perfecto, commodo torquatos consequuntur pro ut, id posse splendide ius. Cu nisl putent omittantur usu, mutat atomorum ex pro, ius nibh nonumy id. Nam at eius dissentias disputando, molestie mnesarchum complectitur per te</p>
                                <ul className="review-star d-flex text-blue-1">
                                  <li className="me-1"><i className="fa fa-star" /></li>
                                  <li className="me-1"><i className="fa fa-star" /></li>
                                  <li className="me-1"><i className="fa fa-star" /></li>
                                  <li className="me-1"><i className="fa fa-star" /></li>
                                  <li className="me-1"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                              <div className="col-12 review-item">
                                <div className="row x-gap-20 y-gap-20 items-center">
                                  <div className="col-auto">
                                    <img className="avatar w-60 h-60 rounded-full" src="avatar.png" alt="Pasha Joya" />
                                  </div>
                                  <div className="col-auto">
                                    <div className="fw-500 lh-15">Pasha Joya</div>
                                    <div className="text-14 text-light-1 lh-15">10/19/2023 02:00</div>
                                  </div>
                                </div>
                                <h5 className="fw-500 text-blue-1 mt-20">Good Trip</h5>
                                <p className="text-15 text-dark-1 mt-10">Eum eu sumo albucius perfecto, commodo torquatos consequuntur pro ut, id posse splendide ius. Cu nisl putent omittantur usu, mutat atomorum ex pro, ius nibh nonumy id. Nam at eius dissentias disputando, molestie mnesarchum complectitur per te</p>
                                <ul className="review-star d-flex text-blue-1">
                                  <li className="me-1"><i className="fa fa-star" /></li>
                                  <li className="me-1"><i className="fa fa-star" /></li>
                                  <li className="me-1"><i className="fa fa-star" /></li>
                                  <li className="me-1"><i className="fa fa-star" /></li>
                                  <li className="me-1"><i className="fa fa-star" /></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="border-top-light mt-20 mb-20" />
                          <div className="review-pag-wrapper">
                            <div className="bravo-pagination">
                            </div>
                            <div className="review-pag-text">
                              Showing 1 - 3 of 3 total
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="container">
                </div>
              </div>
            </div>
          
            {/* Custom script for all pages */}
          </div><div className="daterangepicker ltr auto-apply single opensleft"><div className="ranges" /><div className="drp-calendar left single" style={{ "display": "block" }}><div className="calendar-table" /><div className="calendar-time" style={{ "display": "none" }} /></div><div className="drp-calendar right" style={{ "display": "none" }}><div className="calendar-table" /><div className="calendar-time" style={{ "display": "none" }} /></div><div className="drp-buttons"><span className="drp-selected" /><button className="cancelBtn btn btn-sm btn-default" type="button">Cancel</button><button className="applyBtn btn btn-sm btn-primary" disabled="disabled" type="button">Apply</button> </div></div>
        </div>


      </div>

    </div>


  );
}
