import React, { useState } from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import BackImg from "../images/Booking/backgroundImage.png";
import ProductsData from "../HOC- higherOrderComponent/ProductsData";
import BookingDetailsForm from "../VehicalComponent/BookingDetailsForm";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
import { useUserDataContext } from "../LoginRegistration/UserProvider";
const AlertBox = ({ alert, setAlert }) => {
  const Alert = styled.div`
    /* border: 2px solid; */
    padding: 0px;

    .alert-message {
      font-family: Rubik;
      color: #721c24;
    }
    .alert-booking-container {
      background-color: #f8d7da;
      border: 2px solid;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 0 30px;
      border-radius: 10px;
    }
  `;
  const modifyAlert = () => {
    if (alert) {
      setAlert(false);
    } else {
      setAlert(true);
    }
  };
  return (
    <>
      <Alert className="alert">
        <div className="alert-booking-container">
          <p className="alert-message">Please Complete the required fields</p>
          <button className="alert-cross" onClick={() => modifyAlert()}>
            <ClearIcon />
          </button>
        </div>
      </Alert>
    </>
  );
};

function Booking(props) {
  const navigate = useNavigate();
  const { userData } = useUserDataContext();
  const [setModel, showSetModel] = useState(false);
  const [alert, setAlert] = useState(false);
  const [bookingData, SetbookingData] = useState({
    seletedcar: "",
    pickuplocation: "",
    dropofflocation: "",
    pickupdate: "",
    dropoffdate: "",
  });
  const closeModel = () => {
    if (setModel) {
      showSetModel(false);
      return;
    }
    showSetModel(true);
  };
 
  const handleClick = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (
      bookingData.seletedcar &&
      bookingData.seletedcar &&
      bookingData.dropofflocation &&
      bookingData.pickupdate &&
      bookingData.dropoffdate
    ) {
      if (userData.token == "") {
        window.alert("Please login before booking");
        navigate("/login");
        return;
      }
      closeModel();
    } else {
      if (userData.token == "") {
        window.alert("Please login before booking");
        navigate("/login");
        return;
      }
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 4000);
    }
  };

  const handleChange = (e) => {
    SetbookingData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const Wrapper = styled.section`
    /* border: 2px solid; */
    display: flex;
    justify-content: center;
    align-items: center;

    .booking-header {
      height: 35rem;
      /* border: 2px solid; */
    }

    .booking-container {
      background: url(${BackImg}) center center/cover no-repeat;
      height: auto;
      /* border: 2px solid; */
      width: 78rem;
      padding: 0 3.5rem 3.5rem;
      display: flex;
      background-color: var(--white-color);
      flex-direction: column;
      box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);

      font-family: Poppins, sans;
    }

    .booking-heading {
      font-size: 1.5rem;
      margin: 2rem 0 1rem 0;
    }

    .booking-details {
      /* border: 2px solid; */
      height: 14rem;
    }

    #booking-section-form {
      display: flex;
      flex-direction: column;
    }

    .first-row-booking,
    .second-row-booking {
      /* border: 2px solid; */
      display: flex;
      height: 7rem;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    article {
      display: flex;
      flex-direction: column;
    }

    #CarSelect,
    #PickUpLocation,
    #DropOffLocation,
    #PickUpDate,
    #DropOffDate,
    #booking-btn {
      height: 3rem;
      font-size: 1rem;
      width: 20rem;
      font-family: "Rubik";
      padding: 0px 10px;
      color: var(--text-color);
      border: 2px solid #dcd3d3;
      position: relative;
      top: 1rem;
      outline: none;
    }

    .booking-icon {
      margin-right: 1rem;
      color: var(--btn-background-color);
    }

    #booking-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      position: relative;
      top: 27px;
      height: 3.4rem;
      border: none;
      background-color: var(--btn-background-color);
      font-weight: bold;
      box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35);
      cursor: pointer;
      color: var(--white-color);
    }
    #booking-btn:hover {
      box-shadow: 0 10px 15px 0 rgba(99, 21, 5, 0.35);
    }
    #booking-btn i {
      margin-left: 8px;
    }
    /* .booking {
      position: relative;
      top: -20px;
      border:2px solid;

    } */
  `;

  return (
    <>
      <GlobalStyle />
      {/* <BookingDetailsForm /> */}
      <Wrapper className={`booking-section ${props.vaild ? "booking" : " "}`}>
        <div className="booking-header">
          <div className="booking-container">
            <h1 className="booking-heading">Book a car</h1>
            {alert && <AlertBox alert={alert} setAlert={setAlert} />}
            <div className="booking-details">
              <form id="booking-section-form">
                <div className="first-row-booking">
                  <article>
                    <label htmlFor="CarSelect">
                      <i className="fa-solid fa-car booking-icon"></i>Select a
                      car*
                    </label>
                    <select
                      name="seletedcar"
                      id="CarSelect"
                      value={bookingData.seletedcar}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select car
                      </option>
                      {props.productList.map((carsData, Index) => {
                        return (
                          <option key={`option${Index}`} value={carsData.model}>
                            {carsData.model}
                          </option>
                        );
                      })}
                    </select>
                  </article>
                  <article>
                    <label htmlFor="PickUpLocation">
                      <i className="fa-solid fa-location-dot booking-icon"></i>{" "}
                      Pick up location*
                    </label>
                    <select
                      name="pickuplocation"
                      id="PickUpLocation"
                      value={bookingData.pickuplocation}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select location
                      </option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Indore">Indore</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Koltata">Koltata</option>
                      <option value="Delhi">Delhi</option>
                    </select>
                  </article>
                  <article>
                    <label htmlFor="DropOffLocation">
                      <i className="fa-solid fa-location-dot booking-icon"></i>{" "}
                      Drop Off location*
                    </label>
                    <select
                      name="dropofflocation"
                      id="DropOffLocation"
                      value={bookingData.dropofflocation}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select location
                      </option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Indore">Indore</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Koltata">Koltata</option>
                      <option value="Delhi">Delhi</option>
                    </select>
                  </article>
                </div>
                <div className="second-row-booking">
                  <article>
                    <label htmlFor="PickUpDate">
                      <i className="fa-solid fa-calendar-days booking-icon"></i>{" "}
                      Pick up date*
                    </label>
                    <input
                      type="date"
                      name="pickupdate"
                      id="PickUpDate"
                      value={bookingData.pickupdate}
                      onChange={handleChange}
                    />
                  </article>
                  <article>
                    <label htmlFor="DropOffDate">
                      <i className="fa-solid fa-calendar-days booking-icon"></i>{" "}
                      Drop off date*
                    </label>
                    <input
                      type="date"
                      name="dropoffdate"
                      id="DropOffDate"
                      value={bookingData.dropoffdate}
                      onChange={handleChange}
                    />
                  </article>
                  <article>
                    <button id="booking-btn" onClick={handleClick}>
                      Book now <SearchIcon style={{ marginTop: "2px" }} />
                    </button>
                  </article>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
      {setModel && (
        <BookingDetailsForm
          bookingData={bookingData}
          closeModel={handleClick}
        />
      )}
    </>
  );
}
export default ProductsData(Booking);
