// TourCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const TourCard = ({ tour }) => {
    return (

        <div>
          










<div className="col-lg-4 col-sm-6">
                      <div className="tourCard -type-1 rounded-4  item-loop-wrap">
                      <Link to="/TourDetails/${tour._id}">

                        <div className="tourCard__image">
                          <div className="cardImage ratio ratio-1:1">
                            <a >
                              <div className="cardImage__content">
                                <img
                                  className="img-responsive rounded-4 col-12 js-lazy lazy loaded"
                                  alt="Paris Vacation Travel "
                                  data-ll-status="loaded"
                                  src={tour.images} // Assuming 'image' is a property in your tour object
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
                            <div className="text-14 text-light-1">{tour.Duration}</div>
                          </div>
                          <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                            <a
                              className="text-dark-1-i"
                              href="/tour/paris-vacation-travel"
                            >
                              <span>{tour.tourName} </span>
                            </a>
                          </h4>
                          <p className="text-light-1 lh-14 text-14 mt-5">
                          {tour.location}
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
                                {/* from
                                <span className="text-14 text-red-1 line-through d-inline-flex">
                                  $850
                                </span> */}
                                <span className="fw-500 text-dark-1 d-inline-flex">
                                  ${tour.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div></Link>
                      </div>
                    </div>
        </div>
      
    );
};

export default TourCard;
