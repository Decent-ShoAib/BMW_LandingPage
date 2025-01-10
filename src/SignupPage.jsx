import React from "react";
import "./SignupPage.css";
import "./assets/loginimg.webp";
const SignupPage = () => {
  let landingPage = ()=>{
  }
  return (
    <div className="container">
      <div className="form-section">
        <h1>Sign Up</h1>
        <p>
          Already have an account? <a href="#">Login here</a>
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name here"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email ID here"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password here"
            />
          </div>
          <div className="checkbox">
            <input type="checkbox" id="agree" name="agree" />
            <label htmlFor="agree">
              By signing up you agree to receive updates and special offers.
            </label>
          </div>
         <a href="./SignupPage.jsx"> <button type="submit" onClick={landingPage}>Submit</button></a>
        </form>
      </div>
      <div className="image-section">
        <img src="/src/assets/loginimg.webp" alt="Sign up illustration" />
      </div>
    </div>
  );
};

export default SignupPage;
