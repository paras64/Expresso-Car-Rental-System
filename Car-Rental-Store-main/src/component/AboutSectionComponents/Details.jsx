import React from "react";
import styled from "styled-components";

const Details = () => {
  const DetailsSection = styled.section`
    /* border:2px solid ; */
    height: 30rem;
    width: 100%;
    margin-top: 10px;
    background-color: var(--black-color) !important;
    color: var(--white-color) !important;
    padding: 30px 20px;
    .details-container {
      width: 100%;
      /* border: 2px solid white; */
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .details-content{
      display: flex;
      flex-direction: row;
      align-items: center;
      /* border: 2px solid; */
      width: 60rem;
      height: 20rem;
      justify-content: space-between;
    }
    .details-group{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

    }
    .details-group h2{
      text-transform: uppercase;
      font-family: rubik;
      font-size: 20px;
    }
    .details-group h1{
      text-transform: capitalize;
      font-family: monospace;
      font-size: 2.6rem;
    }
    .details-group p{
      text-transform: capitalize;
      font-family: rubik;
      font-size: 16px;
    }
  `;

  return (
    <>
      <DetailsSection>
        <div className="details-container">
          <div className="details-content">
            <div className="details-group">
              <h2>Funding</h2>
              <h1>$20+ M</h1>
              <p>Series B Announcement</p>
            </div>
            <div className="details-group">
              <h2>Founded</h2>
              <h1>2018</h1>
              <p>Wheels Up!</p>
            </div>
            <div className="details-group">
              <h2>Headquarters</h2>
              <h1>Delhi,IN</h1>
              <p>Built in Delhi</p>
            </div>
          </div>
          <div className="details-content">
          <div className="details-group">
              <h2>Upgrading</h2>
              <h1>Every Week</h1>
              <p>Keeping up customer demands</p>
            </div>
            <div className="details-group">
              <h2>Purpose</h2>
              <h1>Better Care</h1>
              <p>A word from our CEO</p>
            </div>
            <div className="details-group">
              <h2>Culture</h2>
              <h1>Values</h1>
              <p>Customer comes first</p>
            </div>
          </div>
        </div>
      </DetailsSection>
    </>
  );
};

export default Details;
