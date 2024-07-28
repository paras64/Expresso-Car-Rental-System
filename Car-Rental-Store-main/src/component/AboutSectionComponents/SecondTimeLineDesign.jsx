import React from "react";
import styled from "styled-components";
import hero1 from "../images/About section images/Timeline/hero-1.webp";
import hero2 from "../images/About section images/Timeline/hero-2.jpg";
import hero3 from "../images/About section images/Timeline/hero-3.jpg";
import hero4 from "../images/About section images/Timeline/hero-4.jpg";

const SecondTimeLineDesign = () => {
  const SecondTimeLineDesignSection = styled.section`
    height: 100%;
    width: 100%;
    /* border: 2px solid; */
    padding: 10px;
    .second-timeline {
      height: 100%;
      width: 100%;
      /* border: 2px solid; */
      padding: 10px;
      font-family: Poppins, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
    .second-timeline-container {
      box-shadow: 0 1px 3px rgba(23, 23, 23, 0.24);
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      width: 19rem;
      height: 100%;
      padding: 10px;
      font-size: 25px;
      text-align: center;
      /* border: 2px solid; */
    }
    .second-timeline-container img {
      /* border: 2px solid; */
      max-height: 15rem !important;
      max-width: 17rem !important;
    }
    .second-timeline-container h1 {
    }
    .second-timeline-first-container-sub {
      height: 50%;
      padding: 20px 10px;
      /* border: 2px solid; */
    }
    .second-timeline-container p {
      color: var(--text-color);
      font-family: Rubik, sans-serif;
      font-size: 17px;
      line-height: 22px;
      font-weight: 300;
      text-align: center;
      padding: 10px;
    }
    .extra-bg {
      background-color: var(--black-color);
      color: var(--white-color);
    }
  `;

  return (
    <SecondTimeLineDesignSection>
      <div className="second-timeline">
        <div className="second-timeline-container  ">
          <img src={hero1} alt="" />
          <div className="second-timeline-first-container-sub extra-bg">
            <h1>Facility Setup.</h1>
            <p>
              Design the layout of your dealership, including showroom, customer
              lounge, sales offices, service bays, and administrative areas.
            </p>
          </div>
        </div>
        <div className="second-timeline-container ">
          <div className="second-timeline-first-container-sub">
            <h1>Inventory Setup</h1>
            <p>
              Establish relationships with car manufacturers, distributors,
              wholesalers, and private sellers to source your inventory
            </p>
          </div>
          <img src={hero2} alt="" />
        </div>
        <div className="second-timeline-container ">
          <img src={hero3} alt="" />
          <div className="second-timeline-first-container-sub extra-bg">
            <h1>Customer Bonds</h1>
            <p>
              Plan a grand opening event to introduce your dealership to the
              community and potential customers.
            </p>
          </div>
        </div>
        <div className="second-timeline-container  ">
          <div className="second-timeline-first-container-sub">
            <h1>Deploying Cars</h1>
            <p>
              Deploying cars to customers is a crucial phase of the car
              dealership process, marking the culmination of your efforts to
              provide a seamless.
            </p>
          </div>
          <img src={hero4} alt="" />
        </div>
      </div>
    </SecondTimeLineDesignSection>
  );
};

export default SecondTimeLineDesign;
