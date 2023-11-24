// HotelCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
    return (
        <div className="col-lg-4 col-sm-6" style={{marginTop: "50px"}}>
            <div className="hotelsCard -type-1 item-loop item-loop-wrap">
                <Link to={`/hotel/${hotel._id}`}>
                    <div className="hotelsCard__image">
                        <div className="cardImage ratio ratio-1:1">
                            <a>
                                <div className="cardImage__content">
                                    <img
                                        className="img-responsive rounded-4 col-12 js-lazy lazy loaded"
                                        alt={hotel.hotelName}
                                        data-ll-status="loaded"
                                        src={hotel.images} // Assuming 'image' is a property in your hotel object
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </Link>
                <Link to={`/hotel/${hotel._id}`}>
                    <div className="hotelsCard__content mt-10">
                        <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                            <a className="text-dark-1-i">
                                <span>{hotel.hotelName}</span>
                            </a>
                        </h4>
                        <p className="text-light-1 lh-14 text-14 mt-5">{hotel.location}</p>

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
                                    <div className="text-22 lh-12 fw-600 text-blue-1">${hotel.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HotelCard;
