import React from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import styled from "styled-components";

export default function WhyUs(props) {
  const Wrapper = styled.section`
    .why-us-header {
      height: 42rem;
      padding: 1rem 5rem;
    }

    .why-us-container {
      display: flex;
      /* align-items: center; */
      flex-direction: row;
      gap: 4rem;
      /* border: 2px solid; */
      height: 34rem;
    }

    .left-section-of-why-us,
    .right-section-of-why-us {
      padding: 2rem 4rem;
    }

    .left-section-of-why-us {
      position: relative;
      top: 24px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-family: "Poppins", sans-serif;
    }
    .why-us-heading {
      font-size: 25px;
      color: var(--btn-background-color);
    }

    .why-us-heading2 {
      font-size: 2rem;
    }

    .why-us-para {
      color: var(--text-color);
      font-family: Rubik, sans-serif;
      font-size: 17px;
      line-height: 22px;
      font-weight: 300;
      text-align: left;
      margin: 2rem 0;
    }

    .right-section-of-why-us {
      display: flex;
      gap: 2rem;
      /* border: 2px solid; */
      flex-direction: column;
      padding: 0;
      width: 5rem;
      width: 120rem;
    }

    .why-choose-us-article {
      display: flex;
      flex-direction: row;
      /* border: 2px solid; */
      align-items: center;
      height: 10rem;
      gap: 2rem;
    }

    .why-choose-us-icon {
      margin: 29px 0;
      font-size: 3rem;
      color: var(--btn-background-color);
      padding: 1.45rem 1.6rem;
      border-radius: 4rem;
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      background-color: #f3e5e5;
    }

    .right-section-of-why-us article:nth-child(2) {
      border-radius: 50% 70% 60% 40% / 60% 30% 70% 40%;
    }

    .why-us-text-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .right-section-of-why-us-heading {
      font-family: Poppins, sans-serif;
      font-size: 20px;
    }

    .right-section-of-why-us-para {
      color: var(--text-color);
      font-family: Rubik, sans-serif;
      padding-right: 20px;
      font-size: 17px;
      line-height: 22px;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <Wrapper className="why-us-section">
        <div className="why-us-header">
          <div className="why-us-container">
            <div className="left-section-of-why-us">
              <h1 className="why-us-heading">{props.title}</h1>
              <h1 className="why-us-heading2">{props.semiTitle}</h1>
              <p className="why-us-para">{props.para}</p>
            </div>

            <div className="right-section-of-why-us">
              <article className="why-choose-us-article">
                <div className="why-choose-us-icon">
                  {/* <AiFillCar/> */}
                  {props.icon1}
                </div>
                <div className="why-us-text-container">
                  <h1 className="right-section-of-why-us-heading">
                    {props.point1}
                  </h1>
                  <p className="right-section-of-why-us-para">
                    {props.point1para}
                  </p>
                </div>
              </article>

              <article className="why-choose-us-article">
                <div className="why-choose-us-icon">{props.icon2}</div>
                <div className="why-us-text-container">
                  <h1 className="right-section-of-why-us-heading">
                    {props.point2}
                  </h1>
                  <p className="right-section-of-why-us-para">
                    {props.point2para}
                  </p>
                </div>
              </article>

              <article className="why-choose-us-article">
                <div className="why-choose-us-icon">{props.icon3}</div>
                <div className="why-us-text-container">
                  <h1 className="right-section-of-why-us-heading">
                    {props.point3}
                  </h1>
                  <p className="right-section-of-why-us-para">
                    {props.point3para}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
WhyUs.defaultProps = {
  headingFirstHeight: "25px",
  headingSecondHeight: "2rem",
};
