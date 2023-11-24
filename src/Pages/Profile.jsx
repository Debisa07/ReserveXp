import React from "react";
import avatar from "../assets/image/avatar.png"
import 'font-awesome/css/font-awesome.min.css';
import { Link,  } from 'react-router-dom';

export default function profile() {
 
  return (
    <>
    <div className="bravo_wrap">
      <div className="header-margin" />
      <div
        className="dashboard bravo_user_profile p-0"
        data-x="dashboard"
        data-x-toggle="-is-sidebar-open"
      >
        <div className="dashboard__sidebar bg-white scroll-bar-1">
          <div className="sidebar__user text-center mb-20">
            <div className="logo">
              <div
                className="avatar avatar-cover"
                style={{ backgroundImage: `url(${avatar})` }}
              />
            </div>
            <div className="user-profile-info">
              <div className="info-new">
                <span className="role-name badge badge-info">customer</span>
                <h5 className="text-16">jon ex</h5>
                <p className="text-10 mb-0">Member Since Oct 2023</p>
              </div>
            </div>
            <div className="user__profile-plan mt-10 text-center">
              <a
                className="become-vendor button -sm -dark-1 bg-blue-1 text-white"
                  >
                Become a vendor
              </a>
            </div>
          </div>
          <div className="sidebar -dashboard">
            <div className="sidebar__item" data-position={20}>
              <div className="accordion -db-sidebar js-accordion">
                <div className="accordion__item">
                  <div className="accordion__button">
                    <div className="sidebar__button  col-12 d-flex items-center justify-between">
                      <div className="d-flex items-center text-15 lh-1 fw-500">
                      <Link className="links" to="/dashboard">

                        <a
                          
                          className="icon text-center mr-15 text-24"
                        >
                          <i className="fa fa-clock-o" />
                        </a>
                        <a >
                          Booking History
                        </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar__item" data-position={21}>
              <div className="accordion -db-sidebar js-accordion">
                <div className="accordion__item">
                  <div className="accordion__button">
                    <div className="sidebar__button  col-12 d-flex items-center justify-between">
                      <div className="d-flex items-center text-15 lh-1 fw-500">
                      <Link className="links" to="/wishlist">

                        <a
                          className="icon text-center mr-15 text-24"
                        >
                          <i className="fa fa-heart-o" />
                        </a>
                        <a >
                          Wishlist
                        </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar__item" data-position={85}>
              <div className="accordion -db-sidebar js-accordion">
                <div className="accordion__item">
                  <div className="accordion__button">
                    <div className="sidebar__button  col-12 d-flex items-center justify-between">
                      <div className="d-flex items-center text-15 lh-1 fw-500">
                      <Link className="links" to="/verification">

                        <a
                          className="icon text-center mr-15 text-24"
                        >
                          <i className="fa fa-handshake-o" />
                        </a>
                        <a >
                          Verifications
                        </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar__item" data-position={95}>
              <div className="accordion -db-sidebar js-accordion">
                <div className="accordion__item">
                  <div className="accordion__button">
                    <div className="sidebar__button active -is-active text-blue-1 col-12 d-flex items-center justify-between">
                      <div className="d-flex items-center text-15 lh-1 fw-500">
                      <Link className="links" to="/profile">

                        <a href="" className="icon text-center mr-15 text-24">
                          <i className="fa fa-cogs" />
                        </a>
                        <a href="">My Profile</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
           
            <div className="sidebar__item ">
            <Link to="/">

              <a
                className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
              >
                <i className="fa fa-long-arrow-left icon text-center mr-15 text-24" />{" "}
                Back to Homepage
              </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="dashboard__main">
          <div className="dashboard__content bg-light-2">
            <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-auto">
                <h1 className="text-30 lh-14 fw-600">Settings</h1>
                <div className="text-15 text-light-1">
                  Lorem ipsum dolor sit amet, consectetur.
                </div>
              </div>
              <div className="col-auto" />
            </div>
            <form
              method="post"
              className="input-has-icon"
            >
              <input
                type="hidden"
                name="_token"
                defaultValue="4m2TEK7bhKJbEO4WHg4j1Mo4tT0dlgSyp7h5Fl6f"
                className="has-value"
              />
              <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                <div className="tabs -underline-2 js-tabs">
                  <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
                    <div className="col-auto">
                      <span
                        className="tabs__button cursor-pointer text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button is-tab-el-active"
                        data-tab-target=".-tab-item-1"
                      >
                        Personal Information
                      </span>
                    </div>
                    <div className="col-auto">
                      <span
                        className="tabs__button cursor-pointer text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button "
                        data-tab-target=".-tab-item-2"
                      >
                        Location Information
                      </span>
                    </div>
                    <div className="col-auto">
                      <a
                        className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0"
                      >
                        Change Password
                      </a>
                    </div>
                  </div>
                  <div className="tabs__content pt-30 js-tabs-content">
                    <div className="tabs__pane -tab-item-1 is-tab-el-active row">
                      <div className="row y-gap-30 items-center upload-btn-wrapper">
                        <div className="col-auto">
                          <div className="d-flex ratio ratio-1:1 w-200">
                            <img
                              className="image-demo img-ratio rounded-4"
                              src={avatar}
                            />
                          </div>
                        </div>
                        <div className="col-auto">
                          <h4 className="text-16 fw-500">Your avatar</h4>
                          <div className="text-14 mt-5">
                            PNG or JPG no bigger than 800px wide and tall.
                          </div>
                          <div className="d-inline-block mt-15">
                            <button className="button h-50 px-24 -dark-1 bg-blue-1 text-white btn-file">
                              <input type="file" className="has-value" />
                            </button>
                          </div>
                          <input
                            type="hidden"
                            data-error="Error upload..."
                            data-loading="Loading..."
                            className="form-control text-view has-value"
                            readOnly=""
                            defaultValue={avatar}
                          />
                          <input
                            type="hidden"
                            className="form-control"
                            name="avatar_id"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="border-top-light mt-30 mb-30" />
                      <div className="col-xl-9">
                        <div className="row x-gap-20 y-gap-20">
                          <div className="col-12">
                            <div className="form-input ">
                              <input
                                type="text"
                                minLength={4}
                                name="user_name"
                                defaultValue=""
                              />
                              <label className="lh-1 text-16 text-light-1">
                                User Name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-input ">
                              <input
                                type="text"
                                defaultValue="jon"
                                name="first_name"
                                className="has-value"
                              />
                              <label className="lh-1 text-16 text-light-1">
                                First Name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-input ">
                              <input
                                type="text"
                                defaultValue="ex"
                                name="last_name"
                                className="has-value"
                              />
                              <label className="lh-1 text-16 text-light-1">
                                Last Name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-input ">
                              <input
                                type="text"
                                name="email"
                                defaultValue="john@example.com"
                                className="has-value"
                              />
                              <label className="lh-1 text-16 text-light-1">
                                Email
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-input ">
                              <input
                                type="text"
                                defaultValue={+251947301849}
                                name="phone"
                                className="has-value"
                              />
                              <label className="lh-1 text-16 text-light-1">
                                Phone Number
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-input ">
                              <input
                                type="text"
                                className="date-picker has-value"
                                defaultValue="10/16/2023"
                                name="birthday"
                              />
                              <label className="lh-1 text-16 text-light-1">
                                Birthday
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-input ">
                              <textarea
                                rows={5}
                                className="pt-35"
                                name="bio"
                                defaultValue={""}
                              />
                              <label className="lh-1 text-16 text-light-1">
                                About Yourself
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-inline-block pt-30">
                        <button
                          type="submit"
                          className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                        >
                          Save Changes
                          <div className="icon-arrow-top-right ml-15" />
                        </button>
                      </div>
                    </div>
                    <div className="tabs__pane -tab-item-2 row">
                      <div className="col-xl-9">
                        <div className="row x-gap-20 y-gap-20">
                          <div className="col-12">
                            <div className="form-input ">
                              <input type="text" defaultValue="" name="address" />
                              <label className="lh-1 text-16 text-light-1">
                                Address Line 1
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-input ">
                              <input
                                type="text"
                                defaultValue=""
                                name="address2"
                              />
                              <label className="lh-1 text-16 text-light-1">
                                Address Line 2
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-input ">
                              <input type="text" defaultValue="" name="city" />
                              <label className="lh-1 text-16 text-light-1">
                                City
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-input ">
                              <input type="text" defaultValue="" name="state" />
                              <label className="lh-1 text-16 text-light-1">
                                State
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-input ">
                              <select name="country" className="form-control">
                                <option value="" selected="selected">
                                  -- Select --
                                </option>
                                <option value="AF">Afghanistan</option>
                                <option value="AX">Aland Islands</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                                <option value="AS">American Samoa</option>
                                <option value="AD">Andorra</option>
                                <option value="AO">Angola</option>
                                <option value="AI">Anguilla</option>
                                <option value="AQ">Antarctica</option>
                                <option value="AG">Antigua And Barbuda</option>
                                <option value="AR">Argentina</option>
                                <option value="AM">Armenia</option>
                                <option value="AW">Aruba</option>
                                <option value="AU">Australia</option>
                                <option value="AT">Austria</option>
                                <option value="AZ">Azerbaijan</option>
                                <option value="BS">Bahamas</option>
                                <option value="BH">Bahrain</option>
                                <option value="BD">Bangladesh</option>
                                <option value="BB">Barbados</option>
                                <option value="BY">Belarus</option>
                                <option value="BE">Belgium</option>
                                <option value="BZ">Belize</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermuda</option>
                                <option value="BT">Bhutan</option>
                                <option value="BO">Bolivia</option>
                                <option value="BA">Bosnia And Herzegovina</option>
                                <option value="BW">Botswana</option>
                                <option value="BV">Bouvet Island</option>
                                <option value="BR">Brazil</option>
                                <option value="IO">
                                  British Indian Ocean Territory
                                </option>
                                <option value="BN">Brunei Darussalam</option>
                                <option value="BG">Bulgaria</option>
                                <option value="BF">Burkina Faso</option>
                                <option value="BI">Burundi</option>
                                <option value="KH">Cambodia</option>
                                <option value="CM">Cameroon</option>
                                <option value="CA">Canada</option>
                                <option value="CV">Cape Verde</option>
                                <option value="KY">Cayman Islands</option>
                                <option value="CF">
                                  Central African Republic
                                </option>
                                <option value="TD">Chad</option>
                                <option value="CL">Chile</option>
                                <option value="CN">China</option>
                                <option value="CX">Christmas Island</option>
                                <option value="CC">
                                  Cocos (Keeling) Islands
                                </option>
                                <option value="CO">Colombia</option>
                                <option value="KM">Comoros</option>
                                <option value="CG">Congo</option>
                                <option value="CD">
                                  Congo, Democratic Republic
                                </option>
                                <option value="CK">Cook Islands</option>
                                <option value="CR">Costa Rica</option>
                                <option value="CI">Cote D'Ivoire</option>
                                <option value="HR">Croatia</option>
                                <option value="CU">Cuba</option>
                                <option value="CY">Cyprus</option>
                                <option value="CZ">Czech Republic</option>
                                <option value="DK">Denmark</option>
                                <option value="DJ">Djibouti</option>
                                <option value="DM">Dominica</option>
                                <option value="DO">Dominican Republic</option>
                                <option value="EC">Ecuador</option>
                                <option value="EG">Egypt</option>
                                <option value="SV">El Salvador</option>
                                <option value="GQ">Equatorial Guinea</option>
                                <option value="ER">Eritrea</option>
                                <option value="EE">Estonia</option>
                                <option value="ET">Ethiopia</option>
                                <option value="FK">
                                  Falkland Islands (Malvinas)
                                </option>
                                <option value="FO">Faroe Islands</option>
                                <option value="FJ">Fiji</option>
                                <option value="FI">Finland</option>
                                <option value="FR">France</option>
                                <option value="GF">French Guiana</option>
                                <option value="PF">French Polynesia</option>
                                <option value="TF">
                                  French Southern Territories
                                </option>
                                <option value="GA">Gabon</option>
                                <option value="GM">Gambia</option>
                                <option value="GE">Georgia</option>
                                <option value="DE">Germany</option>
                                <option value="GH">Ghana</option>
                                <option value="GI">Gibraltar</option>
                                <option value="GR">Greece</option>
                                <option value="GL">Greenland</option>
                                <option value="GD">Grenada</option>
                                <option value="GP">Guadeloupe</option>
                                <option value="GU">Guam</option>
                                <option value="GT">Guatemala</option>
                                <option value="GG">Guernsey</option>
                                <option value="GN">Guinea</option>
                                <option value="GW">Guinea-Bissau</option>
                                <option value="GY">Guyana</option>
                                <option value="HT">Haiti</option>
                                <option value="HM">
                                  Heard Island &amp; Mcdonald Islands
                                </option>
                                <option value="VA">
                                  Holy See (Vatican City State)
                                </option>
                                <option value="HN">Honduras</option>
                                <option value="HK">Hong Kong</option>
                                <option value="HU">Hungary</option>
                                <option value="IS">Iceland</option>
                                <option value="IN">India</option>
                                <option value="ID">Indonesia</option>
                                <option value="IR">
                                  Iran, Islamic Republic Of
                                </option>
                                <option value="IQ">Iraq</option>
                                <option value="IE">Ireland</option>
                                <option value="IM">Isle Of Man</option>
                                <option value="IL">Israel</option>
                                <option value="IT">Italy</option>
                                <option value="JM">Jamaica</option>
                                <option value="JP">Japan</option>
                                <option value="JE">Jersey</option>
                                <option value="JO">Jordan</option>
                                <option value="KZ">Kazakhstan</option>
                                <option value="KE">Kenya</option>
                                <option value="KI">Kiribati</option>
                                <option value="KR">Korea</option>
                                <option value="KW">Kuwait</option>
                                <option value="KG">Kyrgyzstan</option>
                                <option value="LA">
                                  Lao People's Democratic Republic
                                </option>
                                <option value="LV">Latvia</option>
                                <option value="LB">Lebanon</option>
                                <option value="LS">Lesotho</option>
                                <option value="LR">Liberia</option>
                                <option value="LY">Libyan Arab Jamahiriya</option>
                                <option value="LI">Liechtenstein</option>
                                <option value="LT">Lithuania</option>
                                <option value="LU">Luxembourg</option>
                                <option value="MO">Macao</option>
                                <option value="MK">Macedonia</option>
                                <option value="MG">Madagascar</option>
                                <option value="MW">Malawi</option>
                                <option value="MY">Malaysia</option>
                                <option value="MV">Maldives</option>
                                <option value="ML">Mali</option>
                                <option value="MT">Malta</option>
                                <option value="MH">Marshall Islands</option>
                                <option value="MQ">Martinique</option>
                                <option value="MR">Mauritania</option>
                                <option value="MU">Mauritius</option>
                                <option value="YT">Mayotte</option>
                                <option value="MX">Mexico</option>
                                <option value="FM">
                                  Micronesia, Federated States Of
                                </option>
                                <option value="MD">Moldova</option>
                                <option value="MC">Monaco</option>
                                <option value="MN">Mongolia</option>
                                <option value="ME">Montenegro</option>
                                <option value="MS">Montserrat</option>
                                <option value="MA">Morocco</option>
                                <option value="MZ">Mozambique</option>
                                <option value="MM">Myanmar</option>
                                <option value="NA">Namibia</option>
                                <option value="NR">Nauru</option>
                                <option value="NP">Nepal</option>
                                <option value="NL">Netherlands</option>
                                <option value="AN">Netherlands Antilles</option>
                                <option value="NC">New Caledonia</option>
                                <option value="NZ">New Zealand</option>
                                <option value="NI">Nicaragua</option>
                                <option value="NE">Niger</option>
                                <option value="NG">Nigeria</option>
                                <option value="NU">Niue</option>
                                <option value="NF">Norfolk Island</option>
                                <option value="MP">
                                  Northern Mariana Islands
                                </option>
                                <option value="NO">Norway</option>
                                <option value="OM">Oman</option>
                                <option value="PK">Pakistan</option>
                                <option value="PW">Palau</option>
                                <option value="PS">
                                  Palestinian Territory, Occupied
                                </option>
                                <option value="PA">Panama</option>
                                <option value="PG">Papua New Guinea</option>
                                <option value="PY">Paraguay</option>
                                <option value="PE">Peru</option>
                                <option value="PH">Philippines</option>
                                <option value="PN">Pitcairn</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="QA">Qatar</option>
                                <option value="RE">Reunion</option>
                                <option value="RO">Romania</option>
                                <option value="RU">Russian Federation</option>
                                <option value="RW">Rwanda</option>
                                <option value="BL">Saint Barthelemy</option>
                                <option value="SH">Saint Helena</option>
                                <option value="KN">Saint Kitts And Nevis</option>
                                <option value="LC">Saint Lucia</option>
                                <option value="MF">Saint Martin</option>
                                <option value="PM">
                                  Saint Pierre And Miquelon
                                </option>
                                <option value="VC">
                                  Saint Vincent And Grenadines
                                </option>
                                <option value="WS">Samoa</option>
                                <option value="SM">San Marino</option>
                                <option value="ST">Sao Tome And Principe</option>
                                <option value="SA">Saudi Arabia</option>
                                <option value="SN">Senegal</option>
                                <option value="RS">Serbia</option>
                                <option value="SC">Seychelles</option>
                                <option value="SL">Sierra Leone</option>
                                <option value="SG">Singapore</option>
                                <option value="SK">Slovakia</option>
                                <option value="SI">Slovenia</option>
                                <option value="SB">Solomon Islands</option>
                                <option value="SO">Somalia</option>
                                <option value="ZA">South Africa</option>
                                <option value="GS">
                                  South Georgia And Sandwich Isl.
                                </option>
                                <option value="ES">Spain</option>
                                <option value="LK">Sri Lanka</option>
                                <option value="SD">Sudan</option>
                                <option value="SR">Suriname</option>
                                <option value="SJ">Svalbard And Jan Mayen</option>
                                <option value="SZ">Swaziland</option>
                                <option value="SE">Sweden</option>
                                <option value="CH">Switzerland</option>
                                <option value="SY">Syrian Arab Republic</option>
                                <option value="TW">Taiwan</option>
                                <option value="TJ">Tajikistan</option>
                                <option value="TZ">Tanzania</option>
                                <option value="TH">Thailand</option>
                                <option value="TL">Timor-Leste</option>
                                <option value="TG">Togo</option>
                                <option value="TK">Tokelau</option>
                                <option value="TO">Tonga</option>
                                <option value="TT">Trinidad And Tobago</option>
                                <option value="TN">Tunisia</option>
                                <option value="TR">Turkey</option>
                                <option value="TM">Turkmenistan</option>
                                <option value="TC">
                                  Turks And Caicos Islands
                                </option>
                                <option value="TV">Tuvalu</option>
                                <option value="UG">Uganda</option>
                                <option value="UA">Ukraine</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="GB">United Kingdom</option>
                                <option value="US">United States</option>
                                <option value="UM">
                                  United States Outlying Islands
                                </option>
                                <option value="UY">Uruguay</option>
                                <option value="UZ">Uzbekistan</option>
                                <option value="VU">Vanuatu</option>
                                <option value="VE">Venezuela</option>
                                <option value="VN">Viet Nam</option>
                                <option value="VG">
                                  Virgin Islands, British
                                </option>
                                <option value="VI">Virgin Islands, U.S.</option>
                                <option value="WF">Wallis And Futuna</option>
                                <option value="EH">Western Sahara</option>
                                <option value="YE">Yemen</option>
                                <option value="ZM">Zambia</option>
                                <option value="ZW">Zimbabwe</option>
                              </select>
                              <label className="lh-1 text-16 text-light-1">
                                Select Country
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-input ">
                              <input
                                type="text"
                                defaultValue=""
                                name="zip_code"
                              />
                              <label className="lh-1 text-16 text-light-1">
                                ZIP Code
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-inline-block">
                              <button
                                type="submit"
                                className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                              >
                                Save Changes
                                <div className="icon-arrow-top-right ml-15" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <footer className="footer -dashboard mt-60">
              <div className="footer__row row y-gap-10 items-center justify-between">
                <div className="col-auto">
                  <div className="row y-gap-20 items-center">
                    <div className="col-auto">
                      <div className="text-14 lh-14 mr-30">
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="d-flex x-gap-5 y-gap-5 items-center"></div>
                </div>
              </div>
            </footer>
            <div id="cdn-browser-modal" className="modal fade">
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div
                    id="cdn-browser"
                    className="cdn-browser d-flex flex-column"
                  >
                    <div className="files-nav flex-shrink-0">
                      <div className="d-flex justify-content-between">
                        <div className="col-left d-flex align-items-center">
                          <div className="filter-item">
                            <input
                              type="text"
                              placeholder="Search file name...."
                              className="form-control has-value"
                              defaultValue=""
                            />
                          </div>
                          <div className="filter-item">
                            <button className="btn btn-default">
                              <i className="fa fa-search" /> Search
                            </button>
                          </div>
                          <div className="filter-item">
                            <small>
                              <i>Total: 0 files</i>
                            </small>
                          </div>
                        </div>
                        <div className="div">
                          <div
                            role="group"
                            aria-label="Basic example"
                            className="btn-group"
                          >
                            <button type="button" className="btn btn-secondary">
                              <i className="fa fa-th" />
                            </button>{" "}
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                            >
                              <i className="fa fa-bars" />
                            </button>
                          </div>
                        </div>
                        <div className="col-right">
                          <i
                            className="fa-spin fa fa-spinner icon-loading active"
                            style={{ display: "none" }}
                          />{" "}
                          <button className="btn btn-primary mr-2">
                            <span>
                              <i className="fa fa-folder" /> Add Folder
                            </span>
                          </button>{" "}
                          <button className="btn btn-success btn-pick-files">
                            <span>
                              <i className="fa fa-upload" /> Upload
                            </span>{" "}
                            <input
                              multiple="multiple"
                              accept="image/png,image/jpeg,image/gif,image/bmp,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                              type="file"
                              name="files[]"
                              className="has-value"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      display="none"
                      className="upload-new"
                      style={{ display: "none" }}
                    >
                      <input
                        type="file"
                        name="filepond[]"
                        className="my-pond has-value"
                      />
                    </div>
                    <div className="files-list">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a href="#">Home</a>
                          </li>
                        </ol>
                      </nav>{" "}
                      {/**/}
                      <div className="files-wraps  view-grid"> </div>
                      <p
                        className="no-files-text text-center"
                        style={{ display: "none" }}
                      >
                        No file found
                      </p>
                      {/**/}
                    </div>{" "}
                    {/**/}
                  </div>
                </div>
              </div>
            </div>
            {/* Custom script for all pages */}
          </div>
        </div>
        <div className="modal" tabIndex={-1} id="modal_booking_detail">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Booking ID: # <span className="user_id" />
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="d-flex justify-content-center">Loading...</div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="daterangepicker ltr single auto-apply opensleft">
      <div className="ranges" />
      <div className="drp-calendar left single" style={{ display: "block" }}>
        <div className="calendar-table" />
        <div className="calendar-time" style={{ display: "none" }} />
      </div>
      <div className="drp-calendar right" style={{ display: "none" }}>
        <div className="calendar-table" />
        <div className="calendar-time" style={{ display: "none" }} />
      </div>
      <div className="drp-buttons">
        <span className="drp-selected" />
        <button className="cancelBtn btn btn-sm btn-default" type="button">
          Cancel
        </button>
        <button
          className="applyBtn btn btn-sm btn-primary"
          disabled="disabled"
          type="button"
        >
          Apply
        </button>{" "}
      </div>
    </div>
  </>
  
  );
}
