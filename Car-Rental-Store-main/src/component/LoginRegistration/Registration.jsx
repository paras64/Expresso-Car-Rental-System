import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { GlobalStyle } from "../styles/GlobalStyle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Navbar from "../Navbar";
const Registration = () => {
  const navigate = useNavigate();

  const passwordData = useRef("");
  const [data, SetData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    message: "",
    loading: false,
  });

  const [visibility, SetVisibility] = useState(false);
  const resetAll = (e) => {
    e.preventDefault();
    SetData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      message: "",
      loading: false,
    });
  };
  const handleChange = (e) => {
    SetData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.firstname && data.lastname && data.email && data.password) {
      const doc = axios.post("https://car-rental-backend-1tpp.onrender.com/auth/register", data);
      doc
        .then((response) => {
          SetData({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            message: "Creating Account...",
            loading: true,
          });
          setTimeout(() => {
            alert("Account Has been Created");
            alert("New Users has to login first time before continue");
            navigate("/login");
          }, 2000);
        })
        .catch((err) => {
          SetData({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            message: "Waiting...",
            loading: true,
          });
          setTimeout(() => {
            SetData({
              firstname: "",
              lastname: "",
              email: "",
              password: "",
              message: err.response.data.message,
              loading: false,
            });
          }, 2000);
        });
    } else {
      alert("please complete the fields to go forward");
    }
  };

  const VisibilityToggle = () => {
    if (data.password) {
      if (visibility) {
        passwordData.current.type = "password";
        SetVisibility(false);
      } else {
        passwordData.current.type = "text";
        SetVisibility(true);
      }
    } else {
      return;
    }
  };

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <section className="registration">
        <div className="registration-container">
          <div className="registration-content">
            {/* <h1 className="topheading">CAR RENTAL STORE</h1> */}
            <div className="content-part">
              <p className="sub-heading">START FOR FREE</p>
              <h1 className="sub-heading-hero">
                Create new account
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
                Already A Member? <NavLink to="/login">Log In</NavLink>
              </p>
              <form className="form-box">
                <div className="form-box-hero">
                  <div>
                    <label htmlFor="firstname">First name</label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      value={data.firstname}
                      onChange={handleChange}
                      style={{ textTransform: "capitalize" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname">Last name</label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      value={data.lastname}
                      onChange={handleChange}
                      style={{ textTransform: "capitalize" }}
                    />
                  </div>
                </div>
                <div className="form-box-hero">
                  <div>
                    <label htmlFor="register">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="register"
                      value={data.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-box-hero">
                  <div>
                    <label htmlFor="password">Password</label>
                    <article className="password-article">
                      <input
                        ref={passwordData}
                        type="password"
                        name="password"
                        id="password"
                        value={data.password}
                        onChange={handleChange}
                      />
                      {visibility ? (
                        <VisibilityIcon
                          onClick={VisibilityToggle}
                          style={{ cursor: "pointer" }}
                        />
                      ) : (
                        <VisibilityOffIcon
                          onClick={VisibilityToggle}
                          style={{ cursor: "pointer" }}
                        />
                      )}
                    </article>
                  </div>
                </div>
                <div className="form-box-hero">
                  <button onClick={resetAll}>Reset All</button>
                  <button onClick={handleSubmit} className="submit-btn">
                    {!data.loading && <p>Create Account</p>}
                    {data.loading && (
                      <div className="loading-container" id="loadingContainer">
                        <div className="loading"></div>
                      </div>
                    )}
                  </button>
                </div>
              </form>
              <div className="message">
                <p>{data.message}</p>
              </div>
            </div>
          </div>
          <div className="svg-art">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 1440"
              width="220"
              height="562"
            >
              <path
                d="M0,160L34.3,138.7C68.6,117,137,75,206,101.3C274.3,128,343,224,411,240C480,256,549,192,617,138.7C685.7,85,754,43,823,26.7C891.4,11,960,21,1029,74.7C1097.1,128,1166,224,1234,245.3C1302.9,267,1371,213,1406,186.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                transform="rotate(90 160 160)"
                fill="#ffffff"
                fillOpacity="1"
              ></path>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
