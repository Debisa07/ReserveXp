// // SignIn.js
// import React, {useState, useEffect} from 'react';
// import { Link,  } from 'react-router-dom';



// function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   useEffect(()=>{
//     if (localStorage.getItem('user-info')){
//       history.push("/add")

//     }
//   },[])
//   function login(){
//     console.warn(email,password)
//   }

//   // return (
//   //   <div className="bravo_wrap" style={{ marginTop: "-80px", marginLeft: "-80px" }}>
//   //     <div className="layout-pt-lg layout-pb-lg bg-blue-2 header-margin">
//   //       <div className="container">
//   //         <div className="row justify-center bravo-login-form-page bravo-login-page">
//   //           <div className="col-xl-6 col-lg-7 col-md-9">
//   //             <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
//   //               <div className="row">
//   //                 <form
//   //                   className="bravo-theme-gotrip-login-form y-gap-20"
//   //                   method="POST"
//   //                 >
//   //                   <input type="hidden" name="redirect" defaultValue="" />
//   //                   <input
//   //                     type="hidden"
//   //                     name="_token"
//   //                     defaultValue="rJO7B8ynLOv74QzTwwo64uuH3KwvuUSqCBZNYyB4"
//   //                     className="has-value"
//   //                   />
//   //                   <div className="col-12">
//   //                     <h4 className="form-title text-22 fw-500">Welcome back</h4>
//   //                     <p className="mt-10">
//   //                       Don't have an account yet?{" "}
//   //                       <Link className="links" to="/register">
//   //                         <a
//   //                           data-bs-toggle="modal"
//   //                           href="#register"
//   //                           className="text-blue-1"
//   //                         >
//   //                           Sign up for free
//   //                         </a>
//   //                       </Link>
//   //                     </p>
//   //                   </div>
//   //                   <div className="col-12">
//   //                     <div className="form-input">
//   //                       <input
//   //                         type="text"
//   //                         name="email"
//   //                         onChange={(e)=>setEmail(e.target.value)}
//   //                         autoComplete="off"
//   //                         className="has-value"
//   //                         defaultValue=""
//   //                       />
//   //                       <label className="lh-1 text-14 text-light-1">Email</label>
//   //                     </div>
//   //                   </div>
//   //                   <div className="col-12">
//   //                     <div className="form-input">
//   //                       <input
//   //                         type="password"
//   //                         name="password"
//   //                         onChange={(e)=>setPassword(e.target.value)}

//   //                         autoComplete="off"
//   //                         className="has-value"
//   //                       />
//   //                       <label className="lh-1 text-14 text-light-1">
//   //                         Password
//   //                       </label>
//   //                     </div>
//   //                   </div>
//   //                   <div className="col-12 d-flex justify-content-between">
//   //                     <div className="d-flex ">
//   //                       <div className="form-checkbox" style={{ marginTop: 3 }}>
//   //                         <input
//   //                           type="checkbox"
//   //                           name="remember"
//   //                           id="remember-me"
//   //                           defaultValue={1}
//   //                           className="has-value"
//   //                           defaultChecked="checked"
//   //                         />
//   //                         <div className="form-checkbox__mark">
//   //                           <div className="form-checkbox__icon icon-check" />
//   //                         </div>
//   //                       </div>
//   //                       <div className="text-15 lh-15 text-light-1 ml-10">
//   //                         Remember me
//   //                       </div>
//   //                     </div>
//   //                     <a>
//   //                       Forgot Password?
//   //                     </a>
//   //                   </div>
//   //                   <div className="error message-error invalid-feedback" />
//   //                   <div className="col-12">
//   //                     <button
//   //                       className="button py-20 -dark-1 bg-blue-1 text-white w-100 form-submit"
//   //                       type="submit"
//   //                       onClick={login}
//   //                     >
//   //                       Sign In
//   //                       <div className="icon-arrow-top-right ml-15" />
//   //                       <span
//   //                         className="spinner-grow spinner-grow-sm icon-loading ml-15 d-none"
//   //                         role="status"
//   //                         aria-hidden="true"
//   //                       />
//   //                     </button>
//   //                   </div>
//   //                   <div className="col-12">
//   //                     <div className="text-center px-30">
//   //                       By creating an account, you agree to our Terms of Service
//   //                       and Privacy Statement.
//   //                     </div>
//   //                   </div>
//   //                 </form>
//   //               </div>
//   //             </div>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </div>
//   // );
//   return (
//     <div className="bravo_wrap" style={{ marginTop: "-80px", marginLeft: "-80px" }}>
//  <div className="layout-pt-lg layout-pb-lg bg-blue-2 header-margin">
//         <div className="container">
//           <div className="row justify-center bravo-login-form-page bravo-login-page">
//             <div className="col-xl-6 col-lg-7 col-md-9">
//               <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
//                 <div className="row">
//                   <form
//                     className="bravo-theme-gotrip-login-form y-gap-20" >

