import React from 'react';
import Navbar from '../components/Navbar';
import './Login.css';


export const Login = () => {


  return (
    <>

      <Navbar />
      <div>
        <p style={{ fontFamily: "arial, sans-serif", backgroundImage: "linear-gradient(-90deg, #DCCA9C 0%, #2E4975 100%)", textAlign: "center", boxSizing: "border-box", padding: "20px" }}>UNIVERSITY OF GHANA</p>
        <div className="loginDesign">
          <form className="login-form">
            <label style={{ textAlign: "left" }} htmlFor="idNumber">
              ID Number
            </label>
            <input type="text" placeholder="Your ID Number" id="idNumber" />
            <label htmlFor="password"> Password</label>
            <input type="password" placeholder="**************" id="email" name="email" />
            <button style={{ textAlign: "center" }}> Login</button>
            <br></br>
            <span className="link-btn">Don't have an Account? Register here.</span>
          </form>
        </div>
      </div>
    </>
  );
};
