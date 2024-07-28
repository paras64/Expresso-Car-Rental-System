import React, { useState } from "react";
import { useAdminDataContext } from "./AdminProvider";
import { GlobalStyle } from "../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";
import "./AdminStyle/AddProdutStyle.css";
import axios from "axios";
const AddProducts = () => {
  const navigate = useNavigate();
  const { adminData } = useAdminDataContext();
  const [addProductData, SetAddProductDataSet] = useState({
    title: "",
    year: 1950,
    price: 0,
    category: "",
    model: "",
    capacity: 0,
    discountPercentage: 0,
    rating: 0,
    brand: "",
    thumbnail: "",
    weight: "",
    speed: "",
    color: "",
    mileage: "",
    available: "",
    drive: "",
    stocks: 0,
    images: ["", ""],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      addProductData.title &&
      addProductData.year &&
      addProductData.price &&
      addProductData.category &&
      addProductData.model &&
      addProductData.capacity &&
      addProductData.discountPercentage &&
      addProductData.rating &&
      addProductData.brand &&
      addProductData.thumbnail &&
      addProductData.weight &&
      addProductData.speed &&
      addProductData.color &&
      addProductData.mileage &&
      addProductData.available &&
      addProductData.drive &&
      addProductData.stocks &&
      addProductData.images[0] &&
      addProductData.images[1]
    ) {
      if (adminData.token) {
        const doc = axios.post("https://car-rental-backend-1tpp.onrender.com/products/addproduct", {
          adminData,
          addProductData,
        });
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
      alert("Complete the required fields");
    }
  };

  const ResetAll = (e) => {
    if (e) {
      e.preventDefault();
    }
    SetAddProductDataSet({
      title: "",
      year: 1950,
      price: 0,
      category: "",
      model: "",
      capacity: 0,
      discountPercentage: 0,
      rating: 0,
      brand: "",
      thumbnail: "",
      weight: "",
      speed: "",
      color: "",
      mileage: "",
      available: "",
      drive: "",
      stocks: 0,
      images: ["", ""],
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name.startsWith("images")) {
      SetAddProductDataSet((prevData) => {
        const updateImages = [...prevData.images];
        const index = e.target.name === "images-0" ? 0 : 1;
        updateImages[index] = e.target.value;
        return {
          ...prevData,
          images: updateImages,
        };
      });
    } else {
      SetAddProductDataSet((prevData) => {
        return {
          ...prevData,
          [e.target.name]: e.target.value,
        };
      });
    }
  };
  // console.log(addProductData);
  return (
    <>
      <GlobalStyle />
      {adminData.token ? (
        <section className="add__product__section">
          <div className="admin_product">
            <form className="add_product_form">
              <div className="add__product__heading__cyprus">
                <h1 className="add_product_heading"> Add Product</h1>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(-1);
                  }}
                >
                  Go Back
                </button>
              </div>
              <div className="form__hero">
                <label className="label__hero" htmlFor="title">
                  Title <span className="required__class">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  onChange={handleChange}
                  value={addProductData.title}
                  placeholder="Enter the car title"
                />
                {!addProductData.title && (
                  <p className="required__field">This field is required</p>
                )}
              </div>
              <div className="form__hero">
                <label className="label__hero" htmlFor="year">
                  Year <span className="required__class">*</span>
                </label>
                <input
                  type="number"
                  min={1950}
                  name="year"
                  onChange={handleChange}
                  id="year"
                  value={addProductData.year}
                  placeholder="Enter the model year"
                />
                {!addProductData.year && (
                  <p className="required__field">This field is required</p>
                )}
              </div>
              <div className="form__hero">
                <label className="label__hero" htmlFor="price">
                  Price <span className="required__class">*</span>
                </label>
                <input
                  type="number"
                  min={0}
                  name="price"
                  id="price"
                  onChange={handleChange}
                  value={addProductData.price}
                  placeholder="Enter the car price"
                />
                {!addProductData.price && (
                  <p className="required__field">This field is required</p>
                )}
              </div>
              <div className="form__hero">
                <label className="label__hero" htmlFor="category">
                  Category <span className="required__class">*</span>
                </label>
                <select
                  name="category"
                  id="category"
                  onChange={handleChange}
                  value={addProductData.category}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="Everyday Use cars">Everyday Use cars</option>
                  <option value="Normal">Normal</option>
                  <option value="SUV">SUV</option>
                  <option value="popular cars">popular cars</option>
                  <option value="Super car">Super car</option>
                </select>
                {!addProductData.category && (
                  <p className="required__field">This field is required</p>
                )}
              </div>
              <div className="form__hero">
                <label className="label__hero" htmlFor="model">
                  Model <span className="required__class">*</span>
                </label>
                <input
                  type="text"
                  name="model"
                  onChange={handleChange}
                  id="model"
                  value={addProductData.model}
                  placeholder="Enter the model name"
                />
                {!addProductData.model && (
                  <p className="required__field">This field is required</p>
                )}
              </div>
              <div className="form__hero">
                <label className="label__hero" htmlFor="capacity">
                  Capacity <span className="required__class">*</span>
                </label>
                <input
                  type="number"
                  min={0}
                  name="capacity"
                  id="capacity"
                  onChange={handleChange}
                  value={addProductData.capacity}
                  placeholder="Enter the capacity"
                />
                {!addProductData.capacity && (
                  <p className="required__field">This field is required</p>
                )}
              </div>
              <div className="form__hero">
                <label className="label__hero" htmlFor="discountPercentage">
                  {" "}
                  Discount Percentage
                  <span className="required__class">*</span>
                </label>
                <input
                  type="number"
                  min={0}
                  value={addProductData.discountPercentage}
                  name="discountPercentage"
                  id="discountPercentage"
                  onChange={handleChange}
                  placeholder="Enter the discount percentage"
                />
                {!addProductData.discountPercentage && (
                  <p className="required__field">This field is required</p>
                )}
              </div>
              <div className="form__hero">
                <label className="label__hero" htmlFor="rating">
                  {" "}
                  Rating
                  <span className="required__class">*</span>
                </label>
                <select
                  name="rating"
                  id="rating"
                  onChange={handleChange}
                  value={addProductData.rating}
                >
                  <option disabled>Select the rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>

                {!addProductData.rating && (
                  <p className="required__field">This field is required</p>
                )}
              </div>
              <div className="form__hero">
                <label className="label__hero" htmlFor="brand">
                  {" "}
                  Brand
                  <span className="required__class">*</span>
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  onChange={handleChange}
                  value={addProductData.brand}
                  placeholder="Enter the car brand"
                />
                {!addProductData.brand && (
                  <p className="required__field">This field is required</p>
                )}
              </div>
              <div className="form__hero">
                <label className="label__hero" htmlFor="thumbnail">
                  {" "}
                  Thumbnail
                  <span className="required__class">*</span>
                </label>
                <input
                  type="text"
                  name="thumbnail"
                  id="thumbnail"
                  onChange={handleChange}
                  value={addProductData.thumbnail}
                  placeholder="Enter the car thumbnail link"
                />
                {!addProductData.thumbnail && (
                  <p className="required__field">This field is required</p>
                )}
              </div>
              <div className="form__hero">
                <label className="label__hero" htmlFor="weight">
                  {" "}
                  Weight
                  <span className="required__class">*</span>
                </label>
                <input
                  type="text"
                  name="weight"
                  value={addProductData.weight}
                  id="weight"
                  onChange={handleChange}
                  placeholder="Enter the car weight"
                />
                {!addProductData.weight && (
                  <p className="required__field">This field is required</p>
                )}
              </div>
              <div className="form__hero">
                <label className="label__hero" htmlFor="speed">
                  {" "}
                  Speed
                  <span className="required__class">*</span>
                </label>
                <input
                  type="text"
                  name="speed"
                  id="speed"
                  onChange={handleChange}
                  value={addProductData.speed}
                  placeholder="Enter the car speed"
                />
                {!addProductData.speed && (
                  <p className="required__field">This field is required</p>
                )}
              </div>
              <div className="form__hero">
                <label className="label__hero" htmlFor="color">
                  {" "}
                  Color
                  <span className="required__class">*</span>
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  name="color"
                  id="color"
                  value={addProductData.color}
                  placeholder="Enter the car color"
                />
                {!addProductData.color && (
                  <p className="required__field">This field is required</p>
                )}
              </div>
              <div className="form__hero">
                <label className="label__hero" htmlFor="mileage">
                  {" "}
                  Mileage
                  <span className="required__class">*</span>
                </label>
                <input
                  type="text"
                  name="mileage"
                  onChange={handleChange}
                  id="mileage"
                  value={addProductData.mileage}
                  placeholder="Enter the car mileage"
                />
                {!addProductData.mileage && (
                  <p className="required__field">This field is required</p>
                )}
              </div>
              <div className="form__hero">
                <label className="label__hero" htmlFor="available">
                  {" "}
                  Available
                  <span className="required__class">*</span>
                </label>
                <select
                  name="available"
                  id="available"
                  onChange={handleChange}
                  value={addProductData.available}
                >
                  <option value="" disabled>
                    Select the option
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {!addProductData.available && (
                  <p className="required__field">This field is required</p>
                )}
              </div>

              <div className="form__hero">
                <label className="label__hero" htmlFor="drive">
                  Drive <span className="required__class">*</span>
                </label>
                <select
                  name="drive"
                  id="drive"
                  onChange={handleChange}
                  value={addProductData.drive}
                >
                  <option value="" disabled>
                    Select the option
                  </option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                </select>
                {!addProductData.drive && (
                  <p className="required__field">This field is required</p>
                )}
              </div>

              <div className="form__hero">
                <label className="label__hero" htmlFor="stocks">
                  Stocks <span className="required__class">*</span>
                </label>
                <input
                  type="number"
                  min={0}
                  name="stocks"
                  value={addProductData.stocks}
                  onChange={handleChange}
                  id="stocks"
                  placeholder="Enter the stocks quantity"
                />
                {!addProductData.stocks && (
                  <p className="required__field">This field is required</p>
                )}
              </div>

              <div className="form__hero">
                <label className="label__hero" htmlFor="images-0">
                  Image 1 <span className="required__class">*</span>
                </label>
                <input
                  type="text"
                  name="images-0"
                  value={addProductData.images[0]}
                  onChange={handleChange}
                  id="images-0"
                  placeholder="Enter the image 1 link"
                />
                {!addProductData.images[0] && (
                  <p className="required__field">This field is required</p>
                )}
              </div>

              <div className="form__hero">
                <label className="label__hero" htmlFor="images-1">
                  Image 2 <span className="required__class">*</span>
                </label>
                <input
                  type="text"
                  name="images-1"
                  value={addProductData.images[1]}
                  onChange={handleChange}
                  id="images-1"
                  placeholder="Enter the image 2 link"
                />
                {!addProductData.images[1] && (
                  <p className="required__field">This field is required</p>
                )}
              </div>

              <div className="form__hero">
                <button className="add_product__reset_btn" onClick={ResetAll}>
                  Reset All
                </button>
                <button
                  className="add_product__submit_btn"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      ) : (
        <h1>Unauthorised access</h1>
      )}
    </>
  );
};

export default AddProducts;
