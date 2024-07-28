import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { GlobalStyle } from "../styles/GlobalStyle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Navbar from "../Navbar";
import { useUserDataContext } from "./UserProvider";

const Login = () => {
  const { updateUserData } = useUserDataContext();
  const navigate = useNavigate();
  const passwordData = useRef("");
  const [data, SetData] = useState({
    email: "",
    password: "",
  });
  const [visibility, SetVisibility] = useState(false);
  const [loginAction, setloginAction] = useState({
    message: "",
    loading: false,
  });

  const resetAll = (e) => {
    e.preventDefault();
    SetData({
      email: "",
      password: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email && data.password) {
      const doc = axios.post("https://car-rental-backend-1tpp.onrender.com/auth/login", data);
      doc
        .then((response) => {
          updateUserData(response.data.data);
          sessionStorage.setItem(
            "UserDetails",
            JSON.stringify({
              token: response.data.data.token,
            })
          );
          SetData({
            email: "",
            password: "",
          });
          setloginAction({
            message: response.data.message,
            loading: true,
          });
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((err) => {
          
          setloginAction({
            message: "",
            loading: true,
          });
          setTimeout(() => {
            setloginAction({
              message:err.response.data.message,
              loading: false,
            });
          }, 2000);
        });
    } else {
      alert("Please complete the details to continue");
    }
  };
  const handleChange = (e) => {
    SetData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
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
      <section className="login">
        <div className="login-container">
          <div className="login-content">
            <h1 className="login-heading">Welcome back to Car Rental Store</h1>
            <h1 className="login-heading">
              Log in to continue
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
              Dont have an account?{" "}
              <NavLink to="/register">Create a new account</NavLink>
            </p>
            <form className="login-form">
              <div>
                <label htmlFor="login">Email</label>
                <input
                  type="email"
                  name="email"
                  id="login"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
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

              <div>
                <button onClick={resetAll}>Reset All</button>
                <button onClick={handleSubmit} className="submit-btn">
                  {!loginAction.loading && <p>Sign In</p>}
                  {loginAction.loading && (
                    <div className="loading-container" id="loadingContainer">
                      <div className="loading"></div>
                    </div>
                  )}
                </button>
              </div>
              <button
                className="forgot-password"
                onClick={() => navigate("/forgotpassword")}
              >
                Forgot Password ?
              </button>
            </form>
            <div className="message">
              <p>{loginAction.message}</p>
            </div>
          </div>
          <aside className="login-image"></aside>
        </div>
      </section>
    </>
  );
};

export default Login;
