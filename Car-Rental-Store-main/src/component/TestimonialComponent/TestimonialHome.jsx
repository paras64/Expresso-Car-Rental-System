import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TestimonialHome = () => {
  const navigate = useNavigate();

  const TestimonialHomeSection = styled.section`
    /* border: 2px solid; */
    height: 35rem;
    width: 100%;
    margin-top: -4rem;
    padding: 0px 20px 40px 54px;

    .testimonial-home-container {
      height: 30rem;
      width: 100%;
      display: grid;
      grid-template-columns: 23rem 44rem;
      padding: 0px 20px 40px 54px;
      grid-template-rows: 100%;

      gap: 4rem;
    }
    .testimonial-home-heading {
        padding: 0px 20px 40px 80px;
      font-family: Poppins, sans-serif;
      font-size: 2.2rem;
    }

    .first {
      /* border: 2px solid; */
      height: 100%;
      width: 100%;
      padding: 20px 31px;
    }
    .first h1 {
      font-size: 1.2rem;
      font-family: "Poppins";
      margin: 5px 0;
      color:var(--btn-background-color);

    }
    .first h2 {
      font-size: 29px;
      font-family: Poppins;
    }
    .first p {
      color: var(--text-color);
      letter-spacing: 0px;
      font-family: Rubik, sans-serif;
      font-size: 18px;
      line-height: 29px;
      font-weight: 500;
      text-align: left;
      margin: 10px 0;
    }
    .first button {
      margin: 15px 0;
      border-radius: 5px;
      width: 13rem;
      height: 4rem;
      font-size: 18px;
      font-family: Rubik, sans-serif;
      border: none;
      background-color: var(--btn-background-color);
      font-weight: bold;
      box-shadow: rgba(255, 83, 48, 0.35) 0px 10px 15px 0px;
      cursor: pointer;
      color: var(--white-color);
    }
    .first button:hover {
      box-shadow: 0 10px 15px 0 rgba(211, 57, 26, 0.35);
    }
    .second {
      /* border: 2px solid; */
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      overflow: hidden;
    }
    .video {
      cursor: pointer;
      width: 720px;
      height: 405px;
    }
  `;

  return (
    <>
      <TestimonialHomeSection>
        <h1 className="testimonial-home-heading">
        Everyday Excellence in Customer Service.
        </h1>
        <div className="testimonial-home-container">
          <div className="first">
            <h1>A word from CEO</h1>
            <h2>Our Moto</h2>
            <p>
            Driving Dreams, One Rental at a Time. Your Journey Begins with Us. Choose Your Adventure Today!
            </p>
            <button onClick={()=> navigate('/about')}>Explore our journey</button>
          </div>
          <div className="second">
            <video
              className="video"
              controls
              poster="https://www.oberlo.com/media/1602065147-dropshipping-101-poster.jpg?dpr=0."
            >
              <source
                src="https://stream.mux.com/y0253JlrGHfJnbvEsJgiwApOml64PlhuD/high.mp4"
                type="video/mp4 "
              />
            </video>
          </div>
        </div>
      </TestimonialHomeSection>
    </>
  );
};

export default TestimonialHome;
