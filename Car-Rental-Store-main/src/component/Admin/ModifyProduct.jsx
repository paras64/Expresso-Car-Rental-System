import React, { useEffect, useState } from "react";
import "./AdminStyle/ModifyProduct.css";
import { GlobalStyle } from "../styles/GlobalStyle";
import { useAdminDataContext } from "./AdminProvider";
import { useLocation, useNavigate } from "react-router-dom";
import ProductsData from "../HOC- higherOrderComponent/ProductsData";
import axios from "axios";
const ModifyProduct = ({ productList }) => {
  const navigate = useNavigate();
  const { adminData } = useAdminDataContext();
  const [valueModify, setValueModify] = useState({
    productname: "",
    fieldname: "",
    value: "",
  });
  const location = useLocation();
  const productData = location.state;
  useEffect(() => {
    if (productData && productData.model) {
      setValueModify((prevData) => {
        return {
          ...prevData,
          productname: productData.model,
        };
      });
    }
  }, [productData]);
  const ResetAll = (e) => {
    if (e) {
      e.preventDefault();
    }
    setValueModify({
      productname: "",
      fieldname: "",
      value: "",
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (valueModify.productname && valueModify.fieldname && valueModify.value) {
      if (adminData.token) {
        const doc = axios.patch(
          "https://car-rental-backend-1tpp.onrender.com/products/modifyproduct",
          {
            adminData,
            valueModify,
          }
        );
        doc
          .then((response) => {
            ResetAll();
            alert(response.data.message);
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      } else {
        return alert("Something went wrong");
      }
    } else {
      alert("Please complete the fields");
    }
  };
  return (
    <>
      <GlobalStyle />
      {adminData.token ? (
        <section className="modify__product__section">
          <div className="modify_product__container">
            <form className="modify_product__form">
              <div className="modify_product__heading__cyprus">
                <h1 className="modify_product_heading"> Modify Product</h1>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(-1);
                  }}
                >
                  Go Back
                </button>
              </div>
              <aside className="modify_product__hero">
                <label htmlFor="product">
                  Select the Product <span className="required__class">*</span>{" "}
                </label>
                <select
                  name="product"
                  id="product"
                  value={valueModify.productname}
                  onChange={(e) => {
                    e.preventDefault();
                    setValueModify((prevdata) => {
                      return {
                        ...prevdata,
                        productname: e.target.value,
                      };
                    });
                  }}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {productList &&
                    productList.map((items, index) => {
                      return (
                        <option key={index} value={items.model}>
                          {items.model}
                        </option>
                      );
                    })}
                </select>
                {!valueModify.productname && (
                  <p className="required__field">This field is required</p>
                )}
              </aside>
              <aside className="modify_product__hero">
                <label htmlFor="modify_product">
                  Select the field to update{" "}
                  <span className="required__class">*</span>
                </label>
                <select
                  name="modify_product"
                  id="modify_product"
                  value={valueModify.fieldname}
                  onChange={(e) => {
                    e.preventDefault();
                    setValueModify((prevdata) => {
                      return {
                        ...prevdata,
                        fieldname: e.target.value,
                        value: "",
                      };
                    });
                  }}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="title">title</option>
                  <option value="year">year</option>
                  <option value="price">price</option>
                  <option value="category">category</option>
                  <option value="model">model</option>
                  <option value="capacity">capacity</option>
                  <option value="discountPercentage">discountPercentage</option>
                  <option value="rating">rating</option>
                  <option value="brand">brand</option>
                  <option value="thumbnail">thumbnail</option>
                  <option value="weight">weight</option>
                  <option value="speed">speed</option>
                  <option value="color">color</option>
                  <option value="mileage">mileage</option>
                  <option value="available">available</option>
                  <option value="drive">drive</option>
                  <option value="stocks">stocks</option>
                  <option value="images-1">image-1</option>
                  <option value="images-2">image-2</option>
                </select>
                {!valueModify.fieldname && (
                  <p className="required__field">This field is required</p>
                )}
              </aside>
              <aside className="modify_product__hero">
                <label htmlFor="newvalue">
                  Enter the new value <span className="required__class">*</span>
                </label>
                <input
                  type={
                    valueModify.fieldname === "year" ||
                    valueModify.fieldname === "price" ||
                    valueModify.fieldname === "capacity" ||
                    valueModify.fieldname === "discountPercentage" ||
                    valueModify.fieldname === "rating" ||
                    valueModify.fieldname === "stocks"
                      ? "number"
                      : "text"
                  }
                  min={0}
                  value={valueModify.value}
                  name="newvalue"
                  id="newvalue"
                  placeholder="Enter the value"
                  onChange={(e) => {
                    e.preventDefault();
                    setValueModify((prevData) => {
                      if (
                        valueModify.fieldname === "year" ||
                        valueModify.fieldname === "price" ||
                        valueModify.fieldname === "capacity" ||
                        valueModify.fieldname === "discountPercentage" ||
                        valueModify.fieldname === "rating" ||
                        valueModify.fieldname === "stocks"
                      ) {
                        return {
                          ...prevData,
                          value: parseInt(e.target.value),
                        };
                      } else {
                        return {
                          ...prevData,
                          value: e.target.value,
                        };
                      }
                    });
                  }}
                />
                {!valueModify.value && (
                  <p className="required__field">This field is required</p>
                )}
              </aside>
              <aside className="modify_product__hero">
                <button className="modify_reset__btn" onClick={ResetAll}>
                  Reset All
                </button>
                <button className="modify_submit__btn" onClick={handleClick}>
                  Continue
                </button>
              </aside>
            </form>
          </div>
        </section>
      ) : (
        <h1>Unauthorised access</h1>
      )}
    </>
  );
};

export default ProductsData(ModifyProduct);
