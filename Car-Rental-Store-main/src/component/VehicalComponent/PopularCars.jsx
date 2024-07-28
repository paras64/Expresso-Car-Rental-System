import React, { useEffect, useState } from "react";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import styled from "styled-components";
import CarImg from "../images/VehicalCollection/PngItem_135037.png";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CarCard from "./CarCard";
import ProductsData from "../HOC- higherOrderComponent/ProductsData";

const PopularCars = ({ productList }) => {
  const [popularCars, SetpopularCars] = useState([]);
  useEffect(() => {
    SetpopularCars(
      productList.filter((elements) => {
        return elements.category === "popular cars";
      })
    );
  }, [productList]);

  const PopularCarssection = styled.section`
    height: 32rem !important;
    width: 100%;
    /* border: 2px solid; */
    padding: 0 3rem;
    .car-collection-container-popular-cars-container {
      height: 25rem;
      width: 100%;
    }
    .car-collection-container-heading {
      /* border: 2px solid; */
      height: 5rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 15px 0;
    }
    .car-collection-container-heading h1 {
      font-size: 2.1rem;
      display: flex;
      align-items: center;
      font-family: "Poppins", san-serif;
    }
    .car-collection-container-heading a {
      text-decoration: none;
      display: flex;
      align-items: center;
      font-size: 18px;
      font-family: Rubik;
      font-weight: bold;
      color: blue;
    }
    .popular-cars {
      /* border: 2px solid; */
      height: 20rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  `;

  return (
    <PopularCarssection>
      <div className="car-collection-container-popular-cars-container">
        <div className="car-collection-container-heading">
          <h1>
            <WhatshotIcon
              style={{ color: "orange", fontSize: "40px", marginRight: "10px" }}
            />
            Popular Cars
          </h1>
          <a href="">
            See All Collection
            <ArrowCircleRightIcon
              style={{ color: "blue", fontSize: "25px", marginLeft: "10px" }}
            />
          </a>
        </div>
        <div className="popular-cars">
          {popularCars.length > 0? (
            popularCars.map((carsData, index) => {
              return (
                <CarCard
                  key={index}
                  CarImg={CarImg}
                  carsData={carsData}
                  imgWidth={"21rem"}
                  cardWidth={"28rem"}
                />
              );
            })
          ) : (
            <p>No popular cars available</p>
          )}
        </div>
      </div>
    </PopularCarssection>
  );
};

export default ProductsData(PopularCars);
