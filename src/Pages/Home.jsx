import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";

import Footer from "../components/Footer";
import Recommend from "../components/Recommend";
// import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Subscribe from "../components/Subscribe";
export default function Home() {
 
  return (
    <div>
      {/* <ScrollToTop /> */}
      {/* <Navbar /> */}


      
      <Hero />
      {/* <Services /> */}
      <Recommend />
      <Subscribe/>
      <Testimonials />
      <Footer />



      
    </div>
  );
}
