import React, { useState } from "react";
import "./AdminStyle/LoginStyle.css";
import { GlobalStyle } from "../styles/GlobalStyle";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAdminDataContext } from "./AdminProvider";
const AdminLogin = () => {
  const { updateAdminData } = useAdminDataContext();
  const navigate = useNavigate();
  const initialAdminData = {
    firstname: "",
    email: "",
    password: "",
    token: "",
    message: "",
  };
  const [adminData, SetAdminData] = useState(initialAdminData);
  const handleChange = (e) => {
    SetAdminData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (adminData.email && adminData.password) {
      const doc = axios.post(
        "https://car-rental-backend-1tpp.onrender.com/admin/login",
        adminData
      );
      doc
        .then((response) => {
          alert("Login Successful");
          sessionStorage.setItem(
            "AdminData",
            JSON.stringify({
              firstname: response.data.data.firstname,
              token: response.data.data.token,
            })
          );
          updateAdminData(response.data.data);
          navigate("/admin/dashboard");
        })
        .catch((err) => {
          SetAdminData({
            ...initialAdminData,
            message: err.response.data.message,
          });
        });
    } else {
      SetAdminData((prevData) => {
        return {
          ...prevData,
          message: "Please complete the required fields",
        };
      });
    }
  };

  return (
    <>
      <GlobalStyle />
      <section className="admin_login_section">
        <div className="admin_login__hero"></div>
        <div className="admin_login">
          <div className="admin_login__form">
            <h1 className="login__heading">Login</h1>
            <form className="login__form">
              <input
                type="email"
                value={adminData.email}
                name="email"
                placeholder="enter your email"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                value={adminData.password}
                placeholder="enter your password"
                onChange={handleChange}
                required
              />
              <button className="admin_login__btn" onClick={handleClick}>
                Continue
              </button>
            </form>
            <p>{adminData.message}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLogin;
