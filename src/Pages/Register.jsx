import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import 'font-awesome/css/font-awesome.min.css';



function SignIn() {
  useEffect(() => {
    console.log('Before condition:', localStorage.getItem('user-info'));
    if (localStorage.getItem('user-info')) {
      console.log('User is logged in');
      redirectToHome();
    }
    console.log('After condition:', localStorage.getItem('user-info'));
  }, []);
  
  console.log('After condition:', localStorage.getItem('user-info'));

  const redirectToHome = () => {
    // Perform the redirection to the home page here
    // For example, using `window.location.href` to navigate to the home page
    window.location.href = '/';
  };
  const [businessName, setBusinessName] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressLine1, setAddressLine1] = useState("addressLine1");
  const [addressLine2, setAddressLine2] = useState("addressLine2");
  const [city, setCity] = useState("city");
  const [country, setCountry] = useState("country");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("1994/03/12");
  const [state, setState] = useState("state");
  const [zipcode, setZipcode] = useState("");
  const [biographical, setBiographical] = useState("biographical");
  const [status, setStatus] = useState("Public");
  const [role, setRole] = useState("vendor");
  const [emailVerified, setEmailVerified] = useState(true);
  const [vendorCommissionType, setVendorCommissionType] = useState("amount");
  const [vendorCommissionValue, setVendorCommissionValue] = useState(90);
  const [image, setImage] = useState("image.com");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // const history = useHistory();
  async function signUp() {
    const userData = {
      // Define user-related data here
      // For example:
      id: 1,
      username: email,
      password:password,
      // ... other user properties
    };
    let item = {
      businessName,
      username,
      firstName,
      phoneNumber,
      addressLine1,
      addressLine2,
      city,
      country,
      email,
      lastName,
      birthday,
      state,
      zipcode,
      biographical,
      status,
      role,
      emailVerified,
      vendorCommissionType,
      vendorCommissionValue,
      image,
      password
    };
    const token = localStorage.getItem('token');
    console.log(item);
    let result = await fetch("https://api-gotrip.onrender.com/auth", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }

    );






    result = await result.json();
    // if (result.statusCode === 403 && result.error === 'Forbidden') {
    //   history.push('/'); 
    // }
    console.log("result", result);
    localStorage.setItem('user-info', JSON.stringify(userData));
    setIsAuthenticated(true);
    window.location.href = "/";


  }



  return (
    <div>
              <Header />

    <div className="bravo_wrap overflow-hidden" style={{ marginTop: "-80px", marginLeft: "-80px" }}>
      <div className="layout-pt-lg layout-pb-lg bg-blue-2 header-margin">
        <div className="container">
          <div className="row justify-center bravo-login-form-page bravo-login-page">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                <div className="row">
                  <form className="bravo-theme-gotrip-login-form y-gap-20">
                    <div className="col-12">
                      <h4 className="form-title text-22 fw-500">Sign in or create an account</h4>
                      <p className="mt-10">
                        Already have an account?{" "}
                        <Link className="links" to="/signin">
                          <a
                            data-bs-toggle="modal"
                            href="#register"
                            className="text-blue-1"
                          >
                            Log in
                          </a>
                        </Link>
                      </p>
                    </div>



                    <div className="col-12">
                      <div className="form-input">
                        <input
                          type="text"
                          name="businessName"
                          autoComplete="off"
                          className="has-value"
                          value="businessName"
                          onChange={(e) => setBusinessName(e.target.value)} hidden/>
                        <label className="lh-1 text-14 text-light-1">Business Name</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-input">
                        <input
                          type="text"
                          name="username"
                          autoComplete="off"
                          className="has-value"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)} />
                        <label className="lh-1 text-14 text-light-1">Username</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-input">
                        <input
                          type="text"
                          name="firstName"
                          autoComplete="off"
                          className="has-value"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)} />
                        <label className="lh-1 text-14 text-light-1">First Name</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-input">
                        <input
                          type="text"
                          name="phoneNumber"
                          autoComplete="off"
                          className="has-value"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)} />
                        <label className="lh-1 text-14 text-light-1">Phone Number</label>
                      </div>
                    </div>

                   
                    

                   

                   

                    <div className="col-12">
                      <div className="form-input">
                        <input
                          type="email"
                          name="email"
                          autoComplete="off"
                          className="has-value"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} />
                        <label className="lh-1 text-14 text-light-1">Email</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-input">
                        <input
                          type="text"
                          name="lastName"
                          autoComplete="off"
                          className="has-value"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)} />
                        <label className="lh-1 text-14 text-light-1">Last Name</label>
                      </div>
                    </div>

                   
                   

                   


                   








                   

                   

                    


                    

                   


                   

                    <div className="col-12">
                      <div className="form-input">
                        <input
                          type="password"
                          name="password"
                          autoComplete="off"
                          className="has-value"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)} />
                        <label className="lh-1 text-14 text-light-1">Password</label>
                      </div>
                    </div>

                    <div className="col-12 d-flex justify-content-between">
                      <div className="d-flex">
                        <div className="form-checkbox" style={{ marginTop: 3 }}>
                          <input
                            type="checkbox"
                            name="acceptTerms"
                            id="accept-terms"
                            defaultValue={1}
                            className="has-value"
                            defaultChecked="checked"
                          />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check" />
                          </div>
                        </div>
                        <label htmlFor="accept-terms" className="text-15 lh-15 text-light-1 ml-10">
                          I have read and accept the Terms and Privacy Policy?
                        </label>
                      </div>
                    </div>
                    <div className="error message-error invalid-feedback" />
                    <div className="col-12">
                      <button
                        className="button py-20 -dark-1 bg-blue-1 text-white w-100 form-submit"
                        type="button"
                        onClick={signUp}
                      >
                        Register
                        <div className="icon-arrow-top-right ml-15" />
                        <span
                          className="spinner-grow spinner-grow-sm icon-loading ml-15 d-none"
                          role="status"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <div className="col-12"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignIn;







