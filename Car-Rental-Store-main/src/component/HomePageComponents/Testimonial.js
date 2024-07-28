import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import plant3 from "../images/Testimonial/3.png";
import user2 from "../images/Testimonial/user-2.webp";
import axios from "axios";
export default function Testimonial() {
  const [testimonialData, SetTestimonialData] = useState([]);
  const getTestimonialData = async () => {
    await axios
      .get("https://car-rental-backend-1tpp.onrender.com/testimonials?limit=2")
      .then((response) => {
        SetTestimonialData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTestimonialData();
  }, []);
  const MainSection = styled.section`
    /* border: 2px solid; */
    height: 73rem;
    position: relative;
    top: 3rem;
    .testimonial-container {
      background-color: var(--page-background-color);
      /* position: relative;
      top: 3rem; */
      height: 63rem;
    }
    .testimonial-home {
      display: flex;
      flex-direction: column;
      position: relative;
      top: 5rem;
      height: 50rem;
    }
    .testimonial-home-heading {
      text-align: center;
      font-size: 1.65rem;
      text-transform: capitalize;
      font-family: "Poppins", sans-serif;
    }
    .testimonial-home-sub-heading {
      font-size: 2.5rem;
      letter-spacing: 1px;
      text-transform: capitalize;
      text-align: center;
      font-family: "Poppins", sans-serif;
    }
    .testimonial-home-heading-para {
      color: var(--text-color);
      font-family: Rubik, sans-serif;
      font-size: 18px;
      line-height: 22px;
      font-weight: 300;
      text-align: center;
      margin: 10px;
      padding: 0 15rem;
    }
    .testimonial-content-box {
      margin: 3rem 0;
      /* border: 2px solid; */
      height: 35rem;
      width: 100%;
      padding: 4rem 5rem;
      display: flex;
      justify-content: center;
      /* align-items: center; */
      gap: 6rem;
    }
    .testimonial-content-box-container {
      border: 3px solid;
      height: 35rem;
      width: 25rem;
      border-radius: 1.3rem;
      overflow: hidden;
    }
    .testimonial-content-box-top-part {
      /* border: 2px solid; */
      height: 3rem;
      width: 100%;
      background-color: var(--btn-background-color);
      display: flex;
      align-items: center;
      justify-content: left;
    }
    .svg-img-dot {
      width: 56px;
    }
    .testimonial-content-box-mid-part {
      /* border: 2px solid; */
      height: 23rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem 3rem;
    }
    .testimonial-content-box-mid-part p {
      color: var(--black-color);
      font-family: Rubik, sans-serif;
      font-size: 18px;
    }
    .testimonial-content-box-bottom-part {
      /* border: 2px solid; */
      height: 9rem;
      width: 100%;
      display: flex;
    }
    .testimonial-content-box-bottom-part img {
      height: 10rem;
      width: 10rem;
      position: relative;
      left: -10px;
    }

    .testimonial-content-box-bottom-part .first-img {
      position: relative;
      left: -42px;
    }
    .testimonial-content-box-bottom-img-part {
      /* width: 6rem; */
    }
    .testimonial-content-box-author {
      /* border: 2px solid; */
      font-family: "Poppins", sans-serif;
      display: flex;
      position: relative;
      top: 10px;
    }
    .testimonial-content-box-author h1 {
      font-size: 1rem;
    }
    .testimonial-content-box-author p {
      font-family: sans-serif;
      font-weight: 600;
      font-size: 15px;
    }
    .user-img {
      /* border: 2px solid; */
    }
    .user-img img {
      /* border: 2px solid; */
      height: 5rem;
      width: 5rem;
      border-radius: 59px;
      box-shadow: rgba(255, 83, 48, 0.35) 0px 10px 15px 0px;
    }
    .author-details {
      position: relative;
      top: 10px;
    }
  `;
  if (!testimonialData[0]) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <GlobalStyle />
      <MainSection>
        <div className="testimonial-container">
          <div className="testimonial-home">
            <h1 className="testimonial-home-heading">Reviewed by People</h1>
            <h1 className="testimonial-home-sub-heading">
              Client's Testimonials
            </h1>
            <p className="testimonial-home-heading-para">
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </p>
            <div className="testimonial-container-content">
              <div className="testimonial-content-box">
                {testimonialData.map((testimonial, index) => {
                  return (
                    <div
                      key={index}
                      className="testimonial-content-box-container"
                    >
                      <div className="testimonial-content-box-top-part">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100"
                          height="100"
                          className="svg-img-dot"
                        >
                          <circle cx="50" cy="50" r="5" fill="black" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100"
                          height="100"
                          className="svg-img-dot"
                        >
                          <circle cx="50" cy="50" r="5" fill="black" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100"
                          height="100"
                          className="svg-img-dot"
                        >
                          <circle cx="50" cy="50" r="5" fill="black" />
                        </svg>
                      </div>
                      <div className="testimonial-content-box-mid-part">
                        <p>“{testimonial.message}”</p>
                      </div>
                      <div className="testimonial-content-box-bottom-part">
                        <div className="testimonial-content-box-bottom-img-part">
                          <img src={plant3} className="second-img" alt="img" />
                        </div>
                        <div className="testimonial-content-box-author">
                          <div className="user-img">
                            <img src={user2} alt="" />
                          </div>
                          <div className="author-details">
                            <h1>
                              {testimonial.firstname} {testimonial.lastname}
                            </h1>
                            <p>Customer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </MainSection>
    </>
  );
}
