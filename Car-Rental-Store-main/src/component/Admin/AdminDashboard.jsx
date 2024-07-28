import React, { useState } from "react";
import { useAdminDataContext } from "./AdminProvider";
import styled from "styled-components";
import logo from "../images/Logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import RateReviewIcon from "@mui/icons-material/RateReview";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import LogoutIcon from "@mui/icons-material/Logout";
import { GlobalStyle } from "../styles/GlobalStyle";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import ProductsData from "../HOC- higherOrderComponent/ProductsData";
import { useNavigate } from "react-router-dom";
import AdminHome from "./AdminHome";
import AdminAllOrders from "./AdminAllOrders";
import AdminAllProducts from "./AdminAllProducts";
import AdminAllSubscribers from "./AdminAllSubscribers";
import AdminAllTestimonials from "./AdminAllTestimonials";
import AdminAllUsers from "./AdminAllUsers";
import { useAllUserContext } from "./AllUserProvider";

const AdminDashboard = ({ productList }) => {
  const navigate = useNavigate();
  const { adminData, updateAdminData } = useAdminDataContext();
  const { Users, Orders } = useAllUserContext();
  const [componentActive, SetComponentActive] = useState({
    home: true,
    orders: false,
    products: false,
    subscribers: false,
    users: false,
    testimonials: false,
  });
  const AdminDashboardSection = styled.section`
    height: 100%;
    width: 100%;
    .dashboard__container {
      height: 100vh;
      width: 100%;
      display: grid;
      grid-template-columns: 20rem 1fr;
    }
    .dashboard__sidebar {
      /* border: 2px solid; */
      display: grid;
      grid-template-rows: 6rem 1fr;
      background-color: rgb(244 244 238);
      position: sticky;
      top: 20px;
      height: 100vh;
    }

    .logo__hero {
      /* border: 2px solid; */
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .logo__hero img {
      height: 4rem;
      width: 10rem;
    }
    .sidebar__hero {
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-rows: 1fr 3rem;
    }

    .sidebar_list {
      display: flex;
      flex-direction: column;
      padding: 25px 45px;
      margin: 0px;
      /* border: 2px solid; */
    }
    .list__item {
      border-radius: 10px;
      height: 51px;
      list-style: none;
      display: flex;
      align-items: center;
      gap: 7px;
      padding: 0px 15px;
      font-family: Rubik;
      cursor: pointer;
      font-weight: bold;
    }
    .list__item:hover {
      color: var(--black-color);
      background-color: #ddddd1;
    }
    .sidebar_list:nth-child(2) {
      padding: 0px 45px;
      margin-bottom: 24px;
    }

    .logOut__icon {
      width: 43px;
      height: 42px;
      padding: 10px;
      border-radius: 27px;
      color: white;
      border: none;
      background-color: black;
    }
    .dashboard__main__hero {
      display: grid;
      grid-template-rows: 15rem 1fr;
      gap: 10px;
    }
    .dashboard__navbar {
      /* border: 2px solid; */
      display: grid;
      grid-template-rows: 7rem 1fr;
    }

    .dashboard__navbar__hero_first {
      /* border: 2px solid; */
      display: flex;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: center;
      padding: 1rem 4rem;
      font-family: Poppins;
    }
    .dashboard__navbar__hero_second {
      display: flex;
      gap: 20px;
      padding: 0px 4rem;
    }
    .second_aside {
      /* cursor: pointer; */
      width: 15rem;
      border-radius: 10px;
      background-color: #075db9;
      color: #fff;
      font-family: Rubik;
      display: flex;
      flex-direction: column;
      align-items: inherit;
      justify-content: space-around;
      padding: 0px 27px;
    }
    .second_aside div {
      display: flex;

      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }
    .second_aside div h1 {
      font-size: 16px;
    }
    .second_aside p {
      font-size: 23px;
    }
    .dashboard_hero_first_heading {
      color: black;
      font-size: 30px;
      text-decoration: underline;
    }
    .second_aside__icons {
      border-top: 2px solid white;
      border-bottom: 2px solid white;
      height: 34px;
      color: white;
      width: 32px;
      border-radius: 18px;
      padding: 2px;
    }
    .name_hero_heading {
      color: var(--btn-background-color);
    }

    .dashboard__content {
      /* border: 2px solid; */
    }
    .bg-dark {
      background-color: #ddddd1;
    }
  `;

  return (
    <>
      <GlobalStyle />
      {adminData.token && adminData.token ? (
        <AdminDashboardSection className="admin__dashboard">
          <div className="dashboard__container">
            <div className="dashboard__sidebar">
              <div className="logo__hero">
                <img src={logo} alt="logo__img" />
              </div>
              <ul className="sidebar__hero">
                <div className="sidebar_list">
                  <li
                    className={`list__item  ${
                      componentActive.home ? "bg-dark" : ""
                    }`}
                    onClick={() => {
                      SetComponentActive({
                        home: true,
                        orders: false,
                        products: false,
                        subscribers: false,
                        users: false,
                        testimonials: false,
                      });
                    }}
                  >
                    <HomeIcon />
                    Home
                  </li>
                  <li
                    className={`list__item  ${
                      componentActive.orders ? "bg-dark" : ""
                    }`}
                    onClick={() => {
                      SetComponentActive({
                        home: false,
                        orders: true,
                        products: false,
                        subscribers: false,
                        users: false,
                        testimonials: false,
                      });
                    }}
                  >
                    <ShoppingCartIcon />
                    Orders
                  </li>
                  <li
                    className={`list__item  ${
                      componentActive.products ? "bg-dark" : ""
                    }`}
                    onClick={() => {
                      SetComponentActive({
                        home: false,
                        orders: false,
                        products: true,
                        subscribers: false,
                        users: false,
                        testimonials: false,
                      });
                    }}
                  >
                    <InventoryIcon />
                    Products
                  </li>
                  <li
                    className={`list__item  ${
                      componentActive.subscribers ? "bg-dark" : ""
                    }`}
                    onClick={() => {
                      SetComponentActive({
                        home: false,
                        orders: false,
                        products: false,
                        subscribers: true,
                        users: false,
                        testimonials: false,
                      });
                    }}
                  >
                    <SubscriptionsIcon />
                    Subscribers
                  </li>
                  <li
                    className={`list__item  ${
                      componentActive.users ? "bg-dark" : ""
                    }`}
                    onClick={() => {
                      SetComponentActive({
                        home: false,
                        orders: false,
                        products: false,
                        subscribers: false,
                        users: true,
                        testimonials: false,
                      });
                    }}
                  >
                    <PeopleAltIcon />
                    Users
                  </li>
                  <li
                    className={`list__item  ${
                      componentActive.testimonials ? "bg-dark" : ""
                    }`}
                    onClick={() => {
                      SetComponentActive({
                        home: false,
                        orders: false,
                        products: false,
                        subscribers: false,
                        users: false,
                        testimonials: true,
                      });
                    }}
                  >
                    <RateReviewIcon />
                    Testimonials
                  </li>
                </div>
                <div className="sidebar_list">
                  <li
                    className="list__item"
                    onClick={() => {
                      updateAdminData({
                        firstname: "",
                        email: "",
                        password: "",
                        token: "",
                        message: "",
                      });
                      navigate("/admin/login");
                    }}
                  >
                    <LogoutIcon className="logOut__icon" />
                    log out
                  </li>
                </div>
              </ul>
            </div>
            <div className="dashboard__main__hero">
              <div className="dashboard__navbar">
                <div className="dashboard__navbar__hero_first">
                  <h1 className="dashboard_hero_first_heading">Dashboard</h1>
                  <h1 className="dashboard_hero_first_heading">
                    Welcome Back,{" "}
                    <span className="name_hero_heading">
                      {adminData.firstname}
                    </span>
                  </h1>
                </div>
                <div className="dashboard__navbar__hero_second">
                  <aside className="second_aside">
                    <div>
                      <h1>Total Revenue</h1>
                      <CurrencyRupeeIcon className="second_aside__icons" />
                    </div>
                    <p>
                      Rs.{" "}
                      {Orders.length &&
                        Orders.reduce((sum, items) => {
                          return sum + items.product.price;
                        }, 0)}
                    </p>
                  </aside>
                  <aside className="second_aside">
                    <div>
                      <h1>Total Users</h1>
                      <AccountCircleIcon className="second_aside__icons" />
                    </div>
                    <p>{Users.length}</p>
                  </aside>
                  <aside className="second_aside">
                    <div>
                      <h1>Total Cars</h1>
                      <TimeToLeaveIcon className="second_aside__icons" />
                    </div>
                    <p>{productList.length}</p>
                  </aside>
                  <aside className="second_aside">
                    <div>
                      <h1>Total Orders</h1>
                      <ShoppingCartCheckoutIcon className="second_aside__icons" />
                    </div>
                    <p>{Orders.length}</p>
                  </aside>
                </div>
              </div>
              <div className="dashboard__content">
                {componentActive.home && <AdminHome />}
                {componentActive.orders && <AdminAllOrders />}
                {componentActive.products && <AdminAllProducts />}
                {componentActive.subscribers && <AdminAllSubscribers />}
                {componentActive.users && <AdminAllUsers />}
                {componentActive.testimonials && <AdminAllTestimonials />}
              </div>
            </div>
          </div>
        </AdminDashboardSection>
      ) : (
        <h1>Unauthorized access</h1>
      )}
    </>
  );
};

export default ProductsData(AdminDashboard);
