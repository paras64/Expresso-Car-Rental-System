import React, { useState } from "react";
import "./Style.css";
import { NavLink } from "react-router-dom";
import { GlobalStyle } from "../styles/GlobalStyle";
import axios from "axios";

const ForgotPassword = () => {
  const [userData, setUserData] = useState({
    email: "",
    message: "",
    loading: false,
  });

  const resetAll = (e) => {
    e.preventDefault();
    setUserData({
      email: "",
      message: "",
      loading: false,
    });
  };
  const handleChange = (e) => {
    setUserData((prevData) => {
      return { ...prevData, email: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((prevData) => ({
      ...prevData,
      loading: true,
    }));
    try {
      console.log(userData)
      const doc = axios.post("https://car-rental-backend-1tpp.onrender.com/forgotpassword", userData);
      doc
        .then((response) => {
          setUserData({
            email: "",
            message: response.data,
            loading: false,
          });
        })
        .catch((error) => {
          console.log(error)
          setUserData((prevData) => {
            return {
              ...prevData,
              message: error.response.data.message,
              loading: false,
            };
          });
        });
    } catch (error) {
      setUserData((prevData) => ({
        ...prevData,
        message: error.response.data.message,
        loading: false,
      }));
    }
  };
  return (
    <>
      <GlobalStyle />
      {/* <Navbar /> */}
      <section id="forgot-password">
        <div className="forgot-password-container">
          <div className="forgot-password-content">
            <h1 className="forgot-password-heading">
              Forgot Password
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="13"
                height="13"
                style={{ margin: "0 5px" }}
              >
                <circle cx="50" cy="50" r="40" fill="rgb(100 100 214)" />
              </svg>
            </h1>
            <p className="login-link">
              Want to login? <NavLink to="/login">Log In</NavLink>
            </p>
            <form className="forgot-password-form">
              <div>
                <label htmlFor="login">Email</label>
                <input
                  type="email"
                  name="email"
                  id="login"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button onClick={resetAll}>Reset All</button>
                <button
                  onClick={handleSubmit}
                  className="submit-btn"
                  disabled={!userData.email}
                >
                  {!userData.loading && <p>Forgot</p>}
                  {userData.loading && (
                    <div className="loading-container" id="loadingContainer">
                      <div className="loading"></div>
                    </div>
                  )}
                </button>
              </div>
            </form>
            <div className="message">
              <p>{userData.message}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
