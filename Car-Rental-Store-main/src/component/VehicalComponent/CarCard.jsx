import React, { useEffect, useState } from "react";
import carBgImg from "../images/banner/bg-1.png";
import styled from "styled-components";
import LamborginiLogo from "../images/VehicalCollection/car-logos/Lamborghini_Logo.svg.png";
import PersonIcon from "@mui/icons-material/Person";
import MinorCrashOutlinedIcon from "@mui/icons-material/MinorCrashOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import BookingDetailsForm from "./BookingDetailsForm";
import { useNavigate } from "react-router-dom";
import { useUserDataContext } from "../LoginRegistration/UserProvider";
const CarCard = (props) => {
  const navigate = useNavigate();
  const { userData } = useUserDataContext();
  const [setModel, showSetModel] = useState(false);

  const [vehicalDetails, setvehicalDetails] = useState(null);
  const closeModel = () => {
    if (setModel) {
      showSetModel(false);
      return;
    }
    showSetModel(true);
  };
  useEffect(() => {
    setvehicalDetails(props.carsData);
  }, [props.carsData]);
  const handleClick = () => {
    console.log(userData);
    if (userData.token=="") {
      window.alert("Please login before booking");
      navigate("/login");
      return;
    } else {
      closeModel();
    }
  };

  if (!props.carsData) {
    return <p>Loading...</p>;
  }
  const CardCardSection = styled.section`
    .car-models-collection-container-hero {
      /* border: 2px solid red; */
      box-shadow: 0 1px 3px rgba(23, 23, 23, 0.24);
      height: 20rem !important;
      width: ${props.cardWidth};
      border-radius: 25px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      background-color: var(--page-background-color);
    }
    .car-models-collection-header {
      /* border: 2px solid; */
      position: relative;
      margin: 13px 13px 0 13px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .car-models-collection-header-figure-hero {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .car-models-collection-header-figure-hero img {
      width: 41px;
      height: 44px;
      user-select: none;
      margin-right: 4px;
    }
    .car-models-collection-header-headings {
      /* border: 2px solid; */
      font-family: "Poppins";
    }
    .car-models-collection-header-headings h1 {
      font-size: 18px;
      color: var(--black-color);
    }
    .car-models-collection-header-headings p {
      font-size: 15px;
      color: var(--text-color);
      font-family: "Rubik";
    }
    .car-models-collection-header-units {
      /* border: 2px solid; */
      padding: 9px 13px;
      border-radius: 33px;
      box-shadow: 0 1px 3px rgba(23, 23, 23, 0.24);
      background-color: var(--white-color);
    }
    .car-models-collection-header-units p {
      font-size: 15px;
      color: var(--text-color);
      font-family: "Rubik";
    }
    .car-models-collection-body {
      /* border: 2px solid; */
      background: url(${carBgImg});
      user-select: none;
      background-repeat: no-repeat;
      background-position: 20px -70px;
      background-size: 46rem 45rem;
      width: 100%;
      height: 13rem;
      /* margin: 0 14px; */
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    .car-models-collection-body img {
      /* padding: 24px; */
      height: 15rem;
      user-select: none;
      width: ${props.imgWidth};
      /* width: 27rem; */
    }
    .car-models-collection-footer {
      background-color: #f5e7e7;
      height: 10rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      padding: 0 20px;
      justify-content: space-between;
      align-items: center;
      /* border: 2px solid; */
    }
    .hero-car-details-first {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 14rem;
      font-size: 14px;
      color: var(--text-color);
    }
    .hero-car-details {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-family: "Rubik";
    }
    .hero-car-money {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-family: "poppins", "sans serif";
    }
    .hero-car-money span {
      font-family: rubik, "sans serif";
      font-weight: 100;
    }
    .hero-car-money h1 {
      font-family: poppins, "sans serif";
      font-weight: 100;
      font-size: 18px;
    }
    .booknow-btn {
      position: relative;
      top: 45%;
      width: 8rem;
      font-size: 17px;
      height: 10rem;
      font-family: Rubik;
      border: 2px solid;
      outline: none;
      padding: 10px 0px;
      cursor: pointer;
      background-color: #969696;
      color: #ffffff;
      border-radius: 11px;
      display: block;
      opacity: 0;
      transform: translateY(60px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .car-models-collection-body:hover {
      .booknow-btn {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <>
      <CardCardSection>
        <div className="car-models-collection-container-hero">
          <div className="car-models-collection-header">
            <figure className="car-models-collection-header-figure-hero">
              <img src={LamborginiLogo} alt="logo" unselectable="on" />
              <div className="car-models-collection-header-headings">
                <h1>{props.carsData.title}</h1>
                <p>{props.carsData.model}</p>
              </div>
            </figure>
            <div className="car-models-collection-header-units">
              <p>{props.carsData.stocks} units available</p>
              {/* <p>Rent Now</p> */}
            </div>
          </div>
          <div className="car-models-collection-body">
            <button className="booknow-btn" onClick={handleClick}>
              Book now
            </button>
            <img src={props.carsData.images[0]} alt="car-image" />
          </div>
          <div className="car-models-collection-footer">
            <div className="hero-car-details-first">
              <div className="hero-car-details">
                <PersonIcon />
                <span>{props.carsData.capacity}</span>
              </div>
              <div className="hero-car-details">
                <MinorCrashOutlinedIcon />
                <span>{props.carsData.drive}</span>
              </div>
              <div className="hero-car-details">
                <LocalGasStationOutlinedIcon />
                <span>{props.carsData.mileage}</span>
              </div>
            </div>
            <div className="hero-car-money">
              <CurrencyRupeeOutlinedIcon style={{ fontWeight: "bold" }} />
              <h1>
                {props.carsData.price}/ <span>day</span>
              </h1>
            </div>
          </div>
        </div>
      </CardCardSection>
      {setModel && (
        <BookingDetailsForm
          closeModel={handleClick}
          vehicalDetails={vehicalDetails}
        />
      )}
    </>
  );
};

CarCard.defaultProps = {
  cardWidth: "29rem",
  imgWidth: "23rem",
};
export default CarCard;
