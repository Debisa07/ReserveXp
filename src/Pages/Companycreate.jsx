import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import 'font-awesome/css/font-awesome.min.css';

function SignIn() {
  const [name, setname] = useState("");

  const [email, setEmail] = useState("");
 
  const [password, setPassword] = useState("");
  // const history = useHistory();
  async function signUp() {
    let item = {
     
      name,
     
      email,
     
      password
    };
    // const token = localStorage.getItem('token');
    console.log(item);
    let result = await fetch("https://api-gotrip.onrender.com/company", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        // "Authorization": `Bearer ${token}`
      }
    }

    );






    result = await result.json();
    // if (result.statusCode === 403 && result.error === 'Forbidden') {
    //   history.push('/'); 
    // }
    console.log("result", result);

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
                      <h4 className="form-title text-22 fw-500">Sign in using Company Account or create a  using Company Account</h4>
                      <p className="mt-10">
                        Already have using Company Account?{" "}
                        <Link className="links" to="/companylogin">
                          <a
                            data-bs-toggle="modal"
                            href="#register"
                            className="text-blue-1"
                          >
                            Log in using Company Account
                          </a>
                        </Link>
                      </p>
                    </div>




                 

                    <div className="col-12">
                      <div className="form-input">
                        <input
                          type="text"
                          name="name"
                          autoComplete="off"
                          className="has-value"
                          value={name}
                          onChange={(e) => setname(e.target.value)} />
                        <label className="lh-1 text-14 text-light-1">Company Name</label>
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







