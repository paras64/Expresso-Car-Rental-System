import React, { useState, useRef } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./Style.css";
import { GlobalStyle } from "../styles/GlobalStyle";
import axios from "axios";
const ConfirmPassword = () => {
  const navigate = useNavigate();
  const [visibility, SetVisibility] = useState({
    firstPasswordBox: false,
    SecondPasswordBox: false,
    message: "",
    loading: false,
  });
  const { userEmail } = useParams();
  const [confirmPassword, setconfirmPassword] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });
  const passwordData = useRef([]);
  const VisibilityToggle = (index) => {
    console.log(index);
    if (index == 0) {
      if (confirmPassword.newPassword) {
        if (visibility.firstPasswordBox) {
          passwordData.current[index].type = "password";
          SetVisibility((prevdata) => {
            return {
              ...prevdata,
              firstPasswordBox: false,
            };
          });
        } else {
          passwordData.current[index].type = "text";
          SetVisibility((prevdata) => {
            return {
              ...prevdata,
              firstPasswordBox: true,
            };
          });
        }
      } else {
        return;
      }
    } else {
      if (confirmPassword.confirmNewPassword) {
        if (visibility.SecondPasswordBox) {
          passwordData.current[index].type = "password";
          SetVisibility((prevdata) => {
            return {
              ...prevdata,
              SecondPasswordBox: false,
            };
          });
        } else {
          passwordData.current[index].type = "text";
          SetVisibility((prevdata) => {
            return {
              ...prevdata,
              SecondPasswordBox: true,
            };
          });
        }
      } else {
        return;
      }
    }
  };

  const resetAll = (e) => {
    e.preventDefault();
    setconfirmPassword({
      newPassword: "",
      confirmNewPassword: "",
    });
  };
  const handleChange = (e) => {
    setconfirmPassword((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  };
  const updateRef = (index) => (ref) => {
    passwordData.current[index] = ref;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    SetVisibility((prevdata) => {
      return {
        ...prevdata,
        loading: true,
      };
    });
    if (confirmPassword.newPassword && confirmPassword.confirmNewPassword) {
      if (confirmPassword.newPassword === confirmPassword.confirmNewPassword) {
        const doc = axios.post(`https://car-rental-backend-1tpp.onrender.com/forgotpassword/update`, {
          newPassword: confirmPassword.newPassword,
          confirmNewPassword: confirmPassword.confirmNewPassword,
          userEmail,
        });
        doc
          .then((response) => {
            setTimeout(() => {
              SetVisibility((prevdata) => {
                return {
                  ...prevdata,
                  message: response.data,
                  loading: false,
                };
              });
              alert("Password has been updated");
              navigate("/login");
            }, 2000);
          })
          .catch((err) => {
            console.log("hfk", err);
            setTimeout(() => {
              SetVisibility((prevdata) => {
                return {
                  ...prevdata,
                  message: err.response.data,
                  loading: false,
                };
              });
            }, 2000);
          });
      } else {
        SetVisibility((prevdata) => {
          return {
            ...prevdata,
            loading: true,
          };
        });
        setTimeout(() => {
          SetVisibility((prevdata) => {
            return {
              ...prevdata,
              message: "Passwords does not match",
              loading: false,
            };
          });
        }, 2000);
      }
    } else {
      SetVisibility((prevdata) => {
        return {
          ...prevdata,
          message: "Please complete the fields",
          loading: false,
        };
      });
    }
  };
  return (
    <>
      <GlobalStyle />
      <section className="confirm-password">
        <div className="confirm-password-container">
          <h1 className="update-heading">Update Password</h1>
          <form className="update-password-form">
            <div>
              <label htmlFor="password">New Password</label>
              <article className="password-article">
                <input
                  ref={updateRef(0)}
                  type="password"
                  name="newPassword"
                  id="password"
                  value={confirmPassword.newPassword}
                  onChange={handleChange}
                />
                {visibility.firstPasswordBox ? (
                  <VisibilityIcon
                    onClick={() => VisibilityToggle(0)}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <VisibilityOffIcon
                    onClick={() => VisibilityToggle(0)}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </article>
            </div>
            <div>
              <label htmlFor="password">Confirm Password</label>
              <article className="password-article">
                <input
                  ref={updateRef(1)}
                  type="password"
                  name="confirmNewPassword"
                  id="password"
                  value={confirmPassword.confirmNewPassword}
                  onChange={handleChange}
                />
                {visibility.SecondPasswordBox ? (
                  <VisibilityIcon
                    onClick={() => VisibilityToggle(1)}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <VisibilityOffIcon
                    onClick={() => VisibilityToggle(1)}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </article>
            </div>
            <div>
              <button onClick={resetAll}>Reset All</button>
              <button onClick={handleSubmit} className="submit-btn">
                {!visibility.loading && <p>Update</p>}
                {visibility.loading && (
                  <div className="loading-container" id="loadingContainer">
                    <div className="loading"></div>
                  </div>
                )}
              </button>
            </div>
          </form>
          <div className="message">
            <p>{visibility.message}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConfirmPassword;
