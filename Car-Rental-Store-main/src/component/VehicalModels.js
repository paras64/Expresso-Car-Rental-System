import React from "react";
import Navbar from "./Navbar";
import AboutHome from "./AboutSectionComponents/AboutHome";
import Booking from "./HomePageComponents/Booking";
import HomeImg from "./images/About section images/aboutHome2.jpg";
import styled from "styled-components";
import CarFleet from "../component/VehicalComponent/CarsFleet";
import PopularCars from "./VehicalComponent/PopularCars";
import Footer from "./Footer";
import { BannerBand } from "../component/HomePageComponents/Banner";
export default function VehicalModels() {
  const Heading1 = styled.h1`
    padding: 0px 20px 40px 54px;
    font-family: Poppins, sans-serif;
    font-size: 2.2rem;
    position: relative;
    top: -20px;
  `;
  const BannerBandContainer = styled.figure`
    padding: 0rem 4rem 3rem 4rem;
  `;
  return (
    <>
    <Navbar />
      <AboutHome
        img={HomeImg}
        headingText={"Drive Your"}
        spanText={"Dreams."}
        Subheading={"The Car Collection of Your Dreams"}
      />

      <Heading1> Drive the Car of your dreams ꔮ</Heading1>
      <Booking vaild={true} />
      <BannerBandContainer>
        <BannerBand />
      </BannerBandContainer>
      {/* <CarCollection /> */}
      <PopularCars />
      <CarFleet />
      <Footer />
    </>
  );
}
