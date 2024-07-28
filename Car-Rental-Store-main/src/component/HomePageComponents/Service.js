import React from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import styled from "styled-components";
import SectionImg1 from '../images/Section-img/section-img-1.jpg'
import SectionImg2 from '../images/Section-img/section-img-2.jpg'
import SectionImg3 from '../images/Section-img/section-img-3.jpg'
export default function Service() {
  const Wrapper = styled.section`
    .services-section {
      margin: 10px 10px;
      margin-top: 45rem;
      height: 35rem;
      padding: 10px 10px;
    }

    .headings {
      text-align: center;
      padding: 10px 10p;
      /* font-style: italic; */
      letter-spacing: 2px;
      font-weight: 600;
      font-size: 1.9rem;
      margin: 10px 10px;
      font-family: Poppins, sans-serif;
    }

    .services {
      margin-top: 0;
      height: 31rem;
      /* border: 2px solid; */
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-service {
      display: flex;
      /* border: 2px solid; */
      height: 28rem;
      padding: 10px 35px;
      width: 72%;
      box-sizing: border-box;
      flex-direction: column;
    }

    .img-text {
      /* border-radius: 6px; */
      box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: #f2f2f2;
      overflow: hidden;
      transition: 0.3s all;
    }

    .img-text img:hover {
      cursor: pointer;
      opacity: 0.6;
    }

    .img-text-img {
      height: 84%;
      width: 68%;
      overflow: hidden;
      scale: 1.7;
    }

    .img-text-heading {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: 0;
      color: white;
      width: 100%;
      text-decoration: none;
      text-align: center;
      box-sizing: border-box;
      height: 4rem;
      font-family: Poppins, sans-serif;
      font-size: 23px;
      padding: 0px;
      background-color: #f2f2f2;
      color: #3a3a3a;
      opacity: 0.9;
      font-weight: bold;
    }

    .img-text-heading:hover {
      color: var(--btn-background-color);
    }

    .hero-para {
      color: #706f7b;
      font-family: Rubik, sans-serif;
      font-size: 17px;
      line-height: 22px;
      margin: 50px 10px;
      font-weight: 300;
      text-align: center;
    }
  `;

  return (
    <>
      <GlobalStyle />
    
        <Wrapper className="services-section">
          <div className="services-container-section">
            <h1 className="headings">
              LOOKING FOR THE <span id="span-of-h">RIGHT SERVICE?</span>
            </h1>

            <div className="services">
              <div className="hero-service">
                <div className="img-text">
                  <img
                    src={SectionImg1}
                    className="img-text-img"
                    alt="Section-img-1"
                  />
                  <a href="/" className="img-text-heading">
                    Bussiness Retal
                  </a>
                </div>
                <p className="hero-para">
                  You can completely rely on us while having an important
                  business trip. We guarantee a successful and safe driving
                </p>
              </div>

              <div className="hero-service">
                <div className="img-text">
                  <img
                    src={SectionImg2}
                    className="img-text-img"
                    alt="Section-img-1"
                  />
                  <a href="/" className="img-text-heading">
                    Luxury Cars
                  </a>
                </div>
                <p className="hero-para">
                  Our company provides an impressive selection of luxury cars
                  for first class business and private short distance trips.
                </p>
              </div>

              <div className="hero-service">
                <div className="img-text">
                  <img
                    src={SectionImg3}
                    className="img-text-img"
                    alt="Section-img-1"
                  />
                  <a href="/" className="img-text-heading">
                    Travel Retal
                  </a>
                </div>
                <p className="hero-para">
                  Traveling with comfort is our company's goal and top priority.
                  We care about your experience anywhere you go.
                </p>
              </div>
            </div>
          </div>
      
      </Wrapper>
    </>
  );
}
