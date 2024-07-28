import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserDataContext } from "../LoginRegistration/UserProvider";
const OrdersAccordian = ({ orders }) => {
  const OrdersAccordian = styled.div`
    border: 2px solid;
    /* height: 100%; */
    max-width: 80rem;
    display: flex;
    margin-top: 30px;
    padding: 0px 2rem;
    border-radius: 20px;
    height: 8rem;
    .details_header {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      width: 100%;
      overflow: hidden;
    }
    .box__hero {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      font-family: Poppins;
    }
    .box__hero h1 {
      font-size: 18px;
      color: var(--black-color);
    }
    .box__hero p {
      font-size: 15px;
      color: var(--text-color);
      font-family: Rubik;
    }
    .box__hero {
      mix-blend-mode: lighten; /* Apply blending mode */
      background-color: white;
    }
    .box__hero img {
      height: 8rem;
      width: 12rem;
      /* margin-bottom:15px; */
    }
    .show_details__btn {
      width: 12rem;
      height: 2rem;
      outline: none;
      background: none;
      border: none;
      font-size: 16px;
      font-family: "Poppins";
      font-weight: bold;
      cursor: pointer;
    }
  `;
  return (
    <>
      <OrdersAccordian className="orders_accordian_box">
        <div className="details_header">
          <div className="box__hero">
            <h1>{orders.product.title}</h1>
            <p>{orders.product.model}</p>
          </div>
          <div className="box__hero">
            <h1>Pick Up Date</h1>
            <p>{orders.pickupdate.split('-').reverse().join('/')}</p>
          </div>

          <div className="box__hero">
            <h1>Drop off Date</h1>
            <p>{orders.dropoffdate.split('-').reverse().join('/')}</p>
          </div>
          <div className="box__hero">
            <h1>Charges</h1>
            <p>₹ {orders.product.price}</p>
          </div>
          <div className="box__hero">
            <img src={orders.product.thumbnail} alt="car_img" />
          </div>
        </div>
        <div className="more_details"></div>
      </OrdersAccordian>
    </>
  );
};

const NoOrders = () => {
  const navigate = useNavigate();

  const NoOrders = styled.div`
    /* font-family:Poppins; */
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 2rem 0rem;
    .orders_status_heading {
      font-size: 2.5rem;
      color: var(--text-color);
    }
    .no_order_btn {
      border: none;
      height: 3.5rem;
      width: 11rem;
      font-size: 23px;
      font-weight: bold;
      background-color: var(--btn-background-color);
      box-shadow: rgba(255, 83, 48, 0.35) 0px 10px 15px 0px;
      cursor: pointer;
      color: var(--white-color);
      border-radius: 10px;
    }
  `;

  return (
    <>
      <NoOrders className="no__orders">
        <h1 className="orders_status_heading">No Order has been done</h1>
        <button
          className="no_order_btn"
          onClick={() => {
            navigate("/vehicalsmodels");
          }}
        >
          Explore
        </button>
      </NoOrders>
    </>
  );
};

const OrdersSummary = () => {
  const { userData } = useUserDataContext();
  const [OrdersData, SetOrdersData] = useState([]);
  const fetchOrdersData = (UserData) => {
    const { email } = UserData;
    const doc = axios.get(
      `https://car-rental-backend-1tpp.onrender.com/user/getorders?email=${email}`
    );
    doc
      .then((response) => {
        SetOrdersData(response.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  useEffect(() => {
    if (userData.orderdetails) {
      fetchOrdersData(userData);
    }
  }, []);

  const OrdersSummarySection = styled.section`
    /* border: 2px solid; */
    height: auto;
    width: 100%;
    padding-bottom: 10rem;
    .order-summary {
      padding: 0rem 4rem;
      /* border: 2px solid; */
      width: 100%;
    }
    .order-summary__content {
      /* border: 2px solid; */
      height: auto;
      width: 100%;
      padding: 0px 3rem;
    }
    .order-summary__heading {
      line-height: 5rem;
      font-size: 2.1rem;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      font-family: Poppins, san-serif;
      display: flex;
      flex-direction: column;
    }
  `;
  return (
    <>
      <OrdersSummarySection>
        <div className="order-summary">
          <div className="order-summary__content">
            <h1 className="order-summary__heading">Order Summary</h1>
            {OrdersData.length ? (
              OrdersData.map((orders, index) => (
                <OrdersAccordian orders={orders} key={index} />
              ))
            ) : (
              <NoOrders />
            )}
          </div>
        </div>
      </OrdersSummarySection>
    </>
  );
};

export default OrdersSummary;
