import React from 'react'
import styled from 'styled-components';
const FirstTimeLineDesign = () => {
    const FirstDesignSection = styled.section`
    /* border: 2px solid; */
    width: 100%;
    height: 100%;
    padding: 10px 25px;
    font-family: "poppins", "sans-serif";
 

    .first-design-section {
      width: 100%;
      height: 100%;
      /* border: 2px solid; */
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .first-design-Video {
      height: 100%;
      width: 35rem;
    }
    .first-design-section-container {
      height: 100%;
      padding: 20px;
      /* border: 2px solid; */
      width: 38rem;
      padding: 20px 25px;
    }
    .first-design-section-container h1 {
      font-size: 25px;
      color: var(--black-color);
      padding-bottom: 10px;
    }
    .first-story-first {
      height: 100%;
      width: 100%;
      margin: 10px;
    }
    .first-story-first h3 {
      font-size: 20px;
      color: var(--black-color);
      padding: 10px;
    }
    /* color: var(--text-color);
    font-family: Rubik, sans-serif;
    font-size: 17px;
    line-height: 22px;
    font-weight: 300;
    text-align: left; */
    .first-story-first-content {
      display: flex;
      flex-direction: column;
      margin: 0 10px;
      font-family: "Rubik", "sans-serif";
    }
    .first-story-first-content ul {
      color: var(--text-color);
      font-family: Rubik, sans-serif;
      font-size: 17px;
      line-height: 22px;
      font-weight: 300;
      text-align: left;
    }
    .first-story-first-content ul li {
      padding: 6px 0;
    }
  `;

  return (
    <>
      <FirstDesignSection>
        <div className="first-design-section">
          <iframe
            className="first-design-Video"
            src="https://www.youtube.com/embed/CUaEHLLit0k"
            title="YouTube video player"
          ></iframe>
          <div className="first-design-section-container">
            <h1>Revolution on Wheels: The Begining 2021</h1>

            <aside>
              <div className="first-story-first">
                <h3> The Genesis of Car Rental Store</h3>
                <span className="first-story-first-content">
                  <ul>
                    <li>
                      SwiftRide Car Rentals is born from the vision of two
                      friends, Alex and Sarah, who aim to revolutionize the car
                      rental industry.
                    </li>
                    <li>
                      Their journey begins with a modest fleet of just five cars
                      and a small office space in a bustling city.
                    </li>
                  </ul>
                </span>
              </div>
              <div className="first-story-first">
                <h3>Accelerating Growth </h3>
                <span className="first-story-first-content">
                  <ul>
                    <li>
                      SwiftRide gains traction as word spreads about their
                      outstanding customer service and affordable rates
                    </li>
                    <li>
                      The company expands its fleet, offering a diverse
                      selection of vehicles to cater to different customer
                      preferences.
                    </li>
                  </ul>
                </span>
              </div>
            </aside>
          </div>
        </div>
      </FirstDesignSection>
    </>
  );
}

export default FirstTimeLineDesign
