import React, { useState, useEffect } from "react";
import "./Style.css";
import { GlobalStyle } from "../styles/GlobalStyle";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserDataContext } from "../LoginRegistration/UserProvider";
const TestimonialForm = () => {
  const { userData } = useUserDataContext();
  const navigate = useNavigate();
  const data = userData;
  const [feedbackData, SetFeedbackData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    response: "",
    loading: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      feedbackData.firstname &&
      feedbackData.lastname &&
      feedbackData.email &&
      feedbackData.message
    ) {
      if (
        feedbackData.message.split("").length < 220 ||
        feedbackData.message.split("").length > 320
      ) {
        SetFeedbackData((prevData) => {
          return {
            ...prevData,
            response:
              "Message should be minimum 220 character and maximum 320 character long",
          };
        });
        return;
      }
      SetFeedbackData((prevData) => {
        return {
          ...prevData,
          loading: true,
        };
      });
      if (userData.token == "") {
        setTimeout(() => {
          SetFeedbackData((prevData) => {
            return {
              ...prevData,
              loading: false,
            };
          });
          alert("Please login before giving the feedback");
          navigate("/login");
        }, 2000);
        return;
      }
      const doc = axios.post(
        "https://car-rental-backend-1tpp.onrender.com/testimonials/addtestimonial",
        feedbackData
      );
      doc
        .then((response) => {
          setTimeout(() => {
            alert(response.data.message);
            SetFeedbackData((prevData) => {
              return {
                ...prevData,
                message: "",
                loading: false,
                response: response.data.message,
              };
            });
          }, 2000);
        })
        .catch((err) => {
          setTimeout(() => {
            SetFeedbackData((prevData) => {
              return {
                ...prevData,
                loading: false,
                response: "Something went wrong",
              };
            });
          }, 2000);
        });
    } else {
      alert("Please complete the fields");
      return;
    }
  };
  const resetAll = (e) => {
    e.preventDefault();
    SetFeedbackData({
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    });
  };
  useEffect(() => {
    // Set initial state from localStorage or other sources
    if (data) {
      SetFeedbackData({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        message: "",
        response: "",
        loading: false,
      });
    }
  }, []);
  const handleChange = (e) => {
    SetFeedbackData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <GlobalStyle />
      <section className="feedback-component" id="feedback">
        <div className="testimonial-form-container">
          <div className="content">
            <div className="content-container">
              <h1 className="content-container-heading-first">
                Please helps us Improve
              </h1>
              <h1 className="content-container-heading-second">
                Give Us Your Feedback
              </h1>
              <form className="testimonial-feedback-form">
                <div className="testimonial-feedback-hero">
                  <div>
                    <label htmlFor="firstname">Firstname</label>
                    <input
                      type="text"
                      value={feedbackData.firstname}
                      name="firstname"
                      id="firstname"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="lastname">Lastname</label>
                    <input
                      type="text"
                      value={feedbackData.lastname}
                      name="lastname"
                      id="lastname"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="testimonial-feedback-hero">
                  <label htmlFor="feedback">Email</label>
                  <input
                    type="email"
                    value={feedbackData.email}
                    name="email"
                    id="feedback"
                    onChange={handleChange}
                  />
                </div>
                <div className="testimonial-feedback-hero">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="8"
                    onChange={handleChange}
                    value={feedbackData.message}
                    className="text-message"
                  ></textarea>
                  <p className="count-character">
                    min: 220 || {feedbackData.message.split("").length}
                    /320 characters
                  </p>
                </div>
                <div className="testimonial-feedback-hero">
                  <button onClick={resetAll}>Reset All</button>
                  <button onClick={handleSubmit} className="submit-btn">
                    {!feedbackData.loading && <p>Submit</p>}
                    {feedbackData.loading && (
                      <div class="loading-container" id="loadingContainer">
                        <div class="loading"></div>
                      </div>
                    )}
                  </button>
                </div>
              </form>
              <p className="response">{feedbackData.response}</p>
            </div>
          </div>
          <div className="testimonial-slideshow"></div>
        </div>
      </section>
    </>
  );
};

export default TestimonialForm;