//                     <div className="col-12">
//                       <h4 className="form-title text-22 fw-500">Welcome back</h4>
//                       <p className="mt-10">
//                         Don't have an account yet?{" "}
//                         <Link className="links" to="/register">
//                           <a
//                             data-bs-toggle="modal"
//                             href="#register"
//                             className="text-blue-1"
//                           >
//                             Sign up for free
//                           </a>
//                         </Link>
//                       </p>
//                     </div>
//                     <div className="col-12">
//                       <div className="form-input">
//                         <input
//                           type="text"
//                           name="email"
//                           onChange={(e)=>setEmail(e.target.value)}
//                           autoComplete="off"
//                           className="has-value"
//                           defaultValue=""
//                         />
//                         <label className="lh-1 text-14 text-light-1">Email</label>
//                       </div>
//                     </div>
//                     <div className="col-12">
//                       <div className="form-input">
//                         <input
//                           type="password"
//                           name="password"
//                           onChange={(e)=>setPassword(e.target.value)}

//                           autoComplete="off"
//                           className="has-value"
//                         />
//                         <label className="lh-1 text-14 text-light-1">
//                           Password
//                         </label>
//                       </div>
//                     </div>
//                     <div className="col-12 d-flex justify-content-between">
//                       <div className="d-flex ">
//                         <div className="form-checkbox" style={{ marginTop: 3 }}>
//                           <input
//                             type="checkbox"
//                             name="remember"
//                             id="remember-me"
//                             defaultValue={1}
//                             className="has-value"
//                             defaultChecked="checked"
//                           />
//                           <div className="form-checkbox__mark">
//                             <div className="form-checkbox__icon icon-check" />
//                           </div>
//                         </div>
//                         <div className="text-15 lh-15 text-light-1 ml-10">
//                           Remember me
//                         </div>
//                       </div>
//                       <a>
//                         Forgot Password?
//                       </a>
//                     </div>
//                     <div className="error message-error invalid-feedback" />
//                     <div className="col-12">
//                       <button
//                         className="button py-20 -dark-1 bg-blue-1 text-white w-100 form-submit"
//                         type="submit"
//                         onClick={login}
//                       >
//                         Sign In
//                         <div className="icon-arrow-top-right ml-15" />
//                         <span
//                           className="spinner-grow spinner-grow-sm icon-loading ml-15 d-none"
//                           role="status"
//                           aria-hidden="true"
//                         />
//                       </button>
//                     </div>
//                     <div className="col-12">
//                       <div className="text-center px-30">
//                         By creating an account, you agree to our Terms of Service
//                         and Privacy Statement.
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>    </div>
//   );
// }

// export default SignIn;


















// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';


// function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   async function signUp() {
//     let item = {
//       email,
//       password,
//     };


//     let result = await fetch("https://api-gotrip.onrender.com/auth/login", {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify(item),


//     });


//     result = await result.json();
//     const token = result.accessToken;
//     localStorage.setItem('token', token);
//     console.log("result", result);
   




//   }
  










 




//   return (
//     <div className="bravo_wrap" style={{ marginTop: "-80px", marginLeft: "-80px" }}>
//       <div className="layout-pt-lg layout-pb-lg bg-blue-2 header-margin">
//         <div className="container">
//           <div className="row justify-center bravo-login-form-page bravo-login-page">
//             <div className="col-xl-6 col-lg-7 col-md-9">
//               <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
//                 <div className="row">
//                   <form className="bravo-theme-gotrip-login-form y-gap-20">
//                     <div className="col-12">
//                       <h4 className="form-title text-22 fw-500">Welcome back</h4>
//                       <p className="mt-10">
//                         Don't have an account yet?{" "}
//                         <Link className="links" to="/register">
//                           <a
//                             data-bs-toggle="modal"
//                             href="#register"
//                             className="text-blue-1"
//                           >
//                             Sign up for free
//                           </a>
//                         </Link>
//                       </p>
//                     </div>



