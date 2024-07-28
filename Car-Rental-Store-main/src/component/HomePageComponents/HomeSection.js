import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import homeImage from "../images/Car-img2.jpg";

export default function HomeSection() {
  const HomeContainer = styled.section`
    height: 40rem;

    .home-content-section {
      /* border: 2px solid black; */
      position: absolute;
      right: 0;
      margin: 40px 5px;
      margin-top: 5rem;
      max-width: 34rem;
      height: 14.2rem;
    }

    .home-container {
      display: flex;
      flex-direction: column;
      font-family: Poppins, sans-serif;
      gap: 21px;
    }

    .h-of-home-container {
      font-size: 3.2rem;
      font-weight: 700;
    }

    .h-of-home-container span,
    .headings span {
      color: #ff4d30;
    }

    .home-container p {
      color: #706f7b;
      font-family: Rubik, sans-serif;
      font-size: 17px;
      line-height: 22px;
      font-weight: 500;
    }

    .home-btn {
      display: flex;
      align-items: center;
      gap: 37px;
      margin-top: 17px;
      height: 3.5rem;
      max-width: 23rem;
      /* border: 2px solid black; */
    }

    .home-container-btn {
      border: none;
      width: 165px;
      height: 3.9rem;
      font-weight: bold;
      border-radius: 5px;
      box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35);
      color: var(--white-color);
      cursor: pointer;
      font-size: 16px;
    }

    #left-home-container-btn {
      background-color: var(--btn-background-color);
    }

    #left-home-container-btn:hover {
      box-shadow: 0 10px 15px 0 rgba(99, 21, 5, 0.35);
    }

    #right-home-container-btn {
      background-color: var(--black-color);
      transition: 0.5s;
      transition-property: color, background-color;
    }

    #right-home-container-btn:hover {
      color: var(--black-color);
      background-color: var(--white-color);
      border: 2px solid black;
    }

    #right-home-container-btn span {
      margin-left: 10px;
    }
  `;

  const Homeimages = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    height: 113%;
    width: 100%;
    z-index: -1;
  `;

  return (
    <>
      <GlobalStyle />
      <Homeimages src={homeImage} alt="Home-image" />
      <HomeContainer id="Home-container-section">
        <aside className="home-content-section">
          <div className="home-container">
            <h1 className="h-of-home-container">
              Make Your Ride <br />
              <span id="span-of-h">Easy & Affordable</span>
            </h1>
            <p>
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="home-btn">
              <button
                className="home-container-btn"
                id="left-home-container-btn"
              >
                Book Now
              </button>
              <button
                className="home-container-btn"
                id="right-home-container-btn"
              >
                Learn More <span></span>
              </button>
            </div>
          </div>
        </aside>
      </HomeContainer>
    </>
  );
}
