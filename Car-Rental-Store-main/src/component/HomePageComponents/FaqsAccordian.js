import React, { useState } from "react";
import styled from "styled-components";
import MyfaqsAccordian from "./MyfaqsAccordian";
import bgImage from "../images/FAQ section Bg image/bg-image2.png";
import { UseFaqValue } from "../Admin/FaqProvider";

export default function FaqsAccordian() {
  const MainSection = styled.section`
    margin-bottom: 10rem;
    /* background: url(${bgImage}); */

    .faqContainer {
      display: flex;
      flex-direction: column;
      position: relative;
      top: 3rem;
      /* height: 50rem; */
    }
    .faq-Page-Heading {
      text-align: center;
      font-size: 1.65rem;
      text-transform: capitalize;
      font-family: Poppins, "san-serif";
    }
    .faq-Page-Sub-Heading {
      font-family: Poppins, "san-serif";
      font-size: 2.5rem;
      letter-spacing: 1px;
      text-transform: capitalize;
      text-align: center;
    }
    .faq-Page-para-Heading {
      color: var(--text-color);
      font-family: Rubik, sans-serif;
      font-size: 18px;
      line-height: 22px;
      font-weight: 300;
      text-align: center;
      margin: 10px;
      padding: 0 15rem;
    }
    .faq-page-content {
      margin: 1rem 0;
      /* border: 2px solid; */
      /* height: 29rem; */
      width: 100%;
      padding: 2rem 0;
      display: flex;
      justify-content: center;
      background: url("../images//FAQ section Bg image/bg-image.png") center
        center no-repeat;
      background-position: 0 70%;
      background-repeat: no-repeat;
      background-size: auto;
      /* padding: 10rem 0; */
    }
    .faq-content-div-box {
      display: flex;
      justify-content: center;
      /* border: 2px solid; */
      width: 100%;
    }
    .faq-content-div-box-content {
      /* border: 2px solid; */
      /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1); */
      width: 50rem;
      width: 50rem;
      display: flex;
      flex-direction: column;
      gap: 7px;
    }
    .faq-content-div-box-hero {
      display: flex;
      flex-direction: column;
      justify-content: left;
      /* height: 11rem; */
      /* align-items: center; */
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
      /* border: 2px solid; */
      transition: max-height 0.5s ease;
    }
    .faq-content-div-box-hero-main {
      display: flex;
      justify-content: left;
      align-items: center;
      /* border: 2px solid; */
      gap: 2rem;
      height: 5rem;
      padding: 8px 32px;
      cursor: pointer;
    }
    .faq-content-div-box-hero-main p {
      cursor: pointer;
      border-radius: 50%;
      padding: 7px;
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      /* transition: 0.5s ease; */
      /* color: ${(props) => (props.show ? "white" : "black")}; */
    }
    .question {
      cursor: pointer;
      font-family: "Rubik", sans-serif;
      font-size: 21px;
    }
    .answers {
      transition: 0.5s ease;
      color: var(--text-color);
      font-family: Rubik, sans-serif;
      font-size: 18px;
      line-height: 22px;
      font-weight: 300;
      margin: 10px;
      text-align: left;
      margin: 10px;
      padding: 10px 10px 10px 40px;
      transition: 0.4s ease;
      background-color: var(--white-color);
    }
  `;
  const { FaqArray, SetFaqArray } = UseFaqValue();
  const [data] = useState(FaqArray);
  const [ActiveQuestionId, SetActiveQuestionId] = useState(null);

  const HandleToggle = (questionID) => {
    SetActiveQuestionId((prevId) =>
      prevId === questionID ? null : questionID
    );
  };
  return (
    <>
      <MainSection className="faqPage">
        <div className="faqContainer">
          <h1 className="faq-Page-Heading">FAQ</h1>
          <h1 className="faq-Page-Sub-Heading">Frequently Asked Questions</h1>
          <p className="faq-Page-para-Heading">
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
          <div className="faq-page-content">
            <div className="faq-content-div-box">
              <div className="faq-content-div-box-content">
                {data.map((CurrElement, Index) => {
                  return (
                    <MyfaqsAccordian
                      key={Index}
                      isActive={ActiveQuestionId === Index}
                      onToggle={() => {
                        HandleToggle(Index);
                      }}
                      {...CurrElement}
                    />
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