//                     <div className="col-12">
//                       <div className="form-input">
//                         <input
//                           type="text"
//                           name="email"
//                           autoComplete="off"
//                           className="has-value"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)} />
//                         <label className="lh-1 text-14 text-light-1">Email</label>
//                       </div>
//                     </div>



//                     <div className="col-12">
//                       <div className="form-input">
//                         <input
//                           type="password"
//                           name="password"
//                           autoComplete="off"
//                           className="has-value"
//                           value={password}
//                           onChange={(e) => setPassword(e.target.value)} />
//                         <label className="lh-1 text-14 text-light-1">Password</label>
//                       </div>
//                     </div>

//                     <div className="col-12 d-flex justify-content-between">
//                       <div className="d-flex">
//                         <div className="form-checkbox" style={{ marginTop: 3 }}>
//                           <input
//                             type="checkbox"
//                             name="acceptTerms"
//                             id="accept-terms"
//                             defaultValue={1}
//                             className="has-value"
//                             defaultChecked="checked"
//                           />
//                           <div className="text-15 lh-15 text-light-1 ml-10">
//                           </div>
//                         </div>
//                         <a>
//                           Forgot Password?
//                         </a>
//                       </div>
//                     </div>
//                     <div className="error message-error invalid-feedback" />
//                     <div className="col-12">
//                       <button
//                         className="button py-20 -dark-1 bg-blue-1 text-white w-100 form-submit"
//                         type="button"
//                         onClick={signUp}
//                       >
//                         LogIn
//                         <div className="icon-arrow-top-right ml-15" />
//                         <span
//                           className="spinner-grow spinner-grow-sm icon-loading ml-15 d-none"
//                           role="status"
//                           aria-hidden="true"
//                         />
//                       </button>
//                     </div>
//                     <div className="col-12"></div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignIn;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function login() {
    try {
      const userData = {
        // Define user-related data here
        // For example:
        id: 1,
        username: email,
        password:password,
        // ... other user properties
      };
  
      let item = {
        email,
        password,
      };
  
      let result = await fetch("https://api-gotrip.onrender.com/auth/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(item),
      });
  
      if (result.ok) {
        const data = await result.json();
        const token = data.accessToken;
        localStorage.setItem('token', token);
        // Store user-related data in 'user-info'
        localStorage.setItem('user-info', JSON.stringify(userData));
        setIsAuthenticated(true);
        window.location.href = "/";
      } else {
        // Handle unsuccessful login (e.g., show an error message)
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }
  

  return (
    // <div className="bravo_wrap" style={{ marginTop: "-80px", marginLeft: "-80px" }}>
    //   {isAuthenticated ? (
    //     // Render content to display after successful login
    //     <div style={{marginTop: "880px"}}>
    //       <h1></div></div></div>me, you are now logged in!</h1>
    //       <Link to="/">Continue to your account</Link>
    //     </div>
    //   ) : (
    //     // Render the login form
    <div>
        <Header />

        <div className="bravo_wrap" style={{ marginTop: "-80px", marginLeft: "-80px" }}>
      <div className="layout-pt-lg layout-pb-lg bg-blue-2 header-margin">
        <div className="container">
          <div className="row justify-center bravo-login-form-page bravo-login-page">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                <div className="row">
                  <form className="bravo-theme-gotrip-login-form y-gap-20">
                    <div className="col-12">
                      <h4 className="form-title text-22 fw-500">Welcome back</h4>
                      <p className="mt-10">
                        Don't have an account yet?{" "}
                        <Link className="links" to="/register">
                          <a
                            data-bs-toggle="modal"
                            href="#register"
                            className="text-blue-1"
                          >
                            Sign up for free
                          </a>
                        </Link>
                      </p>
                    </div>



                    <div className="col-12">
                      <div className="form-input">
                        <input
                          type="text"
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
                          <div className="text-15 lh-15 text-light-1 ml-10">
                          </div>
                        </div>
                        <a>
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    <div className="error message-error invalid-feedback" />
                    <div className="col-12">
                      <button
                        className="button py-20 -dark-1 bg-blue-1 text-white w-100 form-submit"
                        type="button"
                        onClick={login}
                      >
                        LogIn
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
        
    //   )}
    // </div>
  );
}

export default SignIn;











