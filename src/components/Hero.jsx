import home1 from "../assets/image/home1-bg.png"
import React, { useState } from 'react';

const Hero = () => {
  const heroStyle = {
    width: '1000px',
  };
  const [activeTab, setActiveTab] = useState('-tab-item-hotel'); // Default active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

// hotel component 
const [locationDropdownVisible, setLocationDropdownVisible] = useState(false);
const [dateDropdownVisible, setDateDropdownVisible] = useState(false);

const toggleLocationDropdown = () => {
  setLocationDropdownVisible(!locationDropdownVisible);
  // You can add logic to close other dropdowns when opening a new one if needed
  setDateDropdownVisible(false);
  setGuestsDropdownVisible(false);
};

const toggleDateDropdown = () => {
  setDateDropdownVisible(!dateDropdownVisible);
  setLocationDropdownVisible(false);
  setGuestsDropdownVisible(false);
};

// const toggleGuestsDropdown = () => {
//   setGuestsDropdownVisible(!guestsDropdownVisible);
//   setLocationDropdownVisible(false);
//   setDateDropdownVisible(false);
// };

const [guestsDropdownVisible, setGuestsDropdownVisible] = useState(false);

const toggleGuestsDropdown = () => {
  // This function should toggle the dropdown visibility
  setGuestsDropdownVisible(!guestsDropdownVisible);
};

  
  return (


    <div className="bravo_wrap overflow-hidden" style={{ marginTop: "-80px", marginLeft: "-80px" }}>

      <div className="page-template-content">
        <section
          data-anim-wrap=""
          className="form-search-all-service masthead -type-1 z-5 animated"
        >
          <div data-anim-child="fade" className="masthead__bg is-in-view" >
            <img
              src={home1}
              alt="image"
              className="js-lazy loaded"
              data-ll-status="loaded"
              style={{ width: "100%" }}
            />
          </div>

          <div className="container">
            <div className="row justify-center">
              <div className="col-auto">
                <div className="text-center">
                  <h1
                    data-anim-child="slide-up delay-4"
                    className="text-60 lg:text-40 md:text-30 text-white is-in-view"
                  >
                    Plan your Holiday with ReserveXP
                  </h1>
                  <p
                    data-anim-child="slide-up delay-5"
                    className="text-white mt-6 md:mt-10 is-in-view"
                  >
                    Discover amazing places at exclusive deals
                  </p>
                </div>
                <div
                  data-anim-child="slide-up delay-6"
                  className="tabs -underline mt-60 js-tabs is-in-view"
                >
                  <div className="tabs__controls d-flex x-gap-30 y-gap-20 justify-center sm:justify-start js-tabs-controls">
                    <div className="">
                      <button
                        className={`tabs__button text-15 fw-500 text-white pb-4 js-tabs-button ${activeTab === '-tab-item-hotel' ? 'is-tab-el-active' : ''
                          }`}
                        data-tab-target="-tab-item-hotel"
                        onClick={() => handleTabClick('-tab-item-hotel')}
                      >
                        Hotel
                      </button>
                      </div>
                    <div className="">
                      <button
                        className={`tabs__button text-15 fw-500 text-white pb-4 js-tabs-button ${activeTab === '-tab-item-space' ? 'is-tab-el-active' : ''
                          }`}
                        data-tab-target="-tab-item-space"
                        onClick={() => handleTabClick('-tab-item-space')}
                      >
                        Space
                      </button>
                    </div>
                    <div className="">
                      <button
                        className={`tabs__button text-15 fw-500 text-white pb-4 js-tabs-button ${activeTab === '-tab-item-tour' ? 'is-tab-el-active' : ''
                          }`} data-tab-target=".-tab-item-tour"
                        onClick={() => handleTabClick('-tab-item-tour')}

                      >
                        Tour
                      </button>
                    </div>
                    <div className="">
                      <button
                        className={`tabs__button text-15 fw-500 text-white pb-4 js-tabs-button ${activeTab === '-tab-item-car' ? 'is-tab-el-active' : ''
                          }`} data-tab-target=".-tab-item-car"
                          onClick={() => handleTabClick('-tab-item-car')}

                      >
                        Car
                      </button>
                    </div>
                    <div className="">
                      <button
                        className={`tabs__button text-15 fw-500 text-white pb-4 js-tabs-button ${activeTab === '-tab-item-event' ? 'is-tab-el-active' : ''
                          }`} data-tab-target=".-tab-item-event"
                          onClick={() => handleTabClick('-tab-item-event')}

                      >
                        Event
                      </button>
                    </div>
                    <div className="">
                      <button
                        className={`tabs__button text-15 fw-500 text-white pb-4 js-tabs-button ${activeTab === '-tab-item-flight' ? 'is-tab-el-active' : ''
                          }`} data-tab-target=".-tab-item-flight"
                          onClick={() => handleTabClick('-tab-item-flight')}

                      >
                        Flight
                      </button>
                    </div>
                    <div className="">
                      <button
                        className={`tabs__button text-15 fw-500 text-white pb-4 js-tabs-button ${activeTab === '-tab-item-boat' ? 'is-tab-el-active' : ''
                          }`} data-tab-target=".-tab-item-boat"
                          onClick={() => handleTabClick('-tab-item-boat')}

                      >
                        Boat
                      </button>
                    </div>
                  </div>
                  <div className="tabs__content mt-30 md:mt-20 js-tabs-content">
                    <div className="tabs__pane -tab-item-hotel  is-tab-el-active ">
                    {activeTab === '-tab-item-hotel' && (
                      <form
                        className="gotrip_form_search bravo_form_search bravo_form form  px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-100 form-search-all-service mainSearch -w-900 bg-white"
                        method="get"
                      >
                        <div className="field-items">
                          <div className="row w-100 m-0">
                            <div className="col-lg-4 align-self-center px-30 lg:py-20 lg:px-0">
                              <div className="searchMenu-loc js-form-dd js-liverSearch item">
                                <span className="clear-loc absolute bottom-0 text-12">
                                  <i className="icon-close" />
                                </span>
                                <div data-x-dd-click="searchMenu-loc">
                                  <h4 className="text-15 fw-500 ls-2 lh-16">
                                    Location
                                  </h4>
                                  <div className="text-15 text-light-1 ls-2 lh-16   ">
                                    <input
                                      type="hidden"
                                      name="location_id"
                                      className="js-search-get-id"
                                      defaultValue=""
                                    />
                                    <input
                                      type="text"
                                      autoComplete="off"
                                      readOnly=""
                                      className="smart-search-location parent_text js-search js-dd-focus"
                                      onClick={toggleLocationDropdown}
                                      placeholder="Where are you going?"
                                      defaultValue=""
                                      data-onload="Loading..."
                                      data-default='[{"id":11,"title":" Barcelona"}]'
                                    />
                                  </div>
                                </div>
                                {locationDropdownVisible && (
                                <div
                                  className="searchMenu-loc__field shadow-2 js-popup-window"
                                  data-x-dd="searchMenu-loc"
                                  data-x-dd-toggle="-is-active"
                                >
                                  <div className="bg-white px-30 py-30 sm:px-0 sm:py-15 rounded-4">
                                    <div className="y-gap-5 js-results">
                                      <div
                                        className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option"
                                        data-id={11}
                                      >
                                        <div className="d-flex align-items-center">
                                          <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                                          <div className="ml-10">
                                            <div className="text-15 lh-12 fw-500 js-search-option-target">
                                              Barcelona
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                )}
                              </div>
                            </div>
                            <div className="col-lg-4 align-self-center px-30 lg:py-20 lg:px-0">
                              <div className="searchMenu-date form-date-search-hotel position-relative item">
                                <div
                                  className="date-wrapper"
                                  data-x-dd-click="searchMenu-date"

                                >
                                  <h4 className="text-15 fw-500 ls-2 lh-16">
                                    Check In - Out
                                  </h4>
                                  <div className="text-14 text-light-1 ls-2 lh-16 check-in-out-render">
                                    <span className="js-first-date render check-in-render">
                                      10/10/2023
                                    </span>
                                    -
                                    <span className="js-last-date render check-out-render">
                                      10/11/2023
                                    </span>
                                  </div>
                                </div>
                                <input
                                  type="hidden"
                                  className="check-in-input has-value"
                                  defaultValue="10/10/2023"
                                  name="start"
                                />
                                <input
                                  type="hidden"
                                  className="check-out-input has-value"
                                  defaultValue="10/11/2023"
                                  name="end"
                                />
                                <input
                                  type="text"
                                  className="check-in-out absolute invisible has-value"
                                  name="date"
                                  defaultValue="2023-10-10 - 2023-10-11"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 align-self-center px-30 lg:py-20 lg:px-0">
      <div className="searchMenu-guests form-select-guests js-form-dd item">
        <div data-x-dd-click="searchMenu-guests" onClick={toggleGuestsDropdown}>
          <h4 className="text-15 fw-500 ls-2 lh-16">Guests</h4>
          <div className="text-15 text-light-1 ls-2 lh-16">
            <div className="render">
                                      <span className="adults">
                                        <span className="one ">1 Adult</span>
                                        <span
                                          className=" d-none  multi"
                                          data-html=":count Adults"
                                        >
                                          1 Adults
                                        </span>
                                      </span>
                                      -
                                      <span className="children">
                                        <span
                                          className="one "
                                          data-html=":count Child"
                                        >
                                          0 Child
                                        </span>
                                        <span
                                          className="multi  d-none "
                                          data-html=":count Children"
                                        >
                                          0 Children
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                {guestsDropdownVisible && (
          <div
            className="searchMenu-guests__field select-guests-dropdown shadow-2"
            data-x-dd="searchMenu-guests"
            data-x-dd-toggle="-is-active"
          >
                                  <div className="bg-white px-30 py-30 rounded-4">
                                    <div className="row y-gap-10 justify-between items-center">
                                      <div className="col-auto">
                                        <div className="text-15 fw-500">Rooms</div>
                                      </div>
                                      <div className="col-auto">
                                        <div className="d-flex items-center">
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-minus"
                                            data-input="room"
                                          >
                                            <i className="icon-minus text-12" />
                                          </span>
                                          <span className="flex-center size-20 ml-15 mr-15 count-display">
                                            <input
                                              type="number"
                                              name="room"
                                              defaultValue={1}
                                              min={1}
                                              className="has-value"
                                            />
                                          </span>
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-add"
                                            data-input="room"
                                          >
                                            <i className="icon-plus text-12" />
                                          </span>
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
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-minus"
                                            data-input="adults"
                                          >
                                            <i className="icon-minus text-12" />
                                          </span>
                                          <span className="flex-center size-20 ml-15 mr-15 count-display">
                                            <input
                                              type="number"
                                              name="adults"
                                              defaultValue={1}
                                              min={1}
                                              className="has-value"
                                            />
                                          </span>
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-add"
                                            data-input="adults"
                                          >
                                            <i className="icon-plus text-12" />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="border-top-light mt-24 mb-24" />
                                    <div className="row y-gap-10 justify-between items-center">
                                      <div className="col-auto">
                                        <div className="text-15 fw-500">
                                          Children
                                        </div>
                                      </div>
                                      <div className="col-auto">
                                        <div className="d-flex items-center">
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-minus"
                                            data-input="children"
                                          >
                                            <i className="icon-minus text-12" />
                                          </span>
                                          <span className="flex-center size-20 ml-15 mr-15 count-display">
                                            <input
                                              type="number"
                                              name="children"
                                              defaultValue={0}
                                              min={0}
                                              className="has-value"
                                            />
                                          </span>
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-add"
                                            data-input="children"
                                          >
                                            <i className="icon-plus text-12" />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="button-item">
                          <button
                            className="mainSearch__submit button  -dark-1 py-15 h-60 col-12 rounded-100 bg-blue-1 text-white w-100"
                            type="submit"
                          >
                            <span className="text-search">Search</span>
                          </button>
                        </div>
                      </form>
                    )}
                    </div>
                    <div className="tabs__pane -tab-item-space is-tab-el-active  ">
                    {activeTab === '-tab-item-space' && (
                      <form
                        className="gotrip_form_search bravo_form_search bravo_form form  px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-100 form-search-all-service mainSearch -w-900 bg-white"
                        method="get"
                      >
                        <div className="field-items">
                          <div className="row w-100 m-0">
                            <div className="col-lg-4 align-self-center px-30 lg:py-20 lg:px-0">
                              <div className="searchMenu-loc js-form-dd js-liverSearch item">
                                <span className="clear-loc absolute bottom-0 text-12">
                                  <i className="icon-close" />
                                </span>
                                <div data-x-dd-click="searchMenu-loc">
                                  <h4 className="text-15 fw-500 ls-2 lh-16">
                                    Location
                                  </h4>
                                  <div className="text-15 text-light-1 ls-2 lh-16   ">
                                    <input
                                      type="hidden"
                                      name="location_id"
                                      className="js-search-get-id"
                                      defaultValue=""
                                    />
                                    <input
                                      type="text"
                                      autoComplete="off"
                                      readOnly=""
                                      className="smart-search-location parent_text js-search js-dd-focus"
                                      placeholder="Where are you going?"
                                      defaultValue=""
                                      data-onload="Loading..."
                                      data-default='[{"id":11,"title":" Barcelona"}]'
                                    />
                                  </div>
                                </div>
                                <div
                                  className="searchMenu-loc__field shadow-2 js-popup-window"
                                  data-x-dd="searchMenu-loc"
                                  data-x-dd-toggle="-is-active"
                                >
                                  <div className="bg-white px-30 py-30 sm:px-0 sm:py-15 rounded-4">
                                    <div className="y-gap-5 js-results">
                                      <div
                                        className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option"
                                        data-id={11}
                                      >
                                        <div className="d-flex align-items-center">
                                          <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                                          <div className="ml-10">
                                            <div className="text-15 lh-12 fw-500 js-search-option-target">
                                              Barcelona
                                            </div>
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
                                <div
                                  className="date-wrapper"
                                  data-x-dd-click="searchMenu-date"
                                >
                                  <h4 className="text-15 fw-500 ls-2 lh-16">
                                    From - To
                                  </h4>
                                  <div className="text-14 text-light-1 ls-2 lh-16 check-in-out-render">
                                    <span className="js-first-date render check-in-render">
                                      10/10/2023
                                    </span>
                                    -
                                    <span className="js-last-date render check-out-render">
                                      10/11/2023
                                    </span>
                                  </div>
                                </div>
                                <input
                                  type="hidden"
                                  className="check-in-input has-value"
                                  defaultValue="10/10/2023"
                                  name="start"
                                />
                                <input
                                  type="hidden"
                                  className="check-out-input has-value"
                                  defaultValue="10/11/2023"
                                  name="end"
                                />
                                <input
                                  type="text"
                                  className="check-in-out absolute invisible has-value"
                                  name="date"
                                  defaultValue="2023-10-10 - 2023-10-11"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 align-self-center px-30 lg:py-20 lg:px-0">
                              <div className="searchMenu-guests form-select-guests js-form-dd item">
                                <div data-x-dd-click="searchMenu-guests">
                                  <h4 className="text-15 fw-500 ls-2 lh-16">
                                    Guests
                                  </h4>
                                  <div className="text-15 text-light-1 ls-2 lh-16">
                                    <div className="render">
                                      <span className="adults">
                                        <span className="one ">1 Adult</span>
                                        <span
                                          className=" d-none  multi"
                                          data-html=":count Adults"
                                        >
                                          1 Adults
                                        </span>
                                      </span>
                                      -
                                      <span className="children">
                                        <span
                                          className="one "
                                          data-html=":count Child"
                                        >
                                          0 Child
                                        </span>
                                        <span
                                          className="multi  d-none "
                                          data-html=":count Children"
                                        >
                                          0 Children
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                {guestsDropdownVisible && (
                                <div
                                  className="searchMenu-guests__field select-guests-dropdown shadow-2"
                                  data-x-dd="searchMenu-guests"
                                  data-x-dd-toggle="-is-active"
                                >
                                  <div className="bg-white px-30 py-30 rounded-4">
                                    <div className="row y-gap-10 justify-between items-center">
                                      <div className="col-auto">
                                        <div className="text-15 fw-500">Rooms</div>
                                      </div>
                                      <div className="col-auto">
                                        <div className="d-flex items-center">
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-minus"
                                            data-input="room"
                                          >
                                            <i className="icon-minus text-12" />
                                          </span>
                                          <span className="flex-center size-20 ml-15 mr-15 count-display">
                                            <input
                                              type="number"
                                              name="room"
                                              defaultValue={1}
                                              min={1}
                                              className="has-value"
                                            />
                                          </span>
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-add"
                                            data-input="room"
                                          >
                                            <i className="icon-plus text-12" />
                                          </span>
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
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-minus"
                                            data-input="adults"
                                          >
                                            <i className="icon-minus text-12" />
                                          </span>
                                          <span className="flex-center size-20 ml-15 mr-15 count-display">
                                            <input
                                              type="number"
                                              name="adults"
                                              defaultValue={1}
                                              min={1}
                                              className="has-value"
                                            />
                                          </span>
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-add"
                                            data-input="adults"
                                          >
                                            <i className="icon-plus text-12" />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="border-top-light mt-24 mb-24" />
                                    <div className="row y-gap-10 justify-between items-center">
                                      <div className="col-auto">
                                        <div className="text-15 fw-500">
                                          Children
                                        </div>
                                      </div>
                                      <div className="col-auto">
                                        <div className="d-flex items-center">
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-minus"
                                            data-input="children"
                                          >
                                            <i className="icon-minus text-12" />
                                          </span>
                                          <span className="flex-center size-20 ml-15 mr-15 count-display">
                                            <input
                                              type="number"
                                              name="children"
                                              defaultValue={0}
                                              min={0}
                                              className="has-value"
                                            />
                                          </span>
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-add"
                                            data-input="children"
                                          >
                                            <i className="icon-plus text-12" />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="button-item">
                          <button
                            className="mainSearch__submit button  -dark-1 py-15 h-60 col-12 rounded-100 bg-blue-1 text-white w-100"
                            type="submit"
                          >
                            <span className="text-search">Search</span>
                          </button>
                        </div>
                      </form>
                    )}
                    </div>
                    <div className="tabs__pane -tab-item-tour is-tab-el-active ">
                    {activeTab === '-tab-item-tour' && (
                      <form
                        className="gotrip_form_search bravo_form_search bravo_form form  px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-100 form-search-all-service mainSearch -w-900 bg-white"
                        method="get"
                      >
                        <div className="field-items">
                          <div className="row w-100 m-0">
                            <div className="col-lg-6 align-self-center px-30 lg:py-20 lg:px-0">
                              <div className="searchMenu-loc js-form-dd js-liverSearch item">
                                <span className="clear-loc absolute bottom-0 text-12">
                                  <i className="icon-close" />
                                </span>
                                <div data-x-dd-click="searchMenu-loc">
                                  <h4 className="text-15 fw-500 ls-2 lh-16">
                                    Location
                                  </h4>
                                  <div className="text-15 text-light-1 ls-2 lh-16   ">
                                    <input
                                      type="hidden"
                                      name="location_id"
                                      className="js-search-get-id"
                                      defaultValue=""
                                    />
                                    <input
                                      type="text"
                                      autoComplete="off"
                                      readOnly=""
                                      className="smart-search-location parent_text js-search js-dd-focus"
                                      placeholder="Where are you going?"
                                      defaultValue=""
                                      data-onload="Loading..."
                                      data-default='[{"id":11,"title":" Barcelona"}]'
                                    />
                                  </div>
                                </div>
                                <div
                                  className="searchMenu-loc__field shadow-2 js-popup-window"
                                  data-x-dd="searchMenu-loc"
                                  data-x-dd-toggle="-is-active"
                                >
                                  <div className="bg-white px-30 py-30 sm:px-0 sm:py-15 rounded-4">
                                    <div className="y-gap-5 js-results">
                                      <div
                                        className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option"
                                        data-id={11}
                                      >
                                        <div className="d-flex align-items-center">
                                          <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                                          <div className="ml-10">
                                            <div className="text-15 lh-12 fw-500 js-search-option-target">
                                              Barcelona
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 align-self-center px-30 lg:py-20 lg:px-0">
                              <div className="searchMenu-date form-date-search-hotel position-relative item">
                                <div
                                  className="date-wrapper"
                                  data-x-dd-click="searchMenu-date"
                                >
                                  <h4 className="text-15 fw-500 ls-2 lh-16">
                                    From - To
                                  </h4>
                                  <div className="text-14 text-light-1 ls-2 lh-16 check-in-out-render">
                                    <span className="js-first-date render check-in-render">
                                      10/10/2023
                                    </span>
                                    -
                                    <span className="js-last-date render check-out-render">
                                      10/11/2023
                                    </span>
                                  </div>
                                </div>
                                <input
                                  type="hidden"
                                  className="check-in-input has-value"
                                  defaultValue="10/10/2023"
                                  name="start"
                                />
                                <input
                                  type="hidden"
                                  className="check-out-input has-value"
                                  defaultValue="10/11/2023"
                                  name="end"
                                />
                                <input
                                  type="text"
                                  className="check-in-out absolute invisible has-value"
                                  name="date"
                                  defaultValue="2023-10-10 - 2023-10-11"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="button-item">
                          <button
                            className="mainSearch__submit button  -dark-1 py-15 h-60 col-12 rounded-100 bg-blue-1 text-white w-100"
                            type="submit"
                          >
                            <i className="icon-search text-20 mr-10" />
                            <span className="text-search">Search</span>
                          </button>
                        </div>
                      </form>
                    )}
                    </div>
                    <div className="tabs__pane -tab-item-car is-tab-el-active ">
                    {activeTab === '-tab-item-car' && (
                      <form
                        className="gotrip_form_search bravo_form_search bravo_form form-search-all-service form  px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-100 form-search-all-service mainSearch -w-900 bg-white"
                        method="get"
                      >
                        <div className="field-items">
                          <div className="row w-100 m-0">
                            <div className="col-lg-6 align-self-center px-30 lg:py-20 lg:px-0">
                              <div className="searchMenu-loc js-form-dd js-liverSearch item">
                                <span className="clear-loc absolute bottom-0 text-12">
                                  <i className="icon-close" />
                                </span>
                                <div data-x-dd-click="searchMenu-loc">
                                  <h4 className="text-15 fw-500 ls-2 lh-16">
                                    Location
                                  </h4>
                                  <div className="text-15 text-light-1 ls-2 lh-16   ">
                                    <input
                                      type="hidden"
                                      name="location_id"
                                      className="js-search-get-id"
                                      defaultValue=""
                                    />
                                    <input
                                      type="text"
                                      autoComplete="off"
                                      readOnly=""
                                      className="smart-search-location parent_text js-search js-dd-focus"
                                      placeholder="Where are you going?"
                                      defaultValue=""
                                      data-onload="Loading..."
                                      data-default='[{"id":11,"title":" Barcelona"}]'
                                    />
                                  </div>
                                </div>
                                <div
                                  className="searchMenu-loc__field shadow-2 js-popup-window"
                                  data-x-dd="searchMenu-loc"
                                  data-x-dd-toggle="-is-active"
                                >
                                  <div className="bg-white px-30 py-30 sm:px-0 sm:py-15 rounded-4">
                                    <div className="y-gap-5 js-results">
                                      <div
                                        className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option"
                                        data-id={11}
                                      >
                                        <div className="d-flex align-items-center">
                                          <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                                          <div className="ml-10">
                                            <div className="text-15 lh-12 fw-500 js-search-option-target">
                                              Barcelona
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 align-self-center px-30 lg:py-20 lg:px-0">
                              <div className="searchMenu-date form-date-search-hotel position-relative item">
                                <div
                                  className="date-wrapper"
                                  data-x-dd-click="searchMenu-date"
                                >
                                  <h4 className="text-15 fw-500 ls-2 lh-16">
                                    From - To
                                  </h4>
                                  <div className="text-14 text-light-1 ls-2 lh-16 check-in-out-render">
                                    <span className="js-first-date render check-in-render">
                                      10/10/2023
                                    </span>
                                    -
                                    <span className="js-last-date render check-out-render">
                                      10/11/2023
                                    </span>
                                  </div>
                                </div>
                                <input
                                  type="hidden"
                                  className="check-in-input has-value"
                                  defaultValue="10/10/2023"
                                  name="start"
                                />
                                <input
                                  type="hidden"
                                  className="check-out-input has-value"
                                  defaultValue="10/11/2023"
                                  name="end"
                                />
                                <input
                                  type="text"
                                  className="check-in-out absolute invisible has-value"
                                  name="date"
                                  defaultValue="2023-10-10 - 2023-10-11"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="button-item">
                          <button
                            className="mainSearch__submit button  -dark-1 py-15 h-60 col-12 rounded-100 bg-blue-1 text-white w-100"
                            type="submit"
                          >
                            <i className="icon-search text-20 mr-10" />
                            <span className="text-search">Search</span>
                          </button>
                        </div>
                      </form>
                    )}
                    </div>
                    <div className="tabs__pane -tab-item-event is-tab-el-active ">
                    {activeTab === '-tab-item-event' && (
                      <form
                        className="gotrip_form_search bravo_form_search bravo_form form  px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-100 form-search-all-service mainSearch -w-900 bg-white"
                        method="get"
                      >
                        <div className="field-items">
                          <div className="row w-100 m-0">
                            <div className="col-lg-6 align-self-center px-30 lg:py-20 lg:px-0">
                              <div className="searchMenu-loc js-form-dd js-liverSearch item">
                                <span className="clear-loc absolute bottom-0 text-12">
                                  <i className="icon-close" />
                                </span>
                                <div data-x-dd-click="searchMenu-loc">
                                  <h4 className="text-15 fw-500 ls-2 lh-16">
                                    Location
                                  </h4>
                                  <div className="text-15 text-light-1 ls-2 lh-16   ">
                                    <input
                                      type="hidden"
                                      name="location_id"
                                      className="js-search-get-id"
                                      defaultValue=""
                                    />
                                    <input
                                      type="text"
                                      autoComplete="off"
                                      readOnly=""
                                      className="smart-search-location parent_text js-search js-dd-focus"
                                      placeholder="Where are you going?"
                                      defaultValue=""
                                      data-onload="Loading..."
                                      data-default='[{"id":11,"title":" Barcelona"}]'
                                    />
                                  </div>
                                </div>
                                <div
                                  className="searchMenu-loc__field shadow-2 js-popup-window"
                                  data-x-dd="searchMenu-loc"
                                  data-x-dd-toggle="-is-active"
                                >
                                  <div className="bg-white px-30 py-30 sm:px-0 sm:py-15 rounded-4">
                                    <div className="y-gap-5 js-results">
                                      <div
                                        className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option"
                                        data-id={11}
                                      >
                                        <div className="d-flex align-items-center">
                                          <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                                          <div className="ml-10">
                                            <div className="text-15 lh-12 fw-500 js-search-option-target">
                                              Barcelona
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 align-self-center px-30 lg:py-20 lg:px-0">
                              <div className="searchMenu-date form-date-search-hotel position-relative item">
                                <div
                                  className="date-wrapper"
                                  data-x-dd-click="searchMenu-date"
                                >
                                  <h4 className="text-15 fw-500 ls-2 lh-16">
                                    From - To
                                  </h4>
                                  <div className="text-14 text-light-1 ls-2 lh-16 check-in-out-render">
                                    <span className="js-first-date render check-in-render">
                                      10/10/2023
                                    </span>
                                    -
                                    <span className="js-last-date render check-out-render">
                                      10/11/2023
                                    </span>
                                  </div>
                                </div>
                                <input
                                  type="hidden"
                                  className="check-in-input has-value"
                                  defaultValue="10/10/2023"
                                  name="start"
                                />
                                <input
                                  type="hidden"
                                  className="check-out-input has-value"
                                  defaultValue="10/11/2023"
                                  name="end"
                                />
                                <input
                                  type="text"
                                  className="check-in-out absolute invisible has-value"
                                  name="date"
                                  defaultValue="2023-10-10 - 2023-10-11"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="button-item">
                          <button
                            className="mainSearch__submit button  -dark-1 py-15 h-60 col-12 rounded-100 bg-blue-1 text-white w-100"
                            type="submit"
                          >
                            <i className="icon-search text-20 mr-10" />
                            <span className="text-search">Search</span>
                          </button>
                        </div>
                      </form>
                    )}
                    </div>
                    <div className="tabs__pane -tab-item-flight is-tab-el-active ">
                    {activeTab === '-tab-item-flight' && (
                      <form
                        className="gotrip_form_search bravo_form_search bravo_form form  px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-100 form-search-all-service mainSearch -w-900 bg-white"
                        method="get"
                      >
                        <div className="field-items">
                          <div className="row w-100 m-0">
                            <div className="col-lg-3 align-self-center px-30 lg:py-20 lg:px-0">
                              <div className="searchMenu-loc js-form-dd js-liverSearch item">
                                <span className="clear-loc absolute bottom-0 text-12">
                                  <i className="icon-close" />
                                </span>
                                <div data-x-dd-click="searchMenu-loc">
                                  <h4 className="text-15 fw-500 ls-2 lh-16">
                                    From where
                                  </h4>
                                  <div className="text-15 text-light-1 ls-2 lh-16   ">
                                    <input
                                      type="hidden"
                                      name="from_where"
                                      className="js-search-get-id"
                                      defaultValue=""
                                    />
                                    <input
                                      type="text"
                                      autoComplete="off"
                                      readOnly=""
                                      className="smart-search-location parent_text js-search js-dd-focus"
                                      placeholder="Where are you going?"
                                      defaultValue=""
                                      data-onload="Loading..."
                                      data-default='[{"id":11,"title":" Barcelona"}]'
                                    />
                                  </div>
                                </div>
                                <div
                                  className="searchMenu-loc__field shadow-2 js-popup-window"
                                  data-x-dd="searchMenu-loc"
                                  data-x-dd-toggle="-is-active"
                                >
                                  <div className="bg-white px-30 py-30 sm:px-0 sm:py-15 rounded-4">
                                    <div className="y-gap-5 js-results">
                                      <div
                                        className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option"
                                        data-id={11}
                                      >
                                        <div className="d-flex align-items-center">
                                          <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                                          <div className="ml-10">
                                            <div className="text-15 lh-12 fw-500 js-search-option-target">
                                              Barcelona
                                            </div>
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
                                <span className="clear-loc absolute bottom-0 text-12">
                                  <i className="icon-close" />
                                </span>
                                <div data-x-dd-click="searchMenu-loc">
                                  <h4 className="text-15 fw-500 ls-2 lh-16">
                                    To where
                                  </h4>
                                  <div className="text-15 text-light-1 ls-2 lh-16   ">
                                    <input
                                      type="hidden"
                                      name="to_where"
                                      className="js-search-get-id"
                                      defaultValue=""
                                    />
                                    <input
                                      type="text"
                                      autoComplete="off"
                                      readOnly=""
                                      className="smart-search-location parent_text js-search js-dd-focus"
                                      placeholder="Where are you going?"
                                      defaultValue=""
                                      data-onload="Loading..."
                                      data-default='[{"id":11,"title":" Barcelona"}]'
                                    />
                                  </div>
                                </div>
                                <div
                                  className="searchMenu-loc__field shadow-2 js-popup-window"
                                  data-x-dd="searchMenu-loc"
                                  data-x-dd-toggle="-is-active"
                                >
                                  <div className="bg-white px-30 py-30 sm:px-0 sm:py-15 rounded-4">
                                    <div className="y-gap-5 js-results">
                                      <div
                                        className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option"
                                        data-id={11}
                                      >
                                        <div className="d-flex align-items-center">
                                          <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                                          <div className="ml-10">
                                            <div className="text-15 lh-12 fw-500 js-search-option-target">
                                              Barcelona
                                            </div>
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
                                <div
                                  className="date-wrapper"
                                  data-x-dd-click="searchMenu-date"
                                >
                                  <h4 className="text-15 fw-500 ls-2 lh-16">
                                    Depart
                                  </h4>
                                  <div className="text-14 text-light-1 ls-2 lh-16 check-in-out-render">
                                    <span className="js-first-date render check-in-render">
                                      10/10/2023
                                    </span>
                                    -
                                    <span className="js-last-date render check-out-render">
                                      10/11/2023
                                    </span>
                                  </div>
                                </div>
                                <input
                                  type="hidden"
                                  className="check-in-input has-value"
                                  defaultValue="10/10/2023"
                                  name="start"
                                />
                                <input
                                  type="hidden"
                                  className="check-out-input has-value"
                                  defaultValue="10/11/2023"
                                  name="end"
                                />
                                <input
                                  type="text"
                                  className="check-in-out absolute invisible has-value"
                                  name="date"
                                  defaultValue="2023-10-10 - 2023-10-11"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 align-self-center px-30 lg:py-20 lg:px-0">
                              <div className="searchMenu-guests js-form-dd form-select-seat-type item">
                                <div
                                  data-x-dd-click="searchMenu-guests"
                                  className="overflow-hidden seat-input"
                                >
                                  <h4 className="text-15 fw-500 ls-2 lh-16">
                                    Travelers
                                  </h4>
                                  <div className="text-15 text-light-1 ls-2 lh-16">
                                    <div className="render text-13">
                                      <span className="" id="seat_type_vip_render">
                                        <span className="one ">0 Vip</span>
                                        <span
                                          className=" d-none  multi"
                                          data-html=":count Vip"
                                        >
                                          0Vip
                                        </span>
                                      </span>
                                      <span className="" id="seat_type_eco_render">
                                        <span className="one ">0 Economy</span>
                                        <span
                                          className=" d-none  multi"
                                          data-html=":count Economy"
                                        >
                                          0Economy
                                        </span>
                                      </span>
                                      <span
                                        className=""
                                        id="seat_type_premium_render"
                                      >
                                        <span className="one ">0 Premium</span>
                                        <span
                                          className=" d-none  multi"
                                          data-html=":count Premium"
                                        >
                                          0Premium
                                        </span>
                                      </span>
                                      <span
                                        className=""
                                        id="seat_type_business_render"
                                      >
                                        <span className="one ">0 Business</span>
                                        <span
                                          className=" d-none  multi"
                                          data-html=":count Business"
                                        >
                                          0Business
                                        </span>
                                      </span>
                                      <span
                                        className=""
                                        id="seat_type_fist_class_render"
                                      >
                                        <span className="one ">0 First Class</span>
                                        <span
                                          className=" d-none  multi"
                                          data-html=":count First Class"
                                        >
                                          0First Class
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="searchMenu-guests__field select-seat-type-dropdown shadow-2"
                                  data-x-dd="searchMenu-guests"
                                  data-x-dd-toggle="-is-active"
                                >
                                  <div className="bg-white px-30 py-30 rounded-4">
                                    <div className="row y-gap-10 justify-between items-center">
                                      <div className="col-auto">
                                        <div className="text-15 fw-500">
                                          Adults Vip
                                        </div>
                                      </div>
                                      <div className="col-auto">
                                        <div className="d-flex items-center">
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-minus"
                                            data-input="seat_type_vip"
                                            data-input-attr="id"
                                          >
                                            <i className="icon-minus text-12" />
                                          </span>
                                          <span className="flex-center size-20 ml-15 mr-15 count-display">
                                            <input
                                              id="seat_type_vip"
                                              type="number"
                                              name="seat_type[vip]"
                                              defaultValue={0}
                                              min={0}
                                              className="has-value"
                                            />
                                          </span>
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-add"
                                            data-input="seat_type_vip"
                                            data-input-attr="id"
                                          >
                                            <i className="icon-plus text-12" />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row y-gap-10 justify-between items-center">
                                      <div className="col-auto">
                                        <div className="text-15 fw-500">
                                          Adults Economy
                                        </div>
                                      </div>
                                      <div className="col-auto">
                                        <div className="d-flex items-center">
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-minus"
                                            data-input="seat_type_eco"
                                            data-input-attr="id"
                                          >
                                            <i className="icon-minus text-12" />
                                          </span>
                                          <span className="flex-center size-20 ml-15 mr-15 count-display">
                                            <input
                                              id="seat_type_eco"
                                              type="number"
                                              name="seat_type[eco]"
                                              defaultValue={0}
                                              min={0}
                                              className="has-value"
                                            />
                                          </span>
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-add"
                                            data-input="seat_type_eco"
                                            data-input-attr="id"
                                          >
                                            <i className="icon-plus text-12" />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row y-gap-10 justify-between items-center">
                                      <div className="col-auto">
                                        <div className="text-15 fw-500">
                                          Adults Premium
                                        </div>
                                      </div>
                                      <div className="col-auto">
                                        <div className="d-flex items-center">
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-minus"
                                            data-input="seat_type_premium"
                                            data-input-attr="id"
                                          >
                                            <i className="icon-minus text-12" />
                                          </span>
                                          <span className="flex-center size-20 ml-15 mr-15 count-display">
                                            <input
                                              id="seat_type_premium"
                                              type="number"
                                              name="seat_type[premium]"
                                              defaultValue={0}
                                              min={0}
                                              className="has-value"
                                            />
                                          </span>
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-add"
                                            data-input="seat_type_premium"
                                            data-input-attr="id"
                                          >
                                            <i className="icon-plus text-12" />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row y-gap-10 justify-between items-center">
                                      <div className="col-auto">
                                        <div className="text-15 fw-500">
                                          Adults Business
                                        </div>
                                      </div>
                                      <div className="col-auto">
                                        <div className="d-flex items-center">
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-minus"
                                            data-input="seat_type_business"
                                            data-input-attr="id"
                                          >
                                            <i className="icon-minus text-12" />
                                          </span>
                                          <span className="flex-center size-20 ml-15 mr-15 count-display">
                                            <input
                                              id="seat_type_business"
                                              type="number"
                                              name="seat_type[business]"
                                              defaultValue={0}
                                              min={0}
                                              className="has-value"
                                            />
                                          </span>
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-add"
                                            data-input="seat_type_business"
                                            data-input-attr="id"
                                          >
                                            <i className="icon-plus text-12" />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row y-gap-10 justify-between items-center">
                                      <div className="col-auto">
                                        <div className="text-15 fw-500">
                                          Adults First Class
                                        </div>
                                      </div>
                                      <div className="col-auto">
                                        <div className="d-flex items-center">
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-minus"
                                            data-input="seat_type_fist_class"
                                            data-input-attr="id"
                                          >
                                            <i className="icon-minus text-12" />
                                          </span>
                                          <span className="flex-center size-20 ml-15 mr-15 count-display">
                                            <input
                                              id="seat_type_fist_class"
                                              type="number"
                                              name="seat_type[fist_class]"
                                              defaultValue={0}
                                              min={0}
                                              className="has-value"
                                            />
                                          </span>
                                          <span
                                            className="button -outline-blue-1 text-blue-1 size-38 rounded-4 btn-add"
                                            data-input="seat_type_fist_class"
                                            data-input-attr="id"
                                          >
                                            <i className="icon-plus text-12" />
                                          </span>
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
                          <button
                            className="mainSearch__submit button  -dark-1 py-15 h-60 col-12 rounded-100 bg-blue-1 text-white w-100"
                            type="submit"
                          >
                            <i className="icon-search text-20 mr-10" />
                            <span className="text-search">Search</span>
                          </button>
                        </div>
                      </form>
                    )}
                    </div>
                    <div className="tabs__pane -tab-item-boat is-tab-el-active ">
                    {activeTab === '-tab-item-boat' && (
                      <form
                        className="gotrip_form_search bravo_form bravo_form_search form-search-all-service form  px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-100 form-search-all-service mainSearch -w-900 bg-white"
                        method="get"
                      >
                        <div className="field-items">
                          <div className="row w-100 m-0">
                            <div className="col-lg-6 align-self-center px-30 lg:py-20 lg:px-0">
                              <div className="searchMenu-loc js-form-dd js-liverSearch item">
                                <span className="clear-loc absolute bottom-0 text-12">
                                  <i className="icon-close" />
                                </span>
                                <div data-x-dd-click="searchMenu-loc">
                                  <h4 className="text-15 fw-500 ls-2 lh-16">
                                    Location
                                  </h4>
                                  <div className="text-15 text-light-1 ls-2 lh-16   ">
                                    <input
                                      type="hidden"
                                      name="location_id"
                                      className="js-search-get-id"
                                      defaultValue=""
                                    />
                                    <input
                                      type="text"
                                      autoComplete="off"
                                      readOnly=""
                                      className="smart-search-location parent_text js-search js-dd-focus"
                                      placeholder="Where are you going?"
                                      defaultValue=""
                                      data-onload="Loading..."
                                      data-default='[{"id":11,"title":" Barcelona"}]'
                                    />
                                  </div>
                                </div>
                                <div
                                  className="searchMenu-loc__field shadow-2 js-popup-window"
                                  data-x-dd="searchMenu-loc"
                                  data-x-dd-toggle="-is-active"
                                >
                                  <div className="bg-white px-30 py-30 sm:px-0 sm:py-15 rounded-4">
                                    <div className="y-gap-5 js-results">
                                      <div
                                        className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option"
                                        data-id={11}
                                      >
                                        <div className="d-flex align-items-center">
                                          <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                                          <div className="ml-10">
                                            <div className="text-15 lh-12 fw-500 js-search-option-target">
                                              Barcelona
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 align-self-center px-30 lg:py-20 lg:px-0">
                              <div className="searchMenu-date form-date-search-hotel position-relative item">
                                <div
                                  className="date-wrapper"
                                  data-x-dd-click="searchMenu-date"
                                >
                                  <h4 className="text-15 fw-500 ls-2 lh-16">
                                    Start Date
                                  </h4>
                                  <div className="text-14 text-light-1 ls-2 lh-16 check-in-out-render">
                                    <span className="js-first-date render check-in-render">
                                      10/10/2023
                                    </span>
                                    -
                                    <span className="js-last-date render check-out-render">
                                      10/11/2023
                                    </span>
                                  </div>
                                </div>
                                <input
                                  type="hidden"
                                  className="check-in-input has-value"
                                  defaultValue="10/10/2023"
                                  name="start"
                                />
                                <input
                                  type="hidden"
                                  className="check-out-input has-value"
                                  defaultValue="10/11/2023"
                                  name="end"
                                />
                                <input
                                  type="text"
                                  className="check-in-out absolute invisible has-value"
                                  name="date"
                                  defaultValue="2023-10-10 - 2023-10-11"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="button-item">
                          <button
                            className="mainSearch__submit button  -dark-1 py-15 h-60 col-12 rounded-100 bg-blue-1 text-white w-100"
                            type="submit"
                          >
                            <i className="icon-search text-20 mr-10" />
                            <span className="text-search">Search</span>
                          </button>
                        </div>
                      </form>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="layout-pt-lg layout-pb-md bravo-list-locations  style_1 ">
          <div className="container">
            <div
              data-anim="slide-up delay-1"
              className="row y-gap-20 justify-between items-end is-in-view"
            >
              <div className="col-auto">
                <div className="sectionTitle -md"></div>
              </div>
            </div>
          </div>
        </section>
        <div className="bravo-offer ">
          <div data-anim-wrap="" className="container animated">
            <div className="row y-gap-20"></div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Hero;
