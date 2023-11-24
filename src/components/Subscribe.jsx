import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

function Subscribe() {



    return (
        <section className="layout-pt-md layout-pb-md mailchimp bg-dark-2 ">
            <div className="container">
                <div className="row y-gap-30 justify-between items-center">
                    <div className="col-auto">
                        <div className="row y-gap-20  flex-wrap items-center">
                            <div className="col-auto">
                            </div>
                            <div className="col-auto">
                                <h4 className="text-26 text-white fw-600">
                                    Your Travel Journey Starts Here
                                </h4>
                                <div className="text-white">
                                    Sign up and we'll send the best deals to you
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <form
                            className="subcribe-form bravo-subscribe-form bravo-form single-field -w-410 d-flex x-gap-10 y-gap-20"
                        >
                            <input
                                type="hidden"
                                name="_token"
                                defaultValue="liOncqo4GHIOoYTG3xxSE3JpQqWRSj2cMr7OE0SM"
                                className="has-value"
                            />
                            <div>
                                <input
                                    className="bg-white h-60 email-input has-value"
                                    type="text"
                                    name="email"
                                    placeholder="Your Email"
                                    defaultValue=""
                                />
                            </div>
                            <div>
                                <button className="button -md h-60 bg-blue-1 text-white">
                                    Subscribe <i className="fa fa-spinner fa-pulse fa-fw" />
                                </button>
                            </div>
                            <div className="form-mess" />
                        </form>
                    </div>
                </div>
            </div>
        </section>


    );

}
export default Subscribe;