import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";

const  AboutHome = (props) => {
  const AboutHomeSection = styled.section`
    height: 30rem;
    /* border: 2px solid; */
    width: 100%;
    display: flex;
    flex-direction: column;
    .AboutHomeSection-container {
      position: relative !important;
      right: 0;
      top: -8rem;
      height: 31rem;
      width: 100%;
      /* border: 2px solid; */
      background-image: url(${props.img});
      background-position: 50% center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      z-index: -10;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .homeAboutImage {
      background-color: hsla(0, 0%, 100%, 0.8);
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
    }
    .AboutHomeSection-container-main-content-heading {
      z-index: 1;
      opacity: 1;
      font-size: 2rem;
      text-transform: uppercase;
    }
    .lmfpEo,
    .AboutHomeSection-container-main-content-heading span {
      color: var(--btn-background-color);
    }
    .AboutHomeSection-container p {
      display: block;
      text-transform: capitalize;
      z-index: 1;
      opacity: 1;
      font-size: 2rem;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <AboutHomeSection className="AboutHomeSection">
        <div className="AboutHomeSection-container">
          <div className="homeAboutImage"></div>
          <h1 className="AboutHomeSection-container-main-content-heading">
            {props.headingText} <span>{props.spanText}</span>
          </h1>
          <br />
          <p>{props.Subheading} </p>
        </div>
      </AboutHomeSection>
    </>
  );
};

export default AboutHome;
