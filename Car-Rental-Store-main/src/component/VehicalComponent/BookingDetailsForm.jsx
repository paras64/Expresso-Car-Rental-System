import React, { useEffect, useState } from "react";
import "./Style.css";
import axios from "axios";
import ProductsData from "../HOC- higherOrderComponent/ProductsData";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { GlobalStyle } from "../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";
import { useUserDataContext } from "../LoginRegistration/UserProvider";
const BookingDetailsForm = ({
  closeModel,
  bookingData,
  productList,
  vehicalDetails,
}) => {
  const navigate = useNavigate();
  const { userData } = useUserDataContext();
  const [productDetails, SetProductDetails] = useState(null);
  const [UserDetails, SetUserDetails] = useState(undefined);
  const [orderDetails, SetOrderDetails] = useState({
    firstname: userData.token ? userData.firstname : "",
    lastname: userData.token ? userData.lastname : "",
    product: "",
    pickuptime: "",
    dropofftime: "",
    pickupdate: "",
    dropoffdate: "",
    pickuplocation: "",
    dropofflocation: "",
    contact: "",
    age: 18,
    address: "",
  });
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    if (userData.token !== "") {
      SetUserDetails(userData);
    }

    if (productList.length && bookingData) {
      SetProductDetails(
        productList.find((docs) => {
          return docs.model === bookingData.seletedcar;
        })
      );
    }
    if (vehicalDetails) {
      SetProductDetails(vehicalDetails);
    }

    if (bookingData) {
      SetOrderDetails((prevData) => {
        return {
          ...prevData,
          pickupdate: bookingData.pickupdate,
          dropoffdate: bookingData.dropoffdate,
          pickuplocation: bookingData.dropofflocation,
          dropofflocation: bookingData.dropofflocation,
        };
      });
    }
    if (productDetails) {
      SetOrderDetails((prevData) => {
        return {
          ...prevData,
          product: productDetails._id,
        };
      });
    }
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [productList, bookingData]);

  useEffect(() => {
    if (productDetails) {
      SetOrderDetails((prevData) => {
        return {
          ...prevData,
          product: productDetails._id,
        };
      });
    }
  }, [productDetails]);

  const handleChange = (e) => {
    SetOrderDetails((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      orderDetails.product &&
      orderDetails.pickuptime &&
      orderDetails.dropofftime &&
      orderDetails.pickupdate &&
      orderDetails.dropoffdate &&
      orderDetails.pickuplocation &&
      orderDetails.dropofflocation &&
      orderDetails.contact &&
      orderDetails.age &&
      orderDetails.address
    ) {
      const doc = axios.post(
        "https://car-rental-backend-1tpp.onrender.com/user/bookorder",
        {
          orderDetails,
          UserDetails,
        }
      );
      doc
        .then((response) => {
          alert(response.data.message);
          closeModel();
          navigate("/orders");
        })
        .catch((err) => {
          alert("Something went wrong");
          closeModel();
        });
    } else {
      alert("Please complete the required fields");
    }
  };

  return (
    <>
      <GlobalStyle />
      <div className="model-wrapper" onClick={closeModel}></div>
      <div className="model-container">
        <section className="booking-form">
          <div className="booking-form-container">
            <div className="booking-form-content">
              <div className="booking-form-content__hero" id="hero__one">
                <h1 className="booking-form__heading">COMPLETE RESERVATION</h1>
                <CloseIcon id="close-icon" onClick={closeModel} />
              </div>
              <div className="booking-form-content__hero" id="hero__two">
                <p className="hero__two__para">
                  <InfoIcon id="hero__two__para-icon" /> Upon completing this
                  reservation enquiry, you will receive:
                </p>
                <p className="hero__two__message">
                  Your rental voucher to produce on arrival at the rental desk
                  and a toll-free customer support number.
                </p>
              </div>
              <div className="booking-form-content__hero" id="hero__three">
                <div className="hero__three__details">
                  <h1 className="hero__three__details__heading">
                    Location & Date
                  </h1>
                  <div className="hero__three__details_present">
                    <h1>
                      <AccessTimeIcon />
                      Pick-Up Date & Time
                    </h1>
                    <div>
                      <input
                        type="time"
                        name="pickuptime"
                        onChange={handleChange}
                        value={orderDetails.pickuptime}
                      />
                      <input
                        type="date"
                        name="pickupdate"
                        onChange={handleChange}
                        value={orderDetails.pickupdate}
                      />
                    </div>
                  </div>
                  <div className="hero__three__details_present">
                    <h1>
                      <AccessTimeIcon /> Drop-Off Date & Time
                    </h1>
                    <div>
                      <input
                        type="time"
                        name="dropofftime"
                        onChange={handleChange}
                        value={orderDetails.dropofftime}
                      />

                      <input
                        type="date"
                        name="dropoffdate"
                        onChange={handleChange}
                        value={orderDetails.dropoffdate}
                      />
                    </div>
                  </div>
                  <div className="hero__three__details_present">
                    <h1>
                      <LocationOnIcon /> Pick-Up Location
                    </h1>
                    <select
                      name="pickuplocation"
                      id="PickUpLocation_form"
                      value={orderDetails.pickuplocation}
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
                  </div>
                  <div className="hero__three__details_present">
                    <h1>
                      <LocationOnIcon /> Drop-Off Location
                    </h1>
                    <select
                      name="dropofflocation"
                      id="DropOffLocation_form"
                      value={orderDetails.dropofflocation}
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
                  </div>
                </div>
                <div className="hero__three__car-details">
                  <h1>
                    <span>Car :-</span>{" "}
                    {productDetails ? productDetails.model : ""}
                  </h1>
                  <img
                    src={productDetails ? productDetails.thumbnail : ""}
                    alt="car_img"
                  />
                </div>
              </div>
              <div className="booking-form-content__hero" id="hero__forth">
                <h1 id="hero__forth__details__heading">Personal Information</h1>
                <form className="hero__forth_personal_details_form">
                  <div className="hero__forth_personal_details_form__sub">
                    <div>
                      <label htmlFor="firstname">
                        Firstname <span>*</span>
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="Enter your first name"
                        value={orderDetails.firstname}
                        readOnly
                        required
                      />
                      {!orderDetails.firstname && (
                        <p className="required__field">
                          This field is required
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastname">
                        lastname <span>*</span>
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Enter your last name"
                        value={orderDetails.lastname}
                        readOnly
                        required
                      />
                      {!orderDetails.lastname && (
                        <p className="required__field">
                          This field is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="hero__forth_personal_details_form__sub">
                    <div>
                      <label htmlFor="phone">
                        Phone Number <span>*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="contact"
                        placeholder="Enter your phone number"
                        required
                        value={orderDetails.contact}
                        onChange={handleChange}
                      />
                      {!orderDetails.contact && (
                        <p className="required__field">
                          This field is required
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="age">
                        Age <span>*</span>
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        min={18}
                        placeholder="Enter your Age"
                        required
                        value={orderDetails.age}
                        onChange={handleChange}
                      />
                      {!orderDetails.age && (
                        <p className="required__field">
                          This field is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="hero__forth_personal_details_form__sub">
                    <div>
                      <label htmlFor="bookemail">
                        Email <span>*</span>
                      </label>
                      <input
                        type="email"
                        id="bookemail"
                        name="email"
                        min={18}
                        placeholder="Enter your Email"
                        value={UserDetails ? UserDetails.email : ""}
                        readOnly
                        required
                      />
                      {UserDetails && !UserDetails.email && (
                        <p className="required__field">
                          This field is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="hero__forth_personal_details_form__sub">
                    <div>
                      <label htmlFor="address">
                        Address <span>*</span>
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Enter your Address"
                        required
                        value={orderDetails.address}
                        onChange={handleChange}
                      />
                      {!orderDetails.address && (
                        <p className="required__field">
                          This field is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="hero__forth_personal_details_form__sub">
                    <input type="checkbox" name="updates" id="updates" />
                    <p>Please send me latest news and updates</p>
                  </div>
                  <div className="hero__forth_personal_details_form__sub button_hero">
                    {/* <button onClick={resetAll}>Reset All</button> */}
                    <button onClick={(e) => handleSubmit(e)}>
                      Reserve Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductsData(BookingDetailsForm);
