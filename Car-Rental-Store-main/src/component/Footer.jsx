import React, { useEffect, useState } from "react";
import axios from "axios";
import { GlobalStyle } from "./styles/GlobalStyle";
import { NavLink } from "react-router-dom";
import NavigationIcon from "@mui/icons-material/Navigation";
import logo from "./images/Logo.png";
import "./Footer.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import CloseIcon from "@mui/icons-material/Close";

const AlertBox = ({ alert, SetAlert }) => {
  const BackGroundColorStyle = {
    backgroundColor: `${alert.code === 201 ? "#ffd99c" : "#d6d8d9"}`,
    color: `${alert.code === 201 ? "#3a2916" : "red"}`,
  };

  const modifyAlert = (when) => {
    if (alert.active) {
      if (when) {
        SetAlert((prevData) => {
          return {
            ...prevData,
            active: false,
          };
        });
        return;
      }
      setTimeout(() => {
        SetAlert((prevData) => {
          return {
            ...prevData,
            active: false,
          };
        });
      }, 4000);
    }
  };
  useEffect(() => {
    modifyAlert();
  });
  return (
    <>
      <div className="alert">
        <div className="alert-container" style={BackGroundColorStyle}>
          <p className="alert-message">
            <span>{alert.response}!!</span>
            {alert.message}
          </p>
          <button className="alert-cross" onClick={() => modifyAlert("now")}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default function Footer() {
  const [data, SetData] = useState({
    fullname: "",
    email: "",
  });
  const [error, SetError] = useState("");
  const [alert, SetAlert] = useState({
    active: false,
    response: "",
    message: "",
    code: null,
    loading: false,
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (data.email && data.fullname) {
      const doc = axios.post(
        "https://www.google.com/",
        data
      );
      doc
        .then((response) => {
          SetError("");
          SetData({
            fullname: "",
            email: "",
          });
          SetAlert({
            active: false,
            response: "",
            message: "",
            code: null,
            loading: true,
          });
          setTimeout(() => {
            SetAlert({
              active: true,
              response: "Success",
              message:
                "Thanks for your subscription!! You will recieve notifications new updates and offers",
              code: 201,
              loading: false,
            });
          }, 2000);
        })
        .catch((err) => {
          SetAlert({
            active: false,
            response: "",
            message: "",
            code: null,
            loading: true,
          });
          setTimeout(() => {
            SetAlert({
              active: true,
              response: "Thanksyou",
              message:
                "You are already subscribed!! You will recieve notifications new updates and offers",
              code: 401,
              loading: false,
            });
          }, 2000);
        });
    } else {
      SetError("fullname and email address are required");
    }
  };
  const handleChange = (e) => {
    SetData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      <GlobalStyle />
      <footer>
        {alert.active && <AlertBox alert={alert} SetAlert={SetAlert} />}
        <div className="footer-container">
          <div className="footer-container-first">
            <div className="first-footer-block">
              <div className="left-section">
                <NavLink to="/">
                  <img src={logo} className="logo-img" alt="Logo" />
                </NavLink>
              </div>
              <div className="first-footer-block-container">
                <h1 className="footer-heading">Don't Miss Out.</h1>
                <p className="footer-para">
                  Subscribe and sign up for offers and best services
                </p>
                <form className="subscribe-form" onSubmit={handleClick}>
                  <div className="footer-subscribe-row">
                    <div className="footer-input-div">
                      <label htmlFor="name">Name*</label>
                      <input
                        value={data.fullname}
                        type="text"
                        name="fullname"
                        id="name"
                        placeholder="Enter your fullname"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="footer-input-div">
                      <label htmlFor="email">Email*</label>
                      <input
                        value={data.email}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email address"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <button className="footer-btn submit-btn" type="submit">
                    {!alert.loading && <p>SUBSCRIBE</p>}
                    {alert.loading && (
                      <div className="loading-container" id="loadingContainer">
                        <div className="loading"></div>
                      </div>
                    )}
                  </button>
                  <p className="error-submit">{error}</p>
                </form>
                <p className="terms-condition-para">
                  This is intended for customer. By signing up, you understand
                  and agree to our terms that your data will be collected and
                  used subject to our <span>Privacy Policy</span> and
                  <span>Terms & Condition</span>
                </p>
                <p className="required-info-para">*Required Information</p>
                <section className="socials-list">
                  <div className="socials-list-container">
                    <div className="social-icon">
                      <a href="https://www.google.com/">
                        <InstagramIcon className="icons-socials" />
                      </a>
                    </div>
                    <div className="social-icon">
                      <a href="https://www.google.com/">
                        <TwitterIcon className="icons-socials" />
                      </a>
                    </div>
                    <div className="social-icon">
                      <a href="https://www.google.com/">
                        <FacebookIcon className="icons-socials" />
                      </a>
                    </div>
                    <div className="social-icon">
                      <a href="https://www.google.com/">
                        <YouTubeIcon className="icons-socials" />
                      </a>
                    </div>
                    <div className="social-icon">
                      <a href="https://www.google.com/">
                        <PinterestIcon className="icons-socials" />
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="second-footer-block">
              <div className="second-footer-block-container">
                <h1 className="footer-section-heading">COMPANY</h1>
                <div className="footer-section-container">
                  <ul>
                    <li>
                      <NavLink to="/about" className="Footer-NavLinks">
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/ourteam" className="Footer-NavLinks">
                        Experts
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="third-footer-block">
              <div className="third-footer-block-container">
                <h1 className="footer-section-heading">IMPORTANT LINKS</h1>
                <div className="footer-section-container">
                  <ul>
                    <li>
                      <NavLink to="/contact" className="Footer-NavLinks">
                        Contact Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#left-btn" className="Footer-NavLinks">
                        My Account
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#maps" className="Footer-NavLinks">
                        Store Locator
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/testimonial" className="Footer-NavLinks">
                        Testimonial
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/vehicalsmodels" className="Footer-NavLinks">
                        Vehical Models
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="fourth-footer-block">
              <h1 className="footer-section-heading">MORE TO EXPLORE</h1>
              <div className="footer-section-container">
                <ul>
                  <li>
                    <NavLink to="/ourteam" className="Footer-NavLinks">
                      Our Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/testimonial" className="Footer-NavLinks">
                      Feedback
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="Footer-NavLinks">
                      Home
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-container-second">
            <div className="footer-container-second-first-item">
              <a
                href="https://car-rental-five-indol.vercel.app/"
                target="_blank"
              >
                CARRENTAL.COM
              </a>
            </div>
            <div className="footer-container-second-second-item">
              <a href="https://www.google.com/" target="_blank">
                Designed by - Paras,Priyansh,Mitul,Pratik
              </a>
              <a
                className="footer-container-second-second-item-btn"
                href="#navbar"
              >
                <NavigationIcon
                  style={{
                    color: "white",
                  }}
                />
              </a>
            </div>
          </div>
          <div className="footer-container-third">
            <p className="terms-condition-para">
              This is intended for customer. By signing up, you understand and
              agree to our terms that your data will be collected and used
              subject to our
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
