import React from "react";
import Footer from "./Footer";
import AboutHome from "./AboutSectionComponents/AboutHome";
import TimeLine from "./AboutSectionComponents/TimeLine";
import WhyUs from "./HomePageComponents/WhyUs";
import { GrUserExpert, GrStatusGood, GrUpgrade } from "react-icons/gr";
import PhotoGallery from "./AboutSectionComponents/PhotoGallery";
import Details from "./AboutSectionComponents/Details";
import styled from "styled-components";
import HomeImg1 from './images/About section images/aboutHome.jpg'
import Navbar from "./Navbar";
export default function About() {
  const WhyUssection = styled.section`
    height: 38rem;
    position: relative;
    top: -5rem;

    .why-us-heading {
      font-size: 40px;
      color: var(--btn-background-color);
    }

    .why-us-heading2 {
      font-size: 2rem;
    }
  `;

  return (
    <>
    <Navbar />
    <AboutHome headingText={"FUELED BY"} spanText={"PASSION."} Subheading={"Reliable, Convenient & Valued"} img={HomeImg1} />
      <WhyUssection className="AboutHomeSection-container-hero">
        <div className="AboutHomeSection-container-main-content">
          <div className="AboutHomeSection-container-main-content-hero">
            <WhyUs
              title={"Our Story"}
              semiTitle={
                "Drive Beyond Limits, Unleash Your Epic Automotive Adventures!"
              }
              para={`In a bustling city, "Wheels on the Go" car rental store provided seamless journeys. With a diverse fleet and passionate team, they catered to wanderlust souls and adventure enthusiasts. From family getaways to business ventures, their well-maintained vehicles became reliable companions, carrying dreams and cherished memories.`}
              icon1={<GrUserExpert />}
              icon2={<GrUpgrade />}
              icon3={<GrStatusGood />}
              point1={"3 years of rental experience"}
              point2={"Continuously upgrading our fleet"}
              point3={"Audience segmentation "}
              point1para={`With over three years of rental experience. Trust us to deliver reliable vehicles, exceptional service, and unforgettable memories`}
              point2para={
                "Continuously upgrading our fleet for latest models and ensure a comfortable and stylish ride."
              }
              point3para={
                "Utilizing audience segmentation to tailor our services and deliver personalized experiences that exceed expectations."
              }
            />
          </div>
        </div>
      </WhyUssection>
      <TimeLine />
      <PhotoGallery />
      <Details />
      <Footer />
    </>
  );
}
