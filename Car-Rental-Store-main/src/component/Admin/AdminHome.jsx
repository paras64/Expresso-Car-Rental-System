import React from "react";
import styled from "styled-components";
import ProductsData from "../HOC- higherOrderComponent/ProductsData";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "../styles/GlobalStyle";
import { useAllUserContext } from "./AllUserProvider";
const AdminHome = () => {
  const navigate = useNavigate();
  const { Orders } = useAllUserContext();

  const AdminHomeSection = styled.section`
    /* border: 2px solid blue; */
    height: 100%;
    width: 100%;
    padding: 3rem 4rem;
    .admin__home {
      /* border: 2px solid blue; */
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-rows: 5rem 1fr;
    }
    .admin__home__content {
      /* border: 2px solid blue; */
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;

      gap: 2rem;
    }
    .admin__home__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      border-width: thin;
      border-radius: 5px;
      cursor: pointer;
      font-size: 15px;
      font-family: "RUBIK";
      font-weight: bold;
      gap: 6px;
      background: linear-gradient(to right, rgb(225 215 215), rgb(246 246 246));
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
    }
    .admin__home__btn:hover {
      background-color: #dee9e6;
      color: var(--black-color);
    }
    .recent__orders_details {
      /* border: 2px solid blue; */
      padding: 1rem 0rem;
    }
    .recent__orders_details__container {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      gap: 20px;
      /* border: 2px solid blue; */
    }
    .recent__orders__heading {
      color: var(--btn-background-color);
      font-family: Poppins;
    }
    .recent__orders_hero {
      /* border: 2px solid; */
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 5rem;
      width: 100%;
      border-radius: 5px;
      padding: 1rem 2rem;
      box-shadow: rgba(23, 23, 23, 0.24) 0px 1px 3px;
      overflow: hidden;
      background-color: var(--page-background-color);
    }
    .recent__orders_hero_crypus {
      display: flex;
      flex-direction: column;
      font-style: Poppins;
      gap: 5px;
      width: 10rem;
      align-items: center;
      justify-content: center;
    }
    .recent__orders_hero_crypus h1 {
      font-size: 16px;
      color: var(--black-color);
      font-family: "Poppins";
    }
    .recent__orders_hero_crypus p {
      font-size: 15px;
      color: var(--text-color);
      font-family: Rubik;
      text-align: center;
    }
    .car__img__orders {
      width: 10rem;
      height: 6rem;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <AdminHomeSection>
        <div className="admin__home">
          <div className="admin__home__content">
            <button
              className="admin__home__btn"
              onClick={() => navigate("/admin/dashboard/addproduct")}
            >
              Add New Product <AddCircleIcon />
            </button>
            <button
              className="admin__home__btn"
              onClick={() => navigate("/admin/dashboard/modifyproduct")}
            >
              Modify Products <AutoFixHighIcon />
            </button>

            <button className="admin__home__btn">
              Show Contact <AddCircleIcon />
            </button>
            <button
              className="admin__home__btn"
              onClick={() => navigate("/admin/dashboard/modifyfaq")}
            >
              Add/Modify FAQs
              <AutoFixHighIcon />
            </button>
          </div>
          <div className="recent__orders_details">
            <div className="recent__orders_details__container">
              <h1 className="recent__orders__heading">Recent Orders</h1>
              {Orders.length ? (
                Orders.reverse().map((items, Index) => {
                  if (Index > 2) {
                    return;
                  }
                  return (
                    <>
                      <aside key={items.id} className="recent__orders_hero">
                        <div className="recent__orders_hero_crypus">
                          <h1>Car Model</h1>
                          <p>{items.product.model}</p>
                        </div>
                        <div className="recent__orders_hero_crypus">
                          <h1>Customer Name </h1>
                          <p>
                            {items.firstname} {items.lastname}
                          </p>
                        </div>
                        <div className="recent__orders_hero_crypus">
                          <h1>Price</h1>
                          <p>₹ {items.product.price}</p>
                        </div>
                        <div className="recent__orders_hero_crypus">
                          <h1>PickUp Date</h1>
                          <p>
                            {items.pickupdate.split("-").reverse().join("/")}
                          </p>
                        </div>
                        <div className="recent__orders_hero_crypus">
                          <h1>DropOff Date</h1>
                          <p>
                            {items.dropoffdate.split("-").reverse().join("/")}
                          </p>
                        </div>
                        <div className="recent__orders_hero_crypus">
                          <img
                            className="car__img__orders"
                            src={items.product.images[0]}
                            alt="car__img"
                          />
                        </div>
                      </aside>
                    </>
                  );
                })
              ) : (
                <h1>No Order had been done</h1>
              )}
            </div>
          </div>
        </div>
      </AdminHomeSection>
    </>
  );
};

export default ProductsData(AdminHome);
