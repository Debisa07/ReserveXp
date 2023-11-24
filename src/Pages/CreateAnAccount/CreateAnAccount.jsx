import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header'
import "./CreateAnAccount.css"
import vendor from "../../assets/image/vendor.webp"
import company from "../../assets/image/company.jpg"
import customer from "../../assets/image/customer.jpg"


const YourComponent = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const createAccountBtnText = selectedCard ? `Join as a ${selectedCard}` : 'Create an Account';

  const handleCardClick = (route) => {
    setSelectedCard(route);
  };

  return (
    <div >
        <div className="main-card" style={{marginTop:"190px"}}>
      <h2>Join as a Vendor, Customer, or Company</h2>
      <div className="radio-cards">
        
          <input type="radio" id="vendor" name="userType" />
          <label htmlFor="vendor">
          <div className={`card vendor${selectedCard === 'vendor' ? ' selected' : ''}`} onClick={() => handleCardClick('vendor')}>
            <img src="https://happay.com/blog/wp-content/uploads/sites/12/2023/04/vendor-management-system.webp" alt="Vendor" />
            <p>I am a Vendor</p>
            </div>
          </label>
        

          <input type="radio" id="customer" name="userType" />
          <label htmlFor="customer">
          <div className={`card customer${selectedCard === 'customer' ? ' selected' : ''}`} onClick={() => handleCardClick('customer')}>

            <img src="https://img.freepik.com/free-vector/vacation-holidays-background-with-realistic-globe-suitcase-photo-camera_1284-10476.jpg?1&w=740&t=st=1699038945~exp=1699039545~hmac=0438d15bad70cebd3174df3a9d7fda285115036d069bbe656ce9f9d81850f43a" alt="Customer" />
            <p>I am a Customer</p>
            </div>

          </label>

          <input type="radio" id="company" name="userType" />
          <label htmlFor="company">
          <div className={`card company${selectedCard === 'company' ? ' selected' : ''}`} onClick={() => handleCardClick('company')}>

            <img src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?w=740&t=st=1699042492~exp=1699043092~hmac=a7939f1da25dfb71464108606d59d9c916599a3faf17baed99f1a3375d15a707" alt="Company" />
            <p>I am a Company</p>
            </div>

          </label>
      </div>
      <button id="createAccount" className={`inactive${selectedCard ? ' active' : ''}`}>
        {createAccountBtnText}
      </button>
      <p class="mb-0" style={{marginTop:"30px"}}>
                            Already have an account?
                            <a  data-qa="login"
                              class="up-n-link">
                              Log In
                            </a>
                          </p>
    </div> 
    </div>
   
  );
};

export default YourComponent;




