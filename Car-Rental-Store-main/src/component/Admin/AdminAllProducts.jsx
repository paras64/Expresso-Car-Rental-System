import React from "react";
import { useAdminDataContext } from "./AdminProvider";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import carBgImg from "../images/banner/bg-1.png";
import ProductsData from "../HOC- higherOrderComponent/ProductsData";
import LamborginiLogo from "../images/VehicalCollection/car-logos/Lamborghini_Logo.svg.png";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import MinorCrashOutlinedIcon from "@mui/icons-material/MinorCrashOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import axios from "axios";
const AdminAllProducts = ({ productList }) => {
  const navigate = useNavigate();
  const { adminData } = useAdminDataContext();
  const handleDeleteBtn = (ID) => {
    const doc = axios.delete(
      `https://car-rental-backend-1tpp.onrender.com/products/deleteproduct/${adminData.token}/${ID}`
    );
    doc
      .then((response) => {
        alert(response.data.message);
        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.message);
        window.location.reload();
      });
  };

  const AdminAllProducts = styled.section`
    margin-top: 2rem;
    width: 100%;
    .all_product {
      padding: 2rem 4rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .all_product_hero {
      display: flex;
      flex-direction: row;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: center;
      height: 20rem;
      width: 100%;
      border-radius: 5px;
      padding: 1rem 2rem;
      box-shadow: rgba(23, 23, 23, 0.24) 0px 1px 3px;
      overflow: hidden;
      background-color: var(--page-background-color);
    }
  `;
  const CardCardSection = styled.section`
    .car-models-collection-container-hero {
      /* border: 2px solid red; */
      box-shadow: 0 1px 3px rgba(23, 23, 23, 0.24);
      height: 20rem !important;
      width: 28rem;
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
      width: 23rem;
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
      top: 200%;
      width: 8rem;
      font-size: 17px;
      height: 3rem;
      font-family: Rubik;
      border: 2px solid;
      outline: none;
      padding: 10px 0px;
      cursor: pointer;
      background-color: #969696;
      color: #ffffff;
      border-radius: 11px;
      opacity: 0;
      transform: translateY(60px);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .car-models-collection-body:hover {
      .booknow-btn {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .car-models-collection-body_btn_crypus {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
   
  `;

  return (
    <AdminAllProducts>
      <h2 className="all__products_heading">All Products</h2>
      <div className="all_product">
        {productList.length ? (
          productList.map((items, Index) => {
            return (
              <>
                <CardCardSection>
                  <div className="car-models-collection-container-hero">
                    <div className="car-models-collection-header">
                      <figure className="car-models-collection-header-figure-hero">
                        <img
                          src={LamborginiLogo}
                          alt="logo"
                          unselectable="on"
                        />
                        <div className="car-models-collection-header-headings">
                          <h1>{items.title}</h1>
                          <p>{items.model}</p>
                        </div>
                      </figure>
                      <div className="car-models-collection-header-units">
                        <p>{items.stocks} units available</p>
                        {/* <p>Rent Now</p> */}
                      </div>
                    </div>
                    <div className="car-models-collection-body">
                      <div className="car-models-collection-body_btn_crypus">
                        <button
                          className="booknow-btn"
                          onClick={() => {
                            navigate("/admin/dashboard/modifyproduct", {
                              state: items,
                            });
                          }}
                        >
                          Edit
                          <EditNoteIcon />
                        </button>
                        <button
                          className="booknow-btn"
                          onClick={() => handleDeleteBtn(items._id)}
                        >
                          Delete
                          <DeleteIcon />
                        </button>
                      </div>
                      <img src={items.images[0]} alt="car-image" />
                    </div>
                    <div className="car-models-collection-footer">
                      <div className="hero-car-details-first">
                        <div className="hero-car-details">
                          <PersonIcon />
                          <span>{items.capacity}</span>
                        </div>
                        <div className="hero-car-details">
                          <MinorCrashOutlinedIcon />
                          <span>{items.drive}</span>
                        </div>
                        <div className="hero-car-details">
                          <LocalGasStationOutlinedIcon />
                          <span>{items.mileage}</span>
                        </div>
                      </div>
                      <div className="hero-car-money">
                        <CurrencyRupeeOutlinedIcon
                          style={{ fontWeight: "bold" }}
                        />
                        <h1>
                          {items.price}/ <span>day</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </CardCardSection>
              </>
            );
          })
        ) : (
          <h1>No Product has been found</h1>
        )}
      </div>
    </AdminAllProducts>
  );
};
AdminAllProducts.defaultProps = {
  cardWidth: "29rem",
  imgWidth: "23rem",
};
export default ProductsData(AdminAllProducts);
