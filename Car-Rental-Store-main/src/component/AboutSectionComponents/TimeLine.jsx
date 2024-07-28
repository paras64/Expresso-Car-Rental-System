import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import FirstTimeLineDesign from "./FirstTimeLineDesign";
import SecondTimeLineDesign from "./SecondTimeLineDesign";
import ThirdTimeLineDesign from "./ThirdTimeLineDesign";
const TimeLine = () => {
  const TimeLineSection = styled.section`
    /* border: 2px solid; */
    height: 63rem;
    width: 100% !important;
    padding: 0px 20px;
    background-color: var(--page-background-color);
    .timeline-container {
      height: 62rem;
      width: 100% !important;
      /* border: 2px solid; */
    }
    .timeline-container-content-heading {
      font-size: 25px;
      font-family: poppins, "sans-serif";
    }
    .timeline-container-content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      justify-content: center;
      height: 18rem;
      width: 100%;
    }

    .timeline-container-content-sub-heading {
      font-size: 2.2rem;
      line-height: 4rem;
      letter-spacing: 1px;
      text-transform: capitalize;
      font-family: poppins, "sans-serif";
    }

    .timeline-container-content p {
      color: var(--text-color);
      letter-spacing: 0px;
      font-family: Rubik, sans-serif;
      font-size: 18px;
      line-height: 29px;
      font-weight: 500;
      text-align: center;
      width: 38rem;
    }
    .timeline-path-content {
      width: 100%;
      height: 40rem;
      padding: 0px 20px;
    }
    .timeline-path-content-hero {
      /* border: 2px solid; */
      display: flex;
      flex-direction: column;
    }
    .timeline-path-content-hero-content {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 30rem;
      /* border: 2px solid red; */
      border-radius: 10px;
    }
    .timeline-path-content-hero-content-decider {
      /* border: 2px solid; */
      height: 11rem;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .timeline-path-content-hero-content-decider-btn {
      /* border: 2px solid; */
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .timeline-path-content-hero-content-decider-btn button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      outline: none;
      border: none;
      cursor: pointer;
      background-color: #000;
    }

    .timeline-path-content-hero-content-decider-btn span {
      height: 22px;
      width: 10rem;
      border-top: 6.5px solid black;
      position: relative;
      top: 10px;
    }
    .timeline-path-content-hero-content-decider-years {
      display: flex;
      /* border: 2px solid; */
      font-size: 23px;
      width: 53rem;
      justify-content: center;
      align-items: center;
      margin: auto;
      gap: 9rem;
    }
  `;
  const [clickedBtn, SetClickedBtn] = useState(4);

  const Button = useRef([]);
  const ParentNode = useRef();
  useEffect(() => {
    Handleclick(clickedBtn);
  }, [clickedBtn]);

  const Handleclick = (value) => {
    const ParentChilderns = ParentNode.current.childNodes;

    let i = 0;
    if (value === 1) {
      ParentChilderns[i].style.backgroundColor = " blue";
    } else {
      do {
        if (i % 2 === 0) {
          ParentChilderns[i].style.backgroundColor = " blue";
        } else {
          ParentChilderns[i].style.borderTop = "6.5px solid blue";
        }
        i++;
      } while (i < value);
      ParentChilderns[value].style.backgroundColor = "blue";
    }
    SetClickedBtn(value);
  };
  const updateRef = (BtnID) => (ref) => {
    Button.current[BtnID] = ref;
  };

  return (
    <>
      <GlobalStyle />
      <TimeLineSection>
        <div className="timeline-container">
          <div className="timeline-container-content">
            <h1 className="timeline-container-content-heading">Our Timeline</h1>
            <h1 className="timeline-container-content-sub-heading">
              In the Bussiness since 2021
            </h1>
            <p>
              Discover a range of fantastic vehicles to rent for your upcoming
              business or leisure travel.
            </p>
          </div>
          <div className="timeline-path-content">
            <div className="timeline-path-content-hero">
              <div className="timeline-path-content-hero-content">
                {clickedBtn === 1 && <FirstTimeLineDesign />}
                {clickedBtn === 2 && <SecondTimeLineDesign />}
                {clickedBtn === 4 && <ThirdTimeLineDesign />}
              </div>
              <div className="timeline-path-content-hero-content-decider">
                <article className="timeline-path-content-hero-content-decider-years">
                  <h1>2021</h1>
                  <h1>2022</h1>
                  <h1>2023</h1>
                  <h1>2024</h1>
                  <h1>2025</h1>
                </article>
                <article
                  ref={ParentNode}
                  className="timeline-path-content-hero-content-decider-btn"
                >
                  <button
                    ref={updateRef(0)}
                    onClick={() => Handleclick(1)}
                  ></button>

                  <span></span>

                  <button
                    ref={updateRef(1)}
                    onClick={() => Handleclick(2)}
                  ></button>

                  <span></span>

                  <button
                    ref={updateRef(2)}
                    onClick={() => Handleclick(4)}
                  ></button>

                  <span></span>

                  <button></button>

                  <span></span>

                  <button></button>
                </article>
              </div>
            </div>
          </div>
        </div>
      </TimeLineSection>
    </>
  );
};

export default TimeLine;
