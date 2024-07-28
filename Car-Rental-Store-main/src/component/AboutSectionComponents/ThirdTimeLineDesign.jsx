import React from 'react';
import styled from "styled-components";
import FirstImg from "../images/About section images/Timeline/second-2.png";

const ThirdTimeLineDesign = () => {
    const ThirdTimeLineDesignSection = styled.section`
    /* border: 2px solid; */
    height: 100%;
    width: 100%;
    padding: 10px;
    .third-timeline {
      /* border: 2px solid; */
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .third-timeline-container-first {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      /* padding: 10px; */
      font-family: poppins, sans-serif;
    }
    .third-timeline-container-first-content-first {
      /* border: 2px solid; */
      padding: 10px 20px;
      width: 100%;
      height: 100%;
    }
    .third-timeline-container-first-content-first h1 {
      font-size: 2rem;
    }
    .third-timeline-container-first-content-first h2 {
      font-size: 20px;
      margin:15px 0px;

      text-transform: uppercase;
    }
    .third-timeline-container-first-content-first p {
      font-family: Rubik, sans-serif;
      font-size: 17px;
      line-height: 22px;
      font-weight: 300;
      text-align: left;
      margin: 0.8rem 0px;
      color: var(--text-color);
    }
    .third-timeline-container-first-content-third {
      height: 100%;
    width: 100%;
      /* border: 2px solid; */
    }

    .third-timeline-container-first-content-third img {
      height: 27rem;
    width: 43rem;
}
 
    .third-timeline-container-third {
      /* border: 2px solid; */
      padding: 10px 25px;
      font-family: "Poppins";
    }
    .third-timeline-container-third-content-first {
    }
    .third-timeline-container-third-content-third h1 {
      text-transform: uppercase;
    }
  `;

  return (
    <ThirdTimeLineDesignSection>
      <div className="third-timeline">
        <div className="third-timeline-container-first">
          <div className="third-timeline-container-first-content-first">
            <h2>The Little Steps</h2>
            <h1>The Mid Journey</h1>
            <p>
            Recognizing the importance of catering to a diverse range of customer needs, WheelsAway has significantly expanded its fleet options. 

            Embracing the digital era, WheelsAway has invested heavily in technology to enhance the customer experience. A revamped mobile app allows users to seamlessly browse, book, and manage their rentals from the convenience of their smartphones. T
            Understanding that each customer's journey is unique, WheelsAway has introduced personalized services to create memorable experiences. 
            
            </p>
          </div>
          <div className="third-timeline-container-first-content-third">
            <img src={FirstImg} alt="" />
          </div>
        </div>
      </div>
    </ThirdTimeLineDesignSection>
  );
}

export default ThirdTimeLineDesign
