import React, { useState } from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import styled from "styled-components";
import { FaGasPump, FaWeight } from "react-icons/fa";
import { BsSpeedometer } from "react-icons/bs";
import { MdColorLens } from "react-icons/md";
import { HiCurrencyRupee, HiLocationMarker } from "react-icons/hi";
import CorvetteImage from "../images/vehical images/corvette.png";
import ProductsData from "../HOC- higherOrderComponent/ProductsData";

function VehicalCollection({ productList, limit }) {
  const [activeButton, setActiveButton] = useState(0);
  const [CarDetails, SetCarDetails] = useState({
    Model: "Chevy Corvette ",
    Mileage: "200mph",
    Weight: "200lbs",
    Color: "Black",
    Speed: "1.99s",
    Charges: "3999",
    Available: "Mumbai",
    drive: "Manual",
    image: CorvetteImage,
    ModelName: "Chevy Corvette Z06",
  });

  const handleClick = (btnID) => {
    setActiveButton(btnID);
    SetCarDetails({
      Mileage: productList[btnID].mileage,
      Weight: productList[btnID].weight,
      Color: productList[btnID].color,
      Speed: productList[btnID].speed,
      Charges: productList[btnID].price,
      Available: productList[btnID].available,
      image: productList[btnID].thumbnail,
    });
  };

  const Wrapper = styled.section`
    padding: 0 3rem 0 3rem;
    /* padding-top: 3rem; */
    font-family: Poppins, sans-serif;

    .vehicles-model-header {
      height: 55rem;
    }

    .vehicles-model-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 44rem;
    }

    .vehical-text-content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      justify-content: center;
      height: 18rem;
      width: 100%;
    }

    .vehicles-model-sub-heading {
      font-size: 2.2rem;
      line-height: 4rem;
      letter-spacing: 1px;
      text-transform: capitalize;
    }

    .vehical-text-content p {
      color: var(--text-color);
      letter-spacing: 0px;
      font-family: Rubik, sans-serif;
      font-size: 18px;
      line-height: 29px;
      font-weight: 500;
      text-align: center;
      width: 38rem;
    }

    .vehical-collections {
      height: 28rem;
      display: flex;
      justify-content: center;
      gap: 3rem;
      align-items: center;
    }

    .vehicals {
      height: 28rem;
      width: 17rem;
      display: flex;
      align-items: center;
    }

    #Vehical-table {
      display: flex;
      flex-direction: column;
      width: 17rem;
      gap: 1rem;
    }

    .vehical-names {
      font-family: Poppins, sans-serif;
      /* background-color: var(--vehical-name-bg-color);
      color: var(--black-color); */
      border: none;
      height: 3.7rem;
      font-size: 1.15rem;
      cursor: pointer;
    }

    .vehicals-images {
      height: 28rem;
      width: 37rem;
      padding: 2rem 3rem;
    }

    #vehical-pictures {
      height: 23rem;
      width: 32rem;
    }

    .vehicals-details {
      padding: 10px;
      width: 26rem;
      height: 30rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      border-radius: 20px;
    }

    .vehical-details-header {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 10rem;
      width: 100%;
      gap: 30px;
      border-radius: 23px;
    }

    .vehical-detail-container {
      border-radius: 20px;
      height: 8rem;
      width: 11rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: rgba(0, 0, 0, 0.09) 2px 3px 6px;
      background-color: aliceblue;
    }

    .vehical-details-icon {
      font-size: 31px;
      background-color: #e4f3ff;
      margin-bottom: 10px;
      box-shadow: 2px 2px 27px rgba(0, 0, 0, 0.09);
    }
    .first-container-icon {
      color: blue;
    }
    .second-container-icon {
      color: var(--btn-background-color);
    }
    .third-container-icon {
      color: blue;
    }
    .vehical-detail-text h1 {
      font-size: 14px;
      text-align: center;
    }
    .vehical-names.active {
      background-color: var(--btn-background-color);
      color: white;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <Wrapper className="vehicles-model">
        <div className="vehicles-model-header">
          <div className="vehicles-model-container">
            <div className="vehical-text-content">
              <h1 className="vehicles-model-heading">Vehicles Models</h1>
              <h1 className="vehicles-model-sub-heading">
                Our rental collection
              </h1>
              <p>
                Discover a range of fantastic vehicles to rent for your upcoming
                business or leisure travel.
              </p>
            </div>
            <div className="vehical-collections">
              <div className="vehicals">
                <div id="Vehical-table">
                  {productList.map((VehicalDetails, index) => {
                    return (
                      <button
                        key={index}
                        className={`vehical-names ${
                          activeButton === index ? "active" : ""
                        } `}
                        onClick={() => handleClick(index)}
                      >
                        {VehicalDetails.model}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="vehicals-images">
                <img
                  src={CarDetails.image}
                  alt="vehical-images"
                  id="vehical-pictures"
                />
              </div>
              <div className="vehicals-details">
                <div className="vehical-details-header">
                  <div className="vehical-detail-container">
                    <FaGasPump className="vehical-details-icon first-container-icon"></FaGasPump>
                    <div className="vehical-detail-text">
                      <h1>{CarDetails.Mileage}</h1>
                      <span>Mileage</span>
                    </div>
                  </div>

                  <div className="vehical-detail-container">
                    <FaWeight className="fa-solid fa-weight-scale vehical-details-icon first-container-icon"></FaWeight>
                    <div className="vehical-detail-text">
                      <h1>{CarDetails.Weight}</h1>
                      <span>Weight</span>
                    </div>
                  </div>
                </div>

                <div className="vehical-details-header">
                  <div className="vehical-detail-container">
                    <MdColorLens className="fa-sharp fa-solid fa-palette vehical-details-icon second-container-icon"></MdColorLens>
                    <div className="vehical-detail-text">
                      <h1>{CarDetails.Color} </h1>
                      <span>Color </span>
                    </div>
                  </div>

                  <div className="vehical-detail-container">
                    <BsSpeedometer className="fa-solid fa-gauge vehical-details-icon second-container-icon"></BsSpeedometer>
                    <div className="vehical-detail-text">
                      <h1>{CarDetails.Speed}</h1>
                      <span>0-60 mph</span>
                    </div>
                  </div>
                </div>

                <div className="vehical-details-header">
                  <div className="vehical-detail-container">
                    <HiCurrencyRupee className="fa-solid fa-dollar-sign vehical-details-icon third-container-icon"></HiCurrencyRupee>
                    <div className="vehical-detail-text">
                      <h1>{CarDetails.Charges}</h1>
                      <span>per day</span>
                    </div>
                  </div>

                  <div className="vehical-detail-container">
                    <HiLocationMarker className="fa-solid fa-location-dot vehical-details-icon third-container-icon"></HiLocationMarker>
                    <div className="vehical-detail-text">
                      <h1>{CarDetails.Available}</h1>
                      <span>Available at</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
export default ProductsData(VehicalCollection, 6);
