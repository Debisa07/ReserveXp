import React from "react";
import vt from "../assets/image/vt.png"
import vt1 from "../assets/image/vt-1.png"
import vt2 from "../assets/image/vt-2.png"
import vt3 from "../assets/image/vt-3.png"
import pic from "../assets/image/g-1.png"
import vt5 from "../assets/image/vt-5.png"
import vt6 from "../assets/image/vt-6.png"
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
import { Link,  } from 'react-router-dom';

export default function HotelServices() {
 
  return (
    <div style={{marginLeft:"-60px", marginTop:"80px"}}>
   <div>
  <div className="bravo_wrap overflow-hidden">
   
    <div className="bravo_detail bravo_hotel_detail">
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
                <li className="col-auto " itemProp="itemListElement" itemScope >
                  <a  itemScope  itemProp="item" ><span itemProp="name">Hotel</span></a>
                  <meta itemProp="position" content={2} />
                </li>
                <li className="col-auto">
                  <div className>&gt;</div>
                </li>
                <li className="col-auto " itemProp="itemListElement" itemScope >
                  <a  itemScope  itemProp="item" ><span itemProp="name">London</span></a>
                  <meta itemProp="position" content={3} />
                </li>
                <li className="col-auto">
                  <div className>&gt;</div>
                </li>
                <li className="col-auto active" itemProp="itemListElement" itemScope >
                  <span itemProp="name" className="text-dark-1">Hotel WBF Hommachi</span>
                  <meta itemProp="position" content={4} />
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="bravo_content">
        <section className="pt-40 g-header">
          <div className="container">
            <div className="row y-gap-20 justify-between items-end">
              <div className="col-auto">
                <div className="row x-gap-20 items-center">
                  <div className="col-auto">
                    <h1 className="text-30 sm:text-25 fw-600">Hotel WBF Hommachi</h1>
                  </div>
                  <div className="col-auto">
                    <i className="icon-star text-10 text-yellow-1" />
                    <i className="icon-star text-10 text-yellow-1" />
                    <i className="icon-star text-10 text-yellow-1" />
                    <i className="icon-star text-10 text-yellow-1" />
                  </div>
                </div>
                <div className="row x-gap-20 y-gap-20 items-center">
                  <div className="col-auto">
                    <div className="d-flex items-center text-15 text-light-1">
                      <i className="icon-location-2 text-16 mr-5" />
                      Paris Cinemas Battery
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="row x-gap-15 y-gap-15 items-center">
                  <div className="col-auto">
                    <div className="text-14">
                      From
                      <div className="d-inline-flex justify-content-end align-baseline mt-5">
                        <div className="text-16 text-red-1 line-through mr-5" />
                        <div className="text-22 lh-12 fw-600">$519</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <a href="#hotel-rooms-form" className="button h-50 px-24 -dark-1 bg-blue-1 text-white">
                      Select Room <div className="icon-arrow-top-right ml-15" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-40 g-gallery">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="galleryGrid -type-1 relative">
                  <div className="galleryGrid__item">
                    <img src={pic} alt="Gallery" className="rounded-4" />
                  </div>
                  <div className="galleryGrid__item">
                    <img src={pic} alt="Gallery" className="rounded-4" />
                  </div>
                  <div className="galleryGrid__item">
                    <img src={pic} alt="Gallery" className="rounded-4" />
                  </div>
                  <div className="galleryGrid__item">
                    <img src={pic} alt="Gallery" className="rounded-4" />
                  </div>
                  <div className="galleryGrid__item">
                    <img src={pic} alt="Gallery" className="rounded-4" />
                  </div>
                  <div className="absolute h-full col-12 z-2 px-20 py-20 d-flex justify-end items-end gotrip-banner">
                    <div className="btn-group">
                      <a href="#" className="btn btn-transparent has-icon bravo-video-popup" data-toggle="modal" data-src="https://www.youtube.com/embed/bhOiLfkChPo" data-target="#myModal">
                        <i className="input-icon field-icon fa">
                          <svg height="18px" width="18px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style={{"enable-background":"new 0 0 24 24"}} xmlSpace="preserve">
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
                    <a  className="button -blue-1 px-24 py-15 bg-white text-dark-1 js-gallery" data-gallery="gallery2">
                      See All 12 Photos
                    </a>
                    <a  className="js-gallery" data-gallery="gallery2" />
                    <a  className="js-gallery" data-gallery="gallery2" />
                    <a className="js-gallery" data-gallery="gallery2" />
                    <a className="js-gallery" data-gallery="gallery2" />
                    <a  className="js-gallery" data-gallery="gallery2" />
                    <a  className="js-gallery" data-gallery="gallery2" />
                    <a  className="js-gallery" data-gallery="gallery2" />
                    <a className="js-gallery" data-gallery="gallery2" />
                    <a  className="js-gallery" data-gallery="gallery2" />
                    <a  className="js-gallery" data-gallery="gallery2" />
                    <a  className="js-gallery" data-gallery="gallery2" />
                  </div>
                </div>
              </div>
            </div>
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
        </section>
        <section id="hotel-rooms" className="pt-30">
          <div className="container">
            <div className="row y-gap-30">
              <div className="col-xl-12">
                <div className="row y-gap-40">
                  <div id="overview" className="col-12 gotrip-overview">
                    <h3 className="text-22 fw-500 pt-20">Overview</h3>
                    <div className="description text-dark-1 text-15 mt-20">
                      <p>Built in 1986, Hotel Stanford is a distinct addition to New York (NY) and
                        a smart choice for travelers. The excitement of the city center is only
                        0 KM away. No less exceptional is the hotel’s easy access to the city’s
                        myriad attractions and landmarks, such as Toto Music Studio, British
                        Virgin Islands Tourist Board, L’Atelier Du Chocolat. Start and end in
                        San Francisco! With the in-depth cultural tour Northern California
                        Summer 2019, you have a 8 day tour package taking you through San
                        Francisco, USA and 9 other destinations in USA. Northern California
                        Summer 2019 includes accommodation as well as an expert guide, meals,
                        transport and more.</p>
                      <h4>HIGHLIGHTS</h4>
                      <ul>
                        <li>Visit the Museum of Modern Art in Manhattan</li>
                        <li>See amazing works of contemporary art, including Vincent van Gogh's
                          The Starry Night</li>
                        <li>Check out Campbell's Soup Cans by Warhol and The Dance (I) by
                          Matisse</li>
                        <li>Behold masterpieces by Gauguin, Dali, Picasso, and Pollock</li>
                        <li>Enjoy free audio guides available in English, French, German,
                          Italian, Spanish, Portuguese</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="g-attributes property-type attr-5 pb-30">
                      <h3 className="text-22 fw-500 pt-40 border-top-light mb-20">Property type</h3>
                      <div className="list-attributes d-flex flex-wrap">
                        <div className="item apartments term-32"><i className="icon-check text-blue-1" />
                          Apartments</div>
                        <div className="item hotels term-33"><i className="icon-check text-blue-1" />
                          Hotels</div>
                        <div className="item homestays term-34"><i className="icon-check text-blue-1" />
                          Homestays</div>
                        <div className="item villas term-35"><i className="icon-check text-blue-1" />
                          Villas</div>
                        <div className="item boats term-36"><i className="icon-check text-blue-1" />
                          Boats</div>
                        <div className="item motels term-37"><i className="icon-check text-blue-1" />
                          Motels</div>
                        <div className="item resorts term-38"><i className="icon-check text-blue-1" />
                          Resorts</div>
                        <div className="item lodges term-39"><i className="icon-check text-blue-1" />
                          Lodges</div>
                        <div className="item cruises term-41"><i className="icon-check text-blue-1" />
                          Cruises</div>
                      </div>
                    </div>
                    <div className="g-attributes facilities-1 attr-6 pb-30">
                      <h3 className="text-22 fw-500 pt-40 border-top-light mb-20">Facilities</h3>
                      <div className="list-attributes d-flex flex-wrap">
                        <div className="item wake-up-call term-42"><i className="icofont-wall-clock" />
                          Wake-up call</div>
                        <div className="item car-hire term-43"><i className="icofont-car-alt-3" />
                          Car hire</div>
                        <div className="item flat-tv term-45"><i className="icofont-imac" />
                          Flat Tv</div>
                        <div className="item laundry-and-dry-cleaning term-46"><i className="icofont-recycle-alt" />
                          Laundry and dry cleaning</div>
                        <div className="item coffee-and-tea term-48"><i className="icofont-tea" />
                          Coffee and tea</div>
                      </div>
                    </div>
                    <div className="g-attributes hotel-service attr-7 pb-30">
                      <h3 className="text-22 fw-500 pt-40 border-top-light mb-20">Hotel Service</h3>
                      <div className="list-attributes d-flex flex-wrap">
                        <div className="item havana-lobby-bar term-49"><i className="icon-check text-blue-1" />
                          Havana Lobby bar</div>
                        <div className="item fiesta-restaurant term-50"><i className="icon-check text-blue-1" />
                          Fiesta Restaurant</div>
                        <div className="item hotel-transport-services term-51"><i className="icon-check text-blue-1" />
                          Hotel transport services</div>
                        <div className="item free-luggage-deposit term-52"><i className="icon-check text-blue-1" />
                          Free luggage deposit</div>
                        <div className="item tickets term-55"><i className="icon-check text-blue-1" />
                          Tickets</div>
                      </div>
                    </div>
                    <div className="border-bottom-light" />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-22 fw-500 heading-section mb-20 pt-40">Available Rooms</h3>
            <div id="hotel-rooms-form" className="hotel_rooms_form border-light rounded-4 shadow-4">
              <div className="nav-enquiry d-flex">
                <div className="enquiry-item active"><span>Book</span></div>
                <div data-toggle="modal" data-target="#enquiry_form_modal" className="enquiry-item">
                  <span>Enquiry</span></div>
              </div>
              <div className="form-book">
                <div className="form-search-rooms">
                  <div className="d-flex form-search-row">
                    <div className="col-md-4">
                      <div data-format="MM/DD/YYYY" className="form-group form-date-field form-date-search "><i className="fa fa-angle-down arrow" /> <input type="text" className="start_date has-value" style={{"height":"1px","visibility":"hidden"}} defaultValue="11/09/2023 - 11/09/2023" />
                        <div className="date-wrapper form-content px-20 py-10">
                          <h4 className="text-15 fw-500 ls-2 lh-16">Select Dates</h4>
                          <div className="render check-in-render text-15 text-light-1 ls-2 lh-16">
                            Please select</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="searchMenu-guests px-20 py-10 rounded-4 js-form-dd form-group" style={{"height":"100%","cursor":"pointer"}}><i className="fa fa-angle-down arrow" />
                        <div data-x-dd-click="searchMenu-guests">
                          <h4 className="text-15 fw-500 ls-2 lh-16">Guest</h4>
                          <div className="text-15 text-light-1 ls-2 lh-16"><span className="js-count-adult">1</span> adults
                            -
                            <span className="js-count-child">0</span> children
                          </div>
                        </div>
                        <div data-x-dd="searchMenu-guests" data-x-dd-toggle="-is-active" className="searchMenu-guests__field shadow-2 mt-1">
                          <div className="bg-white px-30 py-30 rounded-4">
                            <div className="row y-gap-10 justify-between items-center form-guest-search">
                              <div className="col-auto">
                                <div className="text-15 fw-500">Adults</div>
                              </div>
                              <div className="col-auto">
                                <div data-value-change=".js-count-adult" className="d-flex items-center js-counter"><button className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down"><i className="icon-minus text-12" /></button>
                                  <span className="input"><input type="number" min={1} className="has-value" defaultValue={1} /></span> <button className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up"><i className="icon-plus text-12" /></button>
                                </div>
                              </div>
                            </div>
                            <div className="border-top-light mt-24 mb-24" />
                            <div className="row y-gap-10 justify-between items-center form-guest-search">
                              <div className="col-auto">
                                <div className="text-15 lh-12 fw-500">Children</div>
                              </div>
                              <div className="col-auto">
                                <div data-value-change=".js-count-child" className="d-flex items-center js-counter"><button className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down"><i className="icon-minus text-12" /></button>
                                  <span className="input"><input type="number" min={0} className="has-value" defaultValue={0} /></span> <button className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up"><i className="icon-plus text-12" /></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-btn">
                      <div className="g-button-submit bg-blue-1"><button type="submit" className="btn btn-primary btn-search text-white">
                          Check Availability
                          <i className="fa fa-spinner fa-spin" style={{"display":"none"}} /></button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="room-available pt-30 hotel_rooms_form">
              <div className="hotel_list_rooms">
                <div className="row">
                  <div className="col-12">
                    <div className="start_room_sticky" />
                    <div className="room-item border-light rounded-4 px-30 py-30 sm:px-20 sm:py-20">
                      <h3 className="text-18 fw-500 mb-15">Room Kerama Islands</h3>
                      <div className="roomGrid">
                        <div className="roomGrid__header">
                          <div>Room Type</div>
                          <div>Benefits</div>
                          <div>Select Rooms</div>
                        </div>
                        <div className="roomGrid__grid">
                          <div>
                            <div className="ratio ratio-1:1"><img src={pic} alt="image" className="img-ratio rounded-4" />
                              <div className="count-gallery"><i className="fa fa-picture-o" />
                                12
                              </div>
                            </div> <a href="javascript:" className="d-block text-15 fw-500 underline text-blue-1 mt-15">Show
                              Room Information</a>
                            <div id="modal_room_157" tabIndex={-1} role="dialog" className="modal">
                              <div role="document" className="modal-dialog modal-lg modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title">Room Kerama Islands</h5>
                                    <span data-dismiss="modal" aria-label="Close" className="c-pointer"><i className="input-icon field-icon fa"><img src="ico_close.svg" alt="close" /></i></span>
                                  </div>
                                  <div className="modal-body">
                                    <div data-nav="thumbs" data-width="100%" data-auto="false" data-allowfullscreen="true" className="fotorama"><a  /><a  />
                                    </div>
                                    <div className="list-attributes">
                                      <div className="attribute-item">
                                        <h4 className="title">Room Amenities</h4>
                                        <ul className="d-flex justify-content-between flex-wrap">
                                          <li><i data-toggle="tooltip" data-placement="top" title="Wake-up call" className="input-icon field-icon icofont-wall-clock" />
                                            Wake-up call
                                          </li>
                                          <li><i data-toggle="tooltip" data-placement="top" title="Flat Tv" className="input-icon field-icon icofont-imac" />
                                            Flat Tv
                                          </li>
                                          <li><i data-toggle="tooltip" data-placement="top" title="Laundry and dry cleaning" className="input-icon field-icon icofont-recycle-alt" />
                                            Laundry and dry cleaning
                                          </li>
                                          <li><i data-toggle="tooltip" data-placement="top" title="Internet – Wifi" className="input-icon field-icon icofont-wifi-alt" />
                                            Internet – Wifi
                                          </li>
                                          <li><i data-toggle="tooltip" data-placement="top" title="Coffee and tea" className="input-icon field-icon icofont-tea" />
                                            Coffee and tea
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="roomGrid__content">
                              <div className="room-type-item">
                                <div className="room-attribute room-meta d-flex">
                                  <div className="item col-auto">
                                    <div className="tooltip -top h-50">
                                      <div className="tooltip__text"><i className="input-icon field-icon icofont-ruler-compass-alt" />
                                        <span>200 sqft</span></div>
                                      <div className="tooltip__content">Room Footage
                                      </div>
                                    </div>
                                  </div>
                                  <div className="item col-auto">
                                    <div className="tooltip -top h-50">
                                      <div className="tooltip__text"><i className="input-icon field-icon icofont-hotel" />
                                        <span>x5</span></div>
                                      <div className="tooltip__content">No. Beds</div>
                                    </div>
                                  </div>
                                  <div className="item col-auto">
                                    <div className="tooltip -top h-50">
                                      <div className="tooltip__text"><i className="input-icon field-icon icofont-users-alt-4" />
                                        <span>x8</span></div>
                                      <div className="tooltip__content">No. Adults
                                      </div>
                                    </div>
                                  </div>
                                  <div className="item col-auto">
                                    <div className="tooltip -top h-50">
                                      <div className="tooltip__text"><i className="input-icon field-icon fa-child fa" />
                                        <span>x3</span></div>
                                      <div className="tooltip__content">No. Children
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="room-attribute mt-10">
                                  <div className="d-flex items-center"><i className="input-icon field-icon text-20 mr-10 icofont-wall-clock" />
                                    <div className="text-15">Wake-up call</div>
                                  </div>
                                  <div className="d-flex items-center"><i className="input-icon field-icon text-20 mr-10 icofont-imac" />
                                    <div className="text-15">Flat Tv</div>
                                  </div>
                                  <div className="d-flex items-center"><i className="input-icon field-icon text-20 mr-10 icofont-recycle-alt" />
                                    <div className="text-15">Laundry and dry cleaning
                                    </div>
                                  </div>
                                  <div className="d-flex items-center"><i className="input-icon field-icon text-20 mr-10 icofont-wifi-alt" />
                                    <div className="text-15">Internet – Wifi</div>
                                  </div>
                                  <div className="d-flex items-center"><i className="input-icon field-icon text-20 mr-10 icofont-tea" />
                                    <div className="text-15">Coffee and tea</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="text-center"><span className="price">$0<span className="unit">/ night</span></span></div> {/**/}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="room-item border-light rounded-4 px-30 py-30 sm:px-20 sm:py-20 mt-20">
                      <h3 className="text-18 fw-500 mb-15">Room Sheraton Hotel</h3>
                      <div className="roomGrid">
                        <div className="roomGrid__header">
                          <div>Room Type</div>
                          <div>Benefits</div>
                          <div>Select Rooms</div>
                        </div>
                        <div className="roomGrid__grid">
                          <div>
                            <div className="ratio ratio-1:1"><img src={pic} alt="image" className="img-ratio rounded-4" />
                              <div className="count-gallery"><i className="fa fa-picture-o" />
                                12
                              </div>
                            </div> <a href="javascript:" className="d-block text-15 fw-500 underline text-blue-1 mt-15">Show
                              Room Information</a>
                            <div id="modal_room_158" tabIndex={-1} role="dialog" className="modal">
                              <div role="document" className="modal-dialog modal-lg modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title">Room Sheraton Hotel</h5>
                                    <span data-dismiss="modal" aria-label="Close" className="c-pointer"><i className="input-icon field-icon fa"><img src="ico_close.svg" alt="close" /></i></span>
                                  </div>
                                  <div className="modal-body">
                                    
                                    <div className="list-attributes">
                                      <div className="attribute-item">
                                        <h4 className="title">Room Amenities</h4>
                                        <ul className="d-flex justify-content-between flex-wrap">
                                          <li><i data-toggle="tooltip" data-placement="top" title="Wake-up call" className="input-icon field-icon icofont-wall-clock" />
                                            Wake-up call
                                          </li>
                                          <li><i data-toggle="tooltip" data-placement="top" title="Flat Tv" className="input-icon field-icon icofont-imac" />
                                            Flat Tv
                                          </li>
                                          <li><i data-toggle="tooltip" data-placement="top" title="Internet – Wifi" className="input-icon field-icon icofont-wifi-alt" />
                                            Internet – Wifi
                                          </li>
                                          <li><i data-toggle="tooltip" data-placement="top" title="Coffee and tea" className="input-icon field-icon icofont-tea" />
                                            Coffee and tea
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="roomGrid__content">
                              <div className="room-type-item">
                                <div className="room-attribute room-meta d-flex">
                                  <div className="item col-auto">
                                    <div className="tooltip -top h-50">
                                      <div className="tooltip__text"><i className="input-icon field-icon icofont-ruler-compass-alt" />
                                        <span>200 sqft</span></div>
                                      <div className="tooltip__content">Room Footage
                                      </div>
                                    </div>
                                  </div>
                                  <div className="item col-auto">
                                    <div className="tooltip -top h-50">
                                      <div className="tooltip__text"><i className="input-icon field-icon icofont-hotel" />
                                        <span>x5</span></div>
                                      <div className="tooltip__content">No. Beds</div>
                                    </div>
                                  </div>
                                  <div className="item col-auto">
                                    <div className="tooltip -top h-50">
                                      <div className="tooltip__text"><i className="input-icon field-icon icofont-users-alt-4" />
                                        <span>x8</span></div>
                                      <div className="tooltip__content">No. Adults
                                      </div>
                                    </div>
                                  </div>
                                  <div className="item col-auto">
                                    <div className="tooltip -top h-50">
                                      <div className="tooltip__text"><i className="input-icon field-icon fa-child fa" />
                                        <span>x1</span></div>
                                      <div className="tooltip__content">No. Children
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="room-attribute mt-10">
                                  <div className="d-flex items-center"><i className="input-icon field-icon text-20 mr-10 icofont-wall-clock" />
                                    <div className="text-15">Wake-up call</div>
                                  </div>
                                  <div className="d-flex items-center"><i className="input-icon field-icon text-20 mr-10 icofont-imac" />
                                    <div className="text-15">Flat Tv</div>
                                  </div>
                                  <div className="d-flex items-center"><i className="input-icon field-icon text-20 mr-10 icofont-wifi-alt" />
                                    <div className="text-15">Internet – Wifi</div>
                                  </div>
                                  <div className="d-flex items-center"><i className="input-icon field-icon text-20 mr-10 icofont-tea" />
                                    <div className="text-15">Coffee and tea</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="text-center"><span className="price">$0<span className="unit">/ night</span></span></div> {/**/}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="room-item border-light rounded-4 px-30 py-30 sm:px-20 sm:py-20 mt-20">
                      <h3 className="text-18 fw-500 mb-15">Double Room With Town View</h3>
                      <div className="roomGrid">
                        <div className="roomGrid__header">
                          <div>Room Type</div>
                          <div>Benefits</div>
                          <div>Select Rooms</div>
                        </div>
                        <div className="roomGrid__grid">
                          <div>
                            <div className="ratio ratio-1:1"><img src={pic} alt="image" className="img-ratio rounded-4" />
                              <div className="count-gallery"><i className="fa fa-picture-o" />
                                12
                              </div>
                            </div> <a href="javascript:" className="d-block text-15 fw-500 underline text-blue-1 mt-15">Show
                              Room Information</a>
                            <div id="modal_room_159" tabIndex={-1} role="dialog" className="modal">
                              <div role="document" className="modal-dialog modal-lg modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title">Double Room With Town
                                      View</h5> <span data-dismiss="modal" aria-label="Close" className="c-pointer"><i className="input-icon field-icon fa"><img src="ico_close.svg" alt="close" /></i></span>
                                  </div>
                                  <div className="modal-body">
                                    
                                    <div className="list-attributes">
                                      <div className="attribute-item">
                                        <h4 className="title">Room Amenities</h4>
                                        <ul className="d-flex justify-content-between flex-wrap">
                                          <li><i data-toggle="tooltip" data-placement="top" title="Flat Tv" className="input-icon field-icon icofont-imac" />
                                            Flat Tv
                                          </li>
                                          <li><i data-toggle="tooltip" data-placement="top" title="Laundry and dry cleaning" className="input-icon field-icon icofont-recycle-alt" />
                                            Laundry and dry cleaning
                                          </li>
                                          <li><i data-toggle="tooltip" data-placement="top" title="Coffee and tea" className="input-icon field-icon icofont-tea" />
                                            Coffee and tea
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="roomGrid__content">
                              <div className="room-type-item">
                                <div className="room-attribute room-meta d-flex">
                                  <div className="item col-auto">
                                    <div className="tooltip -top h-50">
                                      <div className="tooltip__text"><i className="input-icon field-icon icofont-ruler-compass-alt" />
                                        <span>200 sqft</span></div>
                                      <div className="tooltip__content">Room Footage
                                      </div>
                                    </div>
                                  </div>
                                  <div className="item col-auto">
                                    <div className="tooltip -top h-50">
                                      <div className="tooltip__text"><i className="input-icon field-icon icofont-hotel" />
                                        <span>x2</span></div>
                                      <div className="tooltip__content">No. Beds</div>
                                    </div>
                                  </div>
                                  <div className="item col-auto">
                                    <div className="tooltip -top h-50">
                                      <div className="tooltip__text"><i className="input-icon field-icon icofont-users-alt-4" />
                                        <span>x9</span></div>
                                      <div className="tooltip__content">No. Adults
                                      </div>
                                    </div>
                                  </div>
                                  <div className="item col-auto">
                                    <div className="tooltip -top h-50">
                                      <div className="tooltip__text"><i className="input-icon field-icon fa-child fa" />
                                        <span>x5</span></div>
                                      <div className="tooltip__content">No. Children
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="room-attribute mt-10">
                                  <div className="d-flex items-center"><i className="input-icon field-icon text-20 mr-10 icofont-imac" />
                                    <div className="text-15">Flat Tv</div>
                                  </div>
                                  <div className="d-flex items-center"><i className="input-icon field-icon text-20 mr-10 icofont-recycle-alt" />
                                    <div className="text-15">Laundry and dry cleaning
                                    </div>
                                  </div>
                                  <div className="d-flex items-center"><i className="input-icon field-icon text-20 mr-10 icofont-tea" />
                                    <div className="text-15">Coffee and tea</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="text-center"><span className="price">$0<span className="unit">/ night</span></span></div> {/**/}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="room-item border-light rounded-4 px-30 py-30 sm:px-20 sm:py-20 mt-20">
                      <h3 className="text-18 fw-500 mb-15">Standard Double Room</h3>
                      <div className="roomGrid">
                        <div className="roomGrid__header">
                          <div>Room Type</div>
                          <div>Benefits</div>
                          <div>Select Rooms</div>
                        </div>
                        <div className="roomGrid__grid">
                          <div>
                            <div className="ratio ratio-1:1"><img src={pic} alt="image" className="img-ratio rounded-4" />
                              <div className="count-gallery"><i className="fa fa-picture-o" />
                                12
                              </div>
                            </div> <a href="javascript:" className="d-block text-15 fw-500 underline text-blue-1 mt-15">Show
                              Room Information</a>
                            <div id="modal_room_160" tabIndex={-1} role="dialog" className="modal">
                              <div role="document" className="modal-dialog modal-lg modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title">Standard Double Room
                                    </h5> <span data-dismiss="modal" aria-label="Close" className="c-pointer"><i className="input-icon field-icon fa"><img src="ico_close.svg" alt="close" /></i></span>
                                  </div>
                                  <div className="modal-body">
                                    
                                    <div className="list-attributes">
                                      <div className="attribute-item">
                                        <h4 className="title">Room Amenities</h4>
                                        <ul className="d-flex justify-content-between flex-wrap">
                                          <li><i data-toggle="tooltip" data-placement="top" title="Flat Tv" className="input-icon field-icon icofont-imac" />
                                            Flat Tv
                                          </li>
                                          <li><i data-toggle="tooltip" data-placement="top" title="Laundry and dry cleaning" className="input-icon field-icon icofont-recycle-alt" />
                                            Laundry and dry cleaning
                                          </li>
                                          <li><i data-toggle="tooltip" data-placement="top" title="Internet – Wifi" className="input-icon field-icon icofont-wifi-alt" />
                                            Internet – Wifi
                                          </li>
                                          <li><i data-toggle="tooltip" data-placement="top" title="Coffee and tea" className="input-icon field-icon icofont-tea" />
                                            Coffee and tea
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="roomGrid__content">
                              <div className="room-type-item">
                                <div className="room-attribute room-meta d-flex">
                                  <div className="item col-auto">
                                    <div className="tooltip -top h-50">
                                      <div className="tooltip__text"><i className="input-icon field-icon icofont-ruler-compass-alt" />
                                        <span>200 sqft</span></div>
                                      <div className="tooltip__content">Room Footage
                                      </div>
                                    </div>
                                  </div>
                                  <div className="item col-auto">
                                    <div className="tooltip -top h-50">
                                      <div className="tooltip__text"><i className="input-icon field-icon icofont-hotel" />
                                        <span>x3</span></div>
                                      <div className="tooltip__content">No. Beds</div>
                                    </div>
                                  </div>
                                  <div className="item col-auto">
                                    <div className="tooltip -top h-50">
                                      <div className="tooltip__text"><i className="input-icon field-icon icofont-users-alt-4" />
                                        <span>x6</span></div>
                                      <div className="tooltip__content">No. Adults
                                      </div>
                                    </div>
                                  </div>
                                  <div className="item col-auto">
                                    <div className="tooltip -top h-50">
                                      <div className="tooltip__text"><i className="input-icon field-icon fa-child fa" />
                                        <span>x1</span></div>
                                      <div className="tooltip__content">No. Children
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="room-attribute mt-10">
                                  <div className="d-flex items-center"><i className="input-icon field-icon text-20 mr-10 icofont-imac" />
                                    <div className="text-15">Flat Tv</div>
                                  </div>
                                  <div className="d-flex items-center"><i className="input-icon field-icon text-20 mr-10 icofont-recycle-alt" />
                                    <div className="text-15">Laundry and dry cleaning
                                    </div>
                                  </div>
                                  <div className="d-flex items-center"><i className="input-icon field-icon text-20 mr-10 icofont-wifi-alt" />
                                    <div className="text-15">Internet – Wifi</div>
                                  </div>
                                  <div className="d-flex items-center"><i className="input-icon field-icon text-20 mr-10 icofont-tea" />
                                    <div className="text-15">Coffee and tea</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="text-center"><span className="price">$0<span className="unit">/ night</span></span></div> {/**/}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> {/**/}
              <div className="end_room_sticky" style={{"min-height":"auto"}} /> {/**/}
            </div>
            <div tabIndex={-1} role="dialog" id="enquiry_form_modal" className="modal fade">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content enquiry_form_modal_form">
                  <div className="modal-header">
                    <h5 className="modal-title">Enquiry</h5> <button type="button" data-dismiss="modal" aria-label="Close" className="close"><span aria-hidden="true">×</span></button>
                  </div>
                  <div className="modal-body pt-0 pb-0"><input type="hidden" name="service_id" defaultValue={40} className="has-value" /> <input type="hidden" name="service_type" defaultValue="hotel" className="has-value" />
                    <div className="form-input mb-3"><input type="text" defaultValue name="enquiry_name" />
                      <label className="lh-1 text-16 text-light-1">Name *</label></div>
                    <div className="form-input mb-3"><input type="text" defaultValue name="enquiry_email" />
                      <label className="lh-1 text-16 text-light-1">Email *</label></div>
                    <div className="form-input mb-3"><input type="text" defaultValue name="enquiry_phone" />
                      <label className="lh-1 text-16 text-light-1">Phone</label></div>
                    <div className="form-input mb-3"><textarea name="enquiry_note" rows={4} defaultValue={""} />
                      <label className="lh-1 text-16 text-light-1">Note</label></div>
                    <div className="message_box" />
                  </div>
                  <div className="modal-footer"><button type="button" data-dismiss="modal" className="button -md -blue-1 bg-blue-1-05 text-blue-1">Close</button> <button type="button" className="button -md -blue-1 bg-dark-3 text-white btn-submit-enquiry">
                      Send now
                    </button></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="g-rules border-bottom-light mt-40 pb-50">
            <h3 className="text-22 fw-500">Hotel Rules - Policies</h3>
            <div className="description pt-10">
              <div className="row">
                <div className="col-lg-4">
                  <div className="key">Check In</div>
                </div>
                <div className="col-lg-8">
                  <div className="value"> 12:00AM </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="key">Check Out</div>
                </div>
                <div className="col-lg-8">
                  <div className="value"> 11:00AM </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="key">Hotel Policies</div>
                </div>
                <div className="col-lg-8">
                  <div className="item ">
                    <div className="strong fw-500">Guarantee Policy</div>
                    <div className="context">- A valid credit card will be required upon booking;
                      - For credit card reservations, the same card(s) must be presented upon
                      check in at the respective hotels;
                      - Management reserves the right to cancel any reservations without notice if
                      we are notified of any fraud or illegal activities associated with the full
                      payments received.</div>
                  </div>
                  <div className="item ">
                    <div className="strong fw-500">Children Policy</div>
                    <div className="context">- Child under 5-year old: free of charge.
                      - Child from 5-year old to under 12-year old: surcharge
                      $10/person/room/night.
                      - Child from 12-year old or extra Adult: surcharge $15/person/room/night.
                    </div>
                  </div>
                  <div className="item  d-none ">
                    <div className="strong fw-500">Cancellation/Amendment Policy</div>
                    <div className="context">- If cancellation/amendment is made 72 hours prior to your
                      arrival date, no fee will be charged.
                      - If cancellation/amendment is made within 72 hours, including reservations
                      made within 72 hours of your arrival, 1st night’s room rate and tax will be
                      charged
                      - In case of no-show, 100% room rate and tax will be charged.
                      - Early Bird/Long Stay/Last Min/Package Rates are Non - changeable &amp; Non
                      - refundable</div>
                  </div>
                  <div className="item  d-none ">
                    <div className="strong fw-500">Late check-out policy</div>
                    <div className="context">- Late check-out is subject to room availability
                      - 12:00 to 17:00 check-out: 50% room rate surcharge
                      - After 17:00 check-out: 100% room rate surcharge</div>
                  </div>
                  <div className="btn-show-all text-blue-1 fw-500">
                    <span className="text">Show All</span>
                    <i className="fa fa-caret-down" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-40">
          <section className="pb-40">
            <div className="container">
              <h3 className="text-22 fw-500 mb-10">Where you’ll be</h3>
              <div className="mb-20">London</div>
              <div className="g-location">
                <div className="location-map">
                  <div id="map_content" className="map rounded-4 map-500" style={{"position":"relative","overflow":"hidden"}}>
                    <div style={{"height":"100%","width":"100%","position":"absolute","top":"0px","left":"0px","background-color":"rgb(229, 227, 223)"}}>
                      <div style={{"position":"absolute","z-index":"0","left":"0px","top":"0px","height":"100%","width":"100%","padding":"0px","border-width":"0px","margin":"0px"}} className="gm-style">
                        <div><button style={{"background":"transparent","display":"block","border":"medium","margin":"0px","padding":"0px","-webkit-text-transform":"none","text-transform":"none","-webkit-appearance":"none","-moz-appearance":"none","appearance":"none","position":"absolute","cursor":"pointer","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","z-index":"1000002","outline-offset":"3px","right":"0px","bottom":"0px","-webkit-transform":"translateX(100%)","-ms-transform":"translateX(100%)","transform":"translateX(100%)"}} draggable="false" aria-label="Keyboard shortcuts" title="Keyboard shortcuts" type="button" /></div>
                        <div style={{"position":"absolute","z-index":"0","left":"0px","top":"0px","height":"100%","width":"100%","padding":"0px","border-width":"0px","margin":"0px","cursor":"url(\"openhand_8_8.cur.bmp\"), default","touch-action":"pan-x pan-y"}} tabIndex={0} aria-label="Map" aria-roledescription="map" role="region" aria-describedby="9F84D981-1B0A-431C-9518-7EFB4B8CC74B">
                          <div style={{"z-index":"1","position":"absolute","left":"50%","top":"50%","width":"100%","will-change":"transform","-webkit-transform":"translate(0px)","-ms-transform":"translate(0px)","transform":"translate(0px)"}}>
                            <div style={{"position":"absolute","left":"0px","top":"0px","z-index":"100","width":"100%"}}>
                              <div style={{"position":"absolute","left":"0px","top":"0px","z-index":"0"}}>
                                <div style={{"position":"absolute","z-index":"988","-webkit-transform":"matrix(1, 0, 0, 1, -75, -103)","-ms-transform":"matrix(1, 0, 0, 1, -75, -103)","transform":"matrix(1, 0, 0, 1, -75, -103)"}}>
                                  <div style={{"position":"absolute","left":"0px","top":"0px","width":"256px","height":"256px"}}>
                                    <div style={{"width":"256px","height":"256px"}} />
                                  </div>
                                  <div style={{"position":"absolute","left":"-256px","top":"0px","width":"256px","height":"256px"}}>
                                    <div style={{"width":"256px","height":"256px"}} />
                                  </div>
                                  <div style={{"position":"absolute","left":"-256px","top":"-256px","width":"256px","height":"256px"}}>
                                    <div style={{"width":"256px","height":"256px"}} />
                                  </div>
                                  <div style={{"position":"absolute","left":"0px","top":"-256px","width":"256px","height":"256px"}}>
                                    <div style={{"width":"256px","height":"256px"}} />
                                  </div>
                                  <div style={{"position":"absolute","left":"256px","top":"-256px","width":"256px","height":"256px"}}>
                                    <div style={{"width":"256px","height":"256px"}} />
                                  </div>
                                  <div style={{"position":"absolute","left":"256px","top":"0px","width":"256px","height":"256px"}}>
                                    <div style={{"width":"256px","height":"256px"}} />
                                  </div>
                                  <div style={{"position":"absolute","left":"256px","top":"256px","width":"256px","height":"256px"}}>
                                    <div style={{"width":"256px","height":"256px"}} />
                                  </div>
                                  <div style={{"position":"absolute","left":"0px","top":"256px","width":"256px","height":"256px"}}>
                                    <div style={{"width":"256px","height":"256px"}} />
                                  </div>
                                  <div style={{"position":"absolute","left":"-256px","top":"256px","width":"256px","height":"256px"}}>
                                    <div style={{"width":"256px","height":"256px"}} />
                                  </div>
                                  <div style={{"position":"absolute","left":"-512px","top":"256px","width":"256px","height":"256px"}}>
                                    <div style={{"width":"256px","height":"256px"}} />
                                  </div>
                                  <div style={{"position":"absolute","left":"-512px","top":"0px","width":"256px","height":"256px"}}>
                                    <div style={{"width":"256px","height":"256px"}} />
                                  </div>
                                  <div style={{"position":"absolute","left":"-512px","top":"-256px","width":"256px","height":"256px"}}>
                                    <div style={{"width":"256px","height":"256px"}} />
                                  </div>
                                  <div style={{"position":"absolute","left":"512px","top":"-256px","width":"256px","height":"256px"}}>
                                    <div style={{"width":"256px","height":"256px"}} />
                                  </div>
                                  <div style={{"position":"absolute","left":"512px","top":"0px","width":"256px","height":"256px"}}>
                                    <div style={{"width":"256px","height":"256px"}} />
                                  </div>
                                  <div style={{"position":"absolute","left":"512px","top":"256px","width":"256px","height":"256px"}}>
                                    <div style={{"width":"256px","height":"256px"}} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style={{"position":"absolute","left":"0px","top":"0px","z-index":"101","width":"100%"}}>
                            </div>
                            <div style={{"position":"absolute","left":"0px","top":"0px","z-index":"102","width":"100%"}}>
                            </div>
                            <div style={{"position":"absolute","left":"0px","top":"0px","z-index":"103","width":"100%"}}>
                              <div style={{"position":"absolute","left":"0px","top":"0px","z-index":"-1"}}>
                                <div style={{"position":"absolute","z-index":"988","-webkit-transform":"matrix(1, 0, 0, 1, -75, -103)","-ms-transform":"matrix(1, 0, 0, 1, -75, -103)","transform":"matrix(1, 0, 0, 1, -75, -103)"}}>
                                  <div style={{"width":"256px","height":"256px","overflow":"hidden","position":"absolute","left":"0px","top":"0px"}}>
                                  </div>
                                  <div style={{"width":"256px","height":"256px","overflow":"hidden","position":"absolute","left":"-256px","top":"0px"}}>
                                  </div>
                                  <div style={{"width":"256px","height":"256px","overflow":"hidden","position":"absolute","left":"-256px","top":"-256px"}}>
                                  </div>
                                  <div style={{"width":"256px","height":"256px","overflow":"hidden","position":"absolute","left":"0px","top":"-256px"}}>
                                  </div>
                                  <div style={{"width":"256px","height":"256px","overflow":"hidden","position":"absolute","left":"256px","top":"-256px"}}>
                                  </div>
                                  <div style={{"width":"256px","height":"256px","overflow":"hidden","position":"absolute","left":"256px","top":"0px"}}>
                                  </div>
                                  <div style={{"width":"256px","height":"256px","overflow":"hidden","position":"absolute","left":"256px","top":"256px"}}>
                                  </div>
                                  <div style={{"width":"256px","height":"256px","overflow":"hidden","position":"absolute","left":"0px","top":"256px"}}>
                                  </div>
                                  <div style={{"width":"256px","height":"256px","overflow":"hidden","position":"absolute","left":"-256px","top":"256px"}}>
                                  </div>
                                  <div style={{"width":"256px","height":"256px","overflow":"hidden","position":"absolute","left":"-512px","top":"256px"}}>
                                  </div>
                                  <div style={{"width":"256px","height":"256px","overflow":"hidden","position":"absolute","left":"-512px","top":"0px"}}>
                                  </div>
                                  <div style={{"width":"256px","height":"256px","overflow":"hidden","position":"absolute","left":"-512px","top":"-256px"}}>
                                  </div>
                                  <div style={{"width":"256px","height":"256px","overflow":"hidden","position":"absolute","left":"512px","top":"-256px"}}>
                                  </div>
                                  <div style={{"width":"256px","height":"256px","overflow":"hidden","position":"absolute","left":"512px","top":"0px"}}>
                                  </div>
                                  <div style={{"width":"256px","height":"256px","overflow":"hidden","position":"absolute","left":"512px","top":"256px"}}>
                                  </div>
                                </div>
                              </div>
                              <div style={{"width":"0px","height":"0px","overflow":"hidden","position":"absolute","left":"0px","top":"0px","z-index":"0"}}>
                                <img style={{"position":"absolute","left":"0px","top":"0px","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","border":"0px","padding":"0px","margin":"0px","max-width":"none"}} alt src="pin.png" draggable="false" /></div>
                            </div>
                            <div style={{"position":"absolute","left":"0px","top":"0px","z-index":"0"}}>
                              <div style={{"position":"absolute","z-index":"988","-webkit-transform":"matrix(1, 0, 0, 1, -75, -103)","-ms-transform":"matrix(1, 0, 0, 1, -75, -103)","transform":"matrix(1, 0, 0, 1, -75, -103)"}}>
                                <div style={{"position":"absolute","left":"0px","top":"0px","width":"256px","height":"256px","-webkit-transition":"opacity 200ms linear 0s","transition":"opacity 200ms linear 0s"}}>
                                  <img style={{"width":"256px","height":"256px","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","border":"0px","padding":"0px","margin":"0px","max-width":"none"}} draggable="false" alt role="presentation" src={vt} /></div>
                                <div style={{"position":"absolute","left":"-256px","top":"0px","width":"256px","height":"256px","-webkit-transition":"opacity 200ms linear 0s","transition":"opacity 200ms linear 0s"}}>
                                  <img style={{"width":"256px","height":"256px","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","border":"0px","padding":"0px","margin":"0px","max-width":"none"}} draggable="false" alt role="presentation" src={vt1} /></div>
                                <div style={{"position":"absolute","left":"-512px","top":"0px","width":"256px","height":"256px","-webkit-transition":"opacity 200ms linear 0s","transition":"opacity 200ms linear 0s"}}>
                                  <img style={{"width":"256px","height":"256px","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","border":"0px","padding":"0px","margin":"0px","max-width":"none"}} draggable="false" alt role="presentation" src={vt2} /></div>
                                <div style={{"position":"absolute","left":"-512px","top":"-256px","width":"256px","height":"256px","-webkit-transition":"opacity 200ms linear 0s","transition":"opacity 200ms linear 0s"}}>
                                  <img style={{"width":"256px","height":"256px","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","border":"0px","padding":"0px","margin":"0px","max-width":"none"}} draggable="false" alt role="presentation" src={vt3} /></div>
                                <div style={{"position":"absolute","left":"0px","top":"-256px","width":"256px","height":"256px","-webkit-transition":"opacity 200ms linear 0s","transition":"opacity 200ms linear 0s"}}>
                                  <img style={{"width":"256px","height":"256px","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","border":"0px","padding":"0px","margin":"0px","max-width":"none"}} draggable="false" alt role="presentation" src={vt3} /></div>
                                <div style={{"position":"absolute","left":"-256px","top":"-256px","width":"256px","height":"256px","-webkit-transition":"opacity 200ms linear 0s","transition":"opacity 200ms linear 0s"}}>
                                  <img style={{"width":"256px","height":"256px","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","border":"0px","padding":"0px","margin":"0px","max-width":"none"}} draggable="false" alt role="presentation" src={vt3} /></div>
                                <div style={{"position":"absolute","left":"256px","top":"256px","width":"256px","height":"256px","-webkit-transition":"opacity 200ms linear 0s","transition":"opacity 200ms linear 0s"}}>
                                  <img style={{"width":"256px","height":"256px","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","border":"0px","padding":"0px","margin":"0px","max-width":"none"}} draggable="false" alt role="presentation" src={vt3} /></div>
                                <div style={{"position":"absolute","left":"256px","top":"-256px","width":"256px","height":"256px","-webkit-transition":"opacity 200ms linear 0s","transition":"opacity 200ms linear 0s"}}>
                                  <img style={{"width":"256px","height":"256px","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","border":"0px","padding":"0px","margin":"0px","max-width":"none"}} draggable="false" alt role="presentation" src={vt3} /></div>
                                <div style={{"position":"absolute","left":"256px","top":"0px","width":"256px","height":"256px","-webkit-transition":"opacity 200ms linear 0s","transition":"opacity 200ms linear 0s"}}>
                                  <img style={{"width":"256px","height":"256px","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","border":"0px","padding":"0px","margin":"0px","max-width":"none"}} draggable="false" alt role="presentation" src={vt3} /></div>
                                <div style={{"position":"absolute","left":"-512px","top":"256px","width":"256px","height":"256px","-webkit-transition":"opacity 200ms linear 0s","transition":"opacity 200ms linear 0s"}}>
                                  <img style={{"width":"256px","height":"256px","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","border":"0px","padding":"0px","margin":"0px","max-width":"none"}} draggable="false" alt role="presentation" src={vt3} /></div>
                                <div style={{"position":"absolute","left":"512px","top":"-256px","width":"256px","height":"256px","-webkit-transition":"opacity 200ms linear 0s","transition":"opacity 200ms linear 0s"}}>
                                  <img style={{"width":"256px","height":"256px","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","border":"0px","padding":"0px","margin":"0px","max-width":"none"}} draggable="false" alt role="presentation" src={vt3} /></div>
                                <div style={{"position":"absolute","left":"0px","top":"256px","width":"256px","height":"256px","-webkit-transition":"opacity 200ms linear 0s","transition":"opacity 200ms linear 0s"}}>
                                  <img style={{"width":"256px","height":"256px","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","border":"0px","padding":"0px","margin":"0px","max-width":"none"}} draggable="false" alt role="presentation" src={vt3} /></div>
                                <div style={{"position":"absolute","left":"-256px","top":"256px","width":"256px","height":"256px","-webkit-transition":"opacity 200ms linear 0s","transition":"opacity 200ms linear 0s"}}>
                                  <img style={{"width":"256px","height":"256px","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","border":"0px","padding":"0px","margin":"0px","max-width":"none"}} draggable="false" alt role="presentation" src={vt3} /></div>
                                <div style={{"position":"absolute","left":"512px","top":"256px","width":"256px","height":"256px","-webkit-transition":"opacity 200ms linear 0s","transition":"opacity 200ms linear 0s"}}>
                                  <img style={{"width":"256px","height":"256px","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","border":"0px","padding":"0px","margin":"0px","max-width":"none"}} draggable="false" alt role="presentation" src={vt3} /></div>
                                <div style={{"position":"absolute","left":"512px","top":"0px","width":"256px","height":"256px","-webkit-transition":"opacity 200ms linear 0s","transition":"opacity 200ms linear 0s"}}>
                                  <img style={{"width":"256px","height":"256px","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","border":"0px","padding":"0px","margin":"0px","max-width":"none"}} draggable="false" alt role="presentation" src={vt3}/></div>
                              </div>
                            </div>
                          </div>
                          <div style={{"z-index":"3","position":"absolute","height":"100%","width":"100%","padding":"0px","border-width":"0px","margin":"0px","left":"0px","top":"0px","touch-action":"pan-x pan-y"}}>
                            <div style={{"z-index":"4","position":"absolute","left":"50%","top":"50%","width":"100%","will-change":"transform","-webkit-transform":"translate(0px)","-ms-transform":"translate(0px)","transform":"translate(0px)"}}>
                              <div style={{"position":"absolute","left":"0px","top":"0px","z-index":"104","width":"100%"}}>
                              </div>
                              <div style={{"position":"absolute","left":"0px","top":"0px","z-index":"105","width":"100%"}}>
                              </div>
                              <div style={{"position":"absolute","left":"0px","top":"0px","z-index":"106","width":"100%"}}>
                                <span id="9C00B858-C718-495B-AC04-EC0891B7C705" style={{"display":"none"}}>To navigate, press the arrow
                                  keys.</span>
                                <div style={{"width":"0px","height":"0px","overflow":"hidden","position":"absolute","cursor":"pointer","touch-action":"none","left":"0px","top":"0px","z-index":"0"}} title tabIndex={-1}><img style={{"width":"0px","height":"0px","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","border":"0px","padding":"0px","margin":"0px","max-width":"none"}} alt src="transparent.png" draggable="false" />
                                </div>
                              </div>
                              <div style={{"position":"absolute","left":"0px","top":"0px","z-index":"107","width":"100%"}}>
                              </div>
                            </div>
                          </div>
                          <div style={{"z-index":"4","position":"absolute","height":"100%","width":"100%","padding":"0px","border-width":"0px","margin":"0px","left":"0px","top":"0px","opacity":"0","-webkit-transition-duration":"0.8s","transition-duration":"0.8s"}} className="gm-style-moc">
                            <p className="gm-style-mot">Use ctrl + scroll to zoom the map</p>
                          </div>
                          <div className="LGLeeN-keyboard-shortcuts-view" id="9F84D981-1B0A-431C-9518-7EFB4B8CC74B" style={{"display":"none"}}>
                            <table>
                              <tbody>
                                <tr>
                                  <td><kbd aria-label="Left arrow">←</kbd></td>
                                  <td aria-label="Move left.">Move left</td>
                                </tr>
                                <tr>
                                  <td><kbd aria-label="Right arrow">→</kbd></td>
                                  <td aria-label="Move right.">Move right</td>
                                </tr>
                                <tr>
                                  <td><kbd aria-label="Up arrow">↑</kbd></td>
                                  <td aria-label="Move up.">Move up</td>
                                </tr>
                                <tr>
                                  <td><kbd aria-label="Down arrow">↓</kbd></td>
                                  <td aria-label="Move down.">Move down</td>
                                </tr>
                                <tr>
                                  <td><kbd>+</kbd></td>
                                  <td aria-label="Zoom in.">Zoom in</td>
                                </tr>
                                <tr>
                                  <td><kbd>-</kbd></td>
                                  <td aria-label="Zoom out.">Zoom out</td>
                                </tr>
                                <tr>
                                  <td><kbd>Home</kbd></td>
                                  <td aria-label="Jump left by 75%.">Jump left by 75%
                                  </td>
                                </tr>
                                <tr>
                                  <td><kbd>End</kbd></td>
                                  <td aria-label="Jump right by 75%.">Jump right by
                                    75%</td>
                                </tr>
                                <tr>
                                  <td><kbd>Page Up</kbd></td>
                                  <td aria-label="Jump up by 75%.">Jump up by 75%</td>
                                </tr>
                                <tr>
                                  <td><kbd>Page Down</kbd></td>
                                  <td aria-label="Jump down by 75%.">Jump down by 75%
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div><iframe aria-hidden="true" frameBorder={0} tabIndex={-1} style={{"z-index":"-1","position":"absolute","width":"100%","height":"100%","top":"0px","left":"0px","border":"medium"}} src="index_2.html" />
                        <div style={{"pointer-events":"none","width":"100%","height":"100%","box-sizing":"border-box","position":"absolute","z-index":"1000002","opacity":"0","border":"2px solid rgb(26, 115, 232)"}}>
                        </div>
                        <div />
                        <div />
                        <div />
                        <div />
                        <div><button style={{"background":"rgb(255, 255, 255)","border":"0px","margin":"10px","padding":"0px","-webkit-text-transform":"none","text-transform":"none","-webkit-appearance":"none","-moz-appearance":"none","appearance":"none","position":"absolute","cursor":"pointer","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","border-radius":"2px","height":"40px","width":"40px","box-shadow":"rgba(0, 0, 0, 0.3) 0px 1px 4px -1px","overflow":"hidden","top":"0px","right":"0px"}} draggable="false" aria-label="Toggle fullscreen view" title="Toggle fullscreen view" type="button" aria-pressed="false" className="gm-control-active gm-fullscreen-control"><img style={{"height":"18px","width":"18px"}} src="9a91c387b5af040ea1593997527c91f31258aa77.svg" alt /><img style={{"height":"18px","width":"18px"}} src="b53688f60120f534170affcfbc23e428486f4ea8.svg" alt /><img style={{"height":"18px","width":"18px"}} src="189c8a97bb5c749b49fa5d7993f04882e023fafd.svg" alt /></button></div>
                        <div />
                        <div />
                        <div />
                        <div />
                        <div>
                          <div className="gmnoprint gm-bundled-control gm-bundled-control-on-bottom" style={{"margin":"10px","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","position":"absolute","bottom":"127px","right":"40px"}} draggable="false" data-control-width={40} data-control-height={113}>
                            <div className="gmnoprint" data-control-width={40} data-control-height={40} style={{"display":"none","position":"absolute"}}>
                              <div style={{"background-color":"rgb(255, 255, 255)","box-shadow":"rgba(0, 0, 0, 0.3) 0px 1px 4px -1px","border-radius":"2px","width":"40px","height":"40px"}}>
                                <button style={{"background":"none","display":"none","border":"0px","margin":"0px","padding":"0px","-webkit-text-transform":"none","text-transform":"none","-webkit-appearance":"none","-moz-appearance":"none","appearance":"none","position":"relative","cursor":"pointer","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","left":"0px","top":"0px","overflow":"hidden","width":"40px","height":"40px"}} draggable="false" aria-label="Rotate map clockwise" title="Rotate map clockwise" type="button" className="gm-control-active"><img alt style={{"width":"20px","height":"20px"}} src="307727718a094e1c7b841513e78f7308f7fb0ca9.svg" /><img alt style={{"width":"20px","height":"20px"}} src="093a96f5d960fb8f6f8a2d37b327b23e054e76c1.svg" /><img alt style={{"width":"20px","height":"20px"}} src="33ea66baf74e8030f166bf2e9ff6168b77793d53.svg" /></button>
                                <div style={{"position":"relative","overflow":"hidden","width":"30px","height":"1px","margin":"0px 5px","background-color":"rgb(230, 230, 230)","display":"none"}}>
                                </div><button style={{"background":"none","display":"none","border":"0px","margin":"0px","padding":"0px","-webkit-text-transform":"none","text-transform":"none","-webkit-appearance":"none","-moz-appearance":"none","appearance":"none","position":"relative","cursor":"pointer","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","left":"0px","top":"0px","overflow":"hidden","width":"40px","height":"40px","-webkit-transform":"scaleX(-1)","-ms-transform":"scaleX(-1)","transform":"scaleX(-1)"}} draggable="false" aria-label="Rotate map counterclockwise" title="Rotate map counterclockwise" type="button" className="gm-control-active"><img alt style={{"width":"20px","height":"20px"}} src="307727718a094e1c7b841513e78f7308f7fb0ca9.svg" /><img alt style={{"width":"20px","height":"20px"}} src="093a96f5d960fb8f6f8a2d37b327b23e054e76c1.svg" /><img alt style={{"width":"20px","height":"20px"}} src="33ea66baf74e8030f166bf2e9ff6168b77793d53.svg" /></button>
                                <div style={{"position":"relative","overflow":"hidden","width":"30px","height":"1px","margin":"0px 5px","background-color":"rgb(230, 230, 230)","display":"none"}}>
                                </div><button style={{"background":"none","display":"block","border":"0px","margin":"0px","padding":"0px","-webkit-text-transform":"none","text-transform":"none","-webkit-appearance":"none","-moz-appearance":"none","appearance":"none","position":"relative","cursor":"pointer","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","top":"0px","left":"0px","overflow":"hidden","width":"40px","height":"40px"}} draggable="false" aria-label="Tilt map" title="Tilt map" type="button" className="gm-tilt gm-control-active"><img alt style={{"width":"18px"}} src="6068af43d777128e4a09c89910a6c773d522fdfa.svg" /><img alt style={{"width":"18px"}} src="de762194f94b36483b12502229e82c357334e5e6.svg" /><img alt style={{"width":"18px"}} src="347115e75c29fea098318edbd38c12d15c367df7.svg" /></button>
                              </div>
                            </div><button style={{"background":"none","display":"block","border":"0px","margin":"0px","padding":"0px","-webkit-text-transform":"none","text-transform":"none","-webkit-appearance":"none","-moz-appearance":"none","appearance":"none","position":"absolute","cursor":"pointer","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","left":"20px","top":"0px"}} draggable="false" aria-label="Drag Pegman onto the map to open Street View" title="Drag Pegman onto the map to open Street View" type="button" />
                            <div className="gmnoprint" style={{"position":"absolute","left":"0px","top":"32px"}} data-control-width={40} data-control-height={81}>
                              <div draggable="false" style={{"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","box-shadow":"rgba(0, 0, 0, 0.3) 0px 1px 4px -1px","border-radius":"2px","cursor":"pointer","background-color":"rgb(255, 255, 255)","width":"40px","height":"81px"}}>
                                <button style={{"background":"none","display":"block","border":"0px","margin":"0px","padding":"0px","-webkit-text-transform":"none","text-transform":"none","-webkit-appearance":"none","-moz-appearance":"none","appearance":"none","position":"relative","cursor":"pointer","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","overflow":"hidden","width":"40px","height":"40px","top":"0px","left":"0px"}} draggable="false" aria-label="Zoom in" title="Zoom in" type="button" className="gm-control-active"><img style={{"height":"18px","width":"18px"}} src="0c03e2f68c34048f1ae9e34df0da26fe66076841.svg" alt /><img style={{"height":"18px","width":"18px"}} src="8c6ff9258dfdb8cea73e1e43ea7178f044b763b9.svg" alt /><img style={{"height":"18px","width":"18px"}} src="c561bd899f92d8ae1bb1f17039e9eb8ab93a70cb.svg" alt /><img style={{"height":"18px","width":"18px"}} src="1fc739251896417ba70206cace6922a9db2ee417.svg" alt /></button>
                                <div style={{"position":"relative","overflow":"hidden","width":"30px","height":"1px","margin":"0px 5px","background-color":"rgb(230, 230, 230)","top":"0px"}}>
                                </div><button style={{"background":"none","display":"block","border":"0px","margin":"0px","padding":"0px","-webkit-text-transform":"none","text-transform":"none","-webkit-appearance":"none","-moz-appearance":"none","appearance":"none","position":"relative","cursor":"pointer","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","overflow":"hidden","width":"40px","height":"40px","top":"0px","left":"0px"}} draggable="false" aria-label="Zoom out" title="Zoom out" type="button" className="gm-control-active"><img style={{"height":"18px","width":"18px"}} src="4a3b3ec33fa669d3194f454c76a772358f51e965.svg" alt /><img style={{"height":"18px","width":"18px"}} src="5008a61f6521a94969b2fc1272e595e327c3ec6d.svg" alt /><img style={{"height":"18px","width":"18px"}} src="9f9f19af37b524a87f8925b2fb9a64947306a634.svg" alt /><img style={{"height":"18px","width":"18px"}} src="a347b6be6959d719b3239e466b3e2bb38eb0115b.svg" alt /></button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div style={{"margin":"0px 5px","z-index":"1000000","position":"absolute","left":"0px","bottom":"0px"}}>
                            <a style={{"display":"inline"}} target="_blank" rel="noopener" title="Open this area in Google Maps (opens a new window)" aria-label="Open this area in Google Maps (opens a new window)" href="https://maps.google.com/maps?ll=19.277696,72.887009&z=12&t=m&hl=en-US&gl=US&mapclient=apiv3">
                              <div style={{"width":"66px","height":"26px"}}><img style={{"position":"absolute","left":"0px","top":"0px","width":"66px","height":"26px","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","border":"0px","padding":"0px","margin":"0px"}} alt="Google" src="ed2f71db67f42135bbdc7d461f84802741d6e6cf.svg" draggable="false" /></div>
                            </a></div>
                        </div>
                        <div />
                        <div>
                          <div style={{"display":"inline-flex","position":"absolute","right":"0px","bottom":"0px"}}>
                            <div className="gmnoprint" style={{"z-index":"1000001"}}>
                              <div draggable="false" style={{"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","position":"relative","height":"14px","line-height":"14px"}} className="gm-style-cc">
                                <div style={{"opacity":"0.7","width":"100%","height":"100%","position":"absolute"}}>
                                  <div style={{"width":"1px"}} />
                                  <div style={{"background-color":"rgb(245, 245, 245)","width":"auto","height":"100%","margin-left":"1px"}}>
                                  </div>
                                </div>
                                <div style={{"position":"relative","padding-right":"6px","padding-left":"6px","box-sizing":"border-box","font-family":"Roboto, Arial, sans-serif","font-size":"10px","color":"rgb(0, 0, 0)","white-space":"nowrap","direction":"ltr","-webkit-text-align":"right","text-align":"right","vertical-align":"middle","display":"inline-block"}}>
                                  <button style={{"background":"none","display":"inline-block","border":"0px","margin":"0px","padding":"0px","-webkit-text-transform":"none","text-transform":"none","-webkit-appearance":"none","-moz-appearance":"none","appearance":"none","position":"relative","cursor":"pointer","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","color":"rgb(0, 0, 0)","font-family":"inherit","line-height":"inherit"}} draggable="false" aria-label="Keyboard shortcuts" title="Keyboard shortcuts" type="button">Keyboard shortcuts</button></div>
                              </div>
                            </div>
                            <div className="gmnoprint" style={{"z-index":"1000001"}}>
                              <div draggable="false" style={{"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","position":"relative","height":"14px","line-height":"14px"}} className="gm-style-cc">
                                <div style={{"opacity":"0.7","width":"100%","height":"100%","position":"absolute"}}>
                                  <div style={{"width":"1px"}} />
                                  <div style={{"background-color":"rgb(245, 245, 245)","width":"auto","height":"100%","margin-left":"1px"}}>
                                  </div>
                                </div>
                                <div style={{"position":"relative","padding-right":"6px","padding-left":"6px","box-sizing":"border-box","font-family":"Roboto, Arial, sans-serif","font-size":"10px","color":"rgb(0, 0, 0)","white-space":"nowrap","direction":"ltr","-webkit-text-align":"right","text-align":"right","vertical-align":"middle","display":"inline-block"}}>
                                  <button style={{"background":"none","border":"0px","margin":"0px","padding":"0px","-webkit-text-transform":"none","text-transform":"none","-webkit-appearance":"none","-moz-appearance":"none","appearance":"none","position":"relative","cursor":"pointer","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","color":"rgb(0, 0, 0)","font-family":"inherit","line-height":"inherit","display":"none"}} draggable="false" aria-label="Map Data" title="Map Data" type="button">Map
                                    Data</button><span style={{}}>Map data
                                    ©2023</span></div>
                              </div>
                            </div>
                            <div className="gmnoscreen">
                              <div style={{"font-family":"Roboto, Arial, sans-serif","font-size":"11px","color":"rgb(0, 0, 0)","direction":"ltr","-webkit-text-align":"right","text-align":"right","background-color":"rgb(245, 245, 245)"}}>
                                Map data ©2023</div>
                            </div><button style={{"background":"none","display":"none","border":"0px","margin":"0px","padding":"0px","-webkit-text-transform":"none","text-transform":"none","-webkit-appearance":"none","-moz-appearance":"none","appearance":"none","position":"relative","cursor":"pointer","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","height":"14px","line-height":"14px"}} draggable="false" aria-label="Map Scale: 2 km per 55 pixels" title="Map Scale: 2 km per 55 pixels" type="button" className="gm-style-cc" aria-describedby="6D3515F3-0E23-4A15-AAF9-90854C19CE83">
                              <div style={{"opacity":"0.7","width":"100%","height":"100%","position":"absolute"}}>
                                <div style={{"width":"1px"}} />
                                <div style={{"background-color":"rgb(245, 245, 245)","width":"auto","height":"100%","margin-left":"1px"}}>
                                </div>
                              </div>
                              <div style={{"position":"relative","padding-right":"6px","padding-left":"6px","box-sizing":"border-box","font-family":"Roboto, Arial, sans-serif","font-size":"10px","color":"rgb(0, 0, 0)","white-space":"nowrap","direction":"ltr","-webkit-text-align":"right","text-align":"right","vertical-align":"middle","display":"inline-block"}}>
                                <span>2 km&nbsp;</span>
                                <div style={{"position":"relative","display":"inline-block","height":"8px","bottom":"-1px","width":"59px"}}>
                                  <div style={{"width":"100%","height":"4px","position":"absolute","left":"0px","top":"0px"}}>
                                  </div>
                                  <div style={{"width":"4px","height":"8px","left":"0px","top":"0px","background-color":"rgb(255, 255, 255)"}}>
                                  </div>
                                  <div style={{"width":"4px","height":"8px","position":"absolute","background-color":"rgb(255, 255, 255)","right":"0px","bottom":"0px"}}>
                                  </div>
                                  <div style={{"position":"absolute","background-color":"rgb(102, 102, 102)","height":"2px","left":"1px","bottom":"1px","right":"1px"}}>
                                  </div>
                                  <div style={{"position":"absolute","width":"2px","height":"6px","left":"1px","top":"1px","background-color":"rgb(102, 102, 102)"}}>
                                  </div>
                                  <div style={{"width":"2px","height":"6px","position":"absolute","background-color":"rgb(102, 102, 102)","bottom":"1px","right":"1px"}}>
                                  </div>
                                </div>
                              </div><span id="6D3515F3-0E23-4A15-AAF9-90854C19CE83" style={{"display":"none"}}>Click to toggle between metric
                                and imperial units</span>
                            </button>
                            <div className="gmnoprint gm-style-cc" style={{"z-index":"1000001","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","position":"relative","height":"14px","line-height":"14px"}} draggable="false">
                              <div style={{"opacity":"0.7","width":"100%","height":"100%","position":"absolute"}}>
                                <div style={{"width":"1px"}} />
                                <div style={{"background-color":"rgb(245, 245, 245)","width":"auto","height":"100%","margin-left":"1px"}}>
                                </div>
                              </div>
                              <div style={{"position":"relative","padding-right":"6px","padding-left":"6px","box-sizing":"border-box","font-family":"Roboto, Arial, sans-serif","font-size":"10px","color":"rgb(0, 0, 0)","white-space":"nowrap","direction":"ltr","-webkit-text-align":"right","text-align":"right","vertical-align":"middle","display":"inline-block"}}>
                                <a style={{"-webkit-text-decoration":"none","text-decoration":"none","cursor":"pointer","color":"rgb(0, 0, 0)"}} href="https://www.google.com/intl/en-US_US/help/terms_maps.html" target="_blank" rel="noopener">Terms</a></div>
                            </div>
                            <div draggable="false" style={{"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","position":"relative","height":"14px","line-height":"14px"}} className="gm-style-cc">
                              <div style={{"opacity":"0.7","width":"100%","height":"100%","position":"absolute"}}>
                                <div style={{"width":"1px"}} />
                                <div style={{"background-color":"rgb(245, 245, 245)","width":"auto","height":"100%","margin-left":"1px"}}>
                                </div>
                              </div>
                              <div style={{"position":"relative","padding-right":"6px","padding-left":"6px","box-sizing":"border-box","font-family":"Roboto, Arial, sans-serif","font-size":"10px","color":"rgb(0, 0, 0)","white-space":"nowrap","direction":"ltr","-webkit-text-align":"right","text-align":"right","vertical-align":"middle","display":"inline-block"}}>
                                <a target="_blank" rel="noopener" title="Report errors in the road map or imagery to Google" dir="ltr" style={{"font-family":"Roboto, Arial, sans-serif","font-size":"10px","color":"rgb(0, 0, 0)","-webkit-text-decoration":"none","text-decoration":"none","position":"relative"}} href="https://www.google.com/maps/@19.277696,72.887009,12z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3">Report
                                  a map error</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="container mt-40 mb-40">
          <section className="bravo-reviews" id="bravo-reviews">
            <div className="row y-gap-40 justify-between">
              <div className="col-xl-3">
                <h3 className="text-22 fw-500">Guest reviews</h3>
                <div className="d-flex items-center mt-20">
                  <div className="flex-center bg-blue-1 rounded-4 size-70 text-22 fw-600 text-white">4.3
                  </div>
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
                          <div className="progressBar__bar bg-blue-1" style={{"width":"33%"}} />
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
                          <div className="progressBar__bar bg-blue-1" style={{"width":"67%"}} />
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
                          <div className="progressBar__bar bg-blue-1" style={{"width":"0%"}} />
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
                          <div className="progressBar__bar bg-blue-1" style={{"width":"0%"}} />
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
                          <div className="progressBar__bar bg-blue-1" style={{"width":"0%"}} />
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
                          <img className="avatar w-60 h-60 rounded-full" src={avatar} alt="ttdffutf hdjyd" />
                        </div>
                        <div className="col-auto">
                          <div className="fw-500 lh-15">ttdffutf hdjyd</div>
                          <div className="text-14 text-light-1 lh-15">10/19/2023 02:00</div>
                        </div>
                      </div>
                      <h5 className="fw-500 text-blue-1 mt-20">Beautiful spot with a lovely view</h5>
                      <p className="text-15 text-dark-1 mt-10">Eum eu sumo albucius perfecto, commodo
                        torquatos consequuntur pro ut, id posse splendide ius. Cu nisl putent
                        omittantur usu, mutat atomorum ex pro, ius nibh nonumy id. Nam at eius
                        dissentias disputando, molestie mnesarchum complectitur per te</p>
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
                          <img className="avatar w-60 h-60 rounded-full" src={avatar} alt="Pasha Joya" />
                        </div>
                        <div className="col-auto">
                          <div className="fw-500 lh-15">Pasha Joya</div>
                          <div className="text-14 text-light-1 lh-15">10/19/2023 02:00</div>
                        </div>
                      </div>
                      <h5 className="fw-500 text-blue-1 mt-20">Easy way to discover the city</h5>
                      <p className="text-15 text-dark-1 mt-10">Eum eu sumo albucius perfecto, commodo
                        torquatos consequuntur pro ut, id posse splendide ius. Cu nisl putent
                        omittantur usu, mutat atomorum ex pro, ius nibh nonumy id. Nam at eius
                        dissentias disputando, molestie mnesarchum complectitur per te</p>
                      <ul className="review-star d-flex text-blue-1">
                        <li className="me-1"><i className="fa fa-star" /></li>
                        <li className="me-1"><i className="fa fa-star" /></li>
                        <li className="me-1"><i className="fa fa-star" /></li>
                        <li className="me-1"><i className="fa fa-star" /></li>
                        <li className="me-1"><i className="fa fa-star" /></li>
                      </ul>
                    </div>
                    <div className="col-12 review-item">
                      <div className="row x-gap-20 y-gap-20 items-center">
                        <div className="col-auto">
                          <img className="avatar w-60 h-60 rounded-full" src={avatar} alt="fsdfsd fsdfdsf" />
                        </div>
                        <div className="col-auto">
                          <div className="fw-500 lh-15">fsdfsd fsdfdsf</div>
                          <div className="text-14 text-light-1 lh-15">10/19/2023 02:00</div>
                        </div>
                      </div>
                      <h5 className="fw-500 text-blue-1 mt-20">Easy way to discover the city</h5>
                      <p className="text-15 text-dark-1 mt-10">Eum eu sumo albucius perfecto, commodo
                        torquatos consequuntur pro ut, id posse splendide ius. Cu nisl putent
                        omittantur usu, mutat atomorum ex pro, ius nibh nonumy id. Nam at eius
                        dissentias disputando, molestie mnesarchum complectitur per te</p>
                      <ul className="review-star d-flex text-blue-1">
                        <li className="me-1"><i className="fa fa-star" /></li>
                        <li className="me-1"><i className="fa fa-star" /></li>
                        <li className="me-1"><i className="fa fa-star" /></li>
                        <li className="me-1"><i className="fa fa-star" /></li>
                        <li className="me-1"><i className="fa fa-star-o" /></li>
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
    </div>
    
  </div>
  
</div>

  </div>
  
  
  );
}
